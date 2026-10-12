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
  updated: 'October 2026',
  heroImage: {
    src: '/images/xpeng-l03-research-hero-street.jpg',
    alt: 'Xpeng L03 low-angle front three-quarter view on a sunny street, purple colorway',
  },
  lead:
    "The XPeng MONA L03 AWD Performance Ultra is a high-performance, AI-driven mid-size coupe SUV. Designed under former Ferrari design chief JuanMa Lopez, the L03 blends a ultra-low aerodynamic fastback silhouette with XPeng's end-to-end neural network architecture.",
  intro:
    "Ongoing notes on how the L03 (marketed in China as the Mona L03) is landing in the real world — reception, rollout news, how specs shift by market, and what's still unconfirmed. Compiled from public reporting; not affiliated with Xpeng. Curb weight, drive modes and towing figures are now confirmed against the official English L03 user manual (vehicle system V6.3.2).",

  sentiment: {
    headline:
      'Reception has been strong on price and order volume, especially in Europe where the L03 undercuts the Tesla Model Y.',
    points: [
      {
        label: 'L03 monthly deliveries (Sep 2026)',
        value: '10,000+',
        note: 'First month above 10,000 — still China-only; overseas L03 deliveries only begin Q4 2026. The official MONA account put September L03 deliveries above 14,000 on 2 Oct — higher than the results-PR implication; China-only, single-source.',
      },
      {
        label: 'European orders (by 11 Oct 2026)',
        value: '12,136',
        note: 'Xpeng CEO He Xiaopeng, at a Paris media event — in under three months since the July launch. European customer deliveries had still not begun at that point.',
      },

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
      date: '11 Oct 2026',
      headline: 'L03 passes 12,000 European orders — deliveries still not started',
      summary:
        "At a Paris media event, Xpeng CEO He Xiaopeng said the L03 has drawn 12,136 orders in Europe in under three months since the July launch — and confirmed European customer deliveries have NOT yet begun (Xpeng's German arm had said on 2 Oct the car reaches dealers 'this month'; a 30 Sep Xpeng statement said it was 'preparing to begin its first deliveries'). Dealer stock arriving (see the 3 Oct France entry) is not yet customer handover.",
      source: 'eletric-vehicles.com',
      url: 'https://eletric-vehicles.com/xpeng/xpeng-says-l03-suv-has-drawn-over-12000-orders-in-europe-since-july-launch/',
    },
    {
      date: '11 Oct 2026',
      headline: 'Paris event — new NGP/VLA 2.0 claims (30s memory, 6s look-ahead, 20x safety)',
      summary:
        "Same Paris event: Xpeng says its 'Physical World Foundation Model' gives NGP 30 seconds of memory and 6 seconds of look-ahead simulation, and that VLA v2 delivers a claimed 20x improvement in 'comprehensive safety'. Marketing claims, not independently verified; European activation of the NGP/VLA 2.0 capability remains guided for Q1 2027.",
      source: 'eletric-vehicles.com',
      url: 'https://eletric-vehicles.com/xpeng/xpeng-says-l03-suv-has-drawn-over-12000-orders-in-europe-since-july-launch/',
    },
    {
      date: '11 Oct 2026',
      headline: 'Per-country NGP re-tuning — ~2 weeks, ~1/10,000th the training data',
      summary:
        "Xpeng's head of general intelligence Liu Xianming says the NGP stack can be re-tuned country-by-country in roughly two weeks using only about 1/10,000th the training-data volume — ahead of the Paris Motor Show. A claim about rollout speed, not a change to the Q1 2027 EU activation timeline.",
      source: 'headliner.nl (Telegraaf/agency)',
      url: 'https://www.headliner.nl/artikelen/xpeng-past-rijassistentiesysteem-europa-fractie-trainingsdata-195300',
    },
    {
      date: '8 Oct 2026',
      headline: 'Germany — L03 AWD Performance (388hp) private-lease deal at €415/month',
      summary:
        "German leasing broker sparneuwagen.de lists the L03 AWD Performance (388hp) on private lease at €415/month over 48 months and 10,000 km/year (Hackerott) — a concrete German private-lease datapoint as the L03 enters the EU delivery phase.",
      source: 'sparneuwagen.de (DE)',
      url: 'https://www.sparneuwagen.de/xpeng-l03-awd-performance-leasing-178023/',
    },
    {
      date: '3 Oct 2026',
      headline: 'France — first L03 deliveries begin, the first concrete EU delivery-phase signal',
      summary:
        "French dealers started receiving L03 stock this week, moving the car from orders (opened 16 Jul) into the delivery phase Xpeng had guided for “early October.” Pricing restated across the range at €34,990 / €37,990 / €42,990 / €46,990. Single-source so far (Macarel), but consistent with Xpeng’s own “first deliveries to European customers” line tied to the Paris Motor Show. France is the first EU market to reach handover; the NL configurator is still unchanged.",
      source: 'Macarel (FR)',
      url: 'https://www.macarel.fr/xpeng-commence-a-livrer-son-l03-en-france-un-suv-electrique-a-partir-de-34-990-euros/',
    },
    {
      date: '2 Oct 2026',
      headline: 'Thailand — L03 priced ฿899,000–1,189,000, first deliveries by end-October',
      summary:
        "Thai pricing now confirmed across three variants at ฿899,000–1,189,000, with first deliveries by end-October 2026 — filling in the price ladder the August launch entry left out.",
      source: 'Lanta News (TH)',
      url: 'https://lanta.news/articles/new-xpeng-l03-899-000',
    },
    {
      date: '2 Oct 2026',
      headline: 'Official MONA account: L03 September deliveries exceeded 14,000',
      summary:
        "The official MONA social account put September L03 deliveries above 14,000 — higher than the 10,000+ implied by XPENG's 1 Oct results release. It also shared order-structure data: roughly 98% of buyers choose Max/Ultra SE trims (per He Xiaopeng), over 95% are VLA 2.0 trims, assisted-driving mileage has passed 700 million km, and one in five trade-ins comes from a BBA (BMW/Benz/Audi) owner. China-only, single-source (Weibo/Sina), with no direct EU/NL read-through.",
      source: 'MONA official (Weibo/Sina)',
      url: 'https://www.sina.cn/weibo/detail/5349579314955715.html',
    },
    {
      date: '2 Oct 2026',
      headline: 'German dealer promo — L03 RWD SR from €34,416 with 6% house discount',
      summary:
        "Dealer-level offer (Gröditzer Autohaus): a 6% house discount puts the L03 RWD Standard Range at €34,416 including transfer, with 0.99% financing (the 0% offer ended end-September), valid to 31 Oct 2026; quoted delivery 6–8 months. A single-dealer promotion, not Xpeng manufacturer pricing.",
      source: 'mydealz (dealer listing)',
      url: 'https://www.mydealz.de/deals/xpeng-l03-mit-6-rabatt-ab-34416-eur-inkl-uberfuhrung-099-finanzierung-forderfahig-2847115',
    },
    {
      date: '1 Oct 2026',
      headline: 'L03 monthly deliveries pass 10,000 for the first time',
      summary:
        "XPENG's September figures show Mona L03 deliveries topping 10,000 in a month for the first time, within total September deliveries of 41,256 (+5% MoM, −0.8% YoY — its best month of 2026) and Q3 deliveries of 118,390 (+15% QoQ). The company says overseas L03 deliveries start in Q4 2026 and guides overseas volumes above 40,000 per quarter.",
      source: 'XPENG / PRNewswire / CnEVPost / eletric-vehicles',
      url: 'https://www.prnewswire.com/news-releases/xpeng-announces-vehicle-delivery-results-for-september-and-third-quarter-2026-302895410.html',
    },
    {
      date: '1 Oct 2026',
      headline: 'Germany — Xpeng signs Emil Frey Deutschland as dealer partner',
      summary:
        "Xpeng signed Emil Frey Deutschland effective 1 Oct 2026, adding Hessengarage (Frankfurt) and Schwabengarage (Pforzheim) and targeting around 110 German sites by year-end, with the L03 arriving \"in a few weeks.\" Context: Xpeng's German registrations for Jan–Aug 2026 were 5,773 (+257.7% YoY) against a 2026 target of about 8,000.",
      source: 'Xpeng Newsroom DE / kfz-betrieb / eletric-vehicles',
      url: 'https://xpeng-newsroom.pr.co/de-DE/272689-xpeng-bildet-handelspartnerschaft-mit-emil-frey-deutschland/',
    },
    {
      date: '30 Sep 2026',
      headline: 'Paris Motor Show — public NGP test-rides, in the official Autonomous Lab alongside Tesla',
      summary:
        "At the Paris Motor Show (12–18 Oct), the L03 will offer public NGP test-rides, and Xpeng and Tesla are the only two automakers in the show's official Autonomous Lab — Xpeng's first large-scale overseas NGP ride experience (Tesla brings six Model 3 on FSD Supervised; Xpeng two L03 on NGP). The G9L global launch and European order book / pricing open on 12 Oct. A 1 Oct XPENG release tied to the same show adds that the L03 \"is preparing to begin its first deliveries to European customers,\" and that XPENG has now passed 60,000 cumulative deliveries in Europe.",
      source: 'XPENG official / Automotive World / eletric-vehicles',
      url: 'https://www.automotiveworld.com/news/xpeng-to-open-g9l-orders-in-europe-at-paris-motor-show/',
    },
    {
      date: '28 Sep 2026',
      headline: 'First back-to-back VLA 2.0 vs. Tesla FSD comparison — in Amsterdam',
      summary:
        "CleanTechnica's Larry Evans rode a Netherlands-spec L03 prototype running XNGP on VLA 2.0 through Amsterdam back-to-back against a Tesla Model 3 on FSD — reported as the first non-XPENG person to make that comparison (session 11 Sep, embargoed until 28 Sep). The Netherlands is the first European country to permit Tesla FSD; VLA 2.0's European public release remains slated for 2027. Part 1 of a series, Part 2 expected.",
      source: 'CleanTechnica',
      url: 'https://cleantechnica.com/2026/09/28/xpeng-vla-2-0-vs-tesla-fsd-in-amsterdam-part-1-xpeng-l03/',
    },
    {
      date: '25 Sep 2026',
      headline: 'Philippines launch — six variants across L03 and X9, L03 REEV aimed at the BYD Atto 3',
      summary:
        "Xpeng launched in the Philippines at the SM Mall of Asia Arena, Manila, on 25 Sep 2026, taking the wraps off six variants across the L03 and the X9. L03 pricing: EV Standard Range ₱1,548,000 (~US$24,700, 58.3 kWh / 445 km), L03 REEV ₱1,598,000 (37.2 kWh battery, 215 km EV / 1,017 km combined — positioned to match the BYD Atto 3), EV Long Range ₱1,698,000 (71.1 kWh / 520 km) and EV RWD Long Range Ultra ₱2,058,000 (three Turing AI chips, 2,250 TOPS). Cars run XOS 6.0, with deliveries slated for Q4 2026 from showrooms in Greenhills, Makati, North EDSA and Cebu. This launch supersedes the earlier Q3-2026 entry plan tracked below.",
      source: 'CleanTechnica / ASTIG / GizGuide',
      url: 'https://cleantechnica.com/2026/09/25/xpeng-launches-in-the-philippines-with-six-ev-variants/',
    },
    {
      date: '23 Sep 2026',
      headline: 'L03 launches in Australia & New Zealand — full pricing plus the PowerX range-extender',
      summary:
        "Xpeng revealed L03 pricing for Australia at a Gold Coast launch event: RWD Standard Range A$41,900, RWD Long Range A$46,900, AWD Performance Ultra A$53,900 — with a PowerX Long Range range-extender (EREV) at the same A$41,900 as the base EV. It's the first Xpeng model in Australia to use Kunpeng Range Extender technology, pairing a 37 kWh LFP battery with a 1.5-l petrol engine that acts purely as a generator — the wheels always driven by the electric motor. XNGP on VLA 2.0 (up to 2,250 TOPS across three Turing AI chips) is slated to roll out progressively from 2027. New Zealand mirrors the lineup at NZ$49,990 / NZ$54,990 / NZ$64,990, with the PowerX at NZ$49,990 — undercutting the Tesla Model Y RWD (NZ$67,900) while claiming more range (520 km WLTP vs 466 km). First arrivals expected in November, pending ADR approval.",
      source: 'Carsales / CarExpert / Auto Trader NZ / Paultan (via Drive)',
      url: 'https://www.carsales.com.au/editorial/details/xpeng-l03-launches-with-range-extender-option-153085/',
    },
    {
      date: '22 Sep 2026',
      headline: 'XOS 6.3.0 full rollout — with a distilled Lite VLA 2.0 for the Turing Max',
      summary:
        "Xpeng began fleet-wide rollout of XOS 6.3.0 on 22 Sep, centring on the physical-world foundation model now folding 'time' into its framework — shifting from static 3D spatial recognition to dynamic 4D space-time understanding. A Lite version of VLA 2.0 rolls out simultaneously to the single-Turing-Max model, distilled from the same high-end architecture via learned token compression so the foundation-model capability runs on lower-compute platforms. Chairman He Xiaopeng says the distilled Lite model is in mass production and, in real-world tests, sits in the top tier of domestic L2 systems. New features: nose-in/tail-out parking switching after a spot is chosen, voice-controlled parking exit, and cabin split-screen interaction plus CarPlay.",
      source: 'Gasgoo (Munich)',
      url: 'https://autonews.gasgoo.com/articles/news/xpeng-rolls-out-second-generation-vla-across-its-lineup-with-xos-630-lite-version-2102378269340286977',
    },
    {
      date: '2 Sep 2026',
      headline: 'Official NL pricing live — from €36,990',
      summary:
        "xpeng.com's Dutch site now has a \"Snel leverbaar\" (quick delivery) page live, with official NL retail pricing starting from €36,990 — the first Xpeng-published NL figure. This supersedes earlier unverified NL retail estimates and the Ayvens €578/month lease quote as the headline NL number. Per-trim NL pricing above the €36,990 starting figure isn't independently confirmed yet — see the NL pricing rumor entry below for an unresolved conflict with a secondary source's full trim ladder.",
      source: 'xpeng.com (NL)',
      url: 'https://www.xpeng.com/nl/quick-delivery',
    },
    {
      date: '2 Sep 2026',
      headline: 'Mona L03 moves to double-shift production, overseas deliveries targeted for Q4',
      summary:
        'Xpeng has shifted Mona L03 production to double shifts to accelerate capacity, working with suppliers to clear a chip-supply constraint. Overseas deliveries (including Europe) are set to begin in Q4 2026, expected to push quarterly overseas sales past 40,000 units. Production context, not NL-specific.',
      source: 'Gasgoo',
      url: 'https://autonews.gasgoo.com/articles/news/xpeng-overcomes-chip-shortage-adopts-double-shifts-to-accelerate-mona-l03-capacity-2086717743847194625',
    },
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
        'Xpeng launches the L03 in 65 countries/regions at once. China pre-sale pricing lands at RMB 143,800–165,800; Germany opens at €35,600 (RWD Standard) up to €46,600 (AWD Performance Ultra).',
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
      price: '€46,600 (Germany)',
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
      variant: 'AWD Performance Ultra',
      market: 'Australia',
      power: '285 kW / 388 hp, 431 Nm',
      battery: '71.2 kWh LFP',
      range: '440 km WLTP',
      zeroToHundred: '4.5 s',
      price: 'A$53,900',
    },
    {
      variant: 'RWD Long Range',
      market: 'Australia',
      power: '245 hp / 183 kW, 280 Nm',
      battery: '71.2 kWh LFP',
      range: '520 km WLTP',
      zeroToHundred: '—',
      price: 'A$46,900',
    },
    {
      variant: 'RWD Standard Range',
      market: 'Australia',
      power: '241 hp / 180 kW',
      battery: '58.3 kWh LFP',
      range: '445 km WLTP',
      zeroToHundred: '—',
      price: 'A$41,900',
    },
    {
      variant: 'PowerX Long Range (EREV)',
      market: 'Australia',
      power: 'Electric motor + 1.5 L range extender (generator)',
      battery: '37 kWh LFP + fuel tank',
      range: '215 km EV / ~1,017 km combined',
      zeroToHundred: '—',
      price: 'A$41,900',
    },
    {
      variant: 'AWD Performance Ultra',
      market: 'New Zealand',
      power: '285 kW / 388 hp, 431 Nm',
      battery: '71.2 kWh LFP',
      range: '440 km WLTP',
      zeroToHundred: '4.5 s',
      price: 'NZ$64,990',
    },
    {
      variant: 'RWD Long Range',
      market: 'New Zealand',
      power: '245 hp / 183 kW, 280 Nm',
      battery: '71.2 kWh LFP',
      range: '520 km WLTP',
      zeroToHundred: '—',
      price: 'NZ$54,990',
    },
    {
      variant: 'RWD Standard Range',
      market: 'New Zealand',
      power: '241 hp / 180 kW',
      battery: '58.3 kWh LFP',
      range: '445 km WLTP',
      zeroToHundred: '—',
      price: 'NZ$49,990',
    },
    {
      variant: 'PowerX Long Range (EREV)',
      market: 'New Zealand',
      power: 'Electric motor + 1.5 L range extender (generator)',
      battery: '37 kWh LFP + fuel tank',
      range: '215 km EV / ~1,017 km combined',
      zeroToHundred: '—',
      price: 'NZ$49,990',
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
    {
      variant: 'RWD Long Range Ultra',
      market: 'Philippines',
      power: 'RWD, 3× Turing AI chips (2,250 TOPS)',
      battery: '71.1 kWh',
      range: '520 km',
      zeroToHundred: '—',
      price: '₱2,058,000',
    },
    {
      variant: 'RWD Long Range',
      market: 'Philippines',
      power: 'RWD',
      battery: '71.1 kWh',
      range: '520 km',
      zeroToHundred: '—',
      price: '₱1,698,000',
    },
    {
      variant: 'RWD Standard Range',
      market: 'Philippines',
      power: 'RWD',
      battery: '58.3 kWh',
      range: '445 km',
      zeroToHundred: '—',
      price: '₱1,548,000',
    },
    {
      variant: 'REEV (range extender)',
      market: 'Philippines',
      power: 'Electric motor + range extender',
      battery: '37.2 kWh + fuel tank',
      range: '215 km EV / 1,017 km combined',
      zeroToHundred: '—',
      price: '₱1,598,000',
    },
  ] satisfies SpecRow[],

  marketNote:
    "The AWD Performance Ultra is now a Europe-, Australia- and New Zealand-exclusive configuration — the China lineup ships single-motor RWD only (BEV or EREV), so it isn't available to Chinese buyers. Australia and New Zealand additionally get a PowerX range-extender (EREV) variant at parity pricing with the base EV (A$41,900 / NZ$49,990). The Philippines launch (25 Sep 2026) adds a further priced market, its lineup including the L03 REEV at ₱1,598,000.",

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
        note: 'Wheelbase 2,850 mm — 5 seats; maximum design gross mass 2,375 / 2,465 / 2,565 kg by trim, per the official manual.',
      },
      {
        label: 'Turning circle',
        value: '10.5 m',
      },
      {
        label: 'Curb weight',
        value: '2,060 kg (AWD Performance Ultra — Long-Range Ultra-4WD)',
        note:
          'Confirmed against the official English user manual (vehicle system V6.3.2): the trim mass table lists 2,060 kg curb weight (2,080 kg with support hook) for Long-Range Ultra-4WD, with a maximum gross mass of 2,565 kg. This resolves the earlier 2,115 kg / 1,940 kg conflict — the manual figure is authoritative, and the two database-derived numbers (2,115 kg from EV-spec databases, and the uncited 1,940 kg from a Gemini summary) are superseded.',
      },
      {
        label: 'Towing capacity',
        value: '1,500 kg braked / 750 kg unbraked',
        note: 'Official manual: maximum towing mass 1,500 kg (braked) / 750 kg (unbraked); maximum tongue load 75 kg; 13-pin connector (ISO 11446:2004) and ECE R55 A-class tow-ball head. Trailer Mode is mandatory (enabled in P gear) when towing.',
      },
      {
        label: 'Braking distance (100–0 km/h)',
        value: '35.6 m (reported)',
        note:
          'Single-source figure from the same ungrounded Gemini summary — no outlet has published an independent braking test yet, and the official manual publishes no 100–0 stopping figure, so treat as unverified.',
      },
      {
        label: 'Drive modes',
        value: 'Energy Saving, Comfort, Sport, Personalization',
        note: 'Confirmed against the official manual (vehicle system V6.3.2): the four drive modes are Energy Saving, Comfort, Sport and Personalization, plus two special-surface modes — Snow Mode (ice/snow, wet muddy roads, grassland) and Wetland Mode (waterlogged, wet slippery asphalt, underground garages). The earlier "ECO / Individual / Slippery" naming is incorrect — "Individual" is called "Personalization", there is no "Slippery" mode (Snow + Wetland cover those surfaces), and there is no "Escape Mode" in the manual (per-wheel traction/torque management is handled by dTCS distributed traction control). AWD is automatic Timely 4WD.',
      },
      {
        label: 'Audio system',
        value: '18+2 speaker spatial audio (20 total), 7.1.4, on Ultra',
        note: 'Secondary source (xpeng.guru) — consistent with the "20-speaker 1,000W+" figure already tracked in Electronics below. Lower trims (SR/LR/Performance) get 9 speakers.',
      },
      {
        label: 'Massage seats',
        value: '"Cloud-Comfort" 14-point massage, front seats',
        note: 'Branded name for the 14-point massage feature already tracked elsewhere on this page — Performance Ultra exclusive. Secondary source (xpeng.guru).',
      },
      {
        label: 'Heated windshield',
        value: 'ADAS camera area only, Performance Ultra exclusive',
        note: "Warms the glass ahead of the driver-assist camera cluster, not the full windscreen. Secondary source (xpeng.guru).",
      },
      {
        label: 'Optional wheels',
        value: '20" Black Edition (Performance Ultra only)',
        note: 'Adds black 20" wheels, black brake calipers and black exterior trim; standard wheels are 18"/20" depending on trim. Secondary source (xpeng.guru). Official manual confirms the rim/tire specs: 18-inch rim with 225/60 R18 (18×7J), optional 20-inch 245/45R20 (20×8J); snow chains fit the rear wheels only, in pairs, at ≤50 km/h.',
      },
      {
        label: 'Battery cells',
        value: 'CALB-supplied LFP',
        note: '71.2 kWh pack on the AWD Performance Ultra. Official manual confirms LFP cells (3.21 V rated voltage, 170.6 Ah rated capacity).',
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
          'Wide spread across outlets, most likely reflecting different measurement conventions (VDA box method vs. fill-to-window liquid volume) rather than a real difference between cars — not fully reconciled, and not published in the official manual.',
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
      "Design and spec details above blend independently sourced reporting with a Gemini-generated summary that arrived without its own citations. Where the official English user manual (vehicle system V6.3.2) settles a figure — curb weight, drive modes, towing capacity/tongue load, dimensions/gross mass, wheel specs, LFP cells — that value now stands as authoritative and supersedes the conflicting secondary/database numbers. Where sources disagree and the manual is silent (cargo/frunk volume), the figure is still treated as unreconciled; single-source claims the manual does not address (braking distance, roof panel area) are flagged as such rather than stated as fact.",
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
        "As of 2 Sep 2026, xpeng.com's NL site lists official retail pricing from €36,990 — this is now the headline NL figure. Ayvens' NL site separately lists the L03 as a private lease from €578/month excl. VAT on a 60-month/10,000 km term, which is lease-specific context rather than the retail headline. Athlon's public NL private-lease catalog still lists the G6, G9, and P7+ but not the L03, despite at least one confirmed L03 order having gone through Athlon directly — whether that gap is a listing lag, a fleet/private-order-only path, or something else hasn't been confirmed.",
      confidence: 'Unresolved',
    },
    {
      title: 'Three circulating NL retail-price claims did not hold up',
      detail:
        'Three specific NL price figures have circulated but failed verification as of Sep 2026: (1) €42,990 incl. VAT / €41,677 fiscal value for the AWD Performance trim; (2) a four-trim price ladder of €34,990 / €37,990 / €40,990 / €45,990; (3) a claim that only the Performance Ultra trim gets a dual-chip NGP setup — contradicted by the real per-trim tiering (Max 1 chip, Ultra SE 2 chips, Ultra AWD 3 chips) in the Electronics section below. None of these three are confirmed Xpeng figures — listed here as debunked, not as fact. Note: as of 2 Sep 2026 xpeng.com confirms only the €36,990 starting price; a secondary Dutch outlet (e-drivers.com) is now citing the same four-trim ladder in (2) as current NL pricing, which conflicts with its earlier debunked status — not corroborated elsewhere, so the debunked verdict stands pending confirmation from an official source. (Updated 2 Oct 2026: the official NL configurator now shows the RWD Standard Range at €34,990 — the first rung of ladder (2) — so the picture is less clear-cut, but it remains unconfirmed pending broader official pricing and the debunked verdict still stands for the other figures. Updated 8–9 Oct 2026: a fresh check reports the NL configurator now listing the full four-trim ladder — €34,990 / €37,990 / €40,990 / €45,990 — matching claim (2) exactly; if corroborated this would upgrade that ladder from debunked to official, but it remains a single-source report and the configurator is JS-rendered (not verifiable from raw HTML), so the verdict stands pending independent confirmation.)',
      confidence: 'Debunked',
    },
    {
      title: 'European delivery timing and dealership count — conflicting reports',
      detail:
        'One medium-confidence source cites first European deliveries "end of September 2026" with ~100 dealerships now in the network — more specific than the earlier "Q4, maybe early October" estimate. A separate Dutch outlet (e-drivers.com), checked independently, instead cites delivery in "the fourth quarter" and only 4 NL sales locations. These two accounts do not agree on either the delivery date or the network size; neither has been corroborated by an official Xpeng statement yet.',
      confidence: 'Unresolved',
    },
    {
      title: 'Euro NCAP — self-declared "5-Star Ready," official results pending',
      detail:
        'Xpeng has self-declared the L03 "5-Star Ready" for Euro NCAP, per xpeng.guru (secondary/cross-check source). No official Euro NCAP test results have been published yet — this is a manufacturer readiness claim, not an independently verified rating.',
      confidence: 'Reported, not yet delivered',
    },
    {
      title: 'Denmark delivery timeline and pricing (secondary-source proxy data)',
      detail:
        'Per xpeng.guru (secondary/cross-check source): Danish showrooms opened mid-August 2026, with first customer deliveries expected October 2026, and the AWD Performance Ultra priced at 329,995 DKK (~€44,200) in Denmark — close to, and consistent with, the €46,600 German AWD Performance Ultra price already on file (some gap between markets is expected: VAT, local pricing). The October Denmark delivery estimate also doesn\'t conflict with the separate NL "end of September" estimate tracked above — different countries, both single/limited-source estimates.',
      confidence: 'Unresolved',
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
        value: 'Q1 2027, Performance Ultra only at first',
        note:
          'Refines the earlier "early 2027" estimate — a secondary source (xpeng.guru) puts it at "planned Q1 2027," initially City + Highway NGP at Level 2+ capability, and limited to the Ultra trim first. Not yet decided for other models (P7, X9, G9L), pending compute headroom. First outside ride-along was 17 Jul 2026 in Munich — see Research news above.',
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
          'Announced 30 Aug 2026. Adds "4D Perception" (Infini-VLA: unbounded historical timeline for decisions, ~30s practical working memory) and "X-Foresight" (predicts ~6s ahead, extendable to 21s for proactive reasoning), plus a conversational "Master Agent" voice control that drops the need for preset commands. Xpeng claims a 300% latency/response-speed improvement (via streaming inference) and a 20x safety improvement (via Flow-Matching path selection) — company-stated figures, not yet independently verified. Older dual-Orin cars get a reduced update later in 2026; L03 AWD Performance Ultra is covered by the Ultra/Max rollout. A 22 Sep 2026 follow-up (Gasgoo) adds a distilled "Lite" VLA 2.0 for the single-Turing-Max model — per chairman He Xiaopeng now in mass production and tested among the top tier of domestic L2 — plus nose-in/tail-out parking switching, voice-controlled parking exit, split-screen interaction and CarPlay. The upgrade marks the shift from static 3D spatial recognition to dynamic 4D space-time understanding by folding "time" into the foundation-model framework.',
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
        date: '8 Oct 2026',
        outlet: 'AutoWeek (NL)',
        author: 'AutoWeek',
        kind: 'Hands-on test drive',
        summary:
          "Full Dutch test of the L03: \"more than complete\" and hard to fault, scoring 4/5. Positions it around €7,000 cheaper than the G6 and squarely in the Skoda Elroq / Kia EV3 segment.",
        url: 'https://www.autoweek.nl/autotests/artikel/de-meer-dan-complete-xpeng-l03-is-maar-moeilijk-op-fouten-te-betrappen/',
      },
      {
        date: '8 Oct 2026',
        outlet: 'De Telegraaf (NL)',
        author: 'De Telegraaf',
        kind: 'Hands-on test drive',
        summary:
          "Dutch review: \"offers a lot for €35,000, but don't take the €5,000 AI option yet.\" Criticizes the current Xpilot (poor sign reading and lane behaviour), notes EU self-driving approval is still missing, and finds the AI voice assistant underwhelming.",
        url: 'https://www.telegraaf.nl/lifestyle/onderweg/xpeng-l03-biedt-veel-voor-35.000-euro-maar-kies-deze-ai-optie-van-5.000-euro-nog-niet/162759724.html',
      },
      {
        date: '8 Oct 2026',
        outlet: 'Bright.nl (NL)',
        author: 'Bright.nl',
        kind: 'Hands-on test drive',
        summary:
          "Video review from a two-day, three-country drive in the 387hp AWD Performance: strong value that puts European EVs under pressure, though the full AI/self-driving feature set still needs Brussels approval.",
        url: 'https://www.bright.nl/videos/2144560/review-xpeng-l03-zet-europese-elektrische-auto-s-onder-druk-met-bizarre-prijs.html',
      },
      {
        date: '7 Oct 2026',
        outlet: 'Auto Express',
        author: 'Auto Express',
        kind: 'Hands-on test drive',
        summary:
          "UK first drive of the L03 at Xpeng's Basel press event: \"a capable but forgettable electric SUV.\" Adds a UK-market signal — order books open November, estimated from ~£33,000 — across a four-model UK line-up (RWD Standard, RWD Long Range, Long Range Ultra, AWD Performance), with the AWD Performance estimated around £40,000. Notes no Euro NCAP score yet.",
        url: 'https://www.autoexpress.co.uk/xpeng/370605/',
      },
      {
        date: '7 Oct 2026',
        outlet: 'What Car?',
        author: 'What Car?',
        kind: 'Hands-on test drive',
        summary:
          "UK review from the same Basel press drive. No confirmed UK prices or specs yet, no Euro NCAP rating, and the UK dealer network is still unclear — early coverage rather than a verdict, but another established UK outlet on the car ahead of a 2027 UK launch.",
        url: 'https://www.whatcar.com/xpeng/l03/suv/review',
      },
      {
        date: '9 Oct 2026',
        outlet: 'EVPowered (UK)',
        author: 'Matt Allan',
        kind: 'Hands-on test drive',
        summary:
          "UK review of the L03: \"competent but not compelling,\" scored 3/5. Praises the value and standard equipment but finds the driving experience and cabin don't stand out against the established competition.",
        url: 'https://evpowered.co.uk/electric-car-reviews/xpeng-l03/',
      },
      {
        date: '8 Oct 2026',
        outlet: 'AutoTrader (UK)',
        author: 'AutoTrader',
        kind: 'Hands-on test drive',
        summary:
          "UK review scoring the L03 3/5 — a solid, well-equipped and keenly priced electric SUV, but without the polish or driver appeal to top its class.",
        url: 'https://www.autotrader.co.uk/content/car-reviews/xpeng-l03-review-2026',
      },
      {
        date: '8 Oct 2026',
        outlet: 'CompleteCar.ie (IE)',
        author: 'Matt Robinson',
        kind: 'Hands-on test drive',
        summary:
          "Irish review of the L03 from the European press drive — another established outlet covering the car ahead of its EU rollout, alongside the UK and Dutch first drives published the same week.",
        url: 'https://www.completecar.ie/xpeng-l03-review.html',
      },
      {
        date: '8 Oct 2026',
        outlet: 'AutoTech Plus',
        author: 'AutoTech Plus',
        kind: 'Launch preview (no drive)',
        summary:
          "Expert-rating piece on the L03 ahead of a UK launch targeted for spring 2027 — early coverage rather than a road test.",
        url: 'https://autotech-plus.com/xpeng-l03-2027-onwards-expert-rating/',
      },
      {
        date: '7 Oct 2026',
        outlet: 'Autocar (UK)',
        author: 'Sam Sheehan',
        kind: 'Hands-on test drive',
        summary:
          "UK first drive from the Basel press event. Quotes UK pricing signals of roughly £33,000 entry rising to about £42,000 as-tested for the range-topper, consistent with the other UK outlets' 7 Oct coverage.",
        url: 'https://www.autocar.co.uk/car-review/xpeng/l03',
      },
      {
        date: '7 Oct 2026',
        outlet: 'ElectricDrives.tv',
        author: 'Theo Binns',
        kind: 'Hands-on test drive',
        summary:
          "Review framing the L03 as an electric SUV-coupe that \"punches above its price,\" citing a European price band of roughly €35,000–€45,000.",
        url: 'https://electricdrives.tv/xpeng-l03-review-electric-suv-coupe-punches-above-its-price/',
      },
      {
        date: '7 Oct 2026',
        outlet: 'Mobilsiden.dk (DK)',
        author: 'Mobilsiden.dk',
        kind: 'Hands-on test drive',
        summary:
          "Danish review calling the L03 \"næsten for god til at være sand\" (almost too good to be true), citing a Danish start price of 239,995 kr.",
        url: 'https://mobilsiden.dk/nyheder/opkoblede-biler/test-af-elbiler/xpeng-l03/',
      },
      {
        date: '1 Oct 2026',
        outlet: 'AutoRAI',
        author: 'AutoRAI (via headlines24)',
        kind: 'Hands-on test drive',
        summary:
          "First Dutch-language L03 first-drive impression (\"Eerste rij-indruk Xpeng L03 (2026)\") — a real drive review rather than launch-event coverage, though it adds no new price or launch-date facts. Headline verdict: \"belachelijk veel auto voor je geld\" (absurdly much car for your money).",
        url: 'https://www.headlines24.nl/nieuwsartikel/617979/202610/eerste-rij-indruk-xpeng-l03-(2026):-belachelijk-veel-auto-voor-je-geld!',
      },
      {
        date: '28 Sep 2026',
        outlet: 'CleanTechnica',
        author: 'Larry Evans',
        kind: 'Ride-along',
        summary:
          'Rode a Netherlands-spec L03 prototype on VLA 2.0 through Amsterdam, driven back-to-back against a Tesla Model 3 running FSD — reported as the first non-XPENG person to make that comparison. The Netherlands is the first European country to allow FSD; the European public release of VLA 2.0 is still slated for 2027. Part 1 of a CleanTechnica series.',
        url: 'https://cleantechnica.com/2026/09/28/xpeng-vla-2-0-vs-tesla-fsd-in-amsterdam-part-1-xpeng-l03/',
      },
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
      "No outlet has yet published a real-world range test against the AWD Performance Ultra's 440 km WLTP claim, or a genuine long-term ownership report — European deliveries are estimated to start late September 2026 per one medium-confidence source (a separate source instead says Q4 2026 — see the delivery-timing rumor above), so independent range testing and real owner feedback haven't happened yet either way. Beyond the pieces linked above, The Driven, Gizmochina, and CarsGuide have each published broadly consistent early impressions: good steering feel, a stiffer EU-tuned chassis versus the China-market suspension tune, and a competitive pitch against the BYD Atto 3, Skoda Elroq, and VW ID.3/ID.5 — still launch-event impressions, not full production-spec road tests. Closest thing to owner sentiment so far is launch-event attendee reaction (e.g. the Munich debut crowd, with CEO He Xiaopeng present) rather than post-delivery experience. Worth revisiting this whole section once cars are in reviewers' — and owners' — hands longer-term.",
  },

  sources: [
    { label: 'XPENG press release — Paris Motor Show / first EU L03 deliveries (1 Oct)', url: 'https://www.xpeng.com/news/01a0f7644454a0e70a9e8a02823600e0' },
    { label: 'AutoRAI — first-drive impression (via headlines24)', url: 'https://www.headlines24.nl/nieuwsartikel/617979/202610/eerste-rij-indruk-xpeng-l03-(2026):-belachelijk-veel-auto-voor-je-geld!' },
    { label: 'MONA official — September delivery figure (Weibo/Sina)', url: 'https://www.sina.cn/weibo/detail/5349579314955715.html' },
    { label: 'PRNewswire — XPENG September & Q3 2026 deliveries', url: 'https://www.prnewswire.com/news-releases/xpeng-announces-vehicle-delivery-results-for-september-and-third-quarter-2026-302895410.html' },
    { label: 'Automotive World — G9L European orders at Paris Motor Show', url: 'https://www.automotiveworld.com/news/xpeng-to-open-g9l-orders-in-europe-at-paris-motor-show/' },
    { label: 'Xpeng Newsroom DE — Emil Frey Deutschland partnership', url: 'https://xpeng-newsroom.pr.co/de-DE/272689-xpeng-bildet-handelspartnerschaft-mit-emil-frey-deutschland/' },
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
    { label: 'xpeng.com NL — Snel leverbaar (quick delivery) pricing', url: 'https://www.xpeng.com/nl/quick-delivery' },
    { label: 'Gasgoo — Mona L03 double-shift production', url: 'https://autonews.gasgoo.com/articles/news/xpeng-overcomes-chip-shortage-adopts-double-shifts-to-accelerate-mona-l03-capacity-2086717743847194625' },
    { label: 'xpeng.guru — L03 lineup page (secondary/cross-check tier)', url: 'https://xpeng.guru/lineup/xpeng-l03/' },
    { label: 'CleanTechnica — XPeng launches in the Philippines', url: 'https://cleantechnica.com/2026/09/25/xpeng-launches-in-the-philippines-with-six-ev-variants/' },
    { label: 'ASTIG — L03 PH launch prices, REEV', url: 'https://astig.ph/xpeng-l03-philippines-launch-prices-reev-byd-atto-3-2026/' },
    { label: 'GizGuide — XPeng arrives in PH', url: 'https://www.gizguide.com/2026/09/xpeng-arrives-in-ph.html' },
    { label: 'CleanTechnica — VLA 2.0 vs Tesla FSD in Amsterdam', url: 'https://cleantechnica.com/2026/09/28/xpeng-vla-2-0-vs-tesla-fsd-in-amsterdam-part-1-xpeng-l03/' },
    { label: 'Macarel — Xpeng begins L03 deliveries in France, 3 Oct 2026', url: 'https://www.macarel.fr/xpeng-commence-a-livrer-son-l03-en-france-un-suv-electrique-a-partir-de-34-990-euros/' },
    { label: 'Lanta News — L03 Thailand pricing, 899,000–1,189,000 baht, 2 Oct 2026', url: 'https://lanta.news/articles/new-xpeng-l03-899-000' },
    { label: 'Auto Express (UK) — XPeng L03 review, 7 Oct 2026', url: 'https://www.autoexpress.co.uk/xpeng/370605/' },
    { label: 'What Car? (UK) — XPeng L03 review, 7 Oct 2026', url: 'https://www.whatcar.com/xpeng/l03/suv/review' },
    { label: 'AutoWeek (NL) — XPeng L03 full test, 8 Oct 2026', url: 'https://www.autoweek.nl/autotests/artikel/de-meer-dan-complete-xpeng-l03-is-maar-moeilijk-op-fouten-te-betrappen/' },
    { label: 'De Telegraaf (NL) — L03 review, 8 Oct 2026', url: 'https://www.telegraaf.nl/lifestyle/onderweg/xpeng-l03-biedt-veel-voor-35.000-euro-maar-kies-deze-ai-optie-van-5.000-euro-nog-niet/162759724.html' },
    { label: 'Bright.nl (NL) — L03 video review, 8 Oct 2026', url: 'https://www.bright.nl/videos/2144560/review-xpeng-l03-zet-europese-elektrische-auto-s-onder-druk-met-bizarre-prijs.html' },
    { label: 'sparneuwagen.de — L03 AWD Performance private lease, 8 Oct 2026', url: 'https://www.sparneuwagen.de/xpeng-l03-awd-performance-leasing-178023/' },
    { label: 'Autocar (UK) — XPeng L03 review, 7 Oct 2026', url: 'https://www.autocar.co.uk/car-review/xpeng/l03' },
    { label: 'AutoTrader (UK) — XPeng L03 review, 8 Oct 2026', url: 'https://www.autotrader.co.uk/content/car-reviews/xpeng-l03-review-2026' },
    { label: 'EVPowered (UK) — XPeng L03 review, 9 Oct 2026', url: 'https://evpowered.co.uk/electric-car-reviews/xpeng-l03/' },
    { label: 'CompleteCar.ie — XPeng L03 review, 8 Oct 2026', url: 'https://www.completecar.ie/xpeng-l03-review.html' },
    { label: 'ElectricDrives.tv — XPeng L03 review, 7 Oct 2026', url: 'https://electricdrives.tv/xpeng-l03-review-electric-suv-coupe-punches-above-its-price/' },
    { label: 'AutoTech Plus — XPeng L03 expert rating, 8 Oct 2026', url: 'https://autotech-plus.com/xpeng-l03-2027-onwards-expert-rating/' },
    { label: 'Mobilsiden.dk (DK) — XPeng L03 review, 7 Oct 2026', url: 'https://mobilsiden.dk/nyheder/opkoblede-biler/test-af-elbiler/xpeng-l03/' },
  ] satisfies Source[],
};

export type Research = typeof research;
