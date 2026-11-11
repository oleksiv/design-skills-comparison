"use client";

import { useEffect, useRef, useState } from "react";

// Example class only: names are illustrative demo content, not customers.
const ROSTER = [
  "Maya R.", "Jon B.", "Ines K.", "Sam O.", "Lea M.", "Ravi P.",
  "Ola N.", "Ben T.", "Kit W.", "Ana L.", "Dev S.", "Zoe F.",
];
const WAITLIST = ["Priya S.", "Tom H.", "Eva D."];
// Reformer spring code: colour appears only on a spring that is hooked on.
const TENSION = ["text-(--red)", "text-(--yellow-ink)", "text-(--green)", "text-(--blue)"];

const initials = (name: string) =>
  name.split(" ").map((p) => p[0]).join("");

/** One spring: a zigzag that stretches with its box, so taut means booked. */
export function Coil({ className = "" }: { className?: string }) {
  let d = "M8 0 V8";
  for (let y = 8; y < 92; y += 7) d += ` L14 ${y + 3.5} L2 ${y + 7}`;
  d += " L8 92 V100";
  return (
    <svg
      viewBox="0 0 16 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function SpringBar() {
  const [spots, setSpots] = useState<(string | null)[]>(ROSTER);
  const [queue, setQueue] = useState<string[]>(WAITLIST);
  const [notice, setNotice] = useState("Class full. Tap a booked spring to cancel it.");
  const pending = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touched = useRef(false);
  const root = useRef<HTMLDivElement>(null);

  const booked = spots.filter(Boolean).length;

  // The class fills itself once on arrival: one cancellation, the waitlist hooks on.
  useEffect(() => {
    const el = root.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timers.push(
          setTimeout(() => {
            if (touched.current) return;
            const spot = 4;
            pending.current = setTimeout(() => {
              pending.current = null;
              setSpots((s) => s.map((v, j) => (j === spot ? WAITLIST[0] : v)));
              setQueue((q) => q.slice(1));
              setNotice(`${WAITLIST[0]} was next in line, got the spot and a notification.`);
            }, 1100);
            timers.push(pending.current);
            setSpots((s) => s.map((v, j) => (j === spot ? null : v)));
            setNotice(`${ROSTER[spot]} cancelled.`);
          }, 900),
        );
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  function press(i: number) {
    if (pending.current) return;
    touched.current = true;
    const who = spots[i];
    if (!who) {
      setSpots((s) => s.map((v, j) => (j === i ? "You" : v)));
      setNotice("You booked the open spot and paid in two taps.");
      return;
    }
    setSpots((s) => s.map((v, j) => (j === i ? null : v)));
    const next = queue[0];
    if (!next) {
      setNotice(`${who} cancelled. The spot is open.`);
      return;
    }
    setNotice(`${who} cancelled.`);
    pending.current = setTimeout(() => {
      pending.current = null;
      setSpots((s) => s.map((v, j) => (j === i ? next : v)));
      setQueue((q) => q.slice(1));
      setNotice(`${next} was next in line, got the spot and a notification.`);
    }, 700);
  }

  return (
    <div ref={root} className="relative">
      {/* springs hang from the carriage edge above down to the bar */}
      <ol className="relative z-10 grid grid-cols-12 px-2 sm:px-6 lg:px-10">
        {spots.map((who, i) => {
          const tension = TENSION[i % TENSION.length];
          return (
            <li key={i} className="flex justify-center">
              <button
                type="button"
                onClick={() => press(i)}
                aria-label={
                  who
                    ? `Spot ${i + 1}, booked by ${who}, cancel this booking`
                    : `Spot ${i + 1}, open. Book it.`
                }
                className="group flex h-20 w-full cursor-pointer flex-col items-center rounded-t-sm outline-offset-2 focus-visible:outline-2 focus-visible:outline-(--plum) sm:h-28"
              >
                <span className="h-2 w-1.5 shrink-0 rounded-b-full bg-(--plum-deep)" />
                <span
                  className={`block w-3 transition-[height,color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none sm:w-4 ${
                    who
                      ? `${tension} h-[calc(100%-1.75rem)] group-hover:h-[calc(100%-2.25rem)]`
                      : "h-6 text-(--steel) group-hover:h-9 sm:h-10 sm:group-hover:h-14"
                  }`}
                >
                  <Coil className="block h-full w-full" />
                </span>
                {/* the hook on the bar: filled when a spring is on it, an open ring when not */}
                <span
                  className={`mt-auto grid size-5 shrink-0 place-items-center rounded-full border-2 text-[0.6875rem] leading-none font-bold tracking-tight transition-colors duration-500 sm:size-8 ${
                    who
                      ? "border-(--ink) bg-(--ink) text-(--alu)"
                      : "border-dashed border-(--steel) bg-(--alu) text-(--steel)"
                  }`}
                >
                  {who ? (
                    <span className="hidden sm:inline">{initials(who)}</span>
                  ) : (
                    <svg viewBox="0 0 12 12" className="size-2.5 sm:size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M6 1v10M1 6h10" />
                    </svg>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* the bar itself: the aluminium rail the hooks sit on */}
      <div className="-mt-3.5 h-3 rounded-full bg-(--alu-3) shadow-[inset_0_1px_0_oklch(1_0_0/0.7)] sm:h-4" aria-hidden="true" />

      <div className="mt-3 grid gap-3 px-1 sm:mt-4 sm:gap-4 text-sm sm:grid-cols-[1fr_auto] sm:items-start sm:px-6 lg:px-10">
        <div>
          <p className="font-stretch-condensed text-xs font-semibold tracking-[0.12em] text-(--steel) uppercase">
            Example class · Tue 07:00 · Reformer Flow
          </p>
          <p className="mt-1.5 text-[0.9375rem] font-semibold tabular-nums" aria-live="polite">
            <span className="font-stretch-expanded font-extrabold">{booked}/12</span>{" "}
            <span className="font-normal text-(--ink-2)">{notice}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:justify-end">
          <span className="font-stretch-condensed mr-1 text-xs font-semibold tracking-[0.12em] text-(--steel) uppercase">
            Waitlist
          </span>
          {queue.length ? (
            queue.map((n) => (
              <span
                key={n}
                className="rounded-full border border-(--alu-3) bg-(--alu) px-2.5 py-0.5 text-xs font-medium"
              >
                {n}
              </span>
            ))
          ) : (
            <span className="rounded-full border border-dashed border-(--steel) px-2.5 py-0.5 text-xs text-(--steel)">
              empty
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
