import { ArrowRight, CalendarCheck, Check, ListOrdered, Ticket } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { cn } from "./lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const stats = [
  { value: "3.4M", label: "classes booked" },
  { value: "38%", label: "fewer no-shows" },
  { value: "6 hours", label: "saved per week" },
];

const features = [
  {
    icon: CalendarCheck,
    title: "Online booking",
    body: "Members book and pay in two taps from a link, your site or Instagram.",
  },
  {
    icon: ListOrdered,
    title: "Automatic waitlists",
    body: "When someone cancels, the next person in line gets the spot and a notification.",
  },
  {
    icon: Ticket,
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

// Hero illustration data: a week of classes as rows of spots. 12 spots per class.
const schedule = [
  { time: "06:30", booked: 12 },
  { time: "09:00", booked: 10 },
  { time: "12:15", booked: 11, promoted: true },
  { time: "17:30", booked: 12 },
  { time: "19:00", booked: 8 },
];

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 24 24" aria-hidden className="size-6 shrink-0" fill="none">
        <circle cx="12" cy="9" r="5" className="stroke-accent" strokeWidth="2" />
        <path d="M12 14v4" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M2.5 19.5q2.4-1.6 4.75 0t4.75 0 4.75 0 4.75 0"
          className="stroke-tide"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-lg font-medium tracking-tight">Mooring</span>
    </span>
  );
}

/** Repeating wave lines, generated rather than drawn: a quiet, systematic texture. */
function TideLines({ lines = 6, className }: { lines?: number; className?: string }) {
  const height = lines * 14 + 12;
  return (
    <svg
      viewBox={`0 0 1200 ${height}`}
      preserveAspectRatio="none"
      aria-hidden
      className={cn("pointer-events-none w-full", className)}
      fill="none"
    >
      {Array.from({ length: lines }, (_, i) => {
        const y = 10 + i * 14;
        const amp = 3 + ((i * 5) % 7);
        return (
          <path
            key={i}
            d={`M0 ${y} q50 ${-amp} 100 0${" t100 0".repeat(11)}`}
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

function SectionMarker({ index, children, id }: { index: string; children: string; id?: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-marker text-xs text-tide">{index}</span>
      <h2
        id={id}
        className="font-marker text-xs font-medium uppercase tracking-[0.22em] text-foreground"
      >
        {children}
      </h2>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </div>
  );
}

function ClassGrid() {
  return (
    <div className="relative isolate">
      {/* Mooring rings: concentric circles behind the panel. */}
      <svg
        viewBox="0 0 400 400"
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 -z-10 size-[26rem] text-border sm:-right-24"
        fill="none"
      >
        {[40, 80, 120, 160, 196].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>

      <div
        aria-hidden
        className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_1px_0_0_oklch(1_0_0/0.6)_inset,0_30px_60px_-30px_oklch(0.3_0.06_250/0.25)]"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5 sm:px-6">
          <span className="flex gap-1.5">
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
          </span>
          <span className="h-2 w-16 rounded-full bg-secondary" />
        </div>

        <div className="space-y-4 px-5 py-6 sm:px-6 sm:py-7">
          {schedule.map((row) => (
            <div key={row.time} className="flex items-center gap-3 sm:gap-4">
              <span className="w-10 shrink-0 font-marker text-[11px] text-muted-foreground">
                {row.time}
              </span>
              <div className="grid flex-1 grid-cols-12 gap-1 sm:gap-1.5">
                {Array.from({ length: 12 }, (_, i) => {
                  const promoted = row.promoted && i === row.booked;
                  const filled = i < row.booked;
                  return (
                    <span key={i} className="relative aspect-square">
                      {promoted && (
                        <span className="absolute inset-0 rounded-full bg-accent/50 motion-safe:animate-ping" />
                      )}
                      <span
                        className={cn(
                          "absolute inset-0 rounded-full",
                          filled && "bg-primary",
                          promoted && "bg-accent",
                          !filled && !promoted && "border border-border",
                        )}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <TideLines lines={4} className="h-16 text-tide/25" />
      </div>
    </div>
  );
}

export default function MooringPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* 1. Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className={cn(container, "flex flex-wrap items-center justify-between gap-x-8 py-3")}>
          <a
            href="#main"
            className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Wordmark />
          </a>
          <nav
            aria-label="Main"
            className="order-last -mx-4 mt-3 w-[calc(100%+2rem)] border-t border-border px-4 pt-2 md:order-none md:mx-0 md:mt-0 md:mr-auto md:w-auto md:border-0 md:p-0"
          >
            <ul className="flex justify-center gap-8 md:justify-start">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-md text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button asChild>
            <a href="#pricing">Start free trial</a>
          </Button>
        </div>
      </header>

      <main id="main">
        {/* 2. Hero */}
        <section className="relative isolate overflow-hidden">
          <div
            className={cn(
              container,
              "grid items-center gap-16 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-[1.1fr_1fr] lg:gap-12",
            )}
          >
            <div className="max-w-xl">
              <h1 className="text-[2.6rem] leading-[1.05] font-light tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.25rem]">
                Fill every class without living in your inbox
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
                Mooring handles bookings, waitlists and payments for your studio, so you can get
                back on the mat.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#pricing">
                    Start free trial
                    <ArrowRight aria-hidden />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#how-it-works">See how it works</a>
                </Button>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                14 days free. No card required.
              </p>
            </div>
            <ClassGrid />
          </div>
          <TideLines lines={5} className="absolute inset-x-0 bottom-0 -z-10 h-20 text-tide/15" />
        </section>

        {/* 3. Social proof */}
        <section aria-labelledby="proof" className="border-y border-border bg-card">
          <div className={cn(container, "py-14 md:py-16")}>
            <h2
              id="proof"
              className="text-center font-marker text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground"
            >
              Trusted by 1,200 independent studios
            </h2>
            <dl className="mt-10 grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse items-center gap-2 py-6 text-center sm:py-2"
                >
                  <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                  <dd className="text-5xl font-extralight tracking-[-0.04em] md:text-6xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 4. Features */}
        <section
          id="features"
          aria-labelledby="features-title"
          className={cn(container, "scroll-mt-28 py-20 md:py-28")}
        >
          <SectionMarker index="01" id="features-title">
            Features
          </SectionMarker>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature, i) => (
              <Card
                key={feature.title}
                className="group transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <CardHeader className="gap-0">
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-full border border-border text-tide transition-colors group-hover:border-tide/40">
                      <feature.icon aria-hidden className="size-5" strokeWidth={1.5} />
                    </span>
                    <span aria-hidden className="font-marker text-[11px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <CardTitle className="mt-10">{feature.title}</CardTitle>
                  <CardDescription className="mt-2">{feature.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. How it works */}
        <section
          id="how-it-works"
          aria-labelledby="how-title"
          className={cn(container, "scroll-mt-28 pb-20 md:pb-28")}
        >
          <SectionMarker index="02" id="how-title">
            How it works
          </SectionMarker>
          <ol className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <span
              aria-hidden
              className="absolute top-5 bottom-5 left-5 border-l border-dashed border-tide/40 md:hidden"
            />
            <span
              aria-hidden
              className="absolute top-5 right-0 left-5 hidden border-t border-dashed border-tide/40 md:block"
            />
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-16 md:pl-0">
                <span className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border border-tide/40 bg-background font-marker text-sm text-tide md:static">
                  {i + 1}
                </span>
                <p className="font-marker text-xs uppercase tracking-[0.18em] text-muted-foreground md:mt-8">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-2xl font-light tracking-tight">{step.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 6. Testimonial */}
        <section aria-label="Testimonial" className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className={cn(container, "relative py-20 md:py-28")}>
            <figure className="mx-auto max-w-4xl">
              <svg viewBox="0 0 40 32" aria-hidden className="h-8 w-10 text-accent" fill="currentColor">
                <path d="M0 32V19.2C0 8.6 5.3 2.2 16 0l2 4.4C11.6 6.2 8.6 10 8.4 16H16v16H0Zm22 0V19.2C22 8.6 27.3 2.2 38 0l2 4.4C33.6 6.2 30.6 10 30.4 16H38v16H22Z" />
              </svg>
              <blockquote className="mt-8 text-3xl leading-[1.15] font-light tracking-[-0.02em] text-balance md:text-5xl">
                <p>We went from forty DMs a day to zero. Classes fill themselves now.</p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span
                  aria-hidden
                  className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/25 font-marker text-xs"
                >
                  AR
                </span>
                <span className="text-primary-foreground/80">
                  <span className="font-medium text-primary-foreground">Ana Reyes</span>, owner of
                  Low Tide Yoga
                </span>
              </figcaption>
            </figure>
          </div>
          <TideLines lines={5} className="absolute inset-x-0 bottom-0 h-20 text-primary-foreground/10" />
        </section>

        {/* 7. Pricing */}
        <section
          id="pricing"
          aria-labelledby="pricing-title"
          className={cn(container, "scroll-mt-28 py-20 md:py-28")}
        >
          <SectionMarker index="03" id="pricing-title">
            Pricing
          </SectionMarker>
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={cn(
                  "gap-8 py-8",
                  plan.featured &&
                    "border-primary bg-primary text-primary-foreground shadow-[0_30px_60px_-30px_oklch(0.3_0.06_250/0.45)]",
                )}
              >
                <CardHeader className="px-8">
                  <CardTitle className="font-marker text-xs font-medium uppercase tracking-[0.22em]">
                    {plan.name}
                  </CardTitle>
                  <p className="mt-4 flex items-baseline gap-2">
                    <span className="text-6xl font-extralight tracking-[-0.04em]">{plan.price}</span>
                    <span
                      className={cn(
                        "text-sm",
                        plan.featured ? "text-primary-foreground/75" : "text-muted-foreground",
                      )}
                    >
                      per month
                    </span>
                  </p>
                </CardHeader>
                <CardContent className="px-8">
                  <ul
                    className={cn(
                      "space-y-3 border-t pt-6",
                      plan.featured ? "border-primary-foreground/15" : "border-border",
                    )}
                  >
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check
                          aria-hidden
                          className={cn("size-4 shrink-0", plan.featured ? "text-accent" : "text-tide")}
                          strokeWidth={2}
                        />
                        <span className="first-letter:uppercase">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-8">
                  <Button
                    asChild
                    size="lg"
                    variant={plan.featured ? "inverse" : "default"}
                    className="w-full"
                  >
                    <a href="#pricing">Start free trial</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* 8. FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className={cn(container, "scroll-mt-28 pb-20 md:pb-28")}
        >
          <SectionMarker index="04" id="faq-title">
            FAQ
          </SectionMarker>
          <Accordion type="single" collapsible className="mx-auto mt-6 max-w-3xl">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 9. Final call to action */}
        <section aria-labelledby="cta-title" className={cn(container, "pb-20 md:pb-28")}>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 md:py-24">
            <TideLines lines={8} className="absolute inset-x-0 top-0 h-32 text-primary-foreground/10" />
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="relative mx-auto size-10"
              fill="none"
            >
              <circle cx="12" cy="9" r="5" className="stroke-accent" strokeWidth="1.5" />
              <path d="M12 14v4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
            <h2
              id="cta-title"
              className="relative mx-auto mt-6 max-w-3xl text-4xl leading-[1.08] font-light tracking-[-0.03em] text-balance md:text-6xl"
            >
              Open your next class for booking today
            </h2>
            <Button asChild size="lg" variant="inverse" className="relative mt-10">
              <a href="#pricing">
                Start free trial
                <ArrowRight aria-hidden />
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="border-t border-border">
        <div
          className={cn(
            container,
            "flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between",
          )}
        >
          <Wordmark />
          <nav aria-label="Footer">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="font-marker text-xs text-muted-foreground">© 2026 Mooring</p>
        </div>
      </footer>
    </>
  );
}
