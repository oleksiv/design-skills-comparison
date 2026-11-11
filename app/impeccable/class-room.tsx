"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Mat = { who: string | null; state: "booked" | "promoted" | "freed" | "open" };

// Synthetic demo class: initials and waitlist names are illustrative, not customers.
const INITIALS = [
  "JM", "KO", "LP", "SN", "DT", "EW", "HB", "IC", "MV",
  "NF", "OG", "RQ", "SY", "TU", "VA", "WK", "ZE", "BL",
];
const WAITLIST = ["Priya S.", "Tom B.", "Mara K."];
// Literal classes so Tailwind can see them: the class fills mat by mat.
const DELAYS = [
  "motion-safe:[animation-delay:200ms]", "motion-safe:[animation-delay:270ms]", "motion-safe:[animation-delay:340ms]",
  "motion-safe:[animation-delay:410ms]", "motion-safe:[animation-delay:480ms]", "motion-safe:[animation-delay:550ms]",
  "motion-safe:[animation-delay:620ms]", "motion-safe:[animation-delay:690ms]", "motion-safe:[animation-delay:760ms]",
  "motion-safe:[animation-delay:830ms]", "motion-safe:[animation-delay:900ms]", "motion-safe:[animation-delay:970ms]",
  "motion-safe:[animation-delay:1040ms]", "motion-safe:[animation-delay:1110ms]", "motion-safe:[animation-delay:1180ms]",
  "motion-safe:[animation-delay:1250ms]", "motion-safe:[animation-delay:1320ms]", "motion-safe:[animation-delay:1390ms]",
];
const DEMO_MAT = 2;

const initialsOf = (name: string) =>
  name.split(/\s+/).map((part) => part[0]).join("").toUpperCase();
const isFilled = (m: Mat) => m.state === "booked" || m.state === "promoted";

export function ClassRoom({ children }: { children: ReactNode }) {
  const [mats, setMats] = useState<Mat[]>(() => INITIALS.map((who) => ({ who, state: "booked" })));
  const [queue, setQueue] = useState(WAITLIST);
  const [message, setMessage] = useState("");
  const matsRef = useRef(mats);
  const queueRef = useRef(queue);
  const touched = useRef(false);
  const timers = useRef<number[]>([]);
  const grid = useRef<HTMLUListElement>(null);

  useEffect(() => {
    matsRef.current = mats;
    queueRef.current = queue;
  }, [mats, queue]);

  function cancel(index: number) {
    if (!isFilled(matsRef.current[index])) return;
    matsRef.current = matsRef.current.map((m, i) => (i === index ? { who: null, state: "freed" } : m));
    setMats(matsRef.current);
    timers.current.push(
      window.setTimeout(() => {
        const [next, ...rest] = queueRef.current;
        queueRef.current = rest;
        matsRef.current = matsRef.current.map((m, i) =>
          i === index ? (next ? { who: next, state: "promoted" } : { who: null, state: "open" }) : m,
        );
        setMats(matsRef.current);
        setQueue(rest);
        setMessage(
          next
            ? `Mat ${index + 1} was cancelled. ${next} moved up from the waitlist and was notified.`
            : `Mat ${index + 1} was cancelled. The waitlist is empty, so the spot is open.`,
        );
      }, 650),
    );
  }

  // Once the room is in view, play one cancellation, unless the visitor got there first
  // or prefers less motion.
  useEffect(() => {
    const list = timers.current;
    const el = grid.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        list.push(window.setTimeout(() => !touched.current && cancel(DEMO_MAT), 1900));
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      list.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const taken = mats.filter(isFilled).length;

  return (
    <div className="relative">
      <div className="relative rounded-[28px] border-2 border-(--mr-wall) px-5 pt-9 pb-7 sm:px-10 sm:pt-12 lg:px-14 lg:pt-12 lg:pb-8">
        {children}

        <div className="mx-auto mt-10 max-w-3xl lg:max-w-none">
          <ul
            ref={grid}
            className="grid grid-cols-6 gap-2.5 sm:gap-4 lg:grid-cols-[repeat(18,minmax(0,1fr))] lg:gap-3"
            aria-label="Mats in the example class"
          >
            {mats.map((mat, i) => {
              const filled = isFilled(mat);
              return (
                <li key={i} className="flex">
                  <button
                    type="button"
                    aria-disabled={!filled}
                    onClick={() => {
                      touched.current = true;
                      cancel(i);
                    }}
                    aria-label={
                      filled
                        ? `Mat ${i + 1}, booked by ${mat.who}. Cancel this booking.`
                        : `Mat ${i + 1}, ${mat.state === "freed" ? "just cancelled" : "open"}`
                    }
                    className={`relative flex aspect-[1/2] w-full cursor-pointer flex-col items-center justify-between rounded-[10px] pt-2 pb-2.5 text-[11px] font-bold font-stretch-[112%] transition-[background-color,color,border-color,translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] aria-disabled:cursor-default sm:text-xs lg:aspect-[3/5] ${
                      mat.state === "booked"
                        ? `bg-(--mr-mat) text-(--mr-ink) hover:-translate-y-0.5 hover:bg-white motion-safe:animate-[mr-book_520ms_cubic-bezier(0.16,1,0.3,1)_backwards] ${DELAYS[i]}`
                        : mat.state === "promoted"
                          ? "bg-(--mr-tape) text-(--mr-ink) hover:-translate-y-0.5 motion-safe:animate-[mr-promote_700ms_cubic-bezier(0.16,1,0.3,1)]"
                          : "border-2 border-dashed border-(--mr-wall) text-(--mr-on-blue)"
                    }`}
                  >
                    <span>{mat.who ? (mat.who.length > 2 ? initialsOf(mat.who) : mat.who) : ""}</span>
                    {filled ? (
                      <span aria-hidden className="h-1 w-3/5 rounded-full bg-(--mr-ink)/12" />
                    ) : (
                      <span aria-hidden className="text-[10px] font-semibold sm:text-[11px]">
                        {mat.state === "freed" ? "Freed" : "Open"}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-sm text-(--mr-on-blue)">
            <p>Example class: Tue 7:00 Vinyasa</p>
            <p className="font-semibold text-white tabular-nums">
              {taken} of {mats.length} booked
            </p>
          </div>
        </div>

        {/* Door in the bottom wall, drawn as a plan: an opening and its swing. */}
        <div aria-hidden className="absolute -bottom-0.5 right-8 h-1 w-20 bg-(--mr-blue) sm:right-16 sm:w-24" />
        <svg
          aria-hidden
          viewBox="0 0 96 96"
          className="absolute top-full right-8 h-20 w-20 text-(--mr-wall) sm:right-16 sm:h-24 sm:w-24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M96 1V95" strokeWidth="2" />
          <path d="M1 1A95 95 0 0 0 96 95" strokeWidth="1.5" strokeDasharray="4 5" />
        </svg>
      </div>

      <div className="mt-5 flex flex-col gap-3 pr-32 sm:flex-row sm:items-center sm:gap-5 sm:pr-48">
        <p className="text-sm font-semibold text-white">Waitlist</p>
        <ol className="flex flex-wrap gap-2" aria-label="Waitlist">
          {queue.length === 0 && <li className="text-sm text-(--mr-on-blue)">Nobody waiting</li>}
          {queue.map((name, i) => (
            <li
              key={name}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                i === 0 ? "bg-(--mr-tape) text-(--mr-ink)" : "border border-(--mr-wall) text-(--mr-on-blue)"
              }`}
            >
              {name}
            </li>
          ))}
        </ol>
        <p className="text-sm text-(--mr-on-blue)">Tap a booked mat to cancel it.</p>
      </div>
      <p className="sr-only" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
