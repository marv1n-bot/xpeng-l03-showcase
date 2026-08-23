import { ColorSwatches } from '@/components/ColorSwatches';
import { Hero } from '@/components/Hero';
import { SiteFooter } from '@/components/SiteFooter';
import { SpecSection } from '@/components/SpecSection';
import { car } from '@/content/car';

export default function Home() {
  return (
    <main>
      <Hero car={car} />
      <ColorSwatches colors={car.colors} />
      {car.sections.map((section, index) => (
        <SpecSection key={section.id} section={section} index={index} />
      ))}
      <SiteFooter car={car} />
    </main>
  );
}
