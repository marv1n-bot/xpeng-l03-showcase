import Image from 'next/image';
import type { Car } from '@/content/car';

export function Hero({ car }: { car: Car }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-32 sm:px-10 sm:pb-24 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-ink">
        <div className="absolute -top-1/4 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 rounded-full bg-phantom opacity-40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[60vh] w-[60vh] rounded-full bg-phantom-light opacity-20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,var(--color-ink)_75%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[6%] -z-[5] h-[22vh] opacity-90 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] sm:h-[38vh] sm:[mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] lg:h-[44vh]">
        <Image
          src={car.images.heroExterior.src}
          alt={car.images.heroExterior.alt}
          fill
          priority
          className="object-contain object-center sm:object-right"
        />
      </div>

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
    </section>
  );
}
