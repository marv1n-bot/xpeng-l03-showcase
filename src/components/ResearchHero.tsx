import Link from 'next/link';

import { LightboxImage } from '@/components/Lightbox';
import type { Research } from '@/content/research';

export function ResearchHero({ research }: { research: Research }) {
  return (
    <header className="relative isolate flex min-h-[60vh] flex-col justify-end overflow-hidden border-b border-white/10 bg-ink sm:min-h-[70vh]">
      <LightboxImage
        src={research.heroImage.src}
        alt={research.heroImage.alt}
        fill
        priority
        className="object-cover object-[75%_50%] sm:object-[50%_50%]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-45% to-transparent" />

      <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-cloud-gray/60 hover:text-cloud-gray">
            ← Back to showcase
          </Link>
          <h1 className="mt-4 font-display text-3xl font-medium sm:text-4xl">L03 Research Notebook</h1>
          <p className="mt-4 max-w-2xl font-display text-lg font-medium text-cloud-gray">{research.lead}</p>
          <p className="mt-3 max-w-2xl text-cloud-gray/70">{research.intro}</p>
          <p className="mt-2 text-xs uppercase tracking-wide text-cloud-gray/50">Updated {research.updated}</p>
        </div>
      </div>
    </header>
  );
}
