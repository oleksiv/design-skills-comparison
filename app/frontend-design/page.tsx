import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Big_Shoulders, Hanken_Grotesk } from "next/font/google";
import "./mooring.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Mooring: booking and scheduling for small fitness studios",
  description:
    "Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.",
};

// Palette: tide water, deep water, kelp, buoy yellow, foam, rope. --focus is swapped to buoy on dark sections.
const theme =
  "[--tide:#e4ecea] [--ink:#0e2f3a] [--kelp:#1d5a55] [--buoy:#f5c22e] [--foam:#f7faf9] [--rope:#47636a] [--focus:var(--ink)]";
const onDark = "[--focus:var(--buoy)]";

const disp = "font-(family-name:--font-display) leading-[0.92] tracking-[-0.005em]";
const focus =
  "focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-(--focus)";
const wrap = "mx-auto w-full max-w-[1280px] px-4 sm:px-8 lg:px-12";

const btnPrimary = `${focus} inline-flex items-center justify-center rounded-full bg-(--buoy) px-6 py-3 font-semibold text-(--ink) transition-colors hover:bg-[#ffd451]`;
const btnSecondary = `${focus} inline-flex items-center justify-center rounded-full border-2 border-(--ink) px-6 py-[10px] font-semibold transition-colors hover:bg-(--ink) hover:text-(--foam)`;
const navLink = `${focus} underline-offset-4 hover:underline`;

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

// Hero timetable: a studio's Thursday, filling up as the page loads.
const CAPACITY = 12;
const thursday = [
  { time: "07:00", name: "Sunrise flow", booked: 9 },
  { time: "12:15", name: "Mat pilates", booked: 12, waiting: 3 },
  { time: "18:00", name: "Intro to bouldering", booked: 7 },
  { time: "19:30", name: "Candlelit yin", booked: 12, waiting: 2 },
];

const STEP_MS = 34;
const START_MS = 350;

// Spots book one after another across the whole day, so each row starts where the last ended.
const rows = thursday.map((c, i) => ({
  ...c,
  first: thursday.slice(0, i).reduce((n, r) => n + r.booked, 0),
}));

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const spotBase = "size-2.5 rounded-full border-[1.5px] border-(--ink)/35";
const spotBooked =
  "border-(--ink) bg-(--ink) animate-[mooring-spot_220ms_cubic-bezier(0.3,1.4,0.6,1)_both] [animation-delay:var(--delay)] motion-reduce:animate-none";

function Timetable() {
  return (
    <figure
      aria-label="Example studio schedule for Thursday"
      className="rounded-[20px] bg-(--foam) p-5 shadow-[0_1px_0_rgba(14,47,58,0.08),0_24px_48px_-24px_rgba(14,47,58,0.35)] sm:p-7"
    >
      <figcaption className="flex items-baseline justify-between gap-4">
        <span className={`${disp} text-[36px] font-bold`}>Thursday</span>
        <span className="text-sm text-(--rope)">
          {thursday.reduce((n, c) => n + c.booked, 0)} of{" "}
          {thursday.length * CAPACITY} spots booked
        </span>
      </figcaption>
      <ul className="mt-5 space-y-5">
        {rows.map(({ first, ...c }) => (
          <li key={c.time} className="grid grid-cols-[3.5rem_1fr] gap-x-3">
            <span className={`${disp} pt-0.5 text-[24px] font-semibold tabular-nums`}>
              {c.time}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-semibold">{c.name}</span>
                {c.waiting && (
                  <span
                    className="animate-[mooring-tag_320ms_ease-out_both] rounded-full bg-(--buoy) px-2.5 py-0.5 text-sm font-semibold [animation-delay:var(--delay)] motion-reduce:animate-none"
                    style={delay(START_MS + (first + c.booked) * STEP_MS)}
                  >
                    Full, {c.waiting} waiting
                  </span>
                )}
              </div>
              <div className="mt-2 flex gap-1.5" aria-hidden="true">
                {Array.from({ length: CAPACITY }, (_, i) =>
                  i < c.booked ? (
                    <span
                      key={i}
                      className={`${spotBase} ${spotBooked}`}
                      style={delay(START_MS + (first + i) * STEP_MS)}
                    />
                  ) : (
                    <span key={i} className={spotBase} />
                  ),
                )}
              </div>
              <span className="sr-only">
                {c.booked} of {CAPACITY} spots booked
              </span>
            </div>
          </li>
        ))}
      </ul>
    </figure>
  );
}

function Wordmark() {
  return <span className={`${disp} text-[32px] leading-none font-extrabold`}>Mooring</span>;
}

const stats = [
  { value: "3.4M", label: "classes booked" },
  { value: "38%", label: "fewer no-shows" },
  { value: "6", label: "hours saved per week" },
];

const features = [
  {
    title: "Online booking",
    body: "Members book and pay in two taps from a link, your site or Instagram.",
  },
  {
    title: "Automatic waitlists",
    body: "When someone cancels, the next person in line gets the spot and a notification.",
  },
  {
    title: "Memberships and passes",
    body: "Sell class packs, monthly memberships and drop-ins with one checkout.",
  },
];

const steps = [
  {
    title: "Add your schedule.",
    body: "Import it from a spreadsheet or build it in minutes.",
  },
  {
    title: "Share your booking link.",
    body: "Put it in your bio, on your site or on a poster at the door.",
  },
  {
    title: "Teach.",
    body: "Mooring takes care of reminders, payments and the waitlist.",
  },
];

const plans = [
  {
    name: "Studio",
    price: "$39",
    includes: "One location, unlimited classes, online payments, email reminders.",
    dark: false,
  },
  {
    name: "Collective",
    price: "$89",
    includes: "Up to five locations, staff accounts, SMS reminders, priority support.",
    dark: true,
  },
];

const faqs = [
  {
    q: "Can I import my existing members?",
    a: "Yes. Upload a CSV and we match members to their passes.",
  },
  {
    q: "Which payment providers do you support?",
    a: "Stripe and Square, with payouts to your own account.",
  },
  {
    q: "Is there a contract?",
    a: "No. Plans are monthly and you can cancel at any time.",
  },
  {
    q: "Do my members need an app?",
    a: "No. Booking works in any browser, with an optional app for regulars.",
  },
];

export default function Page() {
  return (
    <div
      className={`${display.variable} ${body.variable} ${theme} min-h-screen bg-(--tide) font-(family-name:--font-body) text-base text-(--ink) antialiased sm:text-lg`}
    >
      {/* 1. Header */}
      <header className={`${wrap} flex flex-wrap items-center justify-between gap-x-8 gap-y-3 pt-5 pb-4 sm:pt-7`}>
        <a href="#top" aria-label="Mooring home" className={focus}>
          <Wordmark />
        </a>
        <nav aria-label="Main" className="order-3 w-full sm:order-none sm:ml-auto sm:w-auto">
          <ul className="flex gap-6 text-base">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={navLink}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#" className={`${btnPrimary} px-5 py-2.5 text-base`}>
          Start free trial
        </a>
      </header>

      <main id="top">
        {/* 2. Hero */}
        <section className={`${wrap} grid items-center gap-12 pt-10 pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-20 lg:pb-28`}>
          <div className="lg:col-span-7">
            <h1 className={`${disp} max-w-[11ch] text-[56px] font-extrabold sm:text-[80px] lg:text-[104px]`}>
              Fill every class without living in your inbox
            </h1>
            <p className="mt-6 max-w-[34ch] text-lg leading-[1.55] sm:text-[21px]">
              Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className={btnPrimary}>
                Start free trial
              </a>
              <a href="#how-it-works" className={btnSecondary}>
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-(--rope)">14 days free. No card required.</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Timetable />
          </div>
        </section>

        {/* 3. Social proof */}
        <section aria-label="Social proof" className="bg-(--foam)">
          <div className={`${wrap} grid gap-8 py-12 lg:grid-cols-12 lg:items-center lg:gap-8`}>
            <p className={`${disp} text-[36px] font-bold lg:col-span-4`}>Trusted by 1,200 independent studios</p>
            <ul className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
              {stats.map((s) => (
                <li key={s.label} className="flex items-baseline gap-3">
                  <span className={`${disp} text-[60px] font-extrabold text-(--kelp) tabular-nums`}>{s.value}</span>
                  <span className="max-w-[12ch] leading-snug">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Features */}
        <section id="features" aria-label="Features" className={`${wrap} scroll-mt-6 py-20 lg:py-28`}>
          <ul className="space-y-12 lg:space-y-16">
            {features.map((f) => (
              <li key={f.title} className="grid gap-3 lg:grid-cols-12 lg:gap-8">
                <h2 className={`${disp} text-[48px] font-bold lg:col-span-6 lg:text-[60px]`}>{f.title}</h2>
                <p className="max-w-[40ch] text-lg leading-[1.55] lg:col-span-5 lg:col-start-8 lg:pt-2 lg:text-[21px]">
                  {f.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. How it works */}
        <section id="how-it-works" aria-label="How it works" className="scroll-mt-6 border-t-2 border-(--ink)/10">
          <ol className={`${wrap} grid gap-10 py-20 sm:grid-cols-3 sm:gap-8 lg:py-24`}>
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5 sm:block">
                <span
                  className={`${disp} block w-12 shrink-0 text-[72px] font-extrabold text-(--kelp) sm:w-auto`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="sm:mt-4">
                  <h2 className="text-[21px] font-bold">
                    <span className="sr-only">Step {i + 1}: </span>
                    {s.title}
                  </h2>
                  <p className="mt-1 max-w-[30ch] text-(--rope)">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 6. Testimonial */}
        <section aria-label="Testimonial" className={`${onDark} bg-(--kelp) text-(--foam)`}>
          <figure className={`${wrap} py-20 lg:py-28`}>
            <blockquote className={`${disp} max-w-[20ch] text-[48px] font-bold sm:text-[60px] lg:text-[80px]`}>
              <p>We went from forty DMs a day to zero. Classes fill themselves now.</p>
            </blockquote>
            <figcaption className="mt-8 text-lg">Ana Reyes, owner of Low Tide Yoga</figcaption>
          </figure>
        </section>

        {/* 7. Pricing */}
        <section id="pricing" aria-label="Pricing" className={`${wrap} scroll-mt-6 py-20 lg:py-28`}>
          <div className="grid gap-6 md:grid-cols-2 lg:mx-auto lg:max-w-[1000px]">
            {plans.map((p) => (
              <article
                key={p.name}
                className={`flex flex-col rounded-[20px] p-7 sm:p-9 ${
                  p.dark ? `${onDark} bg-(--ink) text-(--foam)` : "bg-(--foam)"
                }`}
              >
                <h2 className={`${disp} text-[36px] font-bold`}>{p.name}</h2>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className={`${disp} text-[72px] font-extrabold tabular-nums`}>{p.price}</span>
                  <span>per month</span>
                </p>
                <p className={`mt-4 mb-8 max-w-[34ch] ${p.dark ? "text-(--foam)/80" : "text-(--rope)"}`}>
                  {p.includes}
                </p>
                <a href="#" className={`${btnPrimary} mt-auto self-start`}>
                  Start free trial
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" aria-label="FAQ" className={`${wrap} scroll-mt-6 pb-20 lg:pb-28`}>
          <div className="lg:mx-auto lg:max-w-[1000px]">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b-2 border-(--ink)/10 first:border-t-2">
                <summary
                  className={`${focus} flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden`}
                >
                  <span className={`${disp} text-[28px] font-bold sm:text-[36px]`}>{f.q}</span>
                  {/* The plus turns into a cross when the answer opens. */}
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-(--ink) text-2xl leading-none transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[60ch] pb-7 text-lg leading-[1.55]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 9. Final call to action */}
        <section aria-label="Get started" className="bg-(--buoy)">
          <div className={`${wrap} flex flex-col items-start gap-8 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24`}>
            <h2 className={`${disp} max-w-[14ch] text-[56px] font-extrabold sm:text-[72px] lg:text-[96px]`}>
              Open your next class for booking today
            </h2>
            <a
              href="#"
              className={`${focus} inline-flex shrink-0 items-center justify-center rounded-full bg-(--ink) px-7 py-4 font-semibold text-(--buoy) transition-colors hover:bg-(--kelp)`}
            >
              Start free trial
            </a>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className={`${onDark} bg-(--ink) text-(--foam)`}>
        <div className={`${wrap} flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between`}>
          <Wordmark />
          <nav aria-label="Footer">
            <ul className="flex gap-6 text-base">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={navLink}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-(--foam)/70">© 2026 Mooring</p>
        </div>
      </footer>
    </div>
  );
}
