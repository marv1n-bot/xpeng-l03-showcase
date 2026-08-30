import Image from 'next/image';

import type { YoutubeStrip, YoutubeVideo } from '@/content/youtube';

function VideoCard({ video }: { video: YoutubeVideo }) {
  return (
    <a
      href={`https://youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <div className="relative aspect-video overflow-hidden rounded-md border border-white/10 bg-white/[0.02]">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          sizes="(min-width: 640px) 25vw, 50vw"
          className="object-cover transition group-hover:opacity-80"
        />
      </div>
      <p className="mt-2 text-sm font-medium leading-snug text-cloud-gray group-hover:text-white">
        {video.title}
      </p>
      <p className="mt-1 text-xs text-cloud-gray/50">
        {video.channelTitle} · {video.publishedText}
      </p>
    </a>
  );
}

function VideoStrip({ strip }: { strip: YoutubeStrip }) {
  return (
    <div>
      <h3 className="font-display text-lg font-medium text-cloud-gray">{strip.label}</h3>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
        {strip.videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </div>
  );
}

export function YoutubeSection({ strips }: { strips: YoutubeStrip[] }) {
  return (
    <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-medium sm:text-3xl">On YouTube</h2>
        <p className="mt-2 max-w-xl text-cloud-gray/70">
          Recent uploads about the L03 and its VLA 2.0 driver-assist stack, newest first.
        </p>
        <div className="mt-8 space-y-12">
          {strips.map((strip) => (
            <VideoStrip key={strip.query} strip={strip} />
          ))}
        </div>
      </div>
    </section>
  );
}
