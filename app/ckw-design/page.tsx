// Mooring landing page. Direction: a small harbor at first light. The product
// ties classes down so they don't drift; the signature is the manila mooring line
// that the hero class card hangs from and the "How it works" steps are knotted on.

import type { Metadata } from "next";
import { Figtree, Young_Serif } from "next/font/google";
import { FontGate } from "./font-gate";
import "./mooring.css";

// Display face: block (never paint a fallback), then faded in by FontGate.
const display = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "block",
  variable: "--m-font-display",
});

// Body face: swap is fine here because next/font metric-matches the fallback.
const body = Figtree({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mooring",
};

// Display type: Young Serif, gated until loaded (see font-gate.tsx), then faded in.
const serif =
  "font-(family-name:--m-font-display) font-normal tracking-[-0.02em] transition-opacity duration-500 ease-out group-data-[fonts=pending]/m:opacity-0 group-data-[fonts=pending]/m:animate-[m-reveal_0.5s_ease-out_2.5s_forwards]";

// Twisted manila rope band.
const rope =
  "rounded-full bg-[repeating-linear-gradient(-55deg,var(--m-rope)_0_5px,var(--m-rope-dark)_5px_7px)]";

const wrap = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10";

const btnPrimary =
  "inline-flex min-h-12 items-center justify-center rounded-[10px] bg-(--m-buoy) px-6 text-base font-semibold text-(--m-raised) shadow-[0_1px_0_rgb(0_0_0/0.15)] transition-colors duration-150 ease-out hover:bg-(--m-buoy-press) active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--m-rope)";

// Section headings reuse the brief's own nav words (no invented copy).
const sectionLabel = `${serif} text-[2rem] leading-tight md:text-[2.5rem]`;

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function RingMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`size-6 shrink-0 ${className}`}
      fill="none"
    >
      <circle cx="12" cy="9" r="6" stroke="var(--m-rope)" strokeWidth="2.75" />
      <path
        d="M12 15v6"
        stroke="var(--m-rope)"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Wordmark({ onWater = false }: { onWater?: boolean }) {
  return (
    <a
      href="#top"
      className={`inline-flex min-h-11 items-center gap-2 rounded-md text-[1.625rem] leading-none focus-visible:outline-2 focus-visible:outline-(--m-rope) ${
        onWater ? "text-(--m-on-water)" : "text-(--m-ink)"
      }`}
    >
      <RingMark />
      <span className={serif}>Mooring</span>
    </a>
  );
}

/* ---------- hero visual: a full class, hanging from the line ---------- */

function HangingClass() {
  const booked = Array.from({ length: 12 });
  return (
    <div aria-hidden="true" className="relative w-full max-w-[400px] lg:mx-auto lg:max-w-[420px]">
      {/* the line, sagging to a brass ring */}
      <svg viewBox="0 0 400 54" className="block w-full" fill="none">
        <path
          d="M-4 6 Q200 76 404 6"
          stroke="var(--m-rope)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M-4 6 Q200 76 404 6"
          stroke="var(--m-rope-dark)"
          strokeWidth="7"
          strokeDasharray="2 5"
        />
        <circle cx="200" cy="42" r="10" stroke="var(--m-brass)" strokeWidth="4" />
      </svg>

      <div className="origin-top motion-safe:animate-[m-swing_1.8s_cubic-bezier(0.22,0.61,0.36,1)_0.3s_both]">
        <div className="mx-auto h-6 w-[3px] -translate-y-px bg-(--m-rope-dark)" />
        <div className="rounded-[18px] bg-(--m-raised) p-6 text-(--m-ink) shadow-[0_24px_48px_-24px_rgb(0_0_0/0.55)] sm:p-7">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-sm font-medium text-(--m-muted) tabular-nums">
              Thu · 7:00
            </p>
            <p className="rounded-full bg-(--m-water) px-3 py-1 text-sm font-semibold text-(--m-on-water) tabular-nums">
              12 / 12
            </p>
          </div>
          <p className={`${serif} mt-2 text-[1.75rem] leading-tight`}>
            Sunrise Flow
          </p>
          <div className="mt-5 grid grid-cols-6 justify-items-start gap-y-2.5">
            {booked.map((_, i) => (
              <span
                key={i}
                className="size-6 rounded-full border-[5px] border-(--m-water) bg-(--m-rope)"
              />
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3 border-t border-(--m-line) pt-4">
            <span className="text-sm font-medium text-(--m-ink-2)">Waitlist</span>
            <span className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-4 rounded-full border-2 border-dashed border-(--m-line-strong)"
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- feature glyphs ---------- */

function Glyph({ kind }: { kind: "booking" | "waitlist" | "passes" }) {
  const common = {
    stroke: "var(--m-water)",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-12" fill="none">
      {kind === "booking" && (
        <>
          <rect x="13" y="5" width="22" height="38" rx="5" {...common} />
          <circle cx="24" cy="21" r="6" fill="var(--m-rope)" stroke="none" />
          <path d="M21 21l2 2 4-4" {...common} />
          <path d="M19 35h10" {...common} />
        </>
      )}
      {kind === "waitlist" && (
        <>
          <circle cx="10" cy="24" r="6" fill="var(--m-water)" stroke="none" />
          <circle cx="24" cy="24" r="6" {...common} />
          <circle cx="38" cy="24" r="6" {...common} strokeDasharray="3 3" />
          <path d="M17 13c4-4 10-4 14 0" {...common} />
          <path d="M29 11l2 2-2 2" {...common} />
        </>
      )}
      {kind === "passes" && (
        <>
          <path
            d="M6 14h36v7a3 3 0 0 0 0 6v7H6v-7a3 3 0 0 0 0-6z"
            {...common}
          />
          <path d="M31 15v18" {...common} strokeDasharray="2 3" />
          <circle cx="15" cy="24" r="2.5" fill="var(--m-rope)" stroke="none" />
          <circle cx="22" cy="24" r="2.5" fill="var(--m-rope)" stroke="none" />
        </>
      )}
    </svg>
  );
}

const features = [
  {
    kind: "booking" as const,
    title: "Online booking",
    body: "Members book and pay in two taps from a link, your site or Instagram.",
  },
  {
    kind: "waitlist" as const,
    title: "Automatic waitlists",
    body: "When someone cancels, the next person in line gets the spot and a notification.",
  },
  {
    kind: "passes" as const,
    title: "Memberships and passes",
    body: "Sell class packs, monthly memberships and drop-ins with one checkout.",
  },
];

const steps = [
  {
    n: "Step 1",
    title: "Add your schedule.",
    body: "Import it from a spreadsheet or build it in minutes.",
  },
  {
    n: "Step 2",
    title: "Share your booking link.",
    body: "Put it in your bio, on your site or on a poster at the door.",
  },
  {
    n: "Step 3",
    title: "Teach.",
    body: "Mooring takes care of reminders, payments and the waitlist.",
  },
];

const stats = [
  { value: "3.4M", label: "classes booked" },
  { value: "38%", label: "fewer no-shows" },
  { value: "6", label: "hours saved per week" },
];

const plans = [
  {
    name: "Studio",
    price: "$39",
    body: "One location, unlimited classes, online payments, email reminders.",
    dark: false,
  },
  {
    name: "Collective",
    price: "$89",
    body: "Up to five locations, staff accounts, SMS reminders, priority support.",
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

export default function MooringPage() {
  return (
    <FontGate
      family={display.style.fontFamily}
      className={`group/m ${display.variable} ${body.className} min-h-dvh overflow-x-clip bg-(--m-paper) text-(--m-ink) antialiased [body:has(&)]:overflow-x-clip [body:has(&)]:bg-(--m-paper) motion-safe:[html:has(&)]:scroll-smooth`}
    >
      {/* ---------- 1–2. Header + hero: the harbor at first light ---------- */}
      <div id="top" className="bg-(--m-water) text-(--m-on-water)">
        <header
          className={`${wrap} flex flex-wrap items-center gap-x-8 gap-y-1 pt-4 pb-2 md:pt-6`}
        >
          <Wordmark onWater />
          <nav aria-label="Main" className="order-3 -ml-3 w-full md:order-none md:ml-auto md:w-auto">
            <ul className="flex flex-wrap">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-11 items-center rounded-md px-3 text-[0.9375rem] font-medium text-(--m-on-water-2) transition-colors duration-150 hover:text-(--m-on-water) focus-visible:outline-2 focus-visible:outline-(--m-rope)"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#pricing" className={`${btnPrimary} ml-auto min-h-11 px-4 text-[0.9375rem] md:ml-0`}>
            Start free trial
          </a>
        </header>

        <section
          aria-labelledby="hero-title"
          className={`${wrap} grid items-start gap-10 pt-10 pb-20 md:gap-14 md:pt-20 md:pb-28 lg:grid-cols-12 lg:gap-10 lg:pt-24`}
        >
          <div className="min-w-0 lg:col-span-7">
            <h1
              id="hero-title"
              className={`${serif} text-[clamp(2.75rem,7vw,5.25rem)] leading-[1.02] text-balance`}
            >
              Fill every class without living in your inbox
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-(--m-on-water-2) md:text-xl">
              Mooring handles bookings, waitlists and payments for your studio,
              so you can get back on the mat.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#pricing" className={btnPrimary}>
                Start free trial
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-(--m-line-water) px-6 text-base font-semibold text-(--m-on-water) transition-colors duration-150 ease-out hover:border-(--m-on-water-2) hover:bg-(--m-water-deep) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--m-rope)"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-(--m-on-water-2)">
              14 days free. No card required.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-5 lg:pt-2">
            <HangingClass />
          </div>
        </section>
      </div>

      <main>
        {/* ---------- 3. Social proof ---------- */}
        <section
          aria-label="Social proof"
          className={`${wrap} grid gap-10 py-14 md:py-16 lg:grid-cols-12 lg:items-end`}
        >
          <p
            className={`${serif} max-w-[16ch] text-[1.75rem] leading-tight lg:col-span-4`}
          >
            Trusted by 1,200 independent studios
          </p>
          <ul className="grid gap-6 sm:grid-cols-3 sm:gap-0 lg:col-span-8">
            {stats.map((s, i) => (
              <li
                key={s.label}
                className={`flex items-baseline gap-3 border-t border-(--m-line) pt-4 sm:block sm:border-t-0 sm:pt-0 ${
                  i > 0 ? "sm:border-l sm:pl-6" : ""
                } sm:pr-6`}
              >
                <span
                  className={`${serif} block text-[2.75rem] leading-none lining-nums tabular-nums md:text-[3.25rem]`}
                >
                  {s.value}
                </span>{" "}
                <span className="block text-base text-(--m-ink-2) sm:mt-2">{s.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- 4. Features ---------- */}
        <section
          id="features"
          aria-labelledby="features-title"
          className="scroll-mt-6 border-t border-(--m-line)"
        >
          <div className={`${wrap} grid gap-8 py-20 md:py-28 lg:grid-cols-12 lg:gap-10`}>
            <h2 id="features-title" className={`${sectionLabel} lg:col-span-3`}>
              Features
            </h2>
            <ul className="lg:col-span-9">
              {features.map((f, i) => (
                <li
                  key={f.title}
                  className={`grid gap-4 py-8 md:grid-cols-[3rem_minmax(0,1.2fr)_minmax(0,1fr)] md:gap-8 md:py-10 ${
                    i > 0 ? "border-t border-(--m-line)" : "pt-0 md:pt-0"
                  }`}
                >
                  <Glyph kind={f.kind} />
                  <h3 className={`${serif} text-[1.75rem] leading-tight md:pt-1`}>
                    {f.title}
                  </h3>
                  <p className="max-w-[32rem] text-lg leading-relaxed text-(--m-ink-2) md:pt-2">
                    {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 5. How it works: three knots on one line ---------- */}
        <section
          id="how-it-works"
          aria-labelledby="how-title"
          className="scroll-mt-6 bg-(--m-mist)"
        >
          <div className={`${wrap} grid gap-10 py-20 md:gap-14 md:py-28 lg:grid-cols-12 lg:gap-10`}>
            <h2 id="how-title" className={`${sectionLabel} lg:col-span-3`}>
              How it works
            </h2>
            <ol className="grid gap-12 md:grid-cols-3 md:gap-10 lg:col-span-9">
              {steps.map((s, i) => (
                <li key={s.n} className="relative pl-14 md:pt-16 md:pl-0">
                  {/* the line runs from this knot to the next: down on phones, across from md */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`${rope} absolute top-8 bottom-[-3.5rem] left-[16px] w-2 md:top-[16px] md:right-[-3rem] md:bottom-auto md:left-8 md:h-2 md:w-auto`}
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 grid size-10 place-items-center rounded-full border-[5px] border-(--m-rope-dark) bg-(--m-rope)"
                  >
                    <span className="size-2.5 rounded-full bg-(--m-rope-dark)" />
                  </span>
                  <p className="text-sm font-semibold text-(--m-muted) md:-mt-1">{s.n}</p>
                  <h3 className={`${serif} mt-1 text-[1.75rem] leading-tight`}>
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[22rem] text-lg leading-relaxed text-(--m-ink-2)">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- 6. Testimonial ---------- */}
        <section aria-label="Testimonial" className={`${wrap} py-20 md:py-28`}>
          <figure className="lg:grid lg:grid-cols-12 lg:gap-10">
            <div className="relative lg:col-span-9 lg:col-start-4">
              {/* opening mark hangs in the gutter so the quote's text edge holds the column */}
              <span
                aria-hidden="true"
                className={`${serif} block h-12 text-[5rem] leading-none text-(--m-rope-dark) lg:absolute lg:top-0 lg:right-full lg:mr-5 lg:h-auto lg:text-[6.5rem] lg:leading-[0.8]`}
              >
                &ldquo;
              </span>
              <blockquote
                className={`${serif} text-[clamp(1.875rem,4vw,3.25rem)] leading-[1.12] text-balance`}
              >
                <p>
                  We went from forty DMs a day to zero. Classes fill themselves
                  now.
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 text-base text-(--m-ink-2)">
                <span aria-hidden="true" className={`${rope} h-2 w-12 shrink-0`} />
                <span>
                  <span className="font-semibold text-(--m-ink)">Ana Reyes</span>,
                  owner of Low Tide Yoga
                </span>
              </figcaption>
            </div>
          </figure>
        </section>

        {/* ---------- 7. Pricing ---------- */}
        <section
          id="pricing"
          aria-labelledby="pricing-title"
          className="scroll-mt-6 border-t border-(--m-line)"
        >
          <div className={`${wrap} grid gap-8 py-20 md:py-28 lg:grid-cols-12 lg:gap-10`}>
            <h2 id="pricing-title" className={`${sectionLabel} lg:col-span-3`}>
              Pricing
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:col-span-9">
              {plans.map((p) => (
                <article
                  key={p.name}
                  className={`flex flex-col rounded-[20px] p-7 sm:p-9 ${
                    p.dark
                      ? "bg-(--m-water) text-(--m-on-water)"
                      : "border border-(--m-line) bg-(--m-raised)"
                  }`}
                >
                  <h3 className={`${serif} text-[1.75rem] leading-tight`}>{p.name}</h3>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className={`${serif} text-[3.5rem] leading-none lining-nums tabular-nums`}>
                      {p.price}
                    </span>
                    <span
                      className={`text-base ${p.dark ? "text-(--m-on-water-2)" : "text-(--m-ink-2)"}`}
                    >
                      per month
                    </span>
                  </p>
                  <p
                    className={`mt-6 mb-9 text-lg leading-relaxed ${
                      p.dark ? "text-(--m-on-water-2)" : "text-(--m-ink-2)"
                    }`}
                  >
                    {p.body}
                  </p>
                  <a href="#" className={`${btnPrimary} mt-auto w-full`}>
                    Start free trial
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 8. FAQ ---------- */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="scroll-mt-6 border-t border-(--m-line)"
        >
          <div className={`${wrap} grid gap-8 py-20 md:py-28 lg:grid-cols-12 lg:gap-10`}>
            <h2 id="faq-title" className={`${sectionLabel} lg:col-span-3`}>
              FAQ
            </h2>
            <dl className="grid gap-x-10 md:grid-cols-2 lg:col-span-9">
              {faqs.map((f) => (
                <div key={f.q} className="border-t border-(--m-line) py-7 first:border-t-0 first:pt-0 md:[&:nth-child(2)]:border-t-0 md:[&:nth-child(2)]:pt-0">
                  <dt className="text-lg font-semibold text-(--m-ink)">{f.q}</dt>
                  <dd className="mt-2 text-lg leading-relaxed text-(--m-ink-2)">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- 9. Final call to action: back to the water ---------- */}
        <section
          aria-labelledby="cta-title"
          className="bg-(--m-water) text-(--m-on-water)"
        >
          <div className={`${wrap} grid items-center gap-10 py-24 md:py-32 lg:grid-cols-12`}>
            <div className="lg:col-span-8">
              <h2
                id="cta-title"
                className={`${serif} max-w-[14ch] text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04] text-balance`}
              >
                Open your next class for booking today
              </h2>
              <a href="#pricing" className={`${btnPrimary} mt-10`}>
                Start free trial
              </a>
            </div>
            {/* tied off: the line made fast to a brass mooring ring */}
            <svg
              aria-hidden="true"
              viewBox="0 0 240 240"
              fill="none"
              className="hidden w-full max-w-[260px] justify-self-center lg:col-span-4 lg:block"
            >
              <circle cx="120" cy="96" r="62" stroke="var(--m-brass)" strokeWidth="16" />
              <circle cx="120" cy="96" r="62" stroke="var(--m-water-deep)" strokeWidth="2" strokeOpacity="0.35" />
              <path d="M84 150c-10 24 4 50 36 50s46-26 36-50" stroke="var(--m-rope)" strokeWidth="12" strokeLinecap="round" />
              <path d="M84 150c-10 24 4 50 36 50s46-26 36-50" stroke="var(--m-rope-dark)" strokeWidth="12" strokeDasharray="2 5" />
              <path d="M120 200v40" stroke="var(--m-rope)" strokeWidth="12" />
              <path d="M120 200v40" stroke="var(--m-rope-dark)" strokeWidth="12" strokeDasharray="2 5" />
            </svg>
          </div>
          <div aria-hidden="true" className={`${rope} h-2 rounded-none`} />
        </section>
      </main>

      {/* ---------- 10. Footer ---------- */}
      <footer className="bg-(--m-water-deep) text-(--m-on-water-2)">
        <div
          className={`${wrap} flex flex-wrap items-center gap-x-8 gap-y-4 py-10`}
        >
          <Wordmark onWater />
          <nav aria-label="Footer" className="-ml-3 sm:ml-0">
            <ul className="flex flex-wrap">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-11 items-center rounded-md px-3 text-[0.9375rem] transition-colors duration-150 hover:text-(--m-on-water) focus-visible:outline-2 focus-visible:outline-(--m-rope)"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="w-full text-sm sm:ml-auto sm:w-auto">© 2026 Mooring</p>
        </div>
      </footer>
    </FontGate>
  );
}
