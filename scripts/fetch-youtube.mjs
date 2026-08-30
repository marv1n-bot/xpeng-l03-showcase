#!/usr/bin/env node
/**
 * Scrapes YouTube search results for a fixed set of queries and writes the
 * result to src/content/youtube-generated.json.
 *
 * There's no RSS feed for YouTube search results and no YouTube Data API key
 * wired up via OneCLI, so this pulls the `ytInitialData` JSON blob that
 * YouTube server-renders into the search results page instead. The
 * `sp=CAI%3D` query param sorts results by upload date (newest first) so we
 * don't need to parse relative timestamps ("3 weeks ago") into real dates.
 *
 * This is scraping an internal, undocumented data structure — it can break
 * if YouTube changes their markup. If a query comes back with zero videos,
 * the whole run aborts without touching the output file, so a broken scrape
 * never overwrites a working one.
 */

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const QUERIES = [
  { query: 'xpeng l03', label: 'XPeng L03' },
  { query: 'xpeng vla 2', label: 'XPeng VLA 2' },
];

const VIDEOS_PER_QUERY = 8;

const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'content', 'youtube-generated.json');

async function fetchSearchHtml(query) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=CAI%3D`;
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT, 'Accept-Language': 'en-US,en;q=0.9' } });
  if (!res.ok) {
    throw new Error(`YouTube search request for "${query}" failed: HTTP ${res.status}`);
  }
  return res.text();
}

function extractInitialData(html, query) {
  const match = html.match(/var ytInitialData = (\{.*?\});<\/script>/s);
  if (!match) {
    throw new Error(`Could not find ytInitialData in the search results page for "${query}"`);
  }
  return JSON.parse(match[1]);
}

function extractVideos(data, query) {
  const sections =
    data?.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents;
  const items = sections?.find((section) => section.itemSectionRenderer)?.itemSectionRenderer?.contents;
  if (!items) {
    throw new Error(`Unexpected ytInitialData shape for "${query}" — no item section found`);
  }

  const videos = [];
  for (const item of items) {
    const renderer = item.videoRenderer;
    if (!renderer?.videoId || !renderer?.title?.runs?.[0]?.text) continue;

    const thumbnails = renderer.thumbnail?.thumbnails ?? [];
    const thumbnailUrl = thumbnails[thumbnails.length - 1]?.url;
    if (!thumbnailUrl) continue;

    videos.push({
      videoId: renderer.videoId,
      title: renderer.title.runs[0].text,
      channelTitle: renderer.longBylineText?.runs?.[0]?.text ?? 'Unknown channel',
      thumbnailUrl,
      publishedText: renderer.publishedTimeText?.simpleText ?? '',
    });

    if (videos.length >= VIDEOS_PER_QUERY) break;
  }

  if (videos.length === 0) {
    throw new Error(`Parsed ytInitialData for "${query}" but found zero videos`);
  }

  return videos;
}

async function fetchStrip({ query, label }) {
  const html = await fetchSearchHtml(query);
  const data = extractInitialData(html, query);
  const videos = extractVideos(data, query);
  return { query, label, videos };
}

async function main() {
  const strips = [];
  for (const q of QUERIES) {
    process.stderr.write(`Fetching "${q.query}"...\n`);
    strips.push(await fetchStrip(q));
    process.stderr.write(`  got ${strips[strips.length - 1].videos.length} videos\n`);
  }

  const output = {
    generatedAt: new Date().toISOString(),
    strips,
  };

  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2) + '\n');
  process.stderr.write(`Wrote ${OUTPUT_PATH}\n`);
}

main().catch((err) => {
  process.stderr.write(`fetch-youtube failed: ${err.message}\n`);
  process.exitCode = 1;
});
