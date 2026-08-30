import { LightboxImage } from '@/components/Lightbox';
import type { Car } from '@/content/car';

export function Hero({ car }: { car: Car }) {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      <LightboxImage
        src={car.images.heroExterior.src}
        alt={car.images.heroExterior.alt}
        fill
        priority
        className="object-cover object-[38%_50%] sm:object-[40%_45%]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-45% to-transparent" />

      <div className="relative z-10 px-6 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-14 lg:px-16">
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
