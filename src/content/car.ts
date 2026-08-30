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
  ownerNote: 'European delivery arriving Q4 2026.',
  intro:
    "The XPeng MONA L03 AWD Performance Ultra is a high-performance, AI-driven mid-size coupe SUV. Designed under former Ferrari design chief JuanMa Lopez, the L03 blends a ultra-low aerodynamic fastback silhouette with XPeng's end-to-end neural network architecture.",

  images: {
    heroExterior: {
      src: '/images/xpeng-l03-hero-sunset-rear.jpg',
      alt: 'Xpeng L03 rear three-quarter view at sunset, badge and plate visible',
      credit: 'Image: CarsGuide',
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
      photo: '/images/xpeng-l03-exterior-colorway-track.webp',
    },
    {
      role: 'interior',
      name: 'Light Gray',
      hex: '#c7c5c2',
      photo: '/images/xpeng-l03-interior-cabin-wide.jpg',
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
        {
          label: 'Compute platform',
          value: 'Xpeng Turing AI chip (self-developed)',
          note: 'AWD Performance Ultra: 3 chips, 2,250 TOPS combined — 2 chips (1,500 TOPS) for ADAS, 1 for the smart cabin',
        },
        {
          label: 'VLA 2.0 driving model',
          value: '<80 ms response latency, camera-only',
          note: "Xpeng's vision-language-action model; trained on roughly 100M driving clips plus a companion scene-reasoning model",
        },
        {
          label: 'VLA 2.0 Europe rollout',
          value: 'Early 2027',
          note: 'Confirmed for the L03; other models (P7, X9, G9L) undecided pending compute headroom',
        },
        {
          label: 'Sensor suite',
          value: '11 cameras + 12 ultrasonic sensors + radar',
          note: 'No lidar or HD maps — includes 2 high-resolution front binocular cameras',
        },
        {
          label: 'Cockpit software',
          value: 'XOS 6 (Global Intelligent Cockpit)',
          note: 'Conversational AI voice assistant; 15.6" 2.5K touchscreen + 26.8" head-up display',
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
        {
          label: 'Cargo & frunk volume',
          value: '367–539 L rear / 44–102 L frunk',
          note: 'Range reflects differing measurement methods across outlets, not fully reconciled',
        },
        { label: 'Towing capacity', value: '1,500 kg braked / 750 kg unbraked' },
        {
          label: 'Interior comfort',
          value: '14-point massage front seats, dual 50W wireless charging pads',
        },
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
