import data from './youtube-generated.json';

export interface YoutubeVideo {
  videoId: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  publishedText: string;
}

export interface YoutubeStrip {
  query: string;
  label: string;
  videos: YoutubeVideo[];
}

export const youtube = data as { generatedAt: string; strips: YoutubeStrip[] };
