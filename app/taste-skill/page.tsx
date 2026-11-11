/*
  tasteskill 2.5.1 build: Mooring (booking and scheduling software for small fitness studios)
  Kind: software (page type software, site-kind software)
  Deal: hero collage · palette moss-sand (a putty ground and an olive accent, the studio's cork mats
  and plants; made for the wellness trade) · type geist (Geist + Geist Mono) · radius soft ·
  nav-centre (dealt nav-cards, re-dealt: no photographs for its picture cards) · footer-statement ·
  close-type · rhythm dark-band · buttons solid · mark ring · lit ground sage · effect
  painterly-landscape in the hero frame · moment iris-opens on the dark band (how it works)
*/
import Image from "next/image";
import type { ReactNode } from "react";
import { FeatureTabs, HeroArt, HeroEnter, ImportLoop, IrisOpens, NavMenu } from "./client";
import instagram from "./icons/instagram.svg";
import square from "./icons/square.svg";
import stripe from "./icons/stripe.svg";

const MAIL = "mailto:hello@mooring.example?subject=Start%20free%20trial";

const wrap = "wrap mx-auto w-[min(100%-48px,1280px)] sm:w-[min(100%-128px,1280px)] lg:w-[min(100%-160px,1280px)]";
const box =
  "section relative box-border min-h-[calc(var(--hm,1)*100lvh)] pt-24 pb-12 sm:min-h-[calc(var(--h,1)*100svh)] sm:pt-[120px] sm:pb-[72px] lg:h-[calc(var(--h,1)*100svh)] lg:min-h-0";
const h2 =
  "text-[clamp(30px,1.714vw+23.3px,48px)] leading-[1.1] font-medium tracking-[-0.035em] text-balance [text-box:trim-start_cap_alphabetic]";
const ring = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--p-action)";
const btn = `inline-flex h-11 items-center justify-center rounded-lg px-6 text-base font-medium whitespace-nowrap transition-[translate,scale,background-color,border-color] duration-150 ease-(--ease) hover:-translate-y-px active:translate-y-px active:scale-[.985] active:duration-[90ms] ${ring}`;
const primary = `${btn} bg-(--p-action) text-(--p-action-ink) hover:bg-(--action-hover)`;
const secondary = `${btn} border border-(--line-strong) text-(--p-ink) hover:border-(--p-muted) hover:bg-(--line)`;
const navWord = `relative text-[15px] font-medium text-(--p-muted) transition-[color] duration-150 hover:text-(--p-ink) after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-150 hover:after:origin-left hover:after:scale-x-100 ${ring}`;

function Mark({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
    </svg>
  );
}

function Check({ className = "size-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 6.2l2.2 2.2 4.8-5" />
    </svg>
  );
}

function Chip({ tone = "plain", children }: { tone?: "plain" | "accent" | "full" | "line"; children: ReactNode }) {
  const t = {
    plain: "bg-(--ui-fill) text-(--ui-muted)",
    accent: "bg-(--ui-tint) text-(--p-accent)",
    full: "bg-(--p-accent) text-white",
    line: "border border-(--ui-border) text-(--ui-ink)",
  }[tone];
  return <span className={`inline-flex h-6 shrink-0 items-center rounded-full px-2 text-xs font-medium whitespace-nowrap ${t}`}>{children}</span>;
}

function Dots() {
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      <i className="size-2.5 rounded-full bg-(--ui-ink)/15" />
      <i className="size-2.5 rounded-full bg-(--ui-ink)/15" />
      <i className="size-2.5 rounded-full bg-(--ui-ink)/15" />
    </span>
  );
}

function Avatar({ name, tone = 0 }: { name: string; tone?: number }) {
  const tones = ["bg-[#d9e0cf] text-[#3b4a2b]", "bg-[#e6d8c4] text-[#5b4426]", "bg-[#d3dde0] text-[#2f4750]", "bg-[#e4d3cf] text-[#5a3530]"];
  const initials = name.split(" ").map((p) => p[0]).join("");
  return <span className={`grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-medium ${tones[tone % 4]}`}>{initials}</span>;
}

/* ------------------------------------------------------------------ the product's own screens */

const TODAY: [string, string, string, string, "plain" | "accent" | "full" | "line"][] = [
  ["Sunrise Vinyasa", "7:00 · Greta · Studio 1", "18 of 18", "Full", "full"],
  ["Mat Pilates", "9:30 · Jonas · Studio 2", "14 of 16", "2 spots", "accent"],
  ["Lunch Flow", "12:15 · Greta · Studio 1", "11 of 18", "7 spots", "accent"],
  ["Bouldering Intro", "16:00 · Theo · Wall B", "12 of 12", "Full", "full"],
  ["Reformer Basics", "17:30 · Paula · Studio 2", "8 of 8", "Waitlist 3", "line"],
  ["Power Flow", "18:45 · Theo · Studio 1", "15 of 18", "3 spots", "accent"],
  ["Yin and Breath", "19:30 · Paula · Studio 2", "16 of 18", "2 spots", "accent"],
  ["Candle Yin", "20:30 · Greta · Studio 1", "9 of 18", "9 spots", "accent"],
  ["Open Climb", "21:00 · Wall A", "22 of 30", "8 spots", "accent"],
];

function HeroWindow() {
  return (
    <div data-ui="window" className="overflow-hidden rounded-xl border border-(--ui-border) bg-(--ui-bg) text-(--ui-ink) shadow-(--ui-shadow)">
      <div className="flex h-10 items-center gap-3 border-b border-(--ui-line) px-4">
        <Dots />
        <span className="text-[13px] text-(--ui-muted)">
          Low Tide Yoga <span className="px-1">/</span> <b className="font-medium text-(--ui-ink)">Today</b>
        </span>
      </div>
      <div className="flex">
        <nav className="hidden w-[148px] shrink-0 flex-col gap-0.5 border-r border-(--ui-line) p-3 text-[13px] sm:flex">
          {["Today", "Schedule", "Members", "Passes", "Payments", "Reminders"].map((n, i) => (
            <span key={n} className={`flex h-8 items-center rounded-md px-2 ${i === 0 ? "bg-(--ui-fill) font-medium" : "text-(--ui-muted)"}`}>
              {n}
            </span>
          ))}
        </nav>
        <div className="min-w-0 flex-1 pr-12">
          <div className="flex items-center gap-3 px-4 pt-4 pb-3">
            <p className="text-[15px] font-medium">Thursday, 12 November</p>
            <Chip>9 classes</Chip>
          </div>
          <ul>
            {TODAY.map(([name, sub, count, chip, tone]) => (
              <li key={name} className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border-t border-(--ui-line) px-4 py-2.5">
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-medium">{name}</span>
                  <span className="block truncate text-xs text-(--ui-muted)">{sub}</span>
                </span>
                <span className="hidden text-xs text-(--ui-muted) tabular-nums sm:block">{count}</span>
                <Chip tone={tone}>{chip}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const BOOKINGS: [string, string, string, "plain" | "accent" | "full" | "line"][] = [
  ["Sam Ruiz", "Reformer Basics · Thu 17:30", "Booked", "full"],
  ["Lea Brandt", "Reformer Basics · Thu 17:30", "Cancelled", "plain"],
  ["Noor Haddad", "Reformer Basics · Thu 17:30", "Waitlist 1", "line"],
  ["Kofi Mensah", "Bouldering Intro · Thu 16:00", "Paid", "accent"],
  ["Hana Sato", "Lunch Flow · Thu 12:15", "Checked in", "accent"],
  ["Felix Moreau", "Power Flow · Thu 18:45", "Booked", "full"],
  ["Ruth Adler", "Yin and Breath · Thu 19:30", "Paid", "accent"],
  ["Tomás Lind", "Sunrise Vinyasa · Fri 7:00", "Booked", "full"],
  ["Mira Holm", "Mat Pilates · Fri 9:30", "Paid", "accent"],
  ["Jonah Price", "Open Climb · Fri 21:00", "Booked", "full"],
  ["Paula Varga", "Weekend Flow · Sat 8:30", "Paid", "accent"],
];

type Slot = [number, string, string, boolean];
const WEEK: [string, Slot[]][] = [
  ["Mon 9", [[7, "Vinyasa", "18/18", true], [12.25, "Lunch Flow", "9/18", false], [18, "Bouldering", "12/12", true]]],
  ["Tue 10", [[9.5, "Pilates", "16/16", true], [12.25, "Lunch Flow", "10/18", false], [17.5, "Reformer", "8/8", true]]],
  ["Wed 11", [[7, "Vinyasa", "17/18", false], [12.25, "Lunch Flow", "12/18", false], [18, "Bouldering", "9/12", false]]],
  ["Thu 12", [[7, "Vinyasa", "18/18", true], [9.5, "Pilates", "14/16", false], [12.25, "Lunch Flow", "11/18", false], [17.5, "Reformer", "8/8", true]]],
  ["Fri 13", [[7, "Vinyasa", "12/18", false], [9.5, "Pilates", "11/16", false], [18, "Bouldering", "7/12", false]]],
  ["Sat 14", [[8.5, "Slow Flow", "20/20", true], [10, "Pilates", "13/16", false], [11.5, "Kids Climb", "6/10", false]]],
];
const HOURS = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

function AppFrame() {
  return (
    <div
      className="ui app frame mt-8 grid h-[300px] grid-cols-1 overflow-hidden rounded-2xl border border-(--ui-border) bg-(--ui-bg) text-(--ui-ink) shadow-(--ui-shadow) sm:mt-12 sm:h-[520px] sm:grid-rows-[252px_minmax(0,1fr)] lg:h-auto lg:min-h-0 lg:flex-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:grid-rows-1 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
      role="img"
      aria-label="Mooring's bookings list beside the week's class schedule for Low Tide Yoga, with full classes marked"
    >
      {/* list pane: bookings */}
      <div className="relative hidden min-h-0 overflow-hidden border-(--ui-line) sm:block lg:border-r" aria-hidden="true">
        <div data-ui="window">
        <div className="flex h-10 items-center gap-3 border-b border-(--ui-line) px-4">
          <Dots />
          <span className="text-[13px] text-(--ui-muted)">
            Low Tide Yoga <span className="px-1">/</span> <b className="font-medium text-(--ui-ink)">Bookings</b>
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[124px_1fr]">
          <nav className="hidden border-r border-(--ui-line) p-3 text-[13px] xl:grid xl:content-start xl:gap-0.5">
            {["All", "Today", "Waitlists", "Unpaid", "Cancelled"].map((n, i) => (
              <span key={n} className={`flex h-8 items-center rounded-md px-2 ${i === 0 ? "bg-(--ui-fill) font-medium" : "text-(--ui-muted)"}`}>
                {n}
              </span>
            ))}
          </nav>
          <ul className="min-w-0">
            {BOOKINGS.map(([who, sub, st, tone], i) => (
              <li key={who} className="flex items-center gap-3 border-b border-(--ui-line) px-4 py-2.5">
                <Avatar name={who} tone={i} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-medium">{who}</span>
                  <span className="block truncate text-xs text-(--ui-muted)">{sub}</span>
                </span>
                <Chip tone={tone}>{st}</Chip>
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-(--ui-bg)" />
      </div>
      {/* open pane: the week */}
      <div className="relative min-h-0 overflow-hidden border-t border-(--ui-line) sm:border-t lg:border-t-0" aria-hidden="true">
        <div data-ui="calendar">
        <div className="flex h-10 items-center gap-3 border-b border-(--ui-line) px-4">
          <span className="text-[13px] font-medium">Schedule</span>
          <Chip tone="line">9 to 14 Nov</Chip>
          <span className="ml-auto hidden text-xs text-(--ui-muted) sm:inline">Studio 1, Studio 2, Wall</span>
        </div>
        {/* phone: today as a list */}
        <ul className="sm:hidden">
          {TODAY.slice(0, 6).map(([name, sub, , chip, tone]) => (
            <li key={name} className="flex items-center gap-3 border-b border-(--ui-line) px-4 py-2.5">
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-medium">{name}</span>
                <span className="block truncate text-xs text-(--ui-muted)">{sub}</span>
              </span>
              <Chip tone={tone}>{chip}</Chip>
            </li>
          ))}
        </ul>
        {/* tablet and up: the week grid */}
        <div className="hidden grid-cols-[44px_repeat(6,minmax(0,1fr))] sm:grid">
          <span className="border-b border-(--ui-line)" />
          {WEEK.map(([d]) => (
            <span key={d} className={`flex h-9 items-center border-b border-l border-(--ui-line) px-2 text-xs ${d === "Thu 12" ? "font-medium text-(--p-accent)" : "text-(--ui-muted)"}`}>
              {d}
            </span>
          ))}
          <div className="relative col-span-7 grid grid-cols-subgrid">
            <div className="grid">
              {HOURS.map((h) => (
                <span key={h} className="h-11 pt-1 pr-2 text-right font-(family-name:--font-geist-mono) text-[11px] text-(--ui-muted) tabular-nums">
                  {h}:00
                </span>
              ))}
            </div>
            {WEEK.map(([d, slots]) => (
              <div key={d} className={`relative border-l border-(--ui-line) ${d === "Thu 12" ? "bg-(--ui-tint)/40" : ""}`}>
                {HOURS.map((h) => (
                  <span key={h} className="block h-11 border-b border-(--ui-line)/60" />
                ))}
                {slots.map(([at, name, count, full]) => (
                  <span
                    key={at}
                    className={`absolute inset-x-1 h-[40px] overflow-hidden rounded-md px-1.5 py-1 text-[11px] leading-4 ${full ? "bg-(--p-accent) text-white" : "border border-(--ui-border) bg-(--ui-bg)"}`}
                    style={{ top: `${(at - 7) * 44 + 2}px` }}
                  >
                    <span className="block truncate font-medium">{name}</span>
                    <span className={`block tabular-nums ${full ? "text-white/80" : "text-(--ui-muted)"}`}>{count}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-(--ui-bg)" />
      </div>
    </div>
  );
}

// a screen in the features frame: one window rising out of the frame's foot, cut by it under the fade
const screenCard =
  "absolute inset-x-6 top-6 mx-auto max-w-[360px] rounded-t-2xl border border-b-0 border-(--ui-border) bg-(--ui-bg) p-4 pb-24 text-(--ui-ink) shadow-(--ui-shadow) sm:top-10 lg:top-14";

function ClassRows({ rows }: { rows: [string, string, string][] }) {
  return (
    <ul>
      {rows.map(([n, t, s]) => (
        <li key={n} className="flex items-center gap-3 border-t border-(--ui-line) py-2.5">
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[13px] font-medium">{n}</span>
            <span className="block text-xs text-(--ui-muted)">{t}</span>
          </span>
          <span className="text-xs text-(--ui-muted)">{s}</span>
        </li>
      ))}
    </ul>
  );
}

function ScreenBooking() {
  return (
    <div data-ui="window" className={screenCard}>
      <div className="flex items-center gap-2">
        <Image src={instagram} alt="" width={20} height={20} unoptimized className="size-5" />
        <p className="text-[13px] font-medium">Low Tide Yoga</p>
        <span className="ml-auto text-xs text-(--ui-muted)">Book a class</span>
      </div>
      <div className="mt-3 flex gap-2">
        {["Thu 12", "Fri 13", "Sat 14"].map((d, i) => (
          <span key={d} className={`flex h-8 items-center rounded-md px-3 text-xs font-medium ${i === 0 ? "bg-(--ui-ink) text-(--ui-bg)" : "border border-(--ui-border)"}`}>
            {d}
          </span>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-(--p-accent) bg-(--ui-tint) p-3">
        <div className="flex items-center gap-3">
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-medium">Lunch Flow</span>
            <span className="block text-xs text-(--ui-muted)">12:15 · 45 min · Greta</span>
          </span>
          <span className="text-xs text-(--ui-muted)">7 spots</span>
        </div>
        <span className="mt-3 flex h-10 items-center justify-center rounded-lg bg-(--p-accent) text-[13px] font-medium text-white">Book and pay</span>
      </div>
      <div className="mt-3">
        <ClassRows
          rows={[
            ["Reformer Basics", "17:30 · 50 min", "Waitlist"],
            ["Power Flow", "18:45 · 60 min", "3 spots"],
            ["Yin and Breath", "19:30 · 75 min", "2 spots"],
            ["Candle Yin", "20:30 · 60 min", "9 spots"],
            ["Open Climb", "21:00 · 90 min", "8 spots"],
          ]}
        />
      </div>
    </div>
  );
}

function ScreenWaitlist() {
  return (
    <div data-ui="notify" className="absolute inset-x-6 top-6 mx-auto max-w-[380px] sm:top-10 lg:top-14">
      <div className="ml-auto w-[88%] rounded-xl border border-(--ui-border) bg-(--ui-bg) p-3 text-[13px] leading-5 text-(--ui-ink) shadow-(--ui-shadow)">
        <p className="flex items-center gap-2 text-xs text-(--ui-muted)">
          <Mark className="size-3.5 text-(--ui-ink)" /> Mooring · now
        </p>
        <p className="mt-1">Sam, a spot opened in Reformer Basics at 17:30. You are booked in.</p>
      </div>
      <div className="mt-3 rounded-t-2xl border border-b-0 border-(--ui-border) bg-(--ui-bg) p-4 pb-24 text-(--ui-ink) shadow-(--ui-shadow)">
        <div className="flex items-center gap-2">
          <p className="text-[13px] font-medium">Reformer Basics · Thu 17:30</p>
          <span className="ml-auto"><Chip tone="full">8 of 8</Chip></span>
        </div>
        <p className="mt-3 text-xs text-(--ui-muted)">Waitlist</p>
        <ul className="mt-1">
          {[
            ["Sam Ruiz", "Moved in", "accent"],
            ["Noor Haddad", "Next", "line"],
            ["Kofi Mensah", "Waiting", "plain"],
            ["Ruth Adler", "Waiting", "plain"],
            ["Jonah Price", "Waiting", "plain"],
            ["Mira Holm", "Waiting", "plain"],
          ].map(([n, s, t], i) => (
            <li key={n} className="flex items-center gap-3 border-t border-(--ui-line) py-2">
              <span className="w-4 text-xs text-(--ui-muted) tabular-nums">{i + 1}</span>
              <Avatar name={n} tone={i} />
              <span className="flex-1 text-[13px]">{n}</span>
              <Chip tone={t as "accent" | "line" | "plain"}>{s}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ScreenPasses() {
  return (
    <div data-ui="window" className={screenCard}>
      <p className="text-[13px] font-medium">Checkout</p>
      <div className="mt-3 rounded-xl border border-(--p-accent) bg-(--ui-tint) p-3">
        <span className="block text-[13px] font-medium">Monthly membership</span>
        <span className="block text-xs text-(--ui-muted)">Unlimited classes, renews monthly</span>
        <span className="mt-3 flex h-10 items-center justify-center rounded-lg bg-(--p-accent) text-[13px] font-medium text-white">Pay and start today</span>
        <span className="mt-2 flex items-center justify-center gap-1.5 text-xs text-(--ui-muted)">
          Payments by <Image src={stripe} alt="" width={36} height={15} unoptimized className="h-[15px] w-auto" />
        </span>
      </div>
      <p className="mt-4 text-xs text-(--ui-muted)">Other passes</p>
      <div className="mt-1">
        <ClassRows
          rows={[
            ["10-class pack", "Use within 6 months", "Choose"],
            ["5-class pack", "Use within 3 months", "Choose"],
            ["Drop-in", "One class", "Choose"],
            ["Climbing day pass", "Wall A and B", "Choose"],
          ]}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ how it works: the three panels */

function PanelLink() {
  return (
    <div data-ui="window" className="absolute inset-x-6 top-14 rounded-xl border border-(--ui-border) bg-(--ui-bg) p-4 text-(--ui-ink) shadow-(--ui-shadow)" aria-hidden="true">
      <div className="flex items-center gap-2">
        <Image src={instagram} alt="" width={18} height={18} unoptimized className="size-[18px]" />
        <span className="text-[13px] font-medium">Low Tide Yoga</span>
        <svg viewBox="0 0 21 21" className="ml-auto size-11 text-(--ui-ink)" shapeRendering="crispEdges" fill="currentColor">
          <path d="M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zM15 1v5h5V1zM16 2h3v3h-3zM0 14h7v7H0zM1 15v5h5v-5zM2 16h3v3H2zM8 0h2v2H8zM11 1h2v3h-2zM9 3h2v2H9zM8 6h1v2H8zM10 6h3v1h-3zM0 8h2v1H0zM3 8h3v2H3zM8 9h2v2H8zM11 8h2v2h-2zM14 8h2v1h-2zM17 8h4v2h-4zM1 10h1v2H1zM6 11h2v1H6zM12 11h3v2h-3zM16 11h2v1h-2zM19 11h2v3h-2zM8 13h3v1H8zM14 14h2v2h-2zM17 14h1v3h-1zM8 15h2v3H8zM11 15h2v2h-2zM19 16h2v2h-2zM12 18h4v1h-4zM8 19h3v2H8zM14 20h2v1h-2zM17 19h4v2h-4z" />
        </svg>
      </div>
      <span className="mt-3 flex h-9 items-center justify-center gap-1.5 rounded-lg bg-(--p-accent) text-xs font-medium text-white">
        <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M6.5 9.5l3-3M7 4.5l1-1a2.8 2.8 0 0 1 4 4l-1 1M9 11.5l-1 1a2.8 2.8 0 0 1-4-4l1-1" />
        </svg>
        Book a class
      </span>
      <p className="mt-3 border-t border-(--ui-line) pt-2 text-xs text-(--ui-muted)">Link in bio · on your site · on the poster</p>
    </div>
  );
}

function PanelTeach() {
  return (
    <div data-ui="checklist" className="absolute inset-x-6 top-14 rounded-xl border border-(--ui-border) bg-(--ui-bg) p-4 text-(--ui-ink) shadow-(--ui-shadow)" aria-hidden="true">
      <p className="text-[13px] font-medium">Sunrise Vinyasa · 7:00</p>
      <ul className="mt-2">
        {[
          ["Reminders sent", "18"],
          ["Paid", "18 of 18"],
          ["Waitlist", "2 waiting"],
        ].map(([k, v]) => (
          <li key={k} className="flex items-center gap-2 border-t border-(--ui-line) py-2 text-[13px]">
            <span className="grid size-4 place-items-center rounded-full bg-(--ui-tint) text-(--p-accent)">
              <Check className="size-2.5" />
            </span>
            {k}
            <span className="ml-auto text-xs text-(--ui-muted) tabular-nums">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ FAQ: where the money and members go (a still hub, pulses on hover) */

function PaymentsHub() {
  const node = "absolute flex -translate-y-1/2 items-center gap-2 rounded-lg border border-(--ui-border) bg-(--ui-bg) px-2.5 py-2 text-xs font-medium text-(--ui-ink) shadow-(--ui-shadow) sm:text-[13px]";
  const lines = ["M150 50 C190 50 190 120 222 120", "M150 120 L222 120", "M150 190 C190 190 190 120 222 120", "M298 120 L340 120"];
  return (
    <div
      className="frame group relative mt-8 aspect-square overflow-hidden rounded-[20px] bg-(--ground-bg) sm:aspect-[4/1] lg:mt-10 lg:aspect-square"
      role="img"
      aria-label="Payments from Stripe or Square and members from a CSV file going into Mooring, with payouts to the studio's own account"
    >
      <svg viewBox="0 0 480 240" preserveAspectRatio="none" className="absolute inset-0 size-full" fill="none" aria-hidden="true">
        {lines.map((d) => (
          <g key={d}>
            <path d={d} stroke="color-mix(in oklab, var(--ground-ink) 38%, transparent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            <path
              d={d}
              stroke="var(--p-accent)"
              strokeWidth="2"
              strokeDasharray="14 206"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-hover:animate-[ts-pulse_3.2s_linear_infinite] motion-reduce:hidden"
            />
          </g>
        ))}
      </svg>
      <span className={`${node} top-[20.8%] left-[4%]`}>
        <Image src={stripe} alt="" width={40} height={17} unoptimized className="h-[15px] w-auto sm:h-[17px]" />
      </span>
      <span className={`${node} top-1/2 left-[4%]`}>
        <Image src={square} alt="" width={16} height={16} unoptimized className="size-4" />
        Square
      </span>
      <span className={`${node} top-[79.2%] left-[4%]`}>
        <svg viewBox="0 0 24 24" className="size-4 text-[#1f7a46]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
          <path d="M14 2v5a1 1 0 0 0 1 1h5M8 13h2m4 0h2m-8 4h2m4 0h2" />
        </svg>
        members.csv
      </span>
      <span className="absolute top-1/2 left-[46.25%] grid size-[clamp(48px,15.8%,76px)] -translate-y-1/2 place-items-center rounded-2xl bg-(--p-ink) text-(--p-bg) shadow-(--ui-shadow)">
        <Mark className="size-1/2" />
      </span>
      <span className={`${node} top-1/2 right-[4%]`}>
        <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 6.5 8 3l6 3.5M3 7v5M6.3 7v5M9.7 7v5M13 7v5M2 13.5h12" />
        </svg>
        Payouts
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ FAQ: members imported from a CSV, matched to their passes */

function ImportPanel() {
  const rows: [string, string, string][] = [
    ["Hana Sato", "10-class pack", "7 left"],
    ["Kofi Mensah", "Monthly membership", "Active"],
    ["Ruth Adler", "5-class pack", "2 left"],
    ["Felix Moreau", "Monthly membership", "Active"],
    ["Mira Holm", "Climbing day pass", "1 left"],
    ["Jonah Price", "10-class pack", "9 left"],
    ["Noor Haddad", "Drop-in", "Paid"],
  ];
  return (
    <div
      className="frame relative mt-8 aspect-square overflow-hidden rounded-[20px] bg-(--ground-bg) sm:aspect-[3/1] lg:mt-12 lg:aspect-square"
      role="img"
      aria-label="A members file imported into Mooring: 48 of 48 members matched to their class packs and memberships"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_calc(100%-96px),transparent)]" aria-hidden="true">
      <div
        data-ui="window"
        className="absolute inset-x-6 top-6 rounded-t-xl border border-b-0 border-(--ui-border) bg-(--ui-bg) p-4 pb-24 text-(--ui-ink) shadow-(--ui-shadow) lg:top-10"
      >
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="size-5 text-[#1f7a46]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
            <path d="M14 2v5a1 1 0 0 0 1 1h5M8 13h2m4 0h2m-8 4h2m4 0h2" />
          </svg>
          <p className="text-[13px] font-medium">members.csv</p>
          <span className="ml-auto"><Chip tone="accent">48 of 48 matched</Chip></span>
        </div>
        <ul className="mt-3">
          {rows.map(([n, pass, left], i) => (
            <li key={n} className="flex items-center gap-3 border-t border-(--ui-line) py-2">
              <Avatar name={n} tone={i} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-medium">{n}</span>
                <span className="block truncate text-xs text-(--ui-muted)">{pass}</span>
              </span>
              <span className="text-xs text-(--ui-muted) tabular-nums">{left}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ the page */

const FEATURES = [
  {
    title: "Online booking",
    text: "Members book and pay in two taps from a link, your site or Instagram.",
    label: "A member's booking page for Low Tide Yoga, opened from Instagram: Thursday's classes with Lunch Flow picked and a Book and pay button",
    screen: <ScreenBooking />,
  },
  {
    title: "Automatic waitlists",
    text: "When someone cancels, the next person in line gets the spot and a notification.",
    label: "Reformer Basics is full; Sam moved in from the waitlist and got a message that a spot opened",
    screen: <ScreenWaitlist />,
  },
  {
    title: "Memberships and passes",
    text: "Sell class packs, monthly memberships and drop-ins with one checkout.",
    label: "One checkout offering a monthly membership, class packs and a drop-in, paid through Stripe",
    screen: <ScreenPasses />,
  },
];

const STEPS = [
  { title: "Add your schedule", text: "Import it from a spreadsheet or build it in minutes.", label: "A schedule file imported: 24 classes added", panel: <ImportLoop /> },
  { title: "Share your booking link", text: "Put it in your bio, on your site or on a poster at the door.", label: "The booking link in an Instagram bio and as a code on a poster", panel: <PanelLink /> },
  { title: "Teach", text: "Mooring takes care of reminders, payments and the waitlist.", label: "Sunrise Vinyasa: reminders sent to 18, all 18 paid, 2 on the waitlist", panel: <PanelTeach /> },
];

const PLANS = [
  { name: "Studio", price: "$39", items: ["One location", "Unlimited classes", "Online payments", "Email reminders"] },
  { name: "Collective", price: "$89", items: ["Up to five locations", "Staff accounts", "SMS reminders", "Priority support"] },
];

const FAQ = [
  ["Can I import my existing members?", "Yes. Upload a CSV and we match members to their passes."],
  ["Which payment providers do you support?", "Stripe and Square, with payouts to your own account."],
  ["Is there a contract?", "No. Plans are monthly and you can cancel at any time."],
  ["Do my members need an app?", "No. Booking works in any browser, with an optional app for regulars."],
];

const HEADLINE = "Fill every class without living in your inbox";
const hideForEntrance = "motion-safe:[html.m-enter:not(.m-enter-done)_&]:opacity-0";

export default function Page() {
  return (
    <>
      <header className="nav fixed inset-x-0 top-0 z-10 h-14 border-b border-(--line) bg-(--p-bg) sm:h-[72px]">
        <div className={`${wrap} relative flex h-full items-center gap-3`}>
          <a
            href="#top"
            className="skip-link absolute top-1/2 left-0 z-20 -translate-y-1/2 rounded-lg bg-(--p-ink) px-4 py-2.5 text-[15px] font-medium text-(--p-bg) not-focus:sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--p-action)"
          >
            Skip to content
          </a>
          <a href="#top" className={`nav__logo flex h-11 items-center gap-2 text-[20px] font-medium tracking-[-0.03em] ${ring}`} aria-label="Mooring, to the top">
            <Mark />
            Mooring
          </a>
          <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <ul className="flex items-center gap-8">
              <li><a href="#features" className={navWord}>Features</a></li>
              <li><a href="#pricing" className={navWord}>Pricing</a></li>
              <li><a href="#faq" className={navWord}>FAQ</a></li>
            </ul>
          </nav>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <a href={MAIL} className={`${primary} px-4 text-[15px] max-[359px]:hidden sm:px-6`}>
              Start free trial
            </a>
            <NavMenu cta={<a href={MAIL} className={`${primary} w-full`}>Start free trial</a>} />
          </div>
        </div>
      </header>

      <main id="top">
        {/* 1 · hero: collage (deal.mjs) */}
        <section className="hero relative isolate box-border grid min-h-svh pt-24 pb-6 sm:h-svh sm:pt-[120px] sm:pb-16" data-enter aria-labelledby="hero-h">
          <HeroEnter />
          <div className={`${wrap} flex min-h-0 flex-col`}>
            <div className="hero-text flex min-h-0 flex-1 flex-col lg:grid lg:grid-cols-12 lg:gap-x-6">
              <div className="hero__text self-start lg:col-span-5">
                <h1
                  id="hero-h"
                  className="text-[clamp(40px,2.286vw+31.09px,64px)] leading-[1.02] font-medium tracking-[-0.045em] text-balance [text-box:trim-start_cap_alphabetic]"
                >
                  {HEADLINE.split(" ").map((w, i, a) => (
                    <span key={i}>
                      <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
                        <span data-w className="inline-block motion-safe:[html.m-enter:not(.m-enter-done)_&]:translate-y-[110%]">
                          {w}
                        </span>
                      </span>
                      {i < a.length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
                <p data-enter-item className={`hero__lead mt-6 max-w-[42ch] text-[clamp(17px,.286vw+15.89px,20px)] leading-[1.5] text-pretty ${hideForEntrance}`}>
                  Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.
                </p>
                <div className="btn-row mt-8 flex flex-col gap-3 min-[420px]:flex-row">
                  <a data-enter-item href={MAIL} className={`${primary} ${hideForEntrance}`}>
                    Start free trial
                  </a>
                  <a data-enter-item href="#how" className={`${secondary} ${hideForEntrance}`}>
                    See how it works
                  </a>
                </div>
                <p data-enter-item className={`hero__proof mt-6 text-[14px] text-(--p-muted) ${hideForEntrance}`}>
                  14 days free. No card required.
                </p>
              </div>
              <HeroArt
                label="Mooring's day view for Low Tide Yoga: nine classes, two full and one with a waitlist, and a card showing a cancelled spot filled from the waitlist"
                window={<HeroWindow />}
              />
            </div>
          </div>
        </section>

        {/* 2 · social proof, with the product's app frame */}
        <section id="proof" className={`${box} [--h:1] [--hm:1]`} aria-labelledby="proof-h">
          <div className={`${wrap} flex h-full flex-col`}>
            <div className="grid grid-cols-12 items-start gap-x-6">
              <h2 id="proof-h" className={`${h2} col-span-12 lg:col-span-5`}>
                Trusted by 1,200 independent studios
              </h2>
              <ul className="col-span-12 mt-8 grid grid-cols-3 gap-3 sm:gap-6 lg:col-span-6 lg:col-start-7 lg:mt-0">
                {[
                  ["3.4M", "classes booked"],
                  ["38%", "fewer no-shows"],
                  ["6 hours", "saved per week"],
                ].map(([v, l]) => (
                  <li key={l}>
                    <p className="text-[clamp(28px,.952vw+24.3px,38px)] leading-none font-medium tracking-[-0.035em] whitespace-nowrap tabular-nums [text-box:trim-start_cap_alphabetic]">
                      {v}
                    </p>
                    <p className="mt-3 text-base leading-6 text-(--p-muted)">{l}</p>
                  </li>
                ))}
              </ul>
            </div>
            <AppFrame />
          </div>
        </section>

        {/* 3 · features: tabs-tour, click only */}
        <section id="features" className={`${box} [--h:1] [--hm:1]`} aria-labelledby="features-h">
          <div className={wrap}>
            <div className="grid grid-cols-12 items-start gap-x-6">
              <FeatureTabs
                head={
                  <h2 id="features-h" className={h2}>
                    Features
                  </h2>
                }
                tabs={FEATURES}
              />
            </div>
          </div>
        </section>

        {/* 4 · how it works: the dark band, iris-opens; the testimonial merged as its last block */}
        <section
          id="how"
          className={`${box} bg-(--p-inv-bg) text-(--p-inv-ink) [--h:1] [--hm:2] sm:[--h:2] lg:[--h:1]`}
          aria-labelledby="how-h"
          data-moment="iris-opens"
          data-moment-opts='{"from": "base"}'
        >
          <IrisOpens hostId="how" />
          <div className={`${wrap} relative z-[1]`}>
            <h2 id="how-h" data-iris-block className={h2}>
              How it works
            </h2>
            <ol className="mt-8 grid grid-cols-1 gap-8 sm:gap-10 lg:mt-12 lg:grid-cols-3 lg:gap-6">
              {STEPS.map((s, i) => (
                <li key={s.title} data-iris-block className="card card--open flex flex-col">
                  <span className="grid size-7 place-items-center rounded-full border border-(--inv-line-strong) text-[13px] font-medium tabular-nums">{i + 1}</span>
                  <h3 className="mt-4 text-[18px] leading-7 font-medium lg:text-[20px]">{s.title}</h3>
                  <p className="mt-1 text-base leading-[26px]">{s.text}</p>
                  <div className="panel relative mt-5 h-[184px] overflow-hidden rounded-[20px] bg-(--ground-bg) xl:h-[200px]" role="img" aria-label={s.label}>
                    {s.panel}
                  </div>
                </li>
              ))}
            </ol>
            <figure data-iris-block className="mt-12 grid grid-cols-12 items-end gap-x-6 lg:mt-16">
              <blockquote className="col-span-12 text-[clamp(24px,.381vw+22.5px,28px)] leading-[1.3] font-medium tracking-[-0.02em] text-balance lg:col-span-8">
                “We went from forty DMs a day to zero. Classes fill themselves now.”
              </blockquote>
              <div className="person col-span-12 mt-6 flex items-center gap-3 lg:col-span-4 lg:col-start-9 lg:mt-0">
                <span className="grid size-10 place-items-center rounded-full bg-(--ground-bg) text-sm font-medium text-(--ground-ink)" aria-hidden="true">
                  AR
                </span>
                <p className="text-base">
                  Ana Reyes, <span className="text-(--p-inv-muted)">owner of Low Tide Yoga</span>
                </p>
              </div>
            </figure>
          </div>
        </section>

        {/* 5 · pricing-two */}
        <section id="pricing" className={`${box} [--h:1] [--hm:2]`} aria-labelledby="pricing-h">
          <div className={wrap}>
            <div className="grid grid-cols-12 items-start gap-x-6 gap-y-6">
              <div className="col-span-12 lg:col-span-4">
                <h2 id="pricing-h" className={h2}>
                  Pricing
                </h2>
                <p className="mt-4 text-base leading-[26px] text-(--p-muted) lg:mt-6">14 days free. No card required.</p>
                <PaymentsHub />
              </div>
              {PLANS.map((p, i) => (
                <article
                  key={p.name}
                  className={`card col-span-12 flex flex-col rounded-[20px] border border-(--line) bg-(--p-surface) p-6 transition-[translate,border-color] duration-[180ms] ease-(--ease) hover:-translate-y-0.5 hover:border-(--line-strong) sm:col-span-6 lg:col-span-4 lg:p-8 ${i === 0 ? "lg:col-start-5" : "lg:col-start-9"}`}
                >
                  <h3 className="text-[20px] leading-7 font-medium">{p.name}</h3>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="text-[clamp(28px,.952vw+24.3px,38px)] leading-none font-medium tracking-[-0.035em] tabular-nums">{p.price}</span>
                    <span className="text-base text-(--p-muted)">per month</span>
                  </p>
                  <ul className="mt-8 mb-8">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 border-b border-(--line) py-3 text-base first:border-t">
                        <Check className="size-3.5 shrink-0 text-(--p-accent)" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a href={MAIL} className={`${secondary} mt-auto w-full`}>
                    Start free trial
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · faq, every answer open, beside where payments and members go */}
        <section id="faq" className={`${box} [--h:1] [--hm:2]`} aria-labelledby="faq-h">
          <div className={wrap}>
            <div className="grid grid-cols-12 items-start gap-x-6">
              <div className="col-span-12 lg:col-span-5">
                <h2 id="faq-h" className={h2}>
                  FAQ
                </h2>
                <ImportPanel />
              </div>
              <dl className="faq col-span-12 mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0">
                {FAQ.map(([q, a]) => (
                  <div key={q} className="faq__item border-b border-(--line) py-6 first:pt-0">
                    <dt className="text-[18px] leading-7 font-medium lg:text-[20px]">{q}</dt>
                    <dd className="mt-2 text-base leading-[26px]">{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      {/* 7 · footer.closing: footer-statement on the lit ground, close-type */}
      <footer
        id="contact"
        className="closing relative box-border flex min-h-lvh flex-col bg-(--ground-bg) pt-24 pb-12 text-(--ground-ink) sm:min-h-svh sm:pt-[120px] sm:pb-[72px] lg:mx-2 lg:mb-2 lg:h-[calc(100svh-8px)] lg:min-h-0 lg:rounded-[20px]"
        aria-labelledby="close-h"
      >
        <div className="wrap mx-auto flex w-[min(100%-48px,1280px)] flex-1 flex-col sm:w-[min(100%-128px,1280px)] lg:w-[min(100%-144px,1280px)]">
          <div className="closing__cta">
            <h2 id="close-h" className={h2}>
              Open your next class for booking today
            </h2>
            <a
              href={MAIL}
              className={`${primary} btn--xl group/xl mt-8 h-12 w-full gap-3 text-[18px] hover:-translate-y-0.5 lg:mt-12 lg:h-[88px] lg:rounded-xl lg:text-[32px] lg:tracking-[-0.02em]`}
            >
              Start free trial
              <svg
                viewBox="0 0 24 24"
                className="m-arrow size-5 transition-transform duration-150 ease-(--ease) group-hover/xl:translate-x-[3px] lg:size-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="mt-auto grid grid-cols-12 gap-x-6 gap-y-8 pt-16 sm:pt-24">
            <a href="#top" className={`col-span-12 flex items-center gap-3 self-start text-[30px] font-medium tracking-[-0.035em] sm:col-span-6 lg:text-[48px] ${ring}`} aria-label="Mooring, to the top">
              <Mark className="size-8 lg:size-11" />
              Mooring
            </a>
            <nav aria-label="Footer" className="col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-10">
              <ul className="flex flex-wrap gap-x-8 gap-y-1 sm:justify-end lg:grid lg:justify-start">
                {["Features", "Pricing", "FAQ"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className={`${navWord} inline-flex h-11 items-center text-(--ground-muted) after:bottom-2.5 hover:text-(--ground-ink)`}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="col-span-12 border-t border-(--ground-line) pt-5 text-[14px] text-(--ground-muted)">© 2026 Mooring</p>
          </div>
        </div>
      </footer>
    </>
  );
}
