import Link from 'next/link';

import type { Car } from '@/content/car';

export function SiteFooter({ car }: { car: Car }) {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-sm text-cloud-gray/50 sm:px-10 lg:px-16">
      <p>
        {car.make} {car.model} {car.trim} — fan showcase site, not affiliated with {car.make} Motors.
      </p>
      <p className="mt-1">Specs sourced from public {car.make} materials and subject to change.</p>
      <p className="mt-1">Vehicle photography courtesy of {car.make} Motors press/product materials.</p>
      <p className="mt-4">
        <Link href="/research" className="underline underline-offset-4 hover:text-cloud-gray">
          Ongoing L03 research — market news, sentiment &amp; specs by market →
        </Link>
      </p>
    </footer>
  );
}
