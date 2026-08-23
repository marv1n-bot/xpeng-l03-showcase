import type { Car } from '@/content/car';

export function SiteFooter({ car }: { car: Car }) {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-sm text-cloud-gray/50 sm:px-10 lg:px-16">
      <p>
        {car.make} {car.model} {car.trim} — fan showcase site, not affiliated with {car.make} Motors.
      </p>
      <p className="mt-1">Specs sourced from public {car.make} materials and subject to change.</p>
    </footer>
  );
}
