import Image from 'next/image';
import type { Car } from '@/content/car';

export function Hero({ car }: { car: Car }) {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_65%_at_50%_22%,#8a6bb0_0%,#4a3564_38%,#1c1428_65%,#0a0a0d_90%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_95%,rgba(122,95,158,0.45)_0%,transparent_55%)]" />
      </div>

      <div className="relative min-h-[42vh] flex-1 pt-28 sm:min-h-[50vh] sm:pt-32 lg:min-h-[58vh]">
        <Image
          src={car.images.heroExterior.src}
          alt={car.images.heroExterior.alt}
          fill
          priority
          className="object-contain object-center drop-shadow-[0_50px_70px_rgba(0,0,0,0.55)]"
        />
      </div>

      <div className="relative px-6 pb-16 sm:px-10 sm:pb-24 lg:px-16">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-cloud-gray/80">
          {car.make} · {car.trim}
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          {car.model}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cloud-gray sm:text-xl">{car.tagline}</p>
        <p className="mt-2 text-sm text-cloud-gray/60">{car.ownerNote}</p>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {car.heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-medium sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-cloud-gray/60">{stat.label}</div>
              {stat.note && <div className="text-xs text-cloud-gray/40">{stat.note}</div>}
            </div>
          ))}
        </div>

        <p className="relative mt-8 text-xs text-cloud-gray/30">{car.images.heroExterior.credit}</p>
      </div>
    </section>
  );
}
