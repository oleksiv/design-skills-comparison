import { cn } from "cn"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight02Icon,
  Calendar03Icon,
  CreditCardIcon,
  Menu01Icon,
  Notification03Icon,
  QuoteDownIcon,
  Tick02Icon,
  UserMultiple02Icon,
} from "@hugeicons/core-free-icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/shadcn/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/app/shadcn/components/ui/avatar"
import { Badge } from "@/app/shadcn/components/ui/badge"
import { Button, buttonVariants } from "@/app/shadcn/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/shadcn/components/ui/card"
import { Progress } from "@/app/shadcn/components/ui/progress"
import { Separator } from "@/app/shadcn/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/shadcn/components/ui/sheet"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

const stats = [
  { value: "3.4M", label: "classes booked" },
  { value: "38%", label: "fewer no-shows" },
  { value: "6 hours", label: "saved per week" },
]

const features = [
  {
    icon: Calendar03Icon,
    title: "Online booking",
    description:
      "Members book and pay in two taps from a link, your site or Instagram.",
  },
  {
    icon: UserMultiple02Icon,
    title: "Automatic waitlists",
    description:
      "When someone cancels, the next person in line gets the spot and a notification.",
  },
  {
    icon: CreditCardIcon,
    title: "Memberships and passes",
    description:
      "Sell class packs, monthly memberships and drop-ins with one checkout.",
  },
]

const steps = [
  {
    title: "Add your schedule.",
    description: "Import it from a spreadsheet or build it in minutes.",
  },
  {
    title: "Share your booking link.",
    description:
      "Put it in your bio, on your site or on a poster at the door.",
  },
  {
    title: "Teach.",
    description: "Mooring takes care of reminders, payments and the waitlist.",
  },
]

const plans = [
  {
    name: "Studio",
    price: "$39",
    features: [
      "One location",
      "unlimited classes",
      "online payments",
      "email reminders",
    ],
    featured: false,
  },
  {
    name: "Collective",
    price: "$89",
    features: [
      "Up to five locations",
      "staff accounts",
      "SMS reminders",
      "priority support",
    ],
    featured: true,
  },
]

const faqs = [
  {
    question: "Can I import my existing members?",
    answer: "Yes. Upload a CSV and we match members to their passes.",
  },
  {
    question: "Which payment providers do you support?",
    answer: "Stripe and Square, with payouts to your own account.",
  },
  {
    question: "Is there a contract?",
    answer: "No. Plans are monthly and you can cancel at any time.",
  },
  {
    question: "Do my members need an app?",
    answer:
      "No. Booking works in any browser, with an optional app for regulars.",
  },
]

// Decorative schedule shown in the hero mock-up.
const schedule = [
  { time: "07:00", name: "Sunrise Vinyasa", booked: 14, capacity: 14, waitlist: 3 },
  { time: "09:30", name: "Reformer Pilates", booked: 9, capacity: 10, waitlist: 0 },
  { time: "12:15", name: "Lunchtime Flow", booked: 11, capacity: 16, waitlist: 0 },
  { time: "18:00", name: "Bouldering Basics", booked: 8, capacity: 8, waitlist: 2 },
]

function Wordmark() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2 rounded-lg text-lg font-semibold tracking-tight outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="size-8 shrink-0 text-primary"
      >
        <rect width="32" height="32" rx="10" className="fill-current" />
        <circle
          cx="16"
          cy="12.5"
          r="4.5"
          fill="none"
          strokeWidth="2.25"
          className="stroke-primary-foreground"
        />
        <path
          d="M6 22c2.5-2 5-2 7.5 0s5 2 7.5 0 5-2 5 0"
          fill="none"
          strokeWidth="2.25"
          strokeLinecap="round"
          className="stroke-primary-foreground"
        />
      </svg>
      Mooring
    </a>
  )
}

function Waves({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 80C180 40 360 120 540 80S900 40 1080 80s270 40 360 0"
        fill="none"
        strokeWidth="2"
        className="stroke-current opacity-60"
      />
      <path
        d="M0 112C200 72 400 152 600 112S1000 72 1200 112s180 20 240 0"
        fill="none"
        strokeWidth="2"
        className="stroke-current opacity-35"
      />
      <path
        d="M0 144C220 112 440 176 660 144S1100 112 1320 144s90 8 120 0"
        fill="none"
        strokeWidth="2"
        className="stroke-current opacity-20"
      />
    </svg>
  )
}

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
    >
      {children}
    </h2>
  )
}

function ScheduleMock() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
      <Card className="shadow-xl shadow-primary/10">
        <CardHeader>
          <CardTitle>Tuesday schedule</CardTitle>
          <CardDescription>Low Tide Yoga</CardDescription>
          <CardAction>
            <Badge variant="secondary">Today</Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          {schedule.map((item) => (
            <div key={item.name} className="flex gap-4">
              <span className="w-11 pt-0.5 text-xs text-muted-foreground tabular-nums">
                {item.time}
              </span>
              <Progress
                value={(item.booked / item.capacity) * 100}
                className="flex-1 gap-2"
              >
                <span className="truncate font-medium">{item.name}</span>
                <span className="ml-auto flex items-center gap-2 text-muted-foreground tabular-nums">
                  {item.waitlist > 0 && (
                    <Badge variant="outline">+{item.waitlist} waiting</Badge>
                  )}
                  {item.booked}/{item.capacity}
                </span>
              </Progress>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card
        size="sm"
        className="absolute -bottom-8 -left-6 hidden w-64 shadow-lg shadow-primary/10 sm:flex"
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <HugeiconsIcon icon={Notification03Icon} strokeWidth={2} className="size-4" />
            </span>
            Spot confirmed
          </CardTitle>
          <CardDescription>Sunrise Vinyasa, 07:00</CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default function MooringPage() {
  return (
    <div id="top" className="flex min-h-svh flex-col">
      {/* 1. Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
          <Wordmark />
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                nativeButton={false}
                render={<a href={link.href} />}
              >
                {link.label}
              </Button>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <Button nativeButton={false} render={<a href="#pricing" />}>
              Start free trial
            </Button>
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className="md:hidden"
                  />
                }
              >
                <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Mooring</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                  {navLinks.map((link) => (
                    <SheetClose
                      key={link.href}
                      nativeButton={false}
                      render={
                        <a
                          href={link.href}
                          className={buttonVariants({
                            variant: "ghost",
                            size: "lg",
                            className: "justify-start",
                          })}
                        />
                      }
                    >
                      {link.label}
                    </SheetClose>
                  ))}
                </nav>
                <SheetFooter>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <a href="#pricing" className={buttonVariants({ size: "lg" })} />
                    }
                  >
                    Start free trial
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. Hero */}
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,var(--color-secondary),transparent)]">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pt-16 pb-28 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:pb-36">
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Fill every class without living in your inbox
              </h1>
              <p className="max-w-xl text-lg text-pretty text-muted-foreground sm:text-xl">
                Mooring handles bookings, waitlists and payments for your
                studio, so you can get back on the mat.
              </p>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  size="lg"
                  nativeButton={false}
                  render={<a href="#pricing" />}
                >
                  Start free trial
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    strokeWidth={2}
                    data-icon="inline-end"
                  />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<a href="#how-it-works" />}
                >
                  See how it works
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                14 days free. No card required.
              </p>
            </div>
            <ScheduleMock />
          </div>
          <Waves className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full text-chart-2 sm:h-28" />
        </section>

        {/* 3. Social proof */}
        <section
          aria-label="Social proof"
          className="border-y border-border bg-muted/60"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-14 sm:px-8">
            <p className="text-center text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Trusted by 1,200 independent studios
            </p>
            <dl className="grid w-full gap-8 sm:grid-cols-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse items-center gap-1 text-center"
                >
                  <dt className="text-muted-foreground">{stat.label}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 4. Features */}
        <section
          aria-labelledby="features"
          className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-8 sm:py-28"
        >
          <SectionHeading id="features">Features</SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader className="gap-3">
                  <span className="mb-2 flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                    <HugeiconsIcon
                      icon={feature.icon}
                      strokeWidth={1.75}
                      className="size-6"
                    />
                  </span>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. How it works */}
        <section aria-labelledby="how-it-works" className="bg-secondary/50">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-8 sm:py-28">
            <SectionHeading id="how-it-works">How it works</SectionHeading>
            <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step, index) => (
                <li key={step.title} className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Badge>Step {index + 1}</Badge>
                    <Separator className="flex-1" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-pretty text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. Testimonial */}
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-8 sm:py-28">
          <figure className="flex flex-col items-center gap-8 text-center">
            <HugeiconsIcon
              icon={QuoteDownIcon}
              strokeWidth={1.5}
              aria-hidden="true"
              className="size-10 text-chart-3"
            />
            <blockquote className="text-2xl leading-snug font-medium tracking-tight text-balance sm:text-4xl">
              We went from forty DMs a day to zero. Classes fill themselves
              now.
            </blockquote>
            <figcaption className="flex items-center gap-3 text-muted-foreground">
              <Avatar size="lg">
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <span>
                <span className="font-medium text-foreground">Ana Reyes</span>,
                owner of Low Tide Yoga
              </span>
            </figcaption>
          </figure>
        </section>

        {/* 7. Pricing */}
        <section
          aria-labelledby="pricing"
          className="border-t border-border bg-muted/60"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-20 sm:px-8 sm:py-28">
            <SectionHeading id="pricing">Pricing</SectionHeading>
            <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={cn(plan.featured && "shadow-xl shadow-primary/10")}
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6">
                    <p className="flex items-baseline gap-2">
                      <span className="text-5xl font-semibold tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">per month</span>
                    </p>
                    <Separator />
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                            <HugeiconsIcon
                              icon={Tick02Icon}
                              strokeWidth={2.5}
                              aria-hidden="true"
                              className="size-3"
                            />
                          </span>
                          <span className="first-letter:uppercase">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      size="lg"
                      variant={plan.featured ? "default" : "outline"}
                      className="w-full"
                    >
                      Start free trial
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section
          aria-labelledby="faq"
          className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_2fr]"
        >
          <SectionHeading id="faq">FAQ</SectionHeading>
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 9. Final call to action */}
        <section className="px-4 pb-20 sm:px-8 sm:pb-28">
          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 overflow-hidden rounded-4xl bg-primary px-6 py-16 text-center text-primary-foreground sm:py-24">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              Open your next class for booking today
            </h2>
            <Button size="lg" variant="secondary">
              Start free trial
            </Button>
            <Waves className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full text-primary-foreground/40 sm:h-28" />
          </div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Wordmark />
          <nav aria-label="Footer" className="-mx-3 flex flex-wrap gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<a href={link.href} />}
              >
                {link.label}
              </Button>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">© 2026 Mooring</p>
        </div>
      </footer>
    </div>
  )
}
