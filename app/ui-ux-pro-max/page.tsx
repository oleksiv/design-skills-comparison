import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lora, Raleway } from "next/font/google";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", display: "swap" });

/* Theme tokens from design-system/mooring/MASTER.md (Soft UI Evolution, sage neutral + calm teal),
   set as CSS variables on the page wrapper. Accent darkened from #0891B2 to #0E7490 so white
   button text passes 4.5:1. `dark:` follows prefers-color-scheme. */
const THEME = [
  "[--bg:#f5f5f0] [--surface:#ffffff] [--surface-2:#ecece4] [--fg:#0f172a] [--fg-muted:#4b5563]",
  "[--border:#e2e1d9] [--border-strong:#6b7280] [--accent:#0e7490] [--accent-hover:#155e75]",
  "[--on-accent:#ffffff] [--accent-icon:#0891b2] [--accent-soft:#e3f1f3] [--deep:#0f3d47]",
  "[--on-deep:#f5f5f0] [--on-deep-muted:#c5dde1] [--ring:#0e7490]",
  // Point Tailwind's font-sans / font-serif at the next/font variables (Raleway body, Lora headings).
  "[--font-sans:var(--font-raleway),system-ui,sans-serif] [--font-serif:var(--font-lora),Georgia,serif]",
  "[--shadow-soft:0_1px_2px_rgb(15_23_42/0.04),0_4px_12px_rgb(15_23_42/0.06)]",
  "[--shadow-lift:0_2px_4px_rgb(15_23_42/0.05),0_16px_40px_rgb(15_23_42/0.1)]",
  "dark:[--bg:#0e1416] dark:[--surface:#151d20] dark:[--surface-2:#1a2427] dark:[--fg:#e8ecec]",
  "dark:[--fg-muted:#a3aeb0] dark:[--border:#2a3538] dark:[--border-strong:#8a979a]",
  "dark:[--accent:#5ec4d8] dark:[--accent-hover:#7dd3e3] dark:[--on-accent:#06262e]",
  "dark:[--accent-icon:#5ec4d8] dark:[--accent-soft:#163339] dark:[--deep:#12343c]",
  "dark:[--on-deep:#eef4f4] dark:[--on-deep-muted:#b4cdd2] dark:[--ring:#5ec4d8]",
  "dark:[--shadow-soft:0_1px_2px_rgb(0_0_0/0.3),0_4px_12px_rgb(0_0_0/0.25)]",
  "dark:[--shadow-lift:0_2px_4px_rgb(0_0_0/0.3),0_16px_40px_rgb(0_0_0/0.4)]",
].join(" ");

export const metadata: Metadata = {
  title: "Mooring | Booking and scheduling for small fitness studios",
  description:
    "Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.",
};

const SIGNUP = "#pricing";

const NAV = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const btnBase =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-[background-color,border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:translate-y-0";
const btnPrimary = `${btnBase} bg-(--accent) text-(--on-accent) shadow-(--shadow-soft) hover:bg-(--accent-hover) hover:shadow-(--shadow-lift)`;
const btnSecondary = `${btnBase} border-2 border-(--border-strong) text-(--fg) hover:border-(--fg) hover:bg-(--surface)`;

const eyebrow = "text-sm font-semibold uppercase tracking-[0.14em] text-(--accent)";

/* Lucide paths, one stroke weight across the page. */
function Icon({ children, className = "size-6" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="inline-flex min-h-11 items-center gap-2.5 rounded-lg">
      <span className="grid size-9 place-items-center rounded-lg bg-(--accent) text-(--on-accent)">
        <Icon className="size-5">
          <path d="M12 22V8" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
          <circle cx="12" cy="5" r="3" />
        </Icon>
      </span>
      <span className="font-serif text-2xl font-semibold tracking-tight">Mooring</span>
    </a>
  );
}

function Wave({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <path
        d="M0 40 C 180 10, 360 70, 540 40 S 900 10, 1080 40 S 1260 70, 1440 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const CLASSES = [
  // fill = booked / cap as a static Tailwind width
  { time: "07:00", name: "Sunrise Vinyasa", teacher: "with Ana", booked: 18, cap: 18, waitlist: 3, fill: "w-full" },
  { time: "12:15", name: "Reformer Pilates", teacher: "with Jo", booked: 10, cap: 12, waitlist: 0, fill: "w-5/6" },
  { time: "18:30", name: "Intro to Bouldering", teacher: "with Sam", booked: 12, cap: 14, waitlist: 0, fill: "w-6/7" },
];

function ScheduleMockup() {
  return (
    <div
      role="img"
      aria-label="Preview of a Mooring schedule: a full morning class with three people on the waitlist, and a notification that a waitlisted member got a spot."
      className="relative mx-auto w-full max-w-md pb-16 lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="rounded-2xl border border-(--border) bg-(--surface) p-5 shadow-(--shadow-lift) sm:p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--fg-muted)">Today</p>
            <p className="font-serif text-xl font-semibold">Class schedule</p>
          </div>
          <span className="rounded-full bg-(--accent-soft) px-3 py-1 text-xs font-semibold text-(--accent)">
            3 classes
          </span>
        </div>
        <ul className="mt-5 divide-y divide-(--border)">
          {CLASSES.map((c) => {
            const full = c.booked === c.cap;
            return (
              <li key={c.time} className="flex items-center gap-4 py-4">
                <span className="w-12 shrink-0 text-sm font-semibold tabular-nums text-(--fg-muted)">{c.time}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{c.name}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-(--surface-2)">
                      <div className={`h-full rounded-full bg-(--accent-icon) ${c.fill}`} />
                    </div>
                    <span className="text-xs tabular-nums text-(--fg-muted)">
                      {c.booked}/{c.cap}
                    </span>
                  </div>
                </div>
                <span
                  className={`hidden shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold sm:inline ${
                    full ? "bg-(--deep) text-(--on-deep)" : "bg-(--surface-2) text-(--fg-muted)"
                  }`}
                >
                  {full ? `Full · ${c.waitlist} waiting` : c.teacher}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-4 right-4 flex items-start gap-3 rounded-xl border border-(--border) bg-(--surface) p-4 shadow-(--shadow-lift) sm:left-auto sm:right-8 sm:w-80 lg:-left-8 lg:right-auto"
      >
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-(--accent-soft) text-(--accent)">
          <Icon className="size-5">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </Icon>
        </span>
        <div className="text-sm">
          <p className="font-semibold">Spot opened in Sunrise Vinyasa</p>
          <p className="mt-0.5 text-(--fg-muted)">Maya moved up from the waitlist and has been notified.</p>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    title: "Online booking",
    body: "Members book and pay in two taps from a link, your site or Instagram.",
    icon: (
      <>
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Automatic waitlists",
    body: "When someone cancels, the next person in line gets the spot and a notification.",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Memberships and passes",
    body: "Sell class packs, monthly memberships and drop-ins with one checkout.",
    icon: (
      <>
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2M13 17v2M13 11v2" />
      </>
    ),
  },
];

const STEPS = [
  { title: "Add your schedule", body: "Import it from a spreadsheet or build it in minutes." },
  { title: "Share your booking link", body: "Put it in your bio, on your site or on a poster at the door." },
  { title: "Teach", body: "Mooring takes care of reminders, payments and the waitlist." },
];

const PLANS = [
  {
    name: "Studio",
    price: "$39",
    items: ["One location", "unlimited classes", "online payments", "email reminders"],
    featured: true,
  },
  {
    name: "Collective",
    price: "$89",
    items: ["Up to five locations", "staff accounts", "SMS reminders", "priority support"],
    featured: false,
  },
];

const FAQS = [
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

const STATS = [
  { value: "3.4M", label: "classes booked" },
  { value: "38%", label: "fewer no-shows" },
  { value: "6 hours", label: "saved per week" },
];

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const sectionAnchor = "scroll-mt-32 md:scroll-mt-20";

export default function Page() {
  return (
    <div
      className={`${THEME} ${lora.variable} ${raleway.variable} min-h-dvh bg-(--bg) font-sans text-base text-(--fg) antialiased lining-nums [&_:focus-visible]:outline-3 [&_:focus-visible]:outline-offset-3 [&_:focus-visible]:outline-(--ring)`}
    >
      <a
        href="#main"
        className="sr-only rounded-lg bg-(--surface) px-4 py-3 font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>

      {/* 1. Header */}
      <header className="sticky top-0 z-40 border-b border-(--border) bg-(--bg)">
        <div className={`${container} flex flex-wrap items-center justify-between gap-x-8 py-2 md:py-3`}>
          <Wordmark />
          <nav aria-label="Primary" className="order-last w-full md:order-none md:w-auto">
            <ul className="flex justify-center gap-2 md:gap-4">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 font-medium text-(--fg-muted) transition-colors duration-200 hover:text-(--fg)"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={SIGNUP} className={`${btnPrimary} px-4 text-sm md:ml-auto`}>
            Start free trial
          </a>
        </div>
      </header>

      <main id="main">
        {/* 2. Hero */}
        <section id="top" className={`relative overflow-hidden ${sectionAnchor}`}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_88%_18%,var(--accent-soft),transparent_70%),radial-gradient(40%_45%_at_5%_95%,var(--surface-2),transparent_70%)]"
          />
          <div
            className={`${container} relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28`}
          >
            <div>
              <h1 className="font-serif text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Fill every class without living in your inbox
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--fg-muted) sm:text-xl">
                Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={SIGNUP} className={btnPrimary}>
                  Start free trial
                </a>
                <a href="#how-it-works" className={btnSecondary}>
                  See how it works
                </a>
              </div>
              <p className="mt-4 text-sm text-(--fg-muted)">14 days free. No card required.</p>
            </div>
            <ScheduleMockup />
          </div>
          <Wave className="relative block h-10 w-full text-(--border)" />
        </section>

        {/* 3. Social proof */}
        <section aria-label="Social proof" className="border-y border-(--border) bg-(--surface) py-14">
          <div className={container}>
            <p className="text-center font-semibold text-(--fg-muted)">Trusted by 1,200 independent studios</p>
            <dl className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col-reverse items-center text-center">
                  <dt className="mt-1 text-(--fg-muted)">{s.label}</dt>
                  <dd className="font-serif text-4xl font-semibold tabular-nums text-(--fg) sm:text-5xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 4. Features */}
        <section id="features" className={`py-20 sm:py-28 ${sectionAnchor}`}>
          <div className={container}>
            <h2 className={eyebrow}>Features</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {FEATURES.map((f) => (
                <article
                  key={f.title}
                  className="rounded-xl border border-(--border) bg-(--surface) p-6 shadow-(--shadow-soft) sm:p-8"
                >
                  <span className="grid size-12 place-items-center rounded-lg bg-(--accent-soft) text-(--accent)">
                    <Icon>{f.icon}</Icon>
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-semibold">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-(--fg-muted)">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. How it works */}
        <section id="how-it-works" className={`bg-(--surface-2) py-20 sm:py-28 ${sectionAnchor}`}>
          <div className={container}>
            <h2 className={eyebrow}>How it works</h2>
            <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((s, i) => (
                <li
                  key={s.title}
                  className="relative md:after:absolute md:after:top-[1.375rem] md:after:right-0 md:after:left-16 md:after:h-px md:after:bg-(--border-strong) md:after:opacity-40 md:last:after:hidden"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-full border-2 border-(--accent) bg-(--bg) font-serif text-lg font-semibold text-(--accent) tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold">
                    <span className="sr-only">Step {i + 1}: </span>
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xs leading-relaxed text-(--fg-muted)">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. Testimonial */}
        <section aria-label="Testimonial" className="py-20 sm:py-28">
          <figure className={`${container} max-w-3xl text-center`}>
            <span className="text-(--accent-icon)">
              <Icon className="mx-auto size-10">
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </Icon>
            </span>
            <blockquote className="mt-6 font-serif text-2xl leading-snug font-medium text-balance sm:text-3xl lg:text-4xl">
              <p>We went from forty DMs a day to zero. Classes fill themselves now.</p>
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-(--accent-soft) text-sm font-semibold text-(--accent)"
              >
                AR
              </span>
              <span className="text-left text-(--fg-muted)">
                <cite className="font-semibold text-(--fg) not-italic">Ana Reyes</cite>, owner of Low Tide Yoga
              </span>
            </figcaption>
          </figure>
        </section>

        {/* 7. Pricing */}
        <section id="pricing" className={`border-t border-(--border) py-20 sm:py-28 ${sectionAnchor}`}>
          <div className={container}>
            <h2 className={`${eyebrow} text-center`}>Pricing</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              {PLANS.map((p) => (
                <article
                  key={p.name}
                  className={`flex flex-col rounded-xl bg-(--surface) p-6 sm:p-8 ${
                    p.featured
                      ? "border-2 border-(--accent) shadow-(--shadow-lift)"
                      : "border border-(--border) shadow-(--shadow-soft)"
                  }`}
                >
                  <h3 className="font-serif text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-5xl font-semibold tabular-nums">{p.price}</span>
                    <span className="text-(--fg-muted)">per month</span>
                  </p>
                  <ul className="mt-8 space-y-3 border-t border-(--border) pt-8">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Icon className="mt-0.5 size-5 shrink-0 text-(--accent)">
                          <path d="M20 6 9 17l-5-5" />
                        </Icon>
                        <span className="first-letter:uppercase">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <a href={SIGNUP} className={`${p.featured ? btnPrimary : btnSecondary} w-full`}>
                      Start free trial
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className={`bg-(--surface) py-20 sm:py-28 ${sectionAnchor}`}>
          <div className={`${container} max-w-3xl`}>
            <h2 className={eyebrow}>FAQ</h2>
            <div className="mt-8 divide-y divide-(--border) border-y border-(--border)">
              {FAQS.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden justify-between gap-6 py-5">
                    <h3 className="text-lg font-semibold">{f.q}</h3>
                    <Icon className="size-5 shrink-0 text-(--fg-muted) transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none">
                      <path d="m6 9 6 6 6-6" />
                    </Icon>
                  </summary>
                  <p className="pr-10 pb-6 leading-relaxed text-(--fg-muted)">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Final call to action */}
        <section className="py-20 sm:py-28">
          <div className={container}>
            <div className="relative overflow-hidden rounded-2xl bg-(--deep) px-6 py-16 text-center sm:px-12 sm:py-20">
              <Wave className="absolute inset-x-0 bottom-6 h-12 w-full text-(--on-deep-muted) opacity-25" />
              <Wave className="absolute inset-x-0 bottom-12 h-12 w-full text-(--on-deep-muted) opacity-15" />
              <h2 className="relative mx-auto max-w-2xl font-serif text-3xl leading-tight font-semibold text-balance text-(--on-deep) sm:text-4xl lg:text-5xl">
                Open your next class for booking today
              </h2>
              <a
                href={SIGNUP}
                className={`${btnBase} relative mt-8 bg-(--on-deep) text-(--deep) shadow-(--shadow-soft) hover:shadow-(--shadow-lift)`}
              >
                Start free trial
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="border-t border-(--border)">
        <div className={`${container} flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between`}>
          <Wordmark />
          <nav aria-label="Footer">
            <ul className="flex gap-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 text-(--fg-muted) transition-colors duration-200 hover:text-(--fg)"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-(--fg-muted)">© 2026 Mooring</p>
        </div>
      </footer>
    </div>
  );
}
