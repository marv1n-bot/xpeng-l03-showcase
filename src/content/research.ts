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
  confidence: 'Reported, not yet delivered' | 'Speculative' | 'Unresolved' | 'Debunked';
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
  updated: 'September 2026',
  heroImage: {
    src: '/images/xpeng-l03-research-hero-street.jpg',
    alt: 'Xpeng L03 low-angle front three-quarter view on a sunny street, purple colorway',
  },
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
      date: '17 Jul 2026',
      headline: 'First outside ride-along in VLA 2.0 (Munich)',
      summary:
        "One day after the global launch, Xpeng gave outlets their first external ride in a car running VLA 2.0 — its 2nd-generation vision-language-action self-driving stack — on public Munich streets. It held back from cyclists, threaded gaps between cars and trams, and needed no disengagements over the route; the one miss was a traffic light mounted high above the car, outside the cameras' framing. CEO He Xiaopeng confirmed NGP powered by VLA 2.0 launches for European customers in early 2027 — the L03 is confirmed to get it, with other models (P7, X9, G9L) undecided pending compute headroom.",
      source: 'eletric-vehicles.com, corroborated by CleanTechnica / ArenaEV',
      url: 'https://eletric-vehicles.com/xpeng/inside-xpengs-first-ride-of-vla-2-0-on-european-roads-review/',
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
    {
      title: 'NL lease pricing is inconsistent between providers',
      detail:
        "Athlon's public NL private-lease catalog lists the G6, G9, and P7+ but not the L03 — despite at least one confirmed L03 order having gone through Athlon directly. Ayvens' NL site does list the L03, quoting from €578/month excl. VAT on a 60-month/10,000 km term. Whether the Athlon gap is a listing lag, a fleet/private-order-only path, or something else hasn't been confirmed.",
      confidence: 'Unresolved',
    },
    {
      title: 'Three circulating NL retail-price claims did not hold up',
      detail:
        'Three specific NL price figures have circulated but failed verification as of Sep 2026: (1) €42,990 incl. VAT / €41,677 fiscal value for the AWD Performance trim; (2) a four-trim price ladder of €34,990 / €37,990 / €40,990 / €45,990; (3) a claim that only the Performance Ultra trim gets a dual-chip NGP setup — contradicted by the real per-trim tiering (Max 1 chip, Ultra SE 2 chips, Ultra AWD 3 chips) in the Electronics section below. None of these three are confirmed Xpeng figures — listed here as debunked, not as fact.',
      confidence: 'Debunked',
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
        label: 'Compute by trim',
        value: 'Max: 1 chip / 750 TOPS · Ultra SE: 2 chips / 1,500 TOPS · Ultra AWD: 3 chips / 2,250 TOPS',
        note:
          'Corrects an earlier "only Ultra gets multi-chip" simplification — compute scales with trim, not a simple base-vs-Ultra split. Ultra AWD (this car\'s configuration) is the 3-chip/2,250-TOPS tier: 2 chips (1,500 TOPS) dedicated to ADAS, 1 chip to the smart cabin — the cabin chip is the "third computer" referenced in the trim\'s marketing. This is also the spec fitted to the Munich VLA 2.0 test vehicle itself.',
      },
      {
        label: 'ADAS software',
        value: 'NGP / XNGP on VLA 2.0',
        note: 'Xpeng\'s "vision-language-action" model, described by the company as a physical-world foundation model for driving decisions',
      },
      {
        label: 'VLA 2.0 architecture',
        value: '<80 ms response latency, camera-only',
        note:
          'Drops the intermediate "language" step used by 1st-gen VLA to cut response latency; trained on roughly 100M driving clips (mostly Chinese roads) plus a companion scene-reasoning model. Camera-only for driving decisions with radar/ultrasonic as backup — no lidar or HD maps — which Xpeng and outlets both frame as the direct comparison point to Tesla FSD.',
      },
      {
        label: 'VLA 2.0 Europe rollout',
        value: 'Early 2027 (L03 confirmed)',
        note:
          "Confirmed for the L03; not yet decided for other models (P7, X9, G9L), pending compute headroom. First outside ride-along was 17 Jul 2026 in Munich — see Research news above.",
      },
      {
        label: 'VLA 2.0 external licensing',
        value: 'Volkswagen (first Western OEM)',
        note: 'VW is the first Western automaker to license VLA 2.0 together with the Turing chip.',
      },
      {
        label: 'VLA 2.0 software update — v6.3.0',
        value: 'Rolling out to Ultra / Max trims, September 2026',
        note:
          'Announced 30 Aug 2026. Adds "4D Perception" (Infini-VLA: unbounded historical timeline for decisions, ~30s practical working memory) and "X-Foresight" (predicts ~6s ahead, extendable to 21s for proactive reasoning), plus a conversational "Master Agent" voice control that drops the need for preset commands. Xpeng claims a 300% latency/response-speed improvement (via streaming inference) and a 20x safety improvement (via Flow-Matching path selection) — company-stated figures, not yet independently verified. Older dual-Orin cars get a reduced update later in 2026; L03 AWD Performance Ultra is covered by the Ultra/Max rollout.',
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
      "Earlier reporting on chip counts wasn't fully consistent across outlets, describing only a base/Ultra split. A closer per-trim breakdown (Max 1 chip, Ultra SE 2 chips, Ultra AWD 3 chips) resolves most of that ambiguity and matches the spec confirmed on the Munich VLA 2.0 test vehicle, so it's used above as the current best-available figure rather than the earlier binary split. VLA 2.0 latency and training-data figures still come from a single detailed source (CleanTechnica) rather than being independently corroborated elsewhere yet.",
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
      "No outlet has yet published a real-world range test against the AWD Performance Ultra's 440 km WLTP claim, or a genuine long-term ownership report — European deliveries only start Q4 2026, so independent range testing and real owner feedback haven't happened yet. Beyond the pieces linked above, The Driven, Gizmochina, and CarsGuide have each published broadly consistent early impressions: good steering feel, a stiffer EU-tuned chassis versus the China-market suspension tune, and a competitive pitch against the BYD Atto 3, Skoda Elroq, and VW ID.3/ID.5 — still launch-event impressions, not full production-spec road tests. Closest thing to owner sentiment so far is launch-event attendee reaction (e.g. the Munich debut crowd, with CEO He Xiaopeng present) rather than post-delivery experience. Worth revisiting this whole section once cars are in reviewers' — and owners' — hands longer-term.",
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
    { label: 'eletric-vehicles.com — first VLA 2.0 ride, Munich', url: 'https://eletric-vehicles.com/xpeng/inside-xpengs-first-ride-of-vla-2-0-on-european-roads-review/' },
    { label: 'CleanTechnica — VLA 2.0 in Munich', url: 'https://cleantechnica.com/2026/07/30/xpeng-vla-2-0-in-munich-taking-global-intelligent-driving-lead/' },
    { label: 'ArenaEV — VLA 2.0 testing in Germany', url: 'https://www.arenaev.com/xpeng_l03_testing_nextgen_autonomous_tech_in_germany_days_ahead_of_global_debut-news-6062.php' },
    { label: 'CleanTechnica — Volkswagen licenses VLA 2.0', url: 'https://cleantechnica.com/2026/03/03/volkswagen-becomes-xpengs-first-customer-for-vla-2-0-intelligent-driving-system/' },
    { label: 'CleanTechnica — VLA 2.0 v6.3.0 update (4D Perception, X-Foresight)', url: 'https://cleantechnica.com/2026/08/30/xpeng-drives-physical-ai-to-next-level/' },
    { label: 'YouTube — XPeng L03 Review & VLA 2.0 First Test', url: 'https://www.youtube.com/watch?v=SPrgE5bAMv8' },
    { label: 'Athlon NL — private lease catalog', url: 'https://www.athlon.com/nl' },
    { label: 'Ayvens NL — lease listings', url: 'https://www.ayvens.com/nl-nl/' },
  ] satisfies Source[],
};

export type Research = typeof research;
