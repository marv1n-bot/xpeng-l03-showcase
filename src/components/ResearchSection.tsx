import Link from 'next/link';

export function ResearchSection() {
  return (
    <section className="border-t border-white/10 bg-white/[0.02] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-medium sm:text-3xl">Research</h2>
        <p className="mt-2 max-w-xl text-cloud-gray/70">
          Ongoing tracking of how the L03 is landing in the real world: market sentiment, rollout
          news, specs by market, unconfirmed rumors, and press reviews.
        </p>
        <Link
          href="/research"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-cloud-gray transition hover:border-white/40 hover:text-white"
        >
          Open the research notebook →
        </Link>
      </div>
    </section>
  );
}
