"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ts-action)";

/* The fixed header. Under 640px the three words move into a full-screen sheet behind the menu button. */
export function Nav({ links, cta }: { links: { href: string; label: string }[]; cta: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-10 h-14 border-b border-(--ts-line) bg-(--ts-bg) sm:h-18">
      <div className="relative mx-auto flex h-full w-[calc(100%-48px)] items-center gap-10 sm:w-[calc(100%-96px)] lg:w-[min(100%-160px,1280px)]">
        <a
          href="#top"
          className="absolute top-1/2 left-0 z-20 -translate-y-1/2 -translate-x-[200vw] rounded-lg bg-(--ts-ink) px-4 py-2 text-sm font-medium text-(--ts-bg) focus-visible:translate-x-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ts-action)"
        >
          Skip to content
        </a>
        <a href="#top" className={`rounded-sm text-[20px] font-medium tracking-[-0.03em] ${focus}`}>
          Mooring
        </a>
        <nav aria-label="Main" className="hidden sm:block">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-sm text-[15px] font-medium whitespace-nowrap text-(--ts-text) transition-colors duration-150 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-150 after:ease-(--ts-ease) hover:text-(--ts-ink) hover:after:origin-left hover:after:scale-x-100 ${focus}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {cta}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="ts-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className={`grid size-11 place-items-center rounded-lg bg-(--ts-tonal) transition-colors duration-150 hover:bg-(--ts-tonal-hover) sm:hidden ${focus}`}
          >
            <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
              {open ? (
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2 5h12M2 11h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        id="ts-menu"
        hidden={!open}
        onClick={() => setOpen(false)}
        className="fixed inset-x-0 top-14 bottom-0 bg-(--ts-bg) sm:hidden"
      >
        <ul className="mx-auto w-[calc(100%-48px)] pt-4">
          {links.map((l) => (
            <li key={l.href} className="border-b border-(--ts-line)">
              <a href={l.href} className={`flex h-14 items-center text-[20px] font-medium ${focus}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

/* A frame holding a loop that runs past 5 s: one round 32px pause disc, 12px in from the bottom-right. */
export function LoopFrame({
  className,
  label,
  children,
}: {
  className: string;
  label: string;
  children: ReactNode;
}) {
  const [paused, setPaused] = useState(false);
  return (
    <div data-paused={paused} className={`${className} [&[data-paused=true]_*]:[animation-play-state:paused]`}>
      <div role="img" aria-label={label} className="absolute inset-0">
        {children}
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? "Play the animation" : "Pause the animation"}
        className={`absolute right-3 bottom-3 z-10 hidden size-8 place-items-center rounded-full bg-(--ts-ink) text-(--ts-bg) transition-colors duration-150 hover:bg-[color-mix(in_oklab,var(--ts-ink)_80%,white)] sm:motion-safe:grid ${focus}`}
      >
        <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
          {paused ? (
            <path d="M3.5 2.2v7.6L9.8 6z" fill="currentColor" />
          ) : (
            <path d="M3.2 2.2h2v7.6h-2zM6.8 2.2h2v7.6h-2z" fill="currentColor" />
          )}
        </svg>
      </button>
    </div>
  );
}

type Step = { label: string; title: string; line: string; visual: ReactNode };

/*
  pinned-chapters (dealt moment): from 1024px, with motion allowed, the section is two screens tall and
  its inner screen holds with position: sticky while the three steps open one at a time and the frame
  on the right crossfades to each step's picture. Below 1024px and under reduced motion nothing pins:
  each step is a static row with its own picture.
*/
export function Chapters({ id, heading, steps }: { id: string; heading: string; steps: Step[] }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const pinned = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const read = () => {
      frame = 0;
      if (!pinned.matches) return setActive(0);
      const r = el.getBoundingClientRect();
      const room = r.height - window.innerHeight;
      const p = room > 0 ? Math.min(1, Math.max(0, -r.top / room)) : 0;
      setActive(Math.min(steps.length - 1, Math.floor(p * steps.length)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [steps.length]);

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={`${id}-h`}
      data-moment="pinned-chapters"
      className="relative min-h-lvh sm:min-h-svh lg:motion-safe:h-[200svh]"
    >
      <div className="pt-24 pb-12 sm:pt-[120px] sm:pb-[72px] lg:motion-safe:sticky lg:motion-safe:top-0 lg:motion-safe:h-svh">
        <div className="mx-auto flex h-full w-[calc(100%-48px)] flex-col sm:w-[calc(100%-96px)] lg:w-[min(100%-160px,1280px)]">
          <h2
            id={`${id}-h`}
            className="text-[clamp(30px,1.72vw+23.3px,48px)] leading-[1.1] font-medium tracking-[-0.035em] text-balance"
          >
            {heading}
          </h2>
          <div className="mt-8 min-h-0 flex-1 sm:mt-12 lg:motion-safe:grid lg:motion-safe:grid-cols-12 lg:motion-safe:gap-x-6">
            <ol className="lg:motion-safe:col-span-5">
              {steps.map((s, i) => {
                const on = i === active;
                return (
                  <li
                    key={s.label}
                    className="relative border-t border-(--ts-line) py-6 first:border-t-0 first:pt-0 sm:grid sm:grid-cols-12 sm:gap-x-6 lg:motion-safe:block lg:motion-safe:first:pt-6 lg:motion-safe:first:border-t"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute top-6 bottom-6 -left-4 hidden w-0.5 origin-top bg-(--ts-action) transition-transform duration-300 ease-(--ts-ease) lg:motion-safe:block ${on ? "scale-y-100" : "scale-y-0"}`}
                    />
                    <div className="sm:col-span-5">
                      <p className="text-[13px] font-medium text-(--ts-muted)">{s.label}</p>
                      <h3
                        className={`mt-2 text-[20px] leading-[1.3] font-medium tracking-[-0.01em] transition-colors duration-300 ${on ? "" : "lg:motion-safe:text-(--ts-muted)"}`}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`mt-2 max-w-[46ch] transition-colors duration-300 ${on ? "text-(--ts-text)" : "text-(--ts-text) lg:motion-safe:text-(--ts-muted)"}`}
                      >
                        {s.line}
                      </p>
                    </div>
                    <div className="relative mt-6 aspect-video max-h-[30svh] w-full overflow-hidden rounded-[20px] sm:col-span-6 sm:col-start-7 sm:mt-0 sm:aspect-auto sm:h-[30svh] max-sm:max-h-none lg:motion-safe:hidden">
                      {s.visual}
                    </div>
                  </li>
                );
              })}
            </ol>
            <div
              aria-hidden="true"
              className="relative hidden h-full min-h-[420px] overflow-hidden rounded-[20px] lg:motion-safe:col-span-6 lg:motion-safe:col-start-7 lg:motion-safe:block"
            >
              {steps.map((s, i) => (
                <div
                  key={s.label}
                  className={`absolute inset-0 transition-opacity duration-500 ease-(--ts-ease) ${i === active ? "opacity-100" : "opacity-0"}`}
                >
                  {s.visual}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
