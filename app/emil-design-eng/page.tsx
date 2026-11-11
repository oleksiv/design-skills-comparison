import type { ReactNode } from "react";

/* ---------- Copy ---------- */

const NAV = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const STATS = [
  { value: "3.4M", label: "classes booked" },
  { value: "38%", label: "fewer no-shows" },
  { value: "6 hours", label: "saved per week" },
];

const STEPS = [
  { title: "Add your schedule.", body: "Import it from a spreadsheet or build it in minutes." },
  {
    title: "Share your booking link.",
    body: "Put it in your bio, on your site or on a poster at the door.",
  },
  { title: "Teach.", body: "Mooring takes care of reminders, payments and the waitlist." },
];

const PLANS = [
  {
    name: "Studio",
    price: "$39",
    items: ["One location", "unlimited classes", "online payments", "email reminders"],
    featured: false,
  },
  {
    name: "Collective",
    price: "$89",
    items: ["Up to five locations", "staff accounts", "SMS reminders", "priority support"],
    featured: true,
  },
];

const FAQS = [
  { q: "Can I import my existing members?", a: "Yes. Upload a CSV and we match members to their passes." },
  { q: "Which payment providers do you support?", a: "Stripe and Square, with payouts to your own account." },
  { q: "Is there a contract?", a: "No. Plans are monthly and you can cancel at any time." },
  {
    q: "Do my members need an app?",
    a: "No. Booking works in any browser, with an optional app for regulars.",
  },
];

/* ---------- Shared utility strings ---------- */

const mono = "font-[family-name:var(--font-m-mono),ui-monospace,monospace]";

// Every pressable gets scale(0.97) on press; transform is fast (160ms), colors ease (200ms).
const btn =
  "group/btn inline-flex items-center justify-center gap-2 font-medium tracking-[-0.01em] whitespace-nowrap select-none [-webkit-tap-highlight-color:transparent] [transition:transform_160ms_var(--ease-out),background-color_200ms_ease,box-shadow_200ms_ease] active:scale-[0.97] motion-reduce:active:scale-100";
const btnMd = "h-11 rounded-[10px] px-[1.125rem] text-[15px]";
const btnSm = "h-9 rounded-[9px] px-3.5 text-[14px]";
const primary =
  "bg-(--ink) text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_1px_2px_rgb(14_26_34/0.24),0_0_0_1px_var(--ink)] hover:bg-[#23323d]";
const secondary =
  "bg-(--surface) text-(--ink) shadow-[0_0_0_1px_var(--line-strong),0_1px_2px_rgb(14_26_34/0.06)] hover:shadow-[0_0_0_1px_rgb(14_26_34/0.24),0_1px_3px_rgb(14_26_34/0.08)]";
const light = "bg-white text-(--ink) shadow-[0_1px_2px_rgb(0_0_0/0.2)] hover:bg-[#eef3f1]";
const link = "text-(--muted) transition-colors duration-200 ease-[ease] hover:text-(--ink)";

// Hero entrance: 60ms stagger, ease-out; opacity-only under reduced motion.
const enter =
  "motion-safe:animate-[m-enter_700ms_var(--ease-out)_both] motion-reduce:animate-[m-fade_300ms_ease_both]";

// Scroll reveal: CSS scroll-driven animation (no JS, off the main thread), skipped for reduced motion.
const reveal =
  "supports-[animation-timeline:view()]:motion-safe:[animation-name:m-reveal] supports-[animation-timeline:view()]:motion-safe:[animation-fill-mode:both] supports-[animation-timeline:view()]:motion-safe:[animation-timing-function:var(--ease-out)] supports-[animation-timeline:view()]:motion-safe:[animation-timeline:view()] supports-[animation-timeline:view()]:motion-safe:[animation-range:entry_0%_entry_55%]";

const card = "bg-(--surface) shadow-[0_0_0_1px_var(--line),0_1px_2px_rgb(14_26_34/0.04)]";
const lifted = "bg-(--surface) shadow-[0_0_0_1px_var(--line),0_6px_16px_-8px_rgb(14_26_34/0.2)]";
const stack = "grid *:[grid-area:1/1]";
const pauseOnHover = "pointer-fine:group-hover/demo:[animation-play-state:paused]";

// Literal class strings so Tailwind can see them.
const AVATAR = {
  blue: "bg-[oklch(0.93_0.04_240)] text-[oklch(0.38_0.08_240)]",
  amber: "bg-[oklch(0.93_0.05_70)] text-[oklch(0.42_0.09_60)]",
  rose: "bg-[oklch(0.93_0.04_350)] text-[oklch(0.4_0.09_350)]",
  lime: "bg-[oklch(0.93_0.05_130)] text-[oklch(0.4_0.08_130)]",
  tide: "bg-[oklch(0.93_0.035_180)] text-[oklch(0.4_0.07_180)]",
  violet: "bg-[oklch(0.93_0.04_290)] text-[oklch(0.4_0.09_290)]",
} as const;
type Tone = keyof typeof AVATAR;

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

/* ---------------------------------------------------------------- */

function Wordmark() {
  return (
    <a href="#" className="flex items-center gap-2 text-[17px] font-semibold tracking-[-0.03em]">
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="7" fill="var(--ink)" />
        <circle cx="12" cy="9" r="2.6" fill="none" stroke="#fff" strokeWidth="1.6" />
        <path
          d="M4.5 16c1.9 0 1.9-1.6 3.75-1.6S10.1 16 12 16s1.9-1.6 3.75-1.6S17.6 16 19.5 16"
          fill="none"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      Mooring
    </a>
  );
}

function Arrow() {
  return (
    <svg
      className="transition-transform duration-200 ease-(--ease-out) pointer-fine:group-hover/btn:translate-x-0.5"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        d="M3 8h10m-4-4 4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check({ className }: { className: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        d="m3.5 8.5 3 3 6-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className={`${mono} text-[12px] tracking-[0.08em] text-(--tide) uppercase`}>{children}</p>
  );
}

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/* ---------------------------------------------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-(--line) bg-(--paper)/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Wordmark />
        <nav aria-label="Primary" className="hidden items-center gap-7 text-[14px] sm:flex">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className={link}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#pricing" className={`${btn} ${btnSm} ${primary}`}>
          Start free trial
        </a>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-16 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24 lg:pb-28">
        <div>
          <h1
            className={`${enter} max-w-[13ch] text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.045em] text-balance sm:text-[3.5rem] lg:text-[4rem]`}
          >
            Fill every class without living in your inbox
          </h1>
          <p
            className={`${enter} mt-6 max-w-[34rem] text-[17px] leading-[1.6] text-pretty text-(--ink-2) [animation-delay:60ms] sm:text-lg`}
          >
            Mooring handles bookings, waitlists and payments for your studio, so you can get back on
            the mat.
          </p>
          <div className={`${enter} mt-9 flex flex-wrap gap-3 [animation-delay:120ms]`}>
            <a href="#pricing" className={`${btn} ${btnMd} ${primary}`}>
              Start free trial
            </a>
            <a href="#how-it-works" className={`${btn} ${btnMd} ${secondary}`}>
              See how it works
              <Arrow />
            </a>
          </div>
          <p className={`${enter} mt-4 text-[13px] text-(--muted) [animation-delay:180ms]`}>
            14 days free. No card required.
          </p>
        </div>

        <div className={`${enter} [animation-delay:180ms]`}>
          <ClassDemo />
        </div>
      </Container>
    </section>
  );
}

/* A faux class roster that explains the waitlist: someone cancels, the next person moves up. */
function ClassDemo() {
  return (
    <div
      aria-hidden="true"
      className="group/demo relative mx-auto w-full max-w-[440px] select-none [--ds:0.97] [--dy:6px] motion-reduce:[--ds:1] motion-reduce:[--dy:0px]"
    >
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,var(--tide-soft),transparent)] opacity-70 blur-3xl" />

      <div className="rounded-[18px] bg-(--surface) p-1.5 shadow-[0_0_0_1px_var(--line),0_1px_2px_rgb(14_26_34/0.04),0_12px_32px_-12px_rgb(14_26_34/0.18)]">
        <div className="flex items-start justify-between gap-4 px-4 pt-4 pb-3.5">
          <div>
            <p className={`${mono} text-[11px] tracking-[0.04em] text-(--muted) uppercase`}>
              Tue · 7:00 AM
            </p>
            <p className="mt-1 text-[17px] font-semibold tracking-[-0.02em]">Slow Flow</p>
            <p className="text-[13px] text-(--muted)">Studio A · 60 min</p>
          </div>
          <div className={`${stack} justify-items-end`}>
            <span
              className={`${mono} ${pauseOnHover} inline-flex h-6 animate-[d-full_10s_var(--ease-out)_infinite_both] items-center rounded-full bg-(--ink) px-2.5 text-[11px] text-white`}
            >
              12/12 Full
            </span>
            <span
              className={`${mono} ${pauseOnHover} inline-flex h-6 animate-[d-gap_10s_var(--ease-out)_infinite_both] items-center gap-1.5 rounded-full bg-amber-100 px-2.5 text-[11px] text-amber-900`}
            >
              <span className="size-1.5 rounded-full bg-amber-500" />
              11/12 · 1 open
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-(--paper) p-1.5">
          <p className={`${mono} px-2.5 pt-1.5 pb-1 text-[10.5px] tracking-[0.06em] text-(--muted) uppercase`}>
            Booked
          </p>
          <ul className="flex flex-col gap-1">
            <li>
              <Row initials="JM" tone="blue" name="Jess M." meta="Paid" />
            </li>
            <li>
              <Row initials="TK" tone="amber" name="Tom K." meta="Pack · 4 of 10" />
            </li>
            <li>
              <Row initials="PS" tone="rose" name="Priya S." meta="Monthly" />
            </li>
            <li className={stack}>
              <div className={`${pauseOnHover} animate-[d-leo_10s_var(--ease-out)_infinite_both]`}>
                <Row initials="LD" tone="lime" name="Leo D." meta="Paid" />
              </div>
              <div
                className={`${pauseOnHover} flex h-11 animate-[d-gap_10s_var(--ease-out)_infinite_both] items-center rounded-[10px] border border-dashed border-(--line-strong) px-3 text-[13px] text-(--muted)`}
              >
                Leo D. cancelled · spot open
              </div>
              <div className={`${pauseOnHover} animate-[d-maya_10s_var(--ease-out)_infinite_both]`}>
                <Row initials="MR" tone="tide" name="Maya R." meta="From waitlist" highlight />
              </div>
            </li>
          </ul>
          <p className="px-2.5 pt-2 pb-1 text-[12px] text-(--muted)">+ 8 more</p>
        </div>

        <div className="px-1.5 pt-3 pb-1.5">
          <p className={`${mono} px-2.5 pb-1 text-[10.5px] tracking-[0.06em] text-(--muted) uppercase`}>
            Waitlist
          </p>
          <div className={stack}>
            <div className={`${pauseOnHover} animate-[d-wait_10s_var(--ease-out)_infinite_both]`}>
              <Row initials="MR" tone="tide" name="Maya R." meta="#1 in line" plain />
            </div>
            <div
              className={`${pauseOnHover} flex h-11 animate-[d-wait-empty_10s_var(--ease-out)_infinite_both] items-center px-3 text-[13px] text-(--muted)`}
            >
              No one waiting
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${pauseOnHover} absolute -top-5 right-2 w-[248px] origin-top-right animate-[d-toast_10s_var(--ease-out)_infinite_both] rounded-[14px] bg-(--ink) p-3 text-white shadow-[0_12px_28px_-8px_rgb(14_26_34/0.45)] sm:-right-6`}
      >
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white/12">
            <Check className="size-3" />
          </span>
          <div>
            <p className="text-[13px] leading-snug font-medium">Maya R. got the spot</p>
            <p className="mt-0.5 text-[12px] leading-snug text-white/60">
              Slow Flow · Tue 7:00 · notified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar({ initials, tone }: { initials: string; tone: Tone }) {
  return (
    <span
      className={`grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-semibold ${AVATAR[tone]}`}
    >
      {initials}
    </span>
  );
}

function Row({
  initials,
  tone,
  name,
  meta,
  highlight = false,
  plain = false,
}: {
  initials: string;
  tone: Tone;
  name: string;
  meta: string;
  highlight?: boolean;
  plain?: boolean;
}) {
  return (
    <div
      className={`flex h-11 items-center gap-3 rounded-[10px] px-3 ${
        plain ? "" : "bg-(--surface) shadow-[0_0_0_1px_var(--line)]"
      }`}
    >
      <Avatar initials={initials} tone={tone} />
      <span className="text-[14px] font-medium tracking-[-0.01em]">{name}</span>
      <span
        className={`ml-auto text-[12px] ${highlight ? "font-medium text-(--tide)" : "text-(--muted)"}`}
      >
        {meta}
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------- */

function SocialProof() {
  return (
    <section className="border-y border-(--line) bg-(--surface)/60">
      <Container className="py-12 sm:py-14">
        <p className="text-center text-[15px] text-(--muted)">Trusted by 1,200 independent studios</p>
        <dl className="mt-8 grid grid-cols-1 divide-y divide-(--line) sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((s) => (
            <div key={s.label} className={`${reveal} flex flex-col items-center py-5 sm:py-1`}>
              <dt className="order-2 mt-1 text-[14px] text-(--muted)">{s.label}</dt>
              <dd className="order-1 text-[2.5rem] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <Container className="py-24 sm:py-32">
        <Eyebrow>Features</Eyebrow>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Online booking"
            body="Members book and pay in two taps from a link, your site or Instagram."
          >
            <BookingVisual />
          </FeatureCard>
          <FeatureCard
            title="Automatic waitlists"
            body="When someone cancels, the next person in line gets the spot and a notification."
          >
            <WaitlistVisual />
          </FeatureCard>
          <FeatureCard
            title="Memberships and passes"
            body="Sell class packs, monthly memberships and drop-ins with one checkout."
          >
            <PassesVisual />
          </FeatureCard>
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({ title, body, children }: { title: string; body: string; children: ReactNode }) {
  return (
    <article className={`${reveal} ${card} flex flex-col rounded-[18px] p-1.5`}>
      <div
        aria-hidden="true"
        className="flex h-44 items-center justify-center overflow-hidden rounded-xl bg-(--paper) px-6"
      >
        {children}
      </div>
      <div className="px-4 pt-5 pb-5">
        <h3 className="text-[17px] font-semibold tracking-[-0.02em]">{title}</h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-(--ink-2)">{body}</p>
      </div>
    </article>
  );
}

function BookingVisual() {
  return (
    <div className={`${lifted} w-full max-w-[220px] rounded-xl p-3`}>
      <p className={`${mono} truncate text-[10.5px] text-(--muted)`}>mooring.app/low-tide</p>
      <div className="mt-2.5 flex items-center justify-between">
        <div>
          <p className="text-[13px] font-semibold tracking-[-0.01em]">Slow Flow</p>
          <p className="text-[11px] text-(--muted)">Tue · 7:00 AM</p>
        </div>
        <span className="text-[13px] font-medium tabular-nums">$18</span>
      </div>
      <div className="mt-3 flex h-8 items-center justify-center rounded-lg bg-(--ink) text-[12px] font-medium text-white">
        Book and pay
      </div>
    </div>
  );
}

function WaitlistVisual() {
  const people: { n: string; i: string; tone: Tone; tag: string }[] = [
    { n: "Maya R.", i: "MR", tone: "tide", tag: "Spot opened" },
    { n: "Sam O.", i: "SO", tone: "violet", tag: "#2" },
    { n: "Ines V.", i: "IV", tone: "amber", tag: "#3" },
  ];
  return (
    <ul className="flex w-full max-w-[230px] flex-col gap-1.5">
      {people.map((p, idx) => (
        <li
          key={p.n}
          className={`flex h-9 items-center gap-2.5 rounded-lg px-2.5 ${idx === 0 ? lifted : "opacity-60"}`}
        >
          <Avatar initials={p.i} tone={p.tone} />
          <span className="text-[12.5px] font-medium">{p.n}</span>
          <span
            className={`ml-auto text-[11px] ${idx === 0 ? "font-medium text-(--tide)" : "text-(--muted)"}`}
          >
            {p.tag}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PassesVisual() {
  const passes = [
    { name: "10-class pack", price: "$150", r: "-translate-x-10 -rotate-6" },
    { name: "Monthly", price: "$120", r: "z-10" },
    { name: "Drop-in", price: "$18", r: "translate-x-10 rotate-6" },
  ];
  return (
    <div className="grid h-full w-full place-items-center">
      {passes.map((p) => (
        <div
          key={p.name}
          className={`col-start-1 row-start-1 w-[132px] rounded-xl bg-(--surface) p-3 shadow-[0_0_0_1px_var(--line),0_6px_16px_-8px_rgb(14_26_34/0.25)] ${p.r}`}
        >
          <p className="text-[12px] font-semibold tracking-[-0.01em]">{p.name}</p>
          <p className="mt-5 text-[15px] font-semibold tabular-nums">{p.price}</p>
        </div>
      ))}
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-t border-(--line)">
      <Container className="py-24 sm:py-32">
        <Eyebrow>How it works</Eyebrow>
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, idx) => (
            <li key={s.title} className={reveal}>
              <div className="flex items-center gap-3">
                <span
                  className={`${mono} grid size-8 place-items-center rounded-full bg-(--surface) text-[13px] shadow-[0_0_0_1px_var(--line-strong)]`}
                >
                  {idx + 1}
                </span>
                <span className={`${mono} text-[12px] tracking-[0.06em] text-(--muted) uppercase`}>
                  Step {idx + 1}
                </span>
                {idx < STEPS.length - 1 && (
                  <span className="ml-2 hidden h-px flex-1 bg-(--line-strong) md:block" />
                )}
              </div>
              <h3 className="mt-5 text-[19px] font-semibold tracking-[-0.025em]">{s.title}</h3>
              <p className="mt-2 max-w-[30ch] text-[15px] leading-[1.6] text-(--ink-2)">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="border-y border-(--line) bg-(--surface)">
      <Container className="py-24 sm:py-32">
        <figure className={`${reveal} mx-auto max-w-[760px] text-center`}>
          <blockquote className="text-[1.75rem] leading-[1.2] font-medium tracking-[-0.035em] text-balance sm:text-[2.5rem]">
            <span className="text-(--muted)">“</span>We went from forty DMs a day to zero. Classes
            fill themselves now.<span className="text-(--muted)">”</span>
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-3 text-[14px]">
            <Avatar initials="AR" tone="tide" />
            <span>
              <span className="font-medium">Ana Reyes</span>
              <span className="text-(--muted)">, owner of Low Tide Yoga</span>
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20">
      <Container className="py-24 sm:py-32">
        <Eyebrow>Pricing</Eyebrow>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`${reveal} flex flex-col rounded-[20px] p-6 sm:p-8 ${
                p.featured ? "bg-(--ink) text-white shadow-[0_24px_48px_-24px_rgb(14_26_34/0.5)]" : card
              }`}
            >
              <h3 className="text-[17px] font-semibold tracking-[-0.02em]">{p.name}</h3>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-[3rem] leading-none font-semibold tracking-[-0.045em] tabular-nums">
                  {p.price}
                </span>
                <span className={p.featured ? "text-white/60" : "text-(--muted)"}>per month</span>
              </p>
              <ul
                className={`mt-8 flex flex-1 flex-col gap-3 border-t pt-6 text-[15px] ${
                  p.featured ? "border-white/12" : "border-(--line)"
                }`}
              >
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className={p.featured ? "text-[#8fd3c9]" : "text-(--tide)"} />
                    <span className="inline-block first-letter:uppercase">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`${btn} ${btnMd} mt-8 w-full ${p.featured ? light : primary}`}>
                Start free trial
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-(--line)">
      <Container className="grid gap-8 py-24 sm:py-32 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <Eyebrow>FAQ</Eyebrow>
        </div>
        <div className="divide-y divide-(--line) border-y border-(--line)">
          {FAQS.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] font-medium tracking-[-0.015em] [-webkit-tap-highlight-color:transparent] sm:text-[17px] [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg
                  className="shrink-0 text-(--muted) transition-transform duration-200 ease-(--ease-out) group-open:rotate-45"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="-mt-1 pr-10 pb-6 text-[15px] leading-[1.6] text-(--ink-2) motion-safe:group-open:animate-[m-answer_240ms_var(--ease-out)] motion-reduce:group-open:animate-[m-fade_200ms_ease]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section>
      <Container className="pb-24 sm:pb-32">
        <div
          className={`${reveal} relative overflow-hidden rounded-[24px] bg-(--ink) px-6 py-16 text-center text-white sm:px-12 sm:py-24`}
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-white/6"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
          >
            {[40, 75, 110, 145].map((y) => (
              <path
                key={y}
                d={`M0 ${y} Q 150 ${y - 18} 300 ${y} T 600 ${y} T 900 ${y} T 1200 ${y}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            ))}
          </svg>
          <h2 className="relative mx-auto max-w-[16ch] text-[2.25rem] leading-[1.05] font-semibold tracking-[-0.04em] text-balance sm:text-[3.25rem]">
            Open your next class for booking today
          </h2>
          <a href="#pricing" className={`${btn} ${btnMd} ${light} relative mt-9`}>
            Start free trial
            <Arrow />
          </a>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-(--line)">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Wordmark />
        <nav aria-label="Footer" className="flex gap-6 text-[14px]">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className={link}>
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-[13px] text-(--muted)">© 2026 Mooring</p>
      </Container>
    </footer>
  );
}
