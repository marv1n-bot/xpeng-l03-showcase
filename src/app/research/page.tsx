import Link from 'next/link';

import { ResearchHero } from '@/components/ResearchHero';
import { YoutubeSection } from '@/components/YoutubeSection';
import { car } from '@/content/car';
import { research } from '@/content/research';
import { youtube } from '@/content/youtube';

export const metadata = {
  title: `${car.make} ${car.model} Research — News, Specs & Sentiment`,
  description: research.intro,
};

export default function ResearchPage() {
  return (
    <main>
      <ResearchHero research={research} />

      <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Market sentiment</h2>
          <p className="mt-2 max-w-xl text-cloud-gray/70">{research.sentiment.headline}</p>
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {research.sentiment.points.map((point) => (
              <div key={point.label} className="border-b border-white/10 pb-4">
                <dt className="text-xs uppercase tracking-wide text-cloud-gray/60">{point.label}</dt>
                <dd className="mt-1 font-display text-xl font-medium">{point.value}</dd>
                {point.note && <dd className="text-sm text-cloud-gray/50">{point.note}</dd>}
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Latest news</h2>
          <ol className="mt-8 space-y-6">
            {research.news.map((item) => (
              <li key={item.headline} className="border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-wide text-cloud-gray/50">{item.date}</p>
                <p className="mt-1 font-display text-lg font-medium">{item.headline}</p>
                <p className="mt-1 text-sm text-cloud-gray/70">{item.summary}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs text-cloud-gray/50 underline underline-offset-4 hover:text-cloud-gray"
                >
                  {item.source}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Specs by market &amp; trim</h2>
          <p className="mt-2 max-w-xl text-cloud-gray/70">{research.marketNote}</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-cloud-gray/60">
                  <th className="py-2 pr-4 font-normal">Variant</th>
                  <th className="py-2 pr-4 font-normal">Market</th>
                  <th className="py-2 pr-4 font-normal">Power</th>
                  <th className="py-2 pr-4 font-normal">Battery</th>
                  <th className="py-2 pr-4 font-normal">Range</th>
                  <th className="py-2 pr-4 font-normal">0–100 km/h</th>
                  <th className="py-2 font-normal">Price</th>
                </tr>
              </thead>
              <tbody>
                {research.specsByMarket.map((row) => (
                  <tr key={`${row.variant}-${row.market}`} className="border-b border-white/5">
                    <td className="py-3 pr-4 font-medium">{row.variant}</td>
                    <td className="py-3 pr-4 text-cloud-gray/70">{row.market}</td>
                    <td className="py-3 pr-4 text-cloud-gray/70">{row.power}</td>
                    <td className="py-3 pr-4 text-cloud-gray/70">{row.battery}</td>
                    <td className="py-3 pr-4 text-cloud-gray/70">{row.range}</td>
                    <td className="py-3 pr-4 text-cloud-gray/70">{row.zeroToHundred}</td>
                    <td className="py-3 text-cloud-gray/70">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Design &amp; full specs</h2>
          <p className="mt-2 max-w-xl text-cloud-gray/70">{research.design.headline}</p>
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {research.design.facts.map((fact) => (
              <div key={fact.label} className="border-b border-white/10 pb-4">
                <dt className="text-xs uppercase tracking-wide text-cloud-gray/60">{fact.label}</dt>
                <dd className="mt-1 font-display text-xl font-medium">{fact.value}</dd>
                {fact.note && <dd className="text-sm text-cloud-gray/50">{fact.note}</dd>}
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-2xl text-xs text-cloud-gray/50">{research.design.caveat}</p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Electronics, software &amp; ADAS</h2>
          <p className="mt-2 max-w-xl text-cloud-gray/70">{research.electronics.headline}</p>
          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {research.electronics.facts.map((fact) => (
              <div key={fact.label} className="border-b border-white/10 pb-4">
                <dt className="text-xs uppercase tracking-wide text-cloud-gray/60">{fact.label}</dt>
                <dd className="mt-1 font-display text-xl font-medium">{fact.value}</dd>
                {fact.note && <dd className="text-sm text-cloud-gray/50">{fact.note}</dd>}
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-2xl text-xs text-cloud-gray/50">{research.electronics.caveat}</p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Launch reviews &amp; driving tests</h2>
          <p className="mt-2 max-w-xl text-cloud-gray/70">{research.reviews.headline}</p>
          <ol className="mt-8 space-y-6">
            {research.reviews.items.map((item) => (
              <li key={item.url} className="border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-wide text-cloud-gray/50">
                  {item.date} · {item.kind}
                </p>
                <p className="mt-1 font-display text-lg font-medium">
                  {item.outlet} — {item.author}
                </p>
                <p className="mt-1 text-sm text-cloud-gray/70">{item.summary}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-xs text-cloud-gray/50 underline underline-offset-4 hover:text-cloud-gray"
                >
                  Read the full piece
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-xs text-cloud-gray/50">{research.reviews.rangeNote}</p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Rumors &amp; what&apos;s not confirmed yet</h2>
          <ul className="mt-8 space-y-6">
            {research.rumors.map((rumor) => (
              <li key={rumor.title} className="border-b border-white/10 pb-6">
                <p className="font-display text-lg font-medium">{rumor.title}</p>
                <p className="mt-1 text-sm text-cloud-gray/70">{rumor.detail}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-cloud-gray/50">{rumor.confidence}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <YoutubeSection strips={youtube.strips} />

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-cloud-gray/50 sm:px-10 lg:px-16">
        <p>Research compiled from public reporting; details may change ahead of official confirmation.</p>
        <p className="mt-2 leading-relaxed">
          Sources:{' '}
          {research.sources.map((source, index) => (
            <span key={source.url}>
              {index > 0 && ', '}
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-cloud-gray"
              >
                {source.label}
              </a>
            </span>
          ))}
        </p>
        <p className="mt-4">
          <Link href="/" className="underline underline-offset-4 hover:text-cloud-gray">
            ← Back to L03 showcase
          </Link>
        </p>
        <p className="mt-4 text-xs text-cloud-gray/30">
          Content researched and drafted with AI assistance, human-reviewed before publishing.
        </p>
      </footer>
    </main>
  );
}
