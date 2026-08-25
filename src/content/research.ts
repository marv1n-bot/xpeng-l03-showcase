/**
 * Content for the /research page — ongoing tracking of L03 market news,
 * sentiment, cross-market specs, and unconfirmed reports. Kept separate
 * from car.ts (which is the fixed spec sheet for this configuration).
 */

export interface SentimentPoint {
  label: string;
  value: string;
  note?: string;
}

export interface NewsItem {
  date: string;
  headline: string;
  summary: string;
  source: string;
  url: string;
}

export interface SpecRow {
  variant: string;
  market: string;
  power: string;
  battery: string;
  range: string;
  zeroToHundred: string;
  price: string;
}

export interface RumorItem {
  title: string;
  detail: string;
  confidence: 'Reported, not yet delivered' | 'Speculative';
}

export interface Source {
  label: string;
  url: string;
}

export interface ElectronicsFact {
  label: string;
  value: string;
  note?: string;
}

export interface ReviewItem {
  date: string;
  outlet: string;
  author: string;
  kind: 'Hands-on test drive' | 'Ride-along' | 'Launch preview (no drive)';
  summary: string;
  url: string;
}

export const research = {
  updated: 'August 2026',
  lead:
    "The XPeng MONA L03 AWD Performance Ultra is a high-performance, AI-driven mid-size coupe SUV. Designed under former Ferrari design chief JuanMa Lopez, the L03 blends a ultra-low aerodynamic fastback silhouette with XPeng's end-to-end neural network architecture.",
  intro:
    "Ongoing notes on how the L03 (marketed in China as the Mona L03) is landing in the real world — reception, rollout news, how specs shift by market, and what's still unconfirmed. Compiled from public reporting; not affiliated with Xpeng.",

  sentiment: {
    headline:
      'Reception has been strong on price and order volume, especially in Europe where the L03 undercuts the Tesla Model Y.',
    points: [
      {
        label: 'China orders',
        value: '50,000+',
        note: 'Non-cancellable pre-orders reported by dealers within weeks of the July 16 launch',
      },
      {
        label: 'Germany launch-day orders',
        value: '46,000',
        note: 'Firm orders in the first hour at the Munich global-launch event',
      },
      {
        label: '2026/2027 delivery forecast',
        value: '~15k/mo → ~150k/yr',
        note: "Deutsche Bank estimate: ~15,000 monthly deliveries in 2026, ramping toward ~150,000 for full-year 2027",
      },
      {
        label: 'Price position vs. Model Y',
        value: 'Up to $10,000 cheaper',
        note: 'European pricing undercuts Tesla Model Y equivalents (Electrek)',
      },
    ] satisfies SentimentPoint[],
  },

  news: [
    {
      date: '18 Aug 2026',
      headline: 'Thailand launch',
      summary: 'L03 launches in Thailand in three trims: Standard Plus, Long Range Plus, and Long Range Ultra.',
      source: 'CleanTechnica / regional coverage',
      url: 'https://cleantechnica.com/2026/08/07/xpeng-set-to-enter-the-philippines-with-the-globalized-mona/',
    },
    {
      date: '7 Aug 2026',
      headline: 'Philippines entry announced',
      summary: "Xpeng confirms plans to enter the Philippines in Q3 2026, starting with two Smart EV models.",
      source: 'CleanTechnica',
      url: 'https://cleantechnica.com/2026/08/07/xpeng-set-to-enter-the-philippines-with-the-globalized-mona/',
    },
    {
      date: '22 Jul 2026',
      headline: 'First China deliveries begin',
      summary:
        'Xpeng starts handing over the first Mona L03 SUVs in China, with nationwide ramp-up through August; EREV deliveries follow later in the month.',
      source: 'CnEVPost',
      url: 'https://cnevpost.com/2026/07/22/xpeng-delivers-first-mona-l03-suvs-china/',
    },
    {
      date: '16–17 Jul 2026',
      headline: 'Simultaneous global launch — Munich + China',
      summary:
        'Xpeng launches the L03 in 65 countries/regions at once. China pre-sale pricing lands at RMB 143,800–165,800; Germany opens at €35,600 (RWD Standard) up to €41,600 (AWD Performance Ultra).',
      source: 'CnEVPost / paultan.org / CarNewsChina',
      url: 'https://cnevpost.com/2026/07/16/xpeng-launches-mona-l03/',
    },
    {
      date: '2 Jul 2026',
      headline: 'China pre-sales open',
      summary: 'Chinese debut with pre-sales opened and the July 16 launch date confirmed.',
      source: 'CnEVPost',
      url: 'https://cnevpost.com/2026/07/02/xpeng-mona-l03-china-debut-launch-jul-16/',
    },
    {
      date: '9 Apr 2026',
      headline: 'MIIT filing surfaces the L03',
      summary: "Xpeng files the Mona L03 with China's Ministry of Industry and Information Technology, confirming the model ahead of an official reveal.",
      source: 'Wikipedia (XPeng Mona L03)',
      url: 'https://en.wikipedia.org/wiki/XPeng_Mona_L03',
    },
  ] satisfies NewsItem[],

  specsByMarket: [
    {
      variant: 'AWD Performance Ultra',
      market: 'Europe',
      power: '285 kW / 388 hp, 431 Nm',
      battery: '71.2 kWh',
      range: '440 km WLTP',
      zeroToHundred: '4.5 s',
      price: '€41,600 (Germany)',
    },
    {
      variant: 'RWD Standard Range',
      market: 'Europe',
      power: '180 kW / 241 hp',
      battery: '58.3 kWh LFP',
      range: '445 km WLTP',
      zeroToHundred: '—',
      price: '€35,600 (Germany)',
    },
    {
      variant: 'PowerX (EREV)',
      market: 'Europe',
      power: 'Electric motor + 1.5 L range extender',
      battery: 'Combined ~1,017 km range',
      range: 'Up to 520 km EV / 1,017 km combined',
      zeroToHundred: '—',
      price: 'From €38,600 (Germany)',
    },
    {
      variant: 'BEV (standard)',
      market: 'China',
      power: '183 kW / 245 hp, single motor RWD',
      battery: '56 or 69 kWh LFP',
      range: 'Market-spec (CLTC)',
      zeroToHundred: '6.5 s',
      price: 'RMB 143,800–165,800',
    },
    {
      variant: 'EREV',
      market: 'China',
      power: 'Same drive motor + 70 kW (1.5 L) range extender',
      battery: 'Same base pack + fuel tank',
      range: 'Market-spec (CLTC)',
      zeroToHundred: '—',
      price: 'RMB 143,800–165,800 range',
    },
  ] satisfies SpecRow[],

  marketNote:
    "AWD is currently a Europe-exclusive configuration — the China lineup ships single-motor RWD only (BEV or EREV), so the AWD Performance Ultra trim isn't available to Chinese buyers.",

  design: {
    headline:
      "Xpeng's VP of Design Center, JuanMa Lopez — previously Ferrari's Head of Exterior Design, with credits including the LaFerrari, SF90 Stradale and Ferrari Monza SP — joined Xpeng in June 2024 and led the L03 as his first production vehicle in the role. It's pitched as a coupe-SUV: a low, aerodynamic fastback silhouette rather than a conventional crossover shape.",
    facts: [
      {
        label: 'Drag coefficient',
        value: '0.228 Cd',
        note: 'Includes an active grille shutter among its aero details',
      },
      {
        label: 'Dimensions (L×W×H)',
        value: '4,650 × 1,920 × 1,600 mm',
        note: 'Wheelbase 2,850 mm',
      },
      {
        label: 'Turning circle',
        value: '10.5 m',
      },
      {
        label: 'Curb weight',
        value: '2,115 kg (AWD Performance, per independent EV-spec databases)',
        note:
          'A Gemini-generated summary circulating separately puts this at 1,940 kg (2,040 kg with driver) — notably lower. That figure has no citation of its own and conflicts with what EV-spec databases report for this trim, so treat both as unreconciled rather than picking one.',
      },
      {
        label: 'Towing capacity',
        value: '1,500 kg braked / 750 kg unbraked',
      },
      {
        label: 'Braking distance (100–0 km/h)',
        value: '35.6 m (reported)',
        note:
          'Single-source figure from the same ungrounded Gemini summary — no outlet has published an independent braking test yet, so treat as unverified.',
      },
      {
        label: 'Drive modes',
        value: 'ECO, Comfort, Sport, Individual, Snow, Slippery — plus Escape Mode on AWD',
        note: 'Escape Mode manages per-wheel brake pressure and motor torque to free the car from mud, sand or snow',
      },
      {
        label: 'Battery cells',
        value: 'CALB-supplied LFP',
        note: '71.2 kWh pack on the AWD Performance Ultra',
      },
      {
        label: 'DC fast charging',
        value: 'Up to 236 kW peak',
        note: '10–80% in roughly 18–20 minutes per outlet reporting',
      },
      {
        label: 'Cargo & frunk volume',
        value: '367–539 L rear / 44–102 L frunk, depending on source',
        note:
          'Wide spread across outlets, most likely reflecting different measurement conventions (VDA box method vs. fill-to-window liquid volume) rather than a real difference between cars — not fully reconciled.',
      },
      {
        label: 'Interior comfort',
        value: '14-point massage front seats, 20-speaker 1,000W+ audio, dual 50W wireless charging pads',
        note: 'Feature set independently confirmed',
      },
      {
        label: 'Panoramic roof',
        value: 'Dual-layer silver-coated glass, blocks ~99.9% of UV',
        note: 'Panel size reported at 1.31 m² in a single ungrounded source — the feature is confirmed independently, the exact area is not',
      },
    ] satisfies ElectronicsFact[],
    caveat:
      "Design and spec details above blend independently sourced reporting with a Gemini-generated summary that arrived without its own citations. Where the two disagree (curb weight, cargo/frunk volume), both figures are shown rather than picking a winner; single-source claims from the Gemini summary (braking distance, roof panel area) are flagged as such rather than stated as fact.",
  },

  rumors: [
    {
      title: 'UK launch targeted for 2027',
      detail:
        'Xpeng has confirmed the L03 is coming to the UK as part of the 65-market rollout, but UK-specific trim lineup and pricing have not been announced yet.',
      confidence: 'Reported, not yet delivered',
    },
    {
      title: 'Wider Mona-family platform sharing',
      detail:
        'A related model, the Mona L05, already exists alongside the M03 and L03 — suggests Xpeng is building out a full Mona sub-brand on shared underpinnings, though official platform-sharing details for future models are not public.',
      confidence: 'Speculative',
    },
  ] satisfies RumorItem[],

  electronics: {
    headline:
      "The Ultra trim's headline feature is its onboard compute — Xpeng is the first Chinese automaker shipping proprietary in-house AI driving silicon standard across an entire model, not bought in from Nvidia or Horizon Robotics.",
    facts: [
      {
        label: 'Compute platform',
        value: 'Xpeng Turing AI chip (self-developed)',
        note: 'Every L03 trim ships at least one Turing chip standard',
      },
      {
        label: 'AWD Performance Ultra compute',
        value: '3 chips, 2,250 TOPS combined',
        note:
          "2 chips (1,500 TOPS) dedicated to ADAS, 1 chip to the smart cabin — the cabin chip is the \"third computer\" referenced in the trim's marketing",
      },
      {
        label: 'ADAS software',
        value: 'NGP / XNGP on VLA 2.0',
        note: 'Xpeng\'s "vision-language-action" model, described by the company as a physical-world foundation model for driving decisions',
      },
      {
        label: 'Sensor approach',
        value: 'Camera + radar, no lidar',
        note: '11 cameras (incl. 2 high-resolution front binocular cameras) + 12 ultrasonic sensors + radar',
      },
      {
        label: 'Parking assist (XPILOT)',
        value: 'Memory parking, auto-park in unmarked spaces, remote summon',
        note: 'Also includes reverse tracking and dead-end unparking assist',
      },
      {
        label: 'Infotainment SoC',
        value: 'MediaTek MT8676',
        note: 'Drives the 15.6" 2.5K central touchscreen (600 nits) and 26.8" full-color head-up display',
      },
      {
        label: 'Cockpit software',
        value: 'XOS 6 (Global Intelligent Cockpit)',
        note: 'Conversational AI voice assistant with contextual, multilingual understanding',
      },
      {
        label: 'OTA updates',
        value: 'Over Wi-Fi / 4G',
        note: 'Xpeng ships fleet-wide OTA releases regularly (XOS 5.x series through mid-2026); L03-specific update cadence not yet established this early in rollout',
      },
    ] satisfies ElectronicsFact[],
    caveat:
      'Chip-count reporting is not fully consistent across outlets — some describe a base/Ultra split of 1 vs. 2 Turing chips (1,500 TOPS), others describe the AWD Performance Ultra specifically as carrying 3 chips (2,250 TOPS combined, including the cabin chip). The 3-chip/2,250-TOPS figure is the one tied directly to the Ultra AWD trim by multiple outlets and is used above; treat exact chip allocation as best-available rather than fully reconciled.',
  },

  reviews: {
    headline:
      "The L03 is weeks old in most markets, so most published pieces are launch previews rather than extended road tests. A handful of outlets have done actual test drives or ride-alongs — real-world range testing hasn't been published yet.",
    items: [
      {
        date: '17 Aug 2026',
        outlet: 'Top Gear Philippines',
        author: 'Billy Caluag',
        kind: 'Hands-on test drive',
        summary:
          'Test-drove the L03 in Guangzhou with ~90% of seat time in autonomous mode. Praised the one-button destination handoff and smooth traffic weaving; braking felt "almost elegant." System needed manual guidance in heavy rain and a manual nudge past a parked truck during a parking maneuver — concluded it remains genuinely "driver-assisted," not hands-off.',
        url: 'https://www.topgear.com.ph/drives/car-reviews/xpeng-autonomous-driving-first-impressions-a6888-20260817-lfrm',
      },
      {
        date: '23 Jul 2026',
        outlet: 'CleanTechnica',
        author: 'Larry Evans',
        kind: 'Ride-along',
        summary:
          'Rode (didn\'t drive) a prototype Ultra AWD ahead of European delivery. Passenger-seat impressions: suspension had "good feel" without harshness, stiff chassis with little body roll, cabin "quiet, without rattles." Liked the seat build quality and soft-touch materials; noted the 26.8" HUD is good enough that the instrument cluster feels largely unnecessary.',
        url: 'https://cleantechnica.com/2026/07/23/xpeng-l03-impresses-in-the-details-part-1/',
      },
      {
        date: '3 Jul 2026',
        outlet: 'The Driven',
        author: 'Riz Akhtar',
        kind: 'Launch preview (no drive)',
        summary:
          'Beijing launch preview, explicitly not a test drive — up-close look only. Called cabin quality above typical budget-segment norms, close to Xpeng\'s premium G6. Flagged strong practicality (500+ L cargo, 100+ L frunk) and positioned the L03 as Xpeng\'s likely best-seller on price.',
        url: 'https://thedriven.io/2026/07/03/xpeng-lo3-first-impressions-a-new-low-cost-electric-suv-that-could-take-brand-into-mainstream/',
      },
    ] satisfies ReviewItem[],
    rangeNote:
      "No outlet has yet published a real-world range test against the AWD Performance Ultra's 440 km WLTP claim — European deliveries only start Q4 2026, so independent range testing hasn't happened. Worth revisiting this section once cars are in reviewers' hands longer-term.",
  },

  sources: [
    { label: 'CnEVPost', url: 'https://cnevpost.com/2026/07/16/xpeng-launches-mona-l03/' },
    { label: 'CarNewsChina', url: 'https://carnewschina.com/2026/07/16/xpeng-l03-launches-in-europe-at-40740-usd-to-fight-for-market-share/' },
    { label: 'paultan.org', url: 'https://paultan.org/2026/07/17/xpeng-l03-launched-in-europe/' },
    { label: 'Electrek', url: 'https://electrek.co/2026/07/16/xpeng-l03-pricing-tesla-model-y-europe/' },
    { label: 'CleanTechnica', url: 'https://cleantechnica.com/2026/08/07/xpeng-set-to-enter-the-philippines-with-the-globalized-mona/' },
    { label: 'InsideEVs', url: 'https://insideevs.com/news/802044/xpeng-mona-l03-europe-launch/' },
    { label: 'evpowered.co.uk', url: 'https://evpowered.co.uk/news/xpeng-l03-revealed-with-up-to-382bhp-ahead-of-2027-uk-launch/' },
    { label: 'EVKX', url: 'https://evkx.net/models/xpeng/l03/l03_71.2_kwh_awd_performance/' },
    { label: 'Wikipedia — XPeng Mona L03', url: 'https://en.wikipedia.org/wiki/XPeng_Mona_L03' },
    { label: 'TheNextWeb', url: 'https://thenextweb.com/news/xpeng-l03-turing-ai-chip-global-launch' },
    { label: 'ADAS & Autonomous Vehicle International', url: 'https://www.autonomousvehicleinternational.com/news/adas/xpeng-introduces-l03-with-next-generation-ai-cockpit-and-adas.html' },
    { label: 'Top Gear Philippines', url: 'https://www.topgear.com.ph/drives/car-reviews/xpeng-autonomous-driving-first-impressions-a6888-20260817-lfrm' },
    { label: 'CleanTechnica — Impresses In The Details', url: 'https://cleantechnica.com/2026/07/23/xpeng-l03-impresses-in-the-details-part-1/' },
    { label: 'The Driven', url: 'https://thedriven.io/2026/07/03/xpeng-lo3-first-impressions-a-new-low-cost-electric-suv-that-could-take-brand-into-mainstream/' },
    { label: 'Xpeng newsroom — JuanMa Lopez appointment', url: 'https://www.xpeng.com/news/018fecf2a08d8fc2d8362c9e8d3a0126' },
    { label: 'CnEVPost — JuanMa Lopez appointment', url: 'https://cnevpost.com/2024/06/06/xpeng-appoints-juanma-lopez-as-vp-design/' },
    { label: 'Elbil RADAR — AWD Performance specs', url: 'https://elbilradar.com/ev_model/en/2550_xpeng_l03_awd_performance/' },
    { label: 'EV Database — AWD Performance specs', url: 'https://ev-database.org/car/3678/XPENG-L03-AWD-Performance' },
    { label: 'electrive.com — charging', url: 'https://www.electrive.com/2026/07/16/world-premiere-xpeng-l03-promises-rapid-charging-at-a-bargain-price/' },
    { label: 'Top Gear PH — drive modes', url: 'https://www.topgear.com.ph/news/car-news/xpeng-l03-2027-ph-teaser-a6888-20260717' },
    { label: 'CleanTechnica — interior details', url: 'https://cleantechnica.com/2026/07/23/xpeng-l03-impresses-in-the-details-part-2/' },
  ] satisfies Source[],
};

export type Research = typeof research;
