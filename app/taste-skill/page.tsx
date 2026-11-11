/*
  tasteskill 2.5 plan
  1  kind: software (page type software, site-kind software)
  2  deal: hero split (deal.mjs weights for software with ui: split 2, collage 3; both fit 45 chars) ·
     palette cool-grey-cobalt (a cool grey ground and one cobalt action: calm, exact, a tool you trust
     with money) · type manrope · nav-mega (re-dealt plain: the brief gives three words, no panel copy) ·
     footer-dark · close-type · rhythm space · buttons tonal · mark wordmark · lit ground sky ·
     effect: a still grain field on the lit sky ground of the hero frame (the one effect; card panels
     take still grounds of its family) · moments: counter-rolls (social proof figures, docked in the
     hero, on load) and pinned-chapters (How it works, two screens live)
  hero       the claim, the two actions, the app-frame: today's schedule taking a booking (loop 3.2 s)  1
             + social proof docked under it (three figures, counter-rolls)
  features   three cards, each a fragment of the product's own subject on a lit panel                    1
  how        pinned-chapters: three steps, one frame changing to each step's picture                     2
  testimonial the quote as the h2, the studio's full week beside it                                     1
  pricing    two plans, the calm section                                                                1
  faq        four answers open, the CSV import beside them                                              1
  closing    close-type and footer-dark in one screen                                                   1
*/
import { Chapters, LoopFrame, Nav } from "./client";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ts-action)";
const wrap = "mx-auto w-[calc(100%-48px)] sm:w-[calc(100%-96px)] lg:w-[min(100%-160px,1280px)]";
const section = "relative min-h-lvh pt-24 pb-12 sm:min-h-svh sm:pt-[120px] sm:pb-[72px]";
const h2 = "text-[clamp(30px,1.72vw+23.3px,48px)] leading-[1.1] font-medium tracking-[-0.035em] text-balance";
const h3 = "text-[20px] leading-[1.3] font-medium tracking-[-0.01em] max-sm:text-[18px]";
const btn = `inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-base leading-none font-medium whitespace-nowrap transition-[background-color,translate,scale] duration-150 ease-(--ts-ease) hover:-translate-y-px active:translate-y-px active:scale-[.985] active:duration-[90ms] ${focus}`;
const primary = `${btn} bg-(--ts-action) text-(--ts-action-ink) hover:bg-(--ts-action-hover)`;
const secondary = `${btn} bg-(--ts-tonal) text-(--ts-ink) hover:bg-(--ts-tonal-hover)`;
const link =
  "relative rounded-sm after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-150 after:ease-(--ts-ease) hover:after:origin-left hover:after:scale-x-100";

// The main action: no booking system or form in the brief, so it opens an email (a stand-in address).
const TRIAL = "mailto:hello@mooring.example?subject=Start%20free%20trial";

// Lit grounds for frames and panels (the effect's family): a soft light, one shade, the still grain.
const lit = {
  sky: "bg-(--ts-sky) bg-[radial-gradient(110%_70%_at_85%_0%,rgb(255_255_255/.6),transparent_60%),radial-gradient(90%_70%_at_0%_100%,rgb(63_106_146/.28),transparent_70%)]",
  sand: "bg-(--ts-sand) bg-[radial-gradient(110%_70%_at_85%_0%,rgb(255_255_255/.55),transparent_60%),radial-gradient(90%_70%_at_0%_100%,rgb(168_121_74/.26),transparent_70%)]",
  sage: "bg-(--ts-sage) bg-[radial-gradient(110%_70%_at_85%_0%,rgb(255_255_255/.55),transparent_60%),radial-gradient(90%_70%_at_0%_100%,rgb(108_142_99/.26),transparent_70%)]",
};
const frag =
  "rounded-xl border border-(--ts-line) bg-white text-[13px] leading-[1.45] text-(--ts-ink) shadow-[0_1px_2px_rgb(11_12_14/.06),0_16px_40px_-16px_rgb(11_12_14/.25)]";

function Grain() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 size-full opacity-[.22] mix-blend-multiply">
      <rect width="100%" height="100%" filter="url(#ts-grain)" />
    </svg>
  );
}

function Ground({ tone, children }: { tone: keyof typeof lit; children: React.ReactNode }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${lit[tone]}`}>
      <Grain />
      {children}
    </div>
  );
}

function Dot({ on = false }: { on?: boolean }) {
  return <span className={`inline-block size-1.5 shrink-0 rounded-full ${on ? "bg-(--ts-action)" : "bg-(--ts-ink)/35"}`} />;
}

/* counter-rolls: each digit strip holds the real digit at both ends, so the row never reads as zeros */
function Rolling({ value }: { value: string }) {
  const digits = [...value].map((c, i) => ({ c, i, d: /\d/.test(c) }));
  const lastDigit = Math.max(...digits.filter((x) => x.d).map((x) => x.i));
  return (
    <span className="inline-flex leading-none tabular-nums">
      <span className="sr-only">{value}</span>
      {digits.map(({ c, i, d }) => {
        if (!d) return <span key={i} aria-hidden="true">{c}</span>;
        const n = i === lastDigit ? 20 : 10;
        const strip = Array.from({ length: n + 1 }, (_, k) => (Number(c) + k) % 10);
        return (
          <span key={i} aria-hidden="true" className="inline-block h-[1em] overflow-hidden">
            <span
              className={`flex flex-col motion-safe:animate-[ts-roll_1000ms_var(--ts-ease-enter)_500ms_both] ${i === lastDigit ? "[--roll:-20em]" : "[--roll:-10em]"}`}
            >
              {strip.map((x, k) => (
                <span key={k} className="h-[1em]">{x}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}

const classesToday = [
  { time: "7:00", name: "Sunrise Flow", count: "12/12", bar: "w-full", chip: "Full" },
  { time: "9:30", name: "Slow Flow", count: "10/14", bar: "w-[71%]", live: true },
  { time: "12:15", name: "Lunch Pilates", count: "8/10", bar: "w-[80%]" },
  { time: "17:30", name: "Reformer Basics", count: "10/10", bar: "w-full", chip: "3 waiting" },
  { time: "19:00", name: "Yin and Breath", count: "11/16", bar: "w-[69%]" },
];

function HeroWindow() {
  return (
    <div className={`@container absolute top-14 -right-7 -bottom-12 left-14 overflow-hidden max-sm:top-4 max-sm:left-4 ${frag}`}>
      <div className="flex h-11 items-center gap-2 border-b border-(--ts-line) px-4">
        <span className="size-2.5 rounded-full bg-(--ts-ink)/15" />
        <span className="size-2.5 rounded-full bg-(--ts-ink)/15" />
        <span className="size-2.5 rounded-full bg-(--ts-ink)/15" />
        <span className="ml-3 font-medium">Low Tide Yoga</span>
      </div>
      <div className="flex">
        <ul className="w-40 shrink-0 space-y-1 border-r border-(--ts-line) p-3 text-(--ts-muted) @max-[520px]:hidden">
          <li className="rounded-md bg-(--ts-ink)/6 px-2.5 py-1.5 font-medium text-(--ts-ink)">Schedule</li>
          <li className="px-2.5 py-1.5">Members</li>
          <li className="px-2.5 py-1.5">Passes</li>
          <li className="px-2.5 py-1.5">Waitlists</li>
          <li className="px-2.5 py-1.5">Payments</li>
        </ul>
        <div className="min-w-0 flex-1 p-4 pr-12">
          <div className="flex items-baseline justify-between">
            <span className="text-[15px] font-medium">Today</span>
            <span className="text-[12px] text-(--ts-muted)">5 classes</span>
          </div>
          <ul className="mt-3">
            {classesToday.map((c) => (
              <li key={c.time} className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3 border-t border-(--ts-line) py-2.5">
                <span className="text-[12px] text-(--ts-muted) tabular-nums">{c.time}</span>
                <span className="min-w-0">
                  <span className="block truncate font-medium">{c.name}</span>
                  <span className="mt-1.5 block h-1 rounded-full bg-(--ts-ink)/8">
                    <span
                      className={`block h-full origin-left rounded-full ${c.bar} ${c.live ? "bg-(--ts-action) [--from:.9] sm:motion-safe:animate-[ts-fill_3.2s_linear_1.2s_infinite]" : "bg-(--ts-ink)/55"}`}
                    />
                  </span>
                </span>
                <span className="flex items-center gap-2 text-[12px] tabular-nums">
                  {c.live ? (
                    <span className="inline-grid">
                      <span className="[grid-area:1/1] opacity-0 sm:motion-safe:animate-[ts-old_3.2s_linear_1.2s_infinite]">9/14</span>
                      <span className="[grid-area:1/1] sm:motion-safe:animate-[ts-new_3.2s_linear_1.2s_infinite]">{c.count}</span>
                    </span>
                  ) : (
                    c.count
                  )}
                  {c.chip && (
                    <span className="rounded-full bg-(--ts-ink)/6 px-2 py-0.5 text-(--ts-text) @max-[360px]:hidden">{c.chip}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function BookingCard() {
  return (
    <div className={`absolute top-9 left-9 w-[300px] max-w-[calc(100%-36px)] max-sm:top-6 max-sm:left-4 ${frag}`}>
      <div className="flex items-center justify-between border-b border-(--ts-line) px-4 py-3">
        <span className="font-medium">Low Tide Yoga</span>
        <span className="text-[12px] text-(--ts-muted)">Book a class</span>
      </div>
      <div className="space-y-2 p-4">
        <div className="relative rounded-lg border border-(--ts-line) px-3 py-2.5 before:absolute before:top-2 before:bottom-2 before:left-0 before:w-0.5 before:rounded-full before:bg-(--ts-action)">
          <div className="flex justify-between font-medium"><span>Slow Flow</span><span className="tabular-nums">$22</span></div>
          <div className="text-[12px] text-(--ts-muted)">Thursday 9:30 · 4 spots left</div>
        </div>
        <div className="rounded-lg border border-(--ts-line) px-3 py-2.5">
          <div className="flex justify-between font-medium"><span>Lunch Pilates</span><span className="tabular-nums">$24</span></div>
          <div className="text-[12px] text-(--ts-muted)">Thursday 12:15 · 2 spots left</div>
        </div>
        <div className="mt-3 flex h-9 items-center justify-center rounded-lg bg-(--ts-ink) font-medium text-white">Book and pay $22</div>
      </div>
    </div>
  );
}

function WaitlistCard() {
  const queue = [
    { n: "1", name: "Maya L.", note: "Moved into the class", on: true },
    { n: "2", name: "Sam K.", note: "Next in line" },
    { n: "3", name: "Priya D.", note: "Waiting" },
  ];
  return (
    <div className="absolute top-9 right-9 left-9 max-sm:top-6 max-sm:right-4 max-sm:left-4">
      <div className={`flex items-start gap-3 p-3 sm:motion-safe:animate-[ts-arrive_3.2s_linear_1.2s_infinite] ${frag}`}>
        <span className="grid size-7 shrink-0 place-items-center rounded-md bg-(--ts-ink) text-[12px] font-medium text-white">M</span>
        <span>
          <span className="block font-medium">A spot opened in Reformer Basics</span>
          <span className="block text-[12px] text-(--ts-muted)">Today 17:30 · you&rsquo;re in</span>
        </span>
      </div>
      <div className={`mt-3 ${frag}`}>
        <div className="flex justify-between border-b border-(--ts-line) px-4 py-3">
          <span className="font-medium">Waitlist</span>
          <span className="text-[12px] text-(--ts-muted)">Reformer Basics 17:30</span>
        </div>
        <ul className="px-4 pb-1">
          {queue.map((q) => (
            <li key={q.n} className="flex items-center gap-3 border-t border-(--ts-line) py-2.5 first:border-t-0">
              <span className="w-3 text-[12px] text-(--ts-muted) tabular-nums">{q.n}</span>
              <span className="flex-1 font-medium">{q.name}</span>
              <span className={`flex items-center gap-1.5 text-[12px] ${q.on ? "text-(--ts-action)" : "text-(--ts-muted)"}`}>
                <Dot on={q.on} />
                {q.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PassesCard() {
  const passes = [
    { name: "Drop-in", price: "$22" },
    { name: "10-class pack", price: "$180", on: true },
    { name: "Monthly unlimited", price: "$129" },
  ];
  return (
    <div className={`absolute top-9 left-9 w-[300px] max-w-[calc(100%-36px)] max-sm:top-6 max-sm:left-4 ${frag}`}>
      <div className="border-b border-(--ts-line) px-4 py-3 font-medium">Choose a pass</div>
      <ul className="space-y-2 p-4">
        {passes.map((p) => (
          <li
            key={p.name}
            className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${p.on ? "border-(--ts-action)" : "border-(--ts-line)"}`}
          >
            <span className={`grid size-4 place-items-center rounded-full border ${p.on ? "border-(--ts-action)" : "border-(--ts-line-strong)"}`}>
              {p.on && <span className="size-2 rounded-full bg-(--ts-action)" />}
            </span>
            <span className="flex-1 font-medium">{p.name}</span>
            <span className="tabular-nums">{p.price}</span>
          </li>
        ))}
        <li className="flex h-9 items-center justify-center rounded-lg bg-(--ts-ink) font-medium text-white">Checkout</li>
      </ul>
    </div>
  );
}

function ImportVisual() {
  const rows = [
    ["Sunrise Flow", "Mon", "7:00", "12"],
    ["Slow Flow", "Tue", "9:30", "14"],
    ["Reformer Basics", "Wed", "17:30", "10"],
    ["Yin and Breath", "Thu", "19:00", "16"],
  ];
  return (
    <Ground tone="sand">
      <div className={`absolute top-8 right-8 left-8 max-w-[480px] sm:top-10 sm:left-10 ${frag}`}>
        <div className="flex items-center justify-between border-b border-(--ts-line) px-4 py-3">
          <span className="font-medium">schedule.csv</span>
          <span className="flex items-center gap-1.5 text-[12px] text-(--ts-action)"><Dot on />Imported, 14 classes</span>
        </div>
        <table className="w-full text-left tabular-nums">
          <thead className="text-[12px] text-(--ts-muted)">
            <tr>
              <th className="px-4 py-2 font-normal">Class</th>
              <th className="px-2 py-2 font-normal">Day</th>
              <th className="px-2 py-2 font-normal">Time</th>
              <th className="px-4 py-2 text-right font-normal">Spots</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-(--ts-line)">
                <td className="px-4 py-2 font-medium">{r[0]}</td>
                <td className="px-2 py-2">{r[1]}</td>
                <td className="px-2 py-2">{r[2]}</td>
                <td className="px-4 py-2 text-right">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Ground>
  );
}

// A fixed 21x21 code pattern for the door poster (finder squares in three corners).
const qr = Array.from({ length: 21 * 21 }, (_, i) => {
  const x = i % 21, y = Math.floor(i / 21);
  const finder = (fx: number, fy: number) => {
    const dx = x - fx, dy = y - fy;
    if (dx < 0 || dy < 0 || dx > 6 || dy > 6) return null;
    const edge = dx === 0 || dy === 0 || dx === 6 || dy === 6;
    const core = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
    return edge || core;
  };
  const f = finder(0, 0) ?? finder(14, 0) ?? finder(0, 14);
  if (f !== null) return f;
  return ((x * 7 + y * 13 + x * y * 3) % 5) < 2;
});

function PosterVisual() {
  return (
    <Ground tone="sky">
      <div className={`absolute top-8 left-8 flex w-[420px] max-w-[calc(100%-32px)] gap-5 p-5 max-sm:top-6 max-sm:left-4 sm:top-10 sm:left-10 ${frag}`}>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] text-(--ts-muted)">Low Tide Yoga</div>
          <div className="mt-1 text-[22px] leading-[1.15] font-medium tracking-[-0.02em]">Book your next class</div>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-(--ts-action) px-2.5 py-1 text-[12px] font-medium text-(--ts-action)">
            <Dot on />Booking link
          </div>
          <div className="mt-3 text-[12px] text-(--ts-muted)">In the bio, on the site, at the door</div>
        </div>
        <svg viewBox="0 0 21 21" className="size-24 shrink-0 sm:size-28" aria-hidden="true" shapeRendering="crispEdges">
          {qr.map((on, i) => (on ? <rect key={i} x={i % 21} y={Math.floor(i / 21)} width="1" height="1" fill="#0b0c0e" /> : null))}
        </svg>
      </div>
    </Ground>
  );
}

function TeachVisual() {
  const feed = [
    { t: "6:30", text: "Reminders sent to 12 members" },
    { t: "6:52", text: "Payment received, $22" },
    { t: "7:00", text: "Sunrise Flow checked in, 12 of 12" },
    { t: "7:14", text: "Maya L. moved off the waitlist", on: true },
  ];
  return (
    <Ground tone="sage">
      <div className={`absolute top-8 right-8 left-8 max-w-[440px] max-sm:top-6 max-sm:right-4 max-sm:left-4 sm:top-10 sm:left-10 ${frag}`}>
        <div className="border-b border-(--ts-line) px-4 py-3 font-medium">While you teach</div>
        <ul className="px-4 pb-1">
          {feed.map((f) => (
            <li key={f.t} className="flex items-center gap-3 border-t border-(--ts-line) py-2.5 first:border-t-0">
              <span className="w-9 text-[12px] text-(--ts-muted) tabular-nums">{f.t}</span>
              <Dot on={f.on} />
              <span className={f.on ? "font-medium text-(--ts-action)" : ""}>{f.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Ground>
  );
}

function WeekFull() {
  const week = [
    { d: "Mon", c: "Sunrise Flow" },
    { d: "Tue", c: "Reformer Basics", w: "3 waiting" },
    { d: "Wed", c: "Slow Flow" },
    { d: "Thu", c: "Vinyasa", w: "2 waiting" },
    { d: "Fri", c: "Yin and Breath" },
  ];
  return (
    <div className={`absolute top-10 right-10 left-10 max-w-[460px] max-sm:top-6 max-sm:right-4 max-sm:left-4 ${frag}`}>
      <div className="flex items-center justify-between border-b border-(--ts-line) px-4 py-3">
        <span className="font-medium">Low Tide Yoga</span>
        <span className="text-[12px] text-(--ts-muted)">This week</span>
      </div>
      <ul className="px-4 pb-1">
        {week.map((r, i) => (
          <li key={r.d} className="grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-3 border-t border-(--ts-line) py-2.5 first:border-t-0">
            <span className="text-[12px] text-(--ts-muted)">{r.d}</span>
            <span className="truncate font-medium">{r.c}</span>
            <span className="flex items-center gap-2 text-[12px]">
              {r.w && <span className="text-(--ts-muted)">{r.w}</span>}
              <span className={`rounded-full px-2 py-0.5 ${i === 0 ? "bg-(--ts-action) text-white" : "bg-(--ts-ink)/6 text-(--ts-text)"}`}>Full</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImportMatch() {
  const rows = [
    { name: "Ana R.", pass: "Monthly unlimited" },
    { name: "Ben T.", pass: "10-class pack, 6 left", on: true },
    { name: "Chloe M.", pass: "Drop-in" },
    { name: "Dev P.", pass: "10-class pack, 2 left" },
  ];
  return (
    <div className={`absolute top-10 right-10 left-10 max-w-[460px] max-sm:top-6 max-sm:right-4 max-sm:left-4 ${frag}`}>
      <div className="flex items-center justify-between border-b border-(--ts-line) px-4 py-3">
        <span className="font-medium">members.csv</span>
        <span className="text-[12px] text-(--ts-muted)">Matched to passes</span>
      </div>
      <ul className="px-4 pb-1">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-3 border-t border-(--ts-line) py-2.5 first:border-t-0">
            <span className="w-16 shrink-0 font-medium">{r.name}</span>
            <svg viewBox="0 0 16 8" className="h-2 w-4 shrink-0 text-(--ts-muted)" aria-hidden="true">
              <path d="M0 4h14M11 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span
              className={`truncate rounded-full px-2 py-0.5 text-[12px] ${r.on ? "border border-(--ts-action) text-(--ts-action)" : "bg-(--ts-ink)/6 text-(--ts-text)"}`}
            >
              {r.pass}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const features = [
  {
    title: "Online booking",
    line: "Members book and pay in two taps from a link, your site or Instagram.",
    tone: "sky" as const,
    visual: <BookingCard />,
    label: "A booking page for Low Tide Yoga: Slow Flow picked, Book and pay $22.",
  },
  {
    title: "Automatic waitlists",
    line: "When someone cancels, the next person in line gets the spot and a notification.",
    tone: "sand" as const,
    visual: <WaitlistCard />,
    label: "A notification that a spot opened, above the waitlist where the first person moved into the class.",
    loop: true,
  },
  {
    title: "Memberships and passes",
    line: "Sell class packs, monthly memberships and drop-ins with one checkout.",
    tone: "sage" as const,
    visual: <PassesCard />,
    label: "A checkout offering a drop-in, a 10-class pack and a monthly membership.",
  },
];

const plans = [
  { name: "Studio", price: "$39", lines: ["One location", "unlimited classes", "online payments", "email reminders"] },
  { name: "Collective", price: "$89", lines: ["Up to five locations", "staff accounts", "SMS reminders", "priority support"] },
];

const faqs = [
  { q: "Can I import my existing members?", a: "Yes. Upload a CSV and we match members to their passes." },
  { q: "Which payment providers do you support?", a: "Stripe and Square, with payouts to your own account." },
  { q: "Is there a contract?", a: "No. Plans are monthly and you can cancel at any time." },
  { q: "Do my members need an app?", a: "No. Booking works in any browser, with an optional app for regulars." },
];

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

// The hero's entrance after the h1: lead, buttons, note, docked strip, 60ms apart.
const enter = {
  lead: "motion-safe:animate-[ts-up_520ms_var(--ts-ease-enter)_350ms_both]",
  buttons: "motion-safe:animate-[ts-up_520ms_var(--ts-ease-enter)_410ms_both]",
  note: "motion-safe:animate-[ts-up_520ms_var(--ts-ease-enter)_470ms_both]",
  strip: "motion-safe:animate-[ts-up_520ms_var(--ts-ease-enter)_530ms_both]",
};

export default function Page() {
  return (
    <>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="ts-grain">
          <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <Nav
        links={navLinks}
        cta={
          <a href={TRIAL} className={`${primary} max-[380px]:px-4`}>
            Start free trial
          </a>
        }
      />

      <main id="top">
        {/* Hero: split, the app-frame on the right; social proof docked under it */}
        <section
          aria-labelledby="hero-h"
          data-enter
          className="relative flex min-h-svh flex-col pt-24 pb-6 sm:pt-[120px] sm:pb-16"
        >
          <div className={`${wrap} flex flex-1 flex-col gap-8 lg:grid lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-12`}>
            <div className="flex flex-1 flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-x-6">
              <div className="lg:col-span-6 xl:col-span-5">
                <h1
                  id="hero-h"
                  className="text-[clamp(38px,2.9vw+26.7px,68px)] leading-[1.02] font-medium tracking-[-0.04em] text-balance motion-safe:animate-[ts-rise_700ms_var(--ts-ease-enter)_both] lg:text-[52px] xl:text-[clamp(52px,4.7vw,68px)]"
                >
                  Fill every class without living in your inbox
                </h1>
                <p className={`mt-6 max-w-[42ch] text-[18px] leading-normal text-(--ts-text) lg:text-[20px] ${enter.lead}`}>
                  Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.
                </p>
                <div className={`mt-8 flex flex-wrap gap-3 ${enter.buttons}`}>
                  <a href={TRIAL} className={`${primary} max-[380px]:w-full`}>
                    Start free trial
                  </a>
                  <a href="#how" className={`${secondary} max-[380px]:w-full`}>
                    See how it works
                  </a>
                </div>
                <p className={`mt-4 text-sm text-(--ts-muted) ${enter.note}`}>
                  14 days free. No card required.
                </p>
              </div>

              <LoopFrame
                label="Mooring's schedule for Low Tide Yoga: today's five classes, Slow Flow taking a new booking."
                className={`relative min-h-[300px] flex-1 overflow-hidden rounded-[20px] sm:min-h-[380px] lg:col-span-6 lg:col-start-7 lg:min-h-[440px] ${lit.sky} motion-safe:animate-[ts-settle_900ms_var(--ts-ease-enter)_both]`}
              >
                <Grain />
                <HeroWindow />
                <div className={`absolute bottom-6 left-6 hidden w-[300px] p-4 sm:block sm:motion-safe:animate-[ts-arrive_3.2s_linear_1.2s_infinite] ${frag}`}>
                  <div className="flex items-center gap-2 text-[12px] text-(--ts-muted)">
                    <Dot on />
                    New booking
                  </div>
                  <div className="mt-1 font-medium">Slow Flow, 9:30 · paid online</div>
                </div>
              </LoopFrame>
            </div>

            {/* Social proof, docked: the figures roll once on load (counter-rolls) */}
            <div className={`grid gap-y-4 border-t border-(--ts-line) pt-6 lg:grid-cols-12 lg:items-end lg:gap-x-6 ${enter.strip}`}>
              <p className="text-base font-medium lg:col-span-5 lg:pb-1">Trusted by 1,200 independent studios</p>
              <dl className="grid grid-cols-3 gap-x-3 sm:gap-x-6 lg:col-span-6 lg:col-start-7">
                {[
                  { v: "3.4M", l: "classes booked" },
                  { v: "38%", l: "fewer no-shows" },
                  { v: "6", l: "hours saved per week" },
                ].map((s) => (
                  <div key={s.l} className="flex flex-col-reverse gap-1">
                    <dt className="text-sm text-(--ts-muted)">{s.l}</dt>
                    <dd className="text-[clamp(28px,.952vw+24.29px,38px)] font-medium tracking-[-0.035em]">
                      <Rolling value={s.v} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Features: three cards, each the product's own subject on a lit panel */}
        <section id="features" aria-labelledby="features-h" className={section}>
          <div className={wrap}>
            <h2 id="features-h" className={h2}>Features</h2>
            <div className="mt-8 grid grid-cols-12 gap-3 sm:mt-12 sm:gap-6">
              {features.map((f, i) => {
                const panel = `relative mt-8 -mb-8 h-[300px] overflow-hidden rounded-t-xl max-sm:-mb-6 max-sm:h-[280px]`;
                return (
                  <article
                    key={f.title}
                    className={`col-span-12 flex flex-col overflow-hidden rounded-[20px] border border-(--ts-line) bg-(--ts-surface) p-6 sm:p-7 lg:p-8 xl:col-span-4 ${i === 2 ? "lg:col-span-12" : "lg:col-span-6"}`}
                  >
                    <h3 className={h3}>{f.title}</h3>
                    <p className="mt-2 max-w-[46ch] text-(--ts-text) lg:min-h-[48px]">{f.line}</p>
                    {f.loop ? (
                      <LoopFrame label={f.label} className={panel}>
                        <Ground tone={f.tone}>{f.visual}</Ground>
                      </LoopFrame>
                    ) : (
                      <div role="img" aria-label={f.label} className={panel}>
                        <Ground tone={f.tone}>{f.visual}</Ground>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works: pinned-chapters */}
        <Chapters
          id="how"
          heading="How it works"
          steps={[
            { label: "Step 1", title: "Add your schedule.", line: "Import it from a spreadsheet or build it in minutes.", visual: <ImportVisual /> },
            { label: "Step 2", title: "Share your booking link.", line: "Put it in your bio, on your site or on a poster at the door.", visual: <PosterVisual /> },
            { label: "Step 3", title: "Teach.", line: "Mooring takes care of reminders, payments and the waitlist.", visual: <TeachVisual /> },
          ]}
        />

        {/* Testimonial: the quote is the heading, its grey half its own sentence; the studio's week beside it */}
        <section aria-labelledby="quote-h" className={section}>
          <div className={`${wrap} grid grid-cols-12 gap-x-6 gap-y-10 lg:items-start`}>
            <figure className="col-span-12 lg:col-span-6">
              <blockquote>
                <h2 id="quote-h" className={h2}>
                  &ldquo;We went from forty DMs a day to zero.{" "}
                  <span className="text-(--ts-muted)">Classes fill themselves now.&rdquo;</span>
                </h2>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span aria-hidden="true" className="grid size-12 place-items-center rounded-full bg-(--ts-ink) text-[15px] font-medium text-(--ts-bg)">
                  AR
                </span>
                <span className="text-base text-(--ts-text)">
                  <span className="font-medium text-(--ts-ink)">Ana Reyes</span>, owner of Low Tide Yoga
                </span>
              </figcaption>
            </figure>
            <div
              role="img"
              aria-label="Low Tide Yoga's week in Mooring: every class full, two with a waitlist."
              className="relative col-span-12 h-[380px] overflow-hidden rounded-[20px] max-sm:h-[340px] lg:col-span-6 lg:col-start-7 lg:h-[min(560px,calc(100svh-264px))]"
            >
              <Ground tone="sage">
                <WeekFull />
              </Ground>
            </div>
          </div>
        </section>

        {/* Pricing: the calm section */}
        <section id="pricing" aria-labelledby="pricing-h" className={section}>
          <div className={wrap}>
            <h2 id="pricing-h" className={h2}>Pricing</h2>
            <div className="mt-8 grid grid-cols-12 gap-3 sm:mt-12 sm:gap-6">
              {plans.map((p, i) => (
                <article
                  key={p.name}
                  className={`col-span-12 flex flex-col rounded-[20px] border bg-(--ts-surface) p-6 sm:p-8 lg:col-span-6 lg:p-12 ${i === 1 ? "border-(--ts-action)/45" : "border-(--ts-line)"}`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[clamp(24px,.381vw+22.5px,28px)] leading-[1.2] font-medium tracking-[-0.02em]">{p.name}</h3>
                    <p className="flex items-baseline gap-2">
                      <span className="text-[clamp(28px,.952vw+24.29px,38px)] leading-none font-medium tracking-[-0.035em] tabular-nums">{p.price}</span>
                      <span className="text-sm text-(--ts-muted)">per month</span>
                    </p>
                  </div>
                  <ul className="mt-8 flex-1">
                    {p.lines.map((l) => (
                      <li key={l} className="border-b border-(--ts-line) py-3 text-(--ts-text) first-letter:uppercase">
                        {l}
                      </li>
                    ))}
                  </ul>
                  <a href={TRIAL} className={`${secondary} mt-8 self-start max-sm:w-full`}>
                    Start free trial
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ: every answer open; the member import beside them */}
        <section id="faq" aria-labelledby="faq-h" className={section}>
          <div className={wrap}>
            <h2 id="faq-h" className={h2}>FAQ</h2>
            <div className="mt-8 grid grid-cols-12 gap-x-6 gap-y-10 sm:mt-12">
              <dl className="col-span-12 lg:col-span-6">
                {faqs.map((f) => (
                  <div key={f.q} className="border-b border-(--ts-line) py-5 first:pt-0 sm:py-6">
                    <dt className="text-[18px] leading-[1.4] font-medium lg:text-[20px]">{f.q}</dt>
                    <dd className="mt-2 max-w-[62ch] text-(--ts-text)">{f.a}</dd>
                  </div>
                ))}
              </dl>
              <div
                role="img"
                aria-label="A members CSV in Mooring, each member matched to their pass."
                className="relative col-span-12 h-[340px] overflow-hidden rounded-[20px] lg:col-span-6 lg:col-start-7 lg:h-[420px]"
              >
                <Ground tone="sky">
                  <ImportMatch />
                </Ground>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer.closing: close-type (row 1) and footer-dark (row 2) in one screen */}
      <footer className="relative flex min-h-lvh flex-col bg-(--ts-inv-bg) pt-24 pb-12 text-(--ts-inv-ink) sm:min-h-svh sm:pt-[120px] sm:pb-[72px]">
        <div className={`${wrap} flex flex-1 flex-col justify-between gap-16`}>
          <div>
            <h2 className={`${h2} max-w-[18ch]`}>Open your next class for booking today</h2>
            <a
              href={TRIAL}
              className={`${btn} mt-10 h-16 bg-(--ts-inv-ink) px-8 text-[18px] text-(--ts-inv-bg) hover:bg-(--ts-inv-hover) max-sm:w-full`}
            >
              Start free trial
            </a>
          </div>
          <div>
            <div className="grid grid-cols-12 items-end gap-x-6 gap-y-8 border-b border-(--ts-inv-line) pb-8">
              <a
                href="#top"
                className={`col-span-12 rounded-sm text-[clamp(56px,10vw,144px)] leading-[0.9] font-medium tracking-[-0.05em] lg:col-span-7 ${focus}`}
              >
                Mooring
              </a>
              <nav aria-label="Footer" className="col-span-12 lg:col-span-5 lg:justify-self-end">
                <ul className="flex gap-8">
                  {navLinks.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className={`${link} text-[15px] font-medium text-(--ts-inv-muted) transition-colors duration-150 hover:text-(--ts-inv-ink) ${focus}`}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <p className="pt-6 text-sm text-(--ts-inv-muted)">© 2026 Mooring</p>
          </div>
        </div>
      </footer>
    </>
  );
}
