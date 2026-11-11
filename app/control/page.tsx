import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", axes: ["opsz"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mooring — Booking and scheduling for small fitness studios",
  description:
    "Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.",
};

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const stats = [
  { value: "3.4M", label: "classes booked" },
  { value: "38%", label: "fewer no-shows" },
  { value: "6 hours", label: "saved per week" },
];

const features = [
  {
    title: "Online booking",
    body: "Members book and pay in two taps from a link, your site or Instagram.",
    icon: (
      <path d="M7 4v3M17 4v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm4 8 2 2 4-4" />
    ),
  },
  {
    title: "Automatic waitlists",
    body: "When someone cancels, the next person in line gets the spot and a notification.",
    icon: <path d="M4 7h10M4 12h10M4 17h6M17 14l3 3-3 3M14 17h6" />,
  },
  {
    title: "Memberships and passes",
    body: "Sell class packs, monthly memberships and drop-ins with one checkout.",
    icon: (
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Zm11-2v12" />
    ),
  },
];

const steps = [
  { title: "Add your schedule.", body: "Import it from a spreadsheet or build it in minutes." },
  {
    title: "Share your booking link.",
    body: "Put it in your bio, on your site or on a poster at the door.",
  },
  { title: "Teach.", body: "Mooring takes care of reminders, payments and the waitlist." },
];

const plans = [
  {
    name: "Studio",
    price: "$39",
    features: ["One location", "Unlimited classes", "Online payments", "Email reminders"],
  },
  {
    name: "Collective",
    price: "$89",
    features: ["Up to five locations", "Staff accounts", "SMS reminders", "Priority support"],
    featured: true,
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
  { q: "Is there a contract?", a: "No. Plans are monthly and you can cancel at any time." },
  {
    q: "Do my members need an app?",
    a: "No. Booking works in any browser, with an optional app for regulars.",
  },
];

const schedule = [
  { time: "7:00", name: "Sunrise Flow", spots: "12/12", state: "full" },
  { time: "9:30", name: "Reformer Pilates", spots: "9/10", state: "open" },
  { time: "12:15", name: "Lunchtime Bouldering", spots: "6/14", state: "open" },
  { time: "18:00", name: "Yin & Breath", spots: "14/14", state: "wait" },
];

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[#e2724a] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_6px_20px_-8px_rgba(226,114,74,0.8)] transition hover:bg-[#cf5f38] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2724a]";
const btnSecondary =
  "inline-flex items-center justify-center rounded-full border border-[#0f2a3a]/20 px-6 py-3 text-[15px] font-semibold text-[#0f2a3a] transition hover:border-[#0f2a3a]/50 hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2a3a]";
const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const h2 =
  "font-(family-name:--font-display) text-[2rem] leading-[1.1] font-medium tracking-tight text-[#0f2a3a] sm:text-5xl";

function Wordmark() {
  return (
    <a href="#top" className="inline-flex items-center gap-2">
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="#0f2a3a" />
        <path
          d="M16 8v15m-5-11h10M9 18c1 4 4 6 7 6s6-2 7-6"
          fill="none"
          stroke="#f6f1e7"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-(family-name:--font-display) text-2xl font-semibold tracking-tight text-[#0f2a3a]">
        Mooring
      </span>
    </a>
  );
}

function Waves({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className={className} aria-hidden="true">
      {[0, 22, 44].map((y, i) => (
        <path
          key={y}
          d={`M0 ${40 + y} C 150 ${10 + y}, 300 ${70 + y}, 450 ${40 + y} S 750 ${10 + y}, 900 ${40 + y} S 1100 ${70 + y}, 1200 ${40 + y}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity={1 - i * 0.3}
        />
      ))}
    </svg>
  );
}

function ScheduleMock() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[#1f6f6b]/10 blur-2xl" />
      <div className="rounded-3xl border border-[#0f2a3a]/10 bg-[#fffdf8] p-5 shadow-[0_30px_60px_-30px_rgba(15,42,58,0.45)] sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#4a5d68]">Thursday</p>
            <p className="font-(family-name:--font-display) text-xl font-medium text-[#0f2a3a]">
              Today&apos;s classes
            </p>
          </div>
          <span className="rounded-full bg-[#1f6f6b]/10 px-3 py-1 text-xs font-semibold text-[#1f6f6b]">
            41 booked
          </span>
        </div>
        <ul className="mt-5 space-y-2.5">
          {schedule.map((c) => (
            <li
              key={c.name}
              className="flex items-center gap-3 rounded-2xl border border-[#0f2a3a]/8 bg-white px-3.5 py-3"
            >
              <span className="w-11 shrink-0 text-sm font-semibold tabular-nums text-[#4a5d68]">
                {c.time}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-[#0f2a3a]">
                {c.name}
              </span>
              <span className="text-xs tabular-nums text-[#4a5d68]">{c.spots}</span>
              <span
                className={`w-[4.5rem] shrink-0 rounded-full px-2 py-1 text-center text-[11px] font-bold ${
                  c.state === "full"
                    ? "bg-[#0f2a3a] text-[#f6f1e7]"
                    : c.state === "wait"
                      ? "bg-[#e2724a]/15 text-[#b4502c]"
                      : "bg-[#1f6f6b]/10 text-[#1f6f6b]"
                }`}
              >
                {c.state === "full" ? "Full" : c.state === "wait" ? "3 waiting" : "Open"}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute -bottom-6 -left-2 flex max-w-[15rem] items-start gap-3 rounded-2xl border border-[#0f2a3a]/10 bg-white p-3.5 shadow-[0_20px_40px_-20px_rgba(15,42,58,0.5)] sm:-left-10">
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#1f6f6b] text-white">
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="text-xs leading-snug text-[#4a5d68]">
          <span className="font-semibold text-[#0f2a3a]">Maya got the spot</span> in Yin &amp;
          Breath after a cancellation.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div
      id="top"
      className={`${display.variable} ${sans.variable} min-h-screen overflow-x-clip bg-[#f6f1e7] font-(family-name:--font-sans) text-[#0f2a3a] antialiased`}
    >
      {/* 1. Header */}
      <header className="sticky top-0 z-30 border-b border-[#0f2a3a]/8 bg-[#f6f1e7]/85 backdrop-blur">
        <nav className={`${container} flex h-16 items-center justify-between gap-4`}>
          <Wordmark />
          <ul className="hidden items-center gap-8 text-[15px] font-medium text-[#4a5d68] md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-[#0f2a3a]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#pricing" className={`${btnPrimary} px-4 py-2 text-sm sm:px-5`}>
            Start free trial
          </a>
        </nav>
      </header>

      <main>
        {/* 2. Hero */}
        <section className="relative">
          <Waves className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-[#1f6f6b]/20" />
          <div
            className={`${container} grid items-center gap-16 pt-14 pb-24 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-24 lg:pb-32`}
          >
            <div>
              <h1 className="font-(family-name:--font-display) text-[2.6rem] leading-[1.02] font-medium tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
                Fill every class without living in your{" "}
                <em className="text-[#1f6f6b]">inbox</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4a5d68] sm:text-xl">
                Mooring handles bookings, waitlists and payments for your studio, so you can get
                back on the mat.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#pricing" className={btnPrimary}>
                  Start free trial
                </a>
                <a href="#how-it-works" className={btnSecondary}>
                  See how it works
                </a>
              </div>
              <p className="mt-4 text-sm text-[#4a5d68]">14 days free. No card required.</p>
            </div>
            <ScheduleMock />
          </div>
        </section>

        {/* 3. Social proof */}
        <section className="bg-[#0f2a3a] text-[#f6f1e7]">
          <div className={`${container} py-14 sm:py-16`}>
            <p className="text-center text-sm font-semibold tracking-wide text-[#f6f1e7]/70">
              Trusted by 1,200 independent studios
            </p>
            <dl className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:border-l sm:border-white/10 sm:first:border-l-0">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-(family-name:--font-display) text-5xl font-medium tracking-tight lg:text-6xl">
                    {s.value}
                  </dd>
                  <dd className="mt-2 text-[15px] text-[#f6f1e7]/70">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 4. Features */}
        <section id="features" className="scroll-mt-16 py-24 sm:py-32">
          <div className={container}>
            <h2 className={h2}>Features</h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {features.map((f) => (
                <article
                  key={f.title}
                  className="rounded-3xl border border-[#0f2a3a]/10 bg-[#fffdf8] p-7 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-25px_rgba(15,42,58,0.4)]"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#1f6f6b]/10 text-[#1f6f6b]">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {f.icon}
                    </svg>
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#4a5d68]">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. How it works */}
        <section id="how-it-works" className="scroll-mt-16 border-y border-[#0f2a3a]/10 bg-[#efe8da] py-24 sm:py-32">
          <div className={container}>
            <h2 className={h2}>How it works</h2>
            <div className="relative mt-14">
            <div
              className="absolute top-6 right-[16%] left-[16%] hidden border-t-2 border-dashed border-[#1f6f6b]/30 md:block"
              aria-hidden="true"
            />
            <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((s, i) => (
                <li key={s.title} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                  <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-[#0f2a3a] font-(family-name:--font-display) text-xl text-[#f6f1e7] ring-8 ring-[#efe8da]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1f6f6b]">
                      Step {i + 1}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#4a5d68]">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            </div>
          </div>
        </section>

        {/* 6. Testimonial */}
        <section className="py-24 sm:py-32">
          <figure className={`${container} max-w-4xl text-center`}>
            <svg viewBox="0 0 48 36" className="mx-auto h-9 w-12 text-[#e2724a]" fill="currentColor" aria-hidden="true">
              <path d="M0 36V22C0 9 7 2 19 0l2 5c-7 2-10 6-10 12h9v19H0Zm27 0V22C27 9 34 2 46 0l2 5c-7 2-10 6-10 12h9v19H27Z" />
            </svg>
            <blockquote className="mt-8 font-(family-name:--font-display) text-3xl leading-[1.2] font-medium tracking-tight text-balance sm:text-5xl">
              We went from forty DMs a day to zero. Classes fill themselves now.
            </blockquote>
            <figcaption className="mt-10 flex items-center justify-center gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-[#1f6f6b] text-sm font-bold text-white" aria-hidden="true">
                AR
              </span>
              <span className="text-left">
                <span className="block font-bold">Ana Reyes</span>
                <span className="block text-sm text-[#4a5d68]">owner of Low Tide Yoga</span>
              </span>
            </figcaption>
          </figure>
        </section>

        {/* 7. Pricing */}
        <section id="pricing" className="scroll-mt-16 bg-[#0f2a3a] py-24 text-[#f6f1e7] sm:py-32">
          <div className={container}>
            <h2 className={`${h2} text-[#f6f1e7]`}>Pricing</h2>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className={`flex flex-col rounded-3xl p-8 sm:p-10 ${
                    p.featured
                      ? "bg-[#f6f1e7] text-[#0f2a3a]"
                      : "border border-white/15 bg-white/[0.04]"
                  }`}
                >
                  <h3 className="font-(family-name:--font-display) text-3xl font-medium">{p.name}</h3>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="font-(family-name:--font-display) text-6xl font-medium tracking-tight">
                      {p.price}
                    </span>
                    <span className={p.featured ? "text-[#4a5d68]" : "text-[#f6f1e7]/70"}>per month</span>
                  </p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <svg
                          viewBox="0 0 24 24"
                          className={`size-5 shrink-0 ${p.featured ? "text-[#1f6f6b]" : "text-[#8fd0c8]"}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#top"
                    className={`mt-10 ${
                      p.featured
                        ? btnPrimary
                        : "inline-flex items-center justify-center rounded-full bg-[#f6f1e7] px-6 py-3 text-[15px] font-semibold text-[#0f2a3a] transition hover:bg-white"
                    }`}
                  >
                    Start free trial
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className="scroll-mt-16 py-24 sm:py-32">
          <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.6fr]`}>
            <h2 className={h2}>FAQ</h2>
            <div className="divide-y divide-[#0f2a3a]/12 border-y border-[#0f2a3a]/12">
              {faqs.map((f) => (
                <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">
                    {f.q}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#0f2a3a]/15 text-xl leading-none transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-14 leading-relaxed text-[#4a5d68]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Final call to action */}
        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#1f6f6b] px-6 py-20 text-center text-white sm:py-24">
            <Waves className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-white/20" />
            <h2 className="relative mx-auto max-w-3xl font-(family-name:--font-display) text-[2.25rem] leading-[1.08] font-medium tracking-tight text-balance sm:text-6xl">
              Open your next class for booking today
            </h2>
            <a href="#pricing" className={`${btnPrimary} relative mt-10`}>
              Start free trial
            </a>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="border-t border-[#0f2a3a]/10">
        <div className={`${container} flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between`}>
          <Wordmark />
          <ul className="flex gap-8 text-[15px] font-medium text-[#4a5d68]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-[#0f2a3a]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#4a5d68]">© 2026 Mooring</p>
        </div>
      </footer>
    </div>
  );
}
