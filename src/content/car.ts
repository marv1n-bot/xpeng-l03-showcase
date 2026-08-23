/**
 * Single source of truth for every car fact on the site. Add new facts by
 * pushing into a section's `facts` array, or add a whole new section to
 * `sections` — the page renders both without any other code changes.
 */

export interface Fact {
  label: string;
  value: string;
  note?: string;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  facts: Fact[];
}

export interface ColorOption {
  role: 'exterior' | 'interior';
  name: string;
  hex: string;
  photo?: string;
}

export interface ImageCredit {
  src: string;
  alt: string;
  credit: string;
}

export const car = {
  make: 'Xpeng',
  model: 'L03',
  trim: 'AWD Performance Ultra',
  tagline: 'Dual-motor AWD. 285 kW. Zero compromise.',
  ownerNote: "Niels's L03 — European delivery arriving Q4 2026.",

  images: {
    heroExterior: {
      src: '/images/xpeng-l03-exterior-phantom-purple.png',
      alt: 'Xpeng L03 in Phantom Purple, side profile studio render',
      credit: 'Image: Xpeng Motors',
    },
    interior: {
      src: '/images/xpeng-l03-interior-light-gray.jpg',
      alt: 'Xpeng L03 light gray interior, cabin view',
      credit: 'Image: Xpeng Motors',
    },
  } satisfies Record<string, ImageCredit>,

  colors: [
    {
      role: 'exterior',
      name: 'Phantom Purple',
      hex: '#4a3564',
      photo: '/images/xpeng-l03-exterior-phantom-purple.png',
    },
    {
      role: 'interior',
      name: 'Light Gray',
      hex: '#c7c5c2',
      photo: '/images/xpeng-l03-interior-light-gray.jpg',
    },
  ] satisfies ColorOption[],

  heroStats: [
    { label: 'Power', value: '285 kW', note: '388 hp' },
    { label: 'Torque', value: '431 Nm' },
    { label: '0–100 km/h', value: '4.5 s' },
    { label: 'Drivetrain', value: 'Dual-Motor AWD' },
  ] satisfies Fact[],

  sections: [
    {
      id: 'performance',
      title: 'Performance',
      description: 'Dual-motor all-wheel drive tuned for the Performance Ultra trim.',
      facts: [
        { label: 'Power output', value: '285 kW', note: '388 hp combined' },
        { label: 'Torque', value: '431 Nm' },
        { label: 'Drivetrain', value: 'Dual-motor AWD' },
        { label: '0–100 km/h', value: '4.5 s' },
      ],
    },
    {
      id: 'battery',
      title: 'Battery & Charging',
      description: 'High-density pack with fast 3C charging for long-distance driving.',
      facts: [
        { label: 'Battery capacity', value: '71.2 kWh' },
        { label: 'Range (WLTP)', value: '440 km', note: '274 mi' },
        { label: 'Fast charging', value: '10–80% in ~20 min', note: '3C charging rate' },
        { label: 'Vehicle-to-load (V2L)', value: '6 kW', note: 'Power external devices from the car' },
      ],
    },
    {
      id: 'technology',
      title: 'Technology',
      description: 'Driver-assist and software features.',
      facts: [
        {
          label: 'Navigation Guided Pilot (NGP)',
          value: 'Included',
          note: 'Ultra trim only, Europe',
        },
      ],
    },
    {
      id: 'practicality',
      title: 'Practicality',
      description: 'Everyday livability details.',
      facts: [
        { label: 'Flat-bed sleep mode', value: 'Yes' },
        { label: 'Under-seat storage', value: '10 L' },
        { label: 'Door handles', value: 'Manual, freeze-proof' },
      ],
    },
    {
      id: 'availability',
      title: 'Availability',
      description: 'Rollout timeline for the European market.',
      facts: [{ label: 'European deliveries', value: 'From October 2026' }],
    },
  ] satisfies Section[],
};

export type Car = typeof car;
