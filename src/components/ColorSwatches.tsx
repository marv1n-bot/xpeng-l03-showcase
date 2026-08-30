import { LightboxImage } from '@/components/Lightbox';
import type { ColorOption } from '@/content/car';

export function ColorSwatches({ colors }: { colors: ColorOption[] }) {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <h2 className="font-display text-2xl font-medium sm:text-3xl">Colorway</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {colors.map((color) => (
          <div
            key={color.role}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
          >
            {color.photo && (
              <div className="relative h-48 w-full bg-ink">
                <LightboxImage
                  src={color.photo}
                  alt={`${color.name} ${color.role}`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: color.role === 'exterior' ? '50% 63%' : '50% 42%' }}
                />
              </div>
            )}
            <div className="flex items-center gap-5 p-6">
              <span
                className="h-16 w-16 shrink-0 rounded-full border border-white/10 shadow-inner"
                style={{ backgroundColor: color.hex }}
                aria-hidden
              />
              <div>
                <div className="text-xs uppercase tracking-wide text-cloud-gray/60">{color.role}</div>
                <div className="font-display text-lg font-medium">{color.name}</div>
                <div className="text-xs text-cloud-gray/40">{color.hex}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
