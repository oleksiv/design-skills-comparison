import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Coil, SpringBar } from "./spring-bar";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mooring",
  description:
    "Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.",
};

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const FEATURES = [
  {
    title: "Online booking",
    body: "Members book and pay in two taps from a link, your site or Instagram.",
    springs: 1,
  },
  {
    title: "Automatic waitlists",
    body: "When someone cancels, the next person in line gets the spot and a notification.",
    springs: 2,
  },
  {
    title: "Memberships and passes",
    body: "Sell class packs, monthly memberships and drop-ins with one checkout.",
    springs: 3,
  },
];

const STEPS = [
  { lead: "Add your schedule.", body: "Import it from a spreadsheet or build it in minutes." },
  { lead: "Share your booking link.", body: "Put it in your bio, on your site or on a poster at the door." },
  { lead: "Teach.", body: "Mooring takes care of reminders, payments and the waitlist." },
];

const PLANS = [
  {
    name: "Studio",
    price: "$39",
    items: ["One location", "unlimited classes", "online payments", "email reminders"],
    plum: false,
    springs: 2,
  },
  {
    name: "Collective",
    price: "$89",
    items: ["Up to five locations", "staff accounts", "SMS reminders", "priority support"],
    plum: true,
    springs: 4,
  },
];

const FAQS = [
  ["Can I import my existing members?", "Yes. Upload a CSV and we match members to their passes."],
  ["Which payment providers do you support?", "Stripe and Square, with payouts to your own account."],
  ["Is there a contract?", "No. Plans are monthly and you can cancel at any time."],
  ["Do my members need an app?", "No. Booking works in any browser, with an optional app for regulars."],
];

const SPRING_ROW = ["text-(--red)", "text-(--yellow-ink)", "text-(--green)", "text-(--blue)"];

// Shared atoms. One geometry for every rail and panel on the page.
const focusOnAlu =
  "outline-offset-3 focus-visible:outline-2 focus-visible:outline-(--plum)";
const focusOnPlum =
  "outline-offset-3 focus-visible:outline-2 focus-visible:outline-(--yellow)";
const primary =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-(--yellow) px-6 text-[0.9375rem] font-bold text-(--ink) shadow-[0_6px_14px_-6px_oklch(0.15_0.04_335/0.6),inset_0_-2px_0_oklch(0.7_0.15_80/0.6)] transition-[transform,background-color] duration-200 ease-out hover:bg-(--yellow-hi) active:translate-y-px";
const upholstery =
  "relative rounded-[2rem] bg-(--plum) text-(--on-plum) shadow-[0_24px_40px_-24px_oklch(0.2_0.06_335/0.7)]";
const rail = "bg-(--alu-2) shadow-[inset_0_1px_0_oklch(1_0_0/0.8)]";

function Wordmark() {
  return (
    <span className="font-stretch-expanded text-xl font-black tracking-[-0.02em]">
      Mooring
    </span>
  );
}

function SpringSet({ count, tone }: { count: number; tone: string }) {
  return (
    <span aria-hidden="true" className={`flex h-12 gap-1.5 ${tone}`}>
      {Array.from({ length: count }, (_, i) => (
        <Coil key={i} className="h-full w-3" />
      ))}
    </span>
  );
}

export default function Page() {
  return (
    <div
      className={`${archivo.className} min-h-screen bg-(--alu) text-(--ink) antialiased selection:bg-(--yellow) selection:text-(--ink) [--alu-2:oklch(0.885_0.006_300)] [--alu-3:oklch(0.8_0.008_300)] [--alu:oklch(0.945_0.004_300)] [--blue:oklch(0.58_0.15_250)] [--green:oklch(0.62_0.15_155)] [--ink-2:oklch(0.36_0.03_335)] [--ink:oklch(0.21_0.03_335)] [--on-plum-2:oklch(0.83_0.045_335)] [--on-plum:oklch(0.96_0.015_335)] [--plum-deep:oklch(0.22_0.07_335)] [--plum:oklch(0.31_0.095_337)] [--red:oklch(0.6_0.2_25)] [--steel:oklch(0.47_0.015_320)] [--yellow-hi:oklch(0.9_0.15_95)] [--yellow-ink:oklch(0.74_0.16_75)] [--yellow:oklch(0.86_0.16_92)]`}
    >
      {/* 1. Header: an aluminium rail */}
      <header className="px-4 pt-3 sm:px-6 sm:pt-4">
        <div
          className={`${rail} mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-full py-2 pr-2 pl-5 sm:pl-6`}
        >
          <a href="#top" className={`rounded-full ${focusOnAlu}`}>
            <Wordmark />
          </a>
          <nav aria-label="Main" className="order-3 w-full sm:order-none sm:w-auto">
            <ul className="flex gap-6 pb-1 text-[0.9375rem] font-medium sm:pb-0">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`rounded-sm underline-offset-4 decoration-2 decoration-(--plum) hover:underline ${focusOnAlu}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#pricing" className={`${primary} min-h-10 px-5 text-sm ${focusOnAlu}`}>
            Start free trial
          </a>
        </div>
      </header>

      <main id="top">
        {/* 2. Hero: the padded carriage, with the class's spring bar bolted beneath */}
        <section className="px-4 pt-3 sm:px-6 sm:pt-6">
          <div className="mx-auto max-w-7xl">
            <div className={`${upholstery} px-6 pt-10 pb-9 sm:px-12 sm:pt-14 sm:pb-12 lg:px-16 lg:pt-12 lg:pb-10`}>
              <h1 className="max-w-[15ch] text-[clamp(2.4rem,5.4vw,5rem)] leading-[0.95] font-black tracking-[-0.035em] text-balance font-stretch-expanded">
                Fill every class without living in your inbox
              </h1>
              <p className="mt-4 max-w-[46ch] sm:mt-5 text-lg leading-relaxed text-(--on-plum-2) sm:text-xl">
                Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-3">
                <a href="#pricing" className={`${primary} ${focusOnPlum}`}>
                  Start free trial
                </a>
                <a
                  href="#how-it-works"
                  className={`inline-flex min-h-12 items-center rounded-full border-2 border-(--on-plum-2) px-6 text-[0.9375rem] font-bold transition-colors duration-200 hover:border-(--on-plum) hover:bg-(--plum-deep) ${focusOnPlum}`}
                >
                  See how it works
                </a>
              </div>
              <p className="mt-3 text-sm text-(--on-plum-2) sm:mt-4">14 days free. No card required.</p>
            </div>
            <SpringBar />
          </div>
        </section>

        {/* 3. Social proof: billed by size alone */}
        <section aria-label="Social proof" className="px-4 pt-28 pb-24 sm:px-6 sm:pt-36">
          <div className="mx-auto max-w-7xl">
            <p className="text-lg text-(--ink-2) sm:text-xl">Trusted by 1,200 independent studios</p>
            <p className="mt-6 text-[clamp(1.9rem,5.2vw,4.5rem)] leading-[1.08] font-light tracking-[-0.03em]">
              {[
                ["3.4M", "classes booked"],
                ["38%", "fewer no-shows"],
                ["6 hours", "saved per week"],
              ].map(([n, rest], i) => (
                <span key={n} className="block">
                  <span className="font-black font-stretch-expanded tabular-nums">{n}</span>{" "}
                  {rest}
                  <span className="sr-only">{i < 2 ? " / " : ""}</span>
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* 4. Features: set out like a reformer's spring-setting placard */}
        <section id="features" className="scroll-mt-6 px-4 pb-28 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black tracking-[-0.03em] font-stretch-expanded sm:text-5xl">
              Features
            </h2>
            <ul className="mt-10 border-t-2 border-(--ink)">
              {FEATURES.map((f) => (
                <li
                  key={f.title}
                  className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 border-b border-(--alu-3) py-8 sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_3.5rem] sm:items-center sm:py-10"
                >
                  <h3 className="text-2xl font-extrabold tracking-[-0.02em] font-stretch-semi-expanded sm:text-3xl">
                    {f.title}
                  </h3>
                  <span className="row-span-2 self-center sm:order-last sm:row-span-1 sm:justify-self-end">
                    <SpringSet count={f.springs} tone="text-(--steel)" />
                  </span>
                  <p className="max-w-[48ch] text-base leading-relaxed text-pretty text-(--ink-2) sm:text-lg">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. How it works: three positions on the gear bar */}
        <section id="how-it-works" className="scroll-mt-6 px-4 pb-28 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black tracking-[-0.03em] font-stretch-expanded sm:text-5xl">
              How it works
            </h2>
            <div className={`${rail} mt-10 hidden h-4 rounded-full md:block`} aria-hidden="true" />
            <ol className="mt-10 grid gap-10 md:-mt-7 md:grid-cols-3 md:gap-8">
              {STEPS.map((s, i) => (
                <li key={s.lead} className="grid grid-cols-[auto_1fr] gap-5 md:block">
                  <span className="grid size-10 place-items-center rounded-full border-2 border-(--ink) bg-(--alu) text-sm font-black tabular-nums shadow-[0_4px_10px_-4px_oklch(0.21_0.03_335/0.5)] font-stretch-expanded">
                    {i + 1}
                  </span>
                  <p className="text-lg leading-relaxed text-(--ink-2) md:mt-6 md:max-w-[30ch]">
                    <strong className="block text-2xl font-extrabold tracking-[-0.02em] text-(--ink) font-stretch-semi-expanded">
                      {s.lead}
                    </strong>
                    <span className="mt-2 block">{s.body}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. Testimonial: back on the upholstery */}
        <section aria-label="Testimonial" className="px-4 pb-28 sm:px-6">
          <figure className={`${upholstery} mx-auto max-w-7xl px-6 py-16 sm:px-12 sm:py-24 lg:px-16`}>
            <blockquote className="max-w-[24ch] text-[clamp(1.75rem,4.4vw,3.75rem)] leading-[1.1] font-semibold tracking-[-0.025em] text-balance">
              <p>We went from forty DMs a day to zero. Classes fill themselves now.</p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span aria-hidden="true" className="flex h-10 gap-1 text-(--on-plum-2)">
                <Coil className="h-full w-2.5" />
                <Coil className="h-full w-2.5" />
              </span>
              <span className="text-base text-(--on-plum-2)">
                <span className="font-bold text-(--on-plum)">Ana Reyes</span>, owner of Low Tide Yoga
              </span>
            </figcaption>
          </figure>
        </section>

        {/* 7. Pricing: two carriages, the heavier one sprung harder */}
        <section id="pricing" className="scroll-mt-6 px-4 pb-28 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-black tracking-[-0.03em] font-stretch-expanded sm:text-5xl">
              Pricing
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {PLANS.map((p) => (
                <article
                  key={p.name}
                  className={`relative flex flex-col rounded-[2rem] px-7 pt-10 pb-8 sm:px-10 ${
                    p.plum
                      ? upholstery
                      : "bg-(--alu-2) shadow-[inset_0_1px_0_oklch(1_0_0/0.8),0_18px_32px_-24px_oklch(0.21_0.03_335/0.55)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-extrabold tracking-[-0.02em] font-stretch-semi-expanded">
                      {p.name}
                    </h3>
                    <SpringSet
                      count={p.springs}
                      tone={p.plum ? "text-(--yellow)" : "text-(--steel)"}
                    />
                  </div>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="text-6xl font-black tracking-[-0.04em] tabular-nums font-stretch-expanded sm:text-7xl">
                      {p.price}
                    </span>
                    <span className={p.plum ? "text-(--on-plum-2)" : "text-(--ink-2)"}>per month</span>
                  </p>
                  <ul
                    className={`mt-8 mb-10 grid gap-3 text-base ${p.plum ? "text-(--on-plum)" : "text-(--ink)"}`}
                  >
                    {p.items.map((it) => (
                      <li key={it} className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={`size-2.5 shrink-0 rounded-full ${p.plum ? "bg-(--yellow)" : "bg-(--ink)"}`}
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#pricing"
                    className={`${primary} mt-auto self-start ${p.plum ? focusOnPlum : focusOnAlu}`}
                  >
                    Start free trial
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className="scroll-mt-6 px-4 pb-28 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
            <h2 className="text-4xl font-black tracking-[-0.03em] font-stretch-expanded sm:text-5xl">FAQ</h2>
            <div className="border-t-2 border-(--ink)">
              {FAQS.map(([q, a]) => (
                <details key={q} className="group border-b border-(--alu-3)">
                  <summary
                    className={`flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-6 text-lg font-bold tracking-[-0.01em] sm:text-xl [&::-webkit-details-marker]:hidden ${focusOnAlu}`}
                  >
                    {q}
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border-2 border-dashed border-(--steel) text-(--steel) transition-[transform,border-color,background-color,color] duration-300 ease-out group-open:rotate-45 group-open:border-solid group-open:border-(--ink) group-open:bg-(--ink) group-open:text-(--alu)"
                    >
                      <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                    </span>
                  </summary>
                  <p className="max-w-[60ch] pb-7 text-base leading-relaxed text-(--ink-2) sm:text-lg">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Final call to action: the carriage again, every spring hooked */}
        <section className="px-4 pb-6 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className={`${upholstery} px-6 py-16 text-center sm:px-12 sm:py-24`}>
              <h2 className="mx-auto max-w-[18ch] text-[clamp(2rem,5.4vw,4.5rem)] leading-[1] font-black tracking-[-0.035em] text-balance font-stretch-expanded">
                Open your next class for booking today
              </h2>
              <a href="#pricing" className={`${primary} mt-10 ${focusOnPlum}`}>
                Start free trial
              </a>
            </div>
            <div aria-hidden="true" className="relative z-10 grid grid-cols-12 px-2 sm:px-6 lg:px-10">
              {Array.from({ length: 12 }, (_, i) => (
                <span key={i} className="flex h-24 flex-col items-center sm:h-32">
                  <span className="h-2 w-1.5 rounded-b-full bg-(--plum-deep)" />
                  <Coil className={`min-h-0 w-3 flex-1 sm:w-4 ${SPRING_ROW[i % 4]}`} />
                  <span className="size-5 shrink-0 rounded-full bg-(--ink) sm:size-8" />
                </span>
              ))}
            </div>
            <div aria-hidden="true" className={`${rail} -mt-3.5 h-3 rounded-full sm:h-4`} />
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="px-4 pt-14 pb-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className={`self-start rounded-full ${focusOnAlu}`}>
            <Wordmark />
          </a>
          <nav aria-label="Footer">
            <ul className="flex gap-6 text-[0.9375rem] font-medium">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={`rounded-sm underline-offset-4 decoration-2 decoration-(--plum) hover:underline ${focusOnAlu}`}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-(--steel)">© 2026 Mooring</p>
        </div>
      </footer>
    </div>
  );
}
