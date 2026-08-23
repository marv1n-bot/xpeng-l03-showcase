import type { Section } from '@/content/car';

export function SpecSection({ section, index }: { section: Section; index: number }) {
  const alt = index % 2 === 1;

  return (
    <section
      id={section.id}
      className={`border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16 ${alt ? 'bg-white/[0.02]' : ''}`}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-2xl font-medium sm:text-3xl">{section.title}</h2>
        {section.description && <p className="mt-2 max-w-xl text-cloud-gray/70">{section.description}</p>}

        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {section.facts.map((fact) => (
            <div key={fact.label} className="border-b border-white/10 pb-4">
              <dt className="text-xs uppercase tracking-wide text-cloud-gray/60">{fact.label}</dt>
              <dd className="mt-1 font-display text-xl font-medium">{fact.value}</dd>
              {fact.note && <dd className="text-sm text-cloud-gray/50">{fact.note}</dd>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
