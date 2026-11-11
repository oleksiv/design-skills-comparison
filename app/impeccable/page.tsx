import { ClassRoom } from "./class-room";

const wrap = "mx-auto w-full max-w-[1344px] px-4 sm:px-8 lg:px-12";
const btn =
  "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold whitespace-nowrap transition-[background-color,color,translate] duration-200 ease-out active:translate-y-px";
const btnTape = `${btn} bg-(--mr-tape) text-(--mr-ink) hover:bg-(--mr-tape-deep)`;
const btnBlue = `${btn} bg-(--mr-blue) text-white hover:bg-(--mr-blue-deep)`;
const btnWall = `${btn} border-2 border-(--mr-wall) text-white hover:bg-white/10`;
const display = "font-extrabold font-stretch-[112%] tracking-[-0.03em] lg:font-stretch-125%";
const h2 = `${display} text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[0.98] text-balance`;
const link =
  "underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:decoration-current";

const NAV = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const FEATURES = [
  {
    title: "Online booking",
    body: "Members book and pay in two taps from a link, your site or Instagram.",
    art: <BookingArt />,
  },
  {
    title: "Automatic waitlists",
    body: "When someone cancels, the next person in line gets the spot and a notification.",
    art: <WaitlistArt />,
  },
  {
    title: "Memberships and passes",
    body: "Sell class packs, monthly memberships and drop-ins with one checkout.",
    art: <PassArt />,
  },
];

const STEPS = [
  ["Step 1:", "Add your schedule.", "Import it from a spreadsheet or build it in minutes."],
  ["Step 2:", "Share your booking link.", "Put it in your bio, on your site or on a poster at the door."],
  ["Step 3:", "Teach.", "Mooring takes care of reminders, payments and the waitlist."],
];

const PLANS = [
  {
    name: "Studio",
    price: "$39",
    includes: "One location, unlimited classes, online payments, email reminders.",
    featured: false,
  },
  {
    name: "Collective",
    price: "$89",
    includes: "Up to five locations, staff accounts, SMS reminders, priority support.",
    featured: true,
  },
];

const FAQ = [
  ["Can I import my existing members?", "Yes. Upload a CSV and we match members to their passes."],
  ["Which payment providers do you support?", "Stripe and Square, with payouts to your own account."],
  ["Is there a contract?", "No. Plans are monthly and you can cancel at any time."],
  ["Do my members need an app?", "No. Booking works in any browser, with an optional app for regulars."],
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`text-2xl font-black font-stretch-125% tracking-[-0.04em] ${className}`}>
      Mooring
    </a>
  );
}

export default function Page() {
  return (
    <>
      <div id="top" className="bg-(--mr-blue) text-white [--mr-focus:var(--mr-tape)]">
        <header className={`${wrap} flex flex-wrap items-center gap-x-10 gap-y-3 py-5 lg:py-7`}>
          <Wordmark />
          <nav aria-label="Main" className="order-last w-full md:order-none md:w-auto">
            <ul className="flex gap-6 text-[15px] font-medium text-(--mr-on-blue)">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={`${link} hover:text-white`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#pricing" className={`${btnTape} ml-auto px-5 py-2.5 text-[15px]`}>
            Start free trial
          </a>
        </header>
      </div>

      <main>
        <section
          aria-labelledby="hero-title"
          className="bg-(--mr-blue) pt-6 pb-20 text-white [--mr-focus:var(--mr-tape)] sm:pb-24 lg:pt-8"
        >
          <div className={wrap}>
            <ClassRoom>
              <h1
                id="hero-title"
                className={`${display} max-w-[17ch] text-[clamp(2.5rem,6vw,5rem)] leading-[0.94] text-balance`}
              >
                Fill every class without living in your inbox
              </h1>
              <div className="mt-8 grid gap-7 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
                <p className="max-w-[44ch] text-lg leading-relaxed text-(--mr-on-blue) lg:text-xl">
                  Mooring handles bookings, waitlists and payments for your studio, so you can get back on the
                  mat.
                </p>
                <div>
                  <div className="flex flex-wrap gap-3">
                    <a href="#pricing" className={btnTape}>
                      Start free trial
                    </a>
                    <a href="#how-it-works" className={btnWall}>
                      See how it works
                    </a>
                  </div>
                  <p className="mt-3 text-sm text-(--mr-on-blue)">14 days free. No card required.</p>
                </div>
              </div>
            </ClassRoom>
          </div>
        </section>

      <section aria-label="Social proof" className={`${wrap} grid gap-8 py-20 lg:grid-cols-12 lg:gap-12 lg:py-28`}>
        <p className={`${display} text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.02] text-balance lg:col-span-5`}>
          Trusted by 1,200 independent studios
        </p>
        <ul className="flex flex-col gap-2 text-[clamp(1.25rem,2.1vw,1.75rem)] leading-snug font-medium text-(--mr-ink-soft) sm:flex-row sm:flex-wrap sm:gap-x-4 lg:col-span-7 lg:self-end">
          {[
            ["3.4M", "classes booked"],
            ["38%", "fewer no-shows"],
            ["6 hours", "saved per week"],
          ].map(([value, label], i) => (
            <li key={label} className="flex gap-4">
              <span>
                <span className="font-extrabold text-(--mr-blue) tabular-nums">{value}</span> {label}
              </span>
              {i < 2 && (
                <span aria-hidden className="hidden text-(--mr-wall) sm:inline">
                  /
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section id="features" aria-labelledby="features-title" className={`${wrap} scroll-mt-4 pb-20 lg:pb-28`}>
        <h2 id="features-title" className={`${h2} mb-10 lg:mb-14`}>
          Features
        </h2>
        {FEATURES.map((f) => (
          <article
            key={f.title}
            className="grid gap-5 border-t-2 border-(--mr-line) py-10 md:grid-cols-12 md:gap-8 lg:py-14"
          >
            <h3 className="text-2xl font-bold font-stretch-[112%] tracking-[-0.02em] md:col-span-4 lg:text-[2rem] lg:leading-tight">
              {f.title}
            </h3>
            <p className="max-w-[38ch] text-lg leading-relaxed text-(--mr-ink-soft) md:col-span-4">{f.body}</p>
            <div className="pt-2 md:col-span-4 md:justify-self-end md:pt-1">{f.art}</div>
          </article>
        ))}
      </section>

      <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-4 bg-(--mr-tint) py-20 lg:py-28">
        <div className={wrap}>
          <h2 id="how-title" className={`${h2} mb-12 lg:mb-16`}>
            How it works
          </h2>
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map(([step, title, body]) => (
              <li key={step} className="relative border-t-2 border-dashed border-(--mr-blue) pt-8">
                <span aria-hidden className="absolute -top-[9px] left-0 size-4 rounded-full bg-(--mr-blue)" />
                <h3 className="text-2xl font-bold font-stretch-[112%] tracking-[-0.02em] text-balance">
                  <span className="text-(--mr-blue)">{step}</span> {title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-lg leading-relaxed text-(--mr-ink-soft)">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-label="Testimonial"
        className="bg-(--mr-blue-deep) py-20 text-white [--mr-focus:var(--mr-tape)] lg:py-32"
      >
        <figure className={wrap}>
          <blockquote>
            <p className="max-w-[20ch] text-[clamp(2rem,4.8vw,4.25rem)] leading-[1.02] font-bold font-stretch-[112%] tracking-[-0.03em] text-balance">
              We went from forty DMs a day to zero. Classes fill themselves now.
            </p>
          </blockquote>
          <figcaption className="mt-8 text-lg text-(--mr-on-blue)">
            <span className="font-bold">Ana Reyes</span>, owner of Low Tide Yoga
          </figcaption>
        </figure>
      </section>

      <section id="pricing" aria-labelledby="pricing-title" className={`${wrap} scroll-mt-4 py-20 lg:py-28`}>
        <h2 id="pricing-title" className={`${h2} mb-10 lg:mb-14`}>
          Pricing
        </h2>
        <div className="grid max-w-5xl gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-[28px] p-7 sm:p-10 ${
                plan.featured
                  ? "bg-(--mr-blue) text-white [--mr-focus:var(--mr-tape)]"
                  : "bg-white shadow-[0_18px_40px_-24px_oklch(0.38_0.17_266/0.35)] ring-1 ring-(--mr-line)"
              }`}
            >
              <h3 className="text-3xl font-black font-stretch-125% tracking-[-0.03em]">{plan.name}</h3>
              <p className="mt-6 flex items-baseline gap-3">
                <span className="text-6xl font-extrabold tracking-[-0.04em] tabular-nums">{plan.price}</span>
                <span className={plan.featured ? "text-(--mr-on-blue)" : "text-(--mr-ink-soft)"}>per month</span>
              </p>
              {/* Perforation: the plan reads as a pass you tear off. */}
              <div aria-hidden className="relative -mx-7 my-8 sm:-mx-10">
                <div className="mx-6 border-t-2 border-dashed border-current opacity-25" />
                <span className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rounded-full bg-(--mr-ground)" />
                <span className="absolute top-1/2 -right-3 size-6 -translate-y-1/2 rounded-full bg-(--mr-ground)" />
              </div>
              <p
                className={`mb-10 max-w-[32ch] text-lg leading-relaxed ${
                  plan.featured ? "text-(--mr-on-blue)" : "text-(--mr-ink-soft)"
                }`}
              >
                {plan.includes}
              </p>
              {/* Placeholder: no signup route exists in this experiment. */}
              <a href={`/signup?plan=${plan.name.toLowerCase()}`} className={`${plan.featured ? btnTape : btnBlue} mt-auto w-full`}>
                Start free trial
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-title" className={`${wrap} scroll-mt-4 grid gap-8 pb-20 md:grid-cols-12 lg:pb-28`}>
        <h2 id="faq-title" className={`${h2} md:col-span-4`}>
          FAQ
        </h2>
        <div className="border-t-2 border-(--mr-line) md:col-span-8">
          {FAQ.map(([q, a]) => (
            <details key={q} className="group border-b-2 border-(--mr-line)">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl font-semibold tracking-[-0.01em] transition-colors hover:text-(--mr-blue) [&::-webkit-details-marker]:hidden">
                {q}
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="size-6 shrink-0 text-(--mr-blue) transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-[60ch] pb-7 text-lg leading-relaxed text-(--mr-ink-soft)">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="close-title" className="bg-(--mr-blue) py-16 text-white [--mr-focus:var(--mr-tape)] lg:py-24">
        <div className={wrap}>
          <div className="grid gap-12 rounded-[28px] border-2 border-(--mr-wall) px-5 py-10 sm:px-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center lg:px-14 lg:py-16">
            <div>
              <h2 id="close-title" className={`${h2} max-w-[16ch] text-[clamp(2.25rem,5vw,4.5rem)]`}>
                Open your next class for booking today
              </h2>
              <a href="#pricing" className={`${btnTape} mt-9`}>
                Start free trial
              </a>
            </div>
            <ul aria-hidden className="grid grid-cols-6 gap-2.5 sm:gap-4">
              {Array.from({ length: 12 }, (_, i) => (
                <li
                  key={i}
                  className={`aspect-[1/2] rounded-[10px] ${
                    i === 0 ? "bg-(--mr-tape)" : "border-2 border-dashed border-(--mr-wall)"
                  }`}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
      </main>

      <footer className={`${wrap} flex flex-col gap-6 py-10 text-(--mr-ink-soft) sm:flex-row sm:items-center sm:gap-10`}>
        <Wordmark className="text-(--mr-ink)" />
        <nav aria-label="Footer">
          <ul className="flex gap-6 font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={`${link} hover:text-(--mr-ink)`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm sm:ml-auto">© 2026 Mooring</p>
      </footer>
    </>
  );
}

/* Feature diagrams, drawn in the room-plan vocabulary. Labels are illustrative UI, not claims. */

function BookingArt() {
  return (
    <div aria-hidden className="flex items-center gap-3 text-sm font-semibold">
      <span className="rounded-xl bg-(--mr-blue) px-4 py-2.5 text-white">Book</span>
      <svg viewBox="0 0 32 12" className="w-8 text-(--mr-wall)" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M0 6h29M24 1l5 5-5 5" />
      </svg>
      <span className="flex items-center gap-2 rounded-xl bg-(--mr-tape) px-4 py-2.5 text-(--mr-ink)">
        <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8.5l3.2 3L13 4.5" />
        </svg>
        Paid
      </span>
    </div>
  );
}

function WaitlistArt() {
  return (
    <div aria-hidden className="flex flex-col items-start gap-3">
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-16 w-8 rounded-lg ${i === 3 ? "bg-(--mr-tape)" : "bg-(--mr-blue)"}`}
          />
        ))}
      </div>
      <div className="ml-[130px] flex items-center gap-2 text-sm font-semibold text-(--mr-ink)">
        <svg viewBox="0 0 12 20" className="h-5 w-3 text-(--mr-ink-soft)" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 19V2M1 7l5-5 5 5" />
        </svg>
        Next in line
      </div>
    </div>
  );
}

function PassArt() {
  return (
    <div aria-hidden className="w-60 rounded-2xl bg-(--mr-blue) p-4 text-white">
      <div className="flex items-baseline justify-between text-sm font-semibold">
        <span className="font-stretch-125%">Class pack</span>
        <span className="text-(--mr-on-blue) tabular-nums">4 of 10</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2.5">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`aspect-square rounded-full ${i < 4 ? "bg-(--mr-tape)" : "border-2 border-(--mr-wall)"}`}
          />
        ))}
      </div>
    </div>
  );
}
