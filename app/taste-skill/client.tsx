"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import fx, { type FxController } from "taste-fx";
import painterlyLandscape from "taste-fx/painterly-landscape";

const EASE = "cubic-bezier(.2,.8,.2,1)";
const EASE_ENTER = "cubic-bezier(.22,1,.36,1)";

const reducedMotion = () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
const isPhone = () => typeof matchMedia === "function" && matchMedia("(max-width: 639px)").matches;

/* ------------------------------------------------------------------ nav (nav-centre) */

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function NavMenu({ cta }: { cta: ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <button
        type="button"
        className="nav__toggle grid size-11 shrink-0 cursor-pointer place-items-center rounded-lg border border-(--line-strong) text-(--p-ink) transition-[background-color] duration-150 hover:bg-(--line) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--p-action) lg:hidden"
        aria-expanded={open}
        aria-controls="nav-sheet"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6.5h14M3 13.5h14" />}
        </svg>
      </button>
      <div
        id="nav-sheet"
        hidden={!open}
        className="fixed inset-x-0 top-14 bottom-0 z-10 bg-(--p-bg) px-6 pt-4 sm:top-[72px] sm:px-12 lg:hidden"
        onClick={() => setOpen(false)}
      >
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.href} className="border-b border-(--line)">
              <a href={l.href} className="flex h-14 items-center text-lg font-medium focus-visible:outline-2 focus-visible:outline-(--p-action)">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid">{cta}</div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ the hero's entrance (motion.md) */

export function HeroEnter() {
  useEffect(() => {
    const html = document.documentElement;
    const hero = document.querySelector<HTMLElement>(".hero[data-enter]");
    if (!hero || reducedMotion() || html.classList.contains("m-enter-done")) {
      html.classList.add("m-enter-done");
      return;
    }
    const words = [...hero.querySelectorAll<HTMLElement>("h1 [data-w]")];
    const lines: HTMLElement[][] = [];
    let lastTop = -1;
    for (const w of words) {
      const top = (w.parentElement as HTMLElement).offsetTop;
      if (top !== lastTop) { lines.push([]); lastTop = top; }
      lines[lines.length - 1].push(w);
    }
    const after = [...hero.querySelectorAll<HTMLElement>("[data-enter-item]")];
    const media = hero.querySelector<HTMLElement>("[data-enter-media]");
    html.classList.add("m-enter-done");
    lines.forEach((line, i) =>
      line.forEach((w) =>
        w.animate([{ transform: "translateY(110%)" }, { transform: "translateY(0)" }], {
          duration: 700, delay: i * 80, easing: EASE_ENTER, fill: "backwards",
        }),
      ),
    );
    const start = Math.max(0, lines.length - 1) * 80 + 350;
    after.forEach((el, i) =>
      el.animate([{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }], {
        duration: 520, delay: start + i * 60, easing: EASE_ENTER, fill: "backwards",
      }),
    );
    media?.animate([{ transform: "scale(.98)" }, { transform: "none" }], { duration: 900, easing: EASE_ENTER });
  }, []);
  return null;
}

/* ------------------------------------------------------------------ a card loop: finished first, steps, hold */

function useStepLoop(steps: number, stepMs: number, holdMs: number) {
  const [step, setStep] = useState(steps);
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  const [live, setLive] = useState(false);
  const born = useRef(0);
  useEffect(() => {
    born.current = performance.now();
    // a phone and reduced motion hold the finished picture (motion.md)
    const id = requestAnimationFrame(() => setLive(!reducedMotion() && !isPhone()));
    return () => cancelAnimationFrame(id);
  }, []);
  useEffect(() => {
    if (!live || paused) return;
    let s = steps;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      s = s >= steps ? 0 : s + 1;
      setStep(s);
      t = setTimeout(tick, s >= steps ? holdMs : stepMs);
    };
    t = setTimeout(tick, run ? 0 : holdMs);
    return () => clearTimeout(t);
  }, [live, paused, run, steps, stepMs, holdMs]);
  const restart = useCallback(() => {
    if (!live || paused || performance.now() - born.current < 800) return;
    setRun((r) => r + 1);
  }, [live, paused]);
  return { step: live ? step : steps, live, paused, setPaused, restart };
}

function PauseDisc({ paused, onToggle, className = "" }: { paused: boolean; onToggle: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={paused ? "Play the animation" : "Pause the animation"}
      className={`absolute z-10 grid size-11 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--p-action) ${className}`}
    >
      <span className="grid size-8 place-items-center rounded-full bg-(--p-ink) text-(--p-bg) transition-transform duration-150 active:scale-[.96]">
        <svg viewBox="0 0 12 12" className="size-3" fill="currentColor" aria-hidden="true">
          {paused ? <path d="M3 1.5v9l7.5-4.5z" /> : <path d="M2.5 1.5h2.5v9H2.5zM7 1.5h2.5v9H7z" />}
        </svg>
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ the hero frame: the effect, the window, the card */

export function HeroArt({ label, window: win }: { label: string; window: ReactNode }) {
  const ground = useRef<HTMLDivElement>(null);
  const ctl = useRef<FxController | null>(null);
  const { step, live, paused, setPaused, restart } = useStepLoop(3, 700, 1800);

  useEffect(() => {
    const el = ground.current;
    if (!el) return;
    let gone = false;
    const s = getComputedStyle(document.documentElement);
    const v = (n: string) => s.getPropertyValue(n).trim();
    fx.mount(el, painterlyLandscape, {
      palette: { bg: v("--ground-bg"), surface: v("--ground-surface"), ink: v("--ground-ink"), muted: v("--ground-muted"), accent: v("--ground-accent") },
      params: { calm: 0, calmX: 0.2, calmY: 0.8 },
      seed: 7,
    }).then((c) => {
      if (gone) c.destroy();
      else ctl.current = c;
    }, () => {});
    return () => { gone = true; ctl.current?.destroy(); ctl.current = null; };
  }, []);

  useEffect(() => {
    if (paused) ctl.current?.pause();
    else ctl.current?.resume();
  }, [paused]);

  const lines = [
    <><b className="font-medium">Lea</b> cancelled at 15:02</>,
    <>Spot offered to <b className="font-medium">Sam</b>, first in line</>,
    <><b className="font-medium">Sam</b> booked with a class pass</>,
  ];

  return (
    <div
      className="hero__art relative isolate mt-8 min-h-[220px] flex-1 overflow-hidden rounded-[20px] bg-(--ground-bg) lg:col-span-6 lg:col-start-7 lg:mt-0 lg:h-full lg:min-h-0"
      role="img"
      aria-label={label}
      data-enter-media
      onPointerEnter={restart}
    >
      <div ref={ground} className="absolute inset-0 -z-10 overflow-hidden rounded-[inherit]" data-fx="painterly-landscape" aria-hidden="true" />
      <div className="absolute top-4 left-4 w-[calc(100%-16px+28px)] sm:top-8 sm:left-8 sm:w-[calc(100%-32px+28px)] lg:top-16 lg:left-16 lg:w-[calc(100%-64px+28px)]" aria-hidden="true">
        {win}
      </div>
      <div
        className="absolute bottom-8 left-8 hidden w-[300px] rounded-xl border border-(--ui-border) bg-(--ui-bg) p-4 text-(--ui-ink) shadow-(--ui-shadow) sm:block"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-[13px] font-medium">Reformer Basics, 17:30</p>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors duration-300 ${
              step >= 3 ? "bg-(--p-accent) text-white" : "bg-(--ui-fill) text-(--ui-muted)"
            }`}
          >
            {step >= 3 ? "Filled" : "Waitlist 3"}
          </span>
        </div>
        <ul className="mt-3 grid gap-2">
          {lines.map((l, i) => (
            <li
              key={i}
              className={`flex items-center gap-2 text-[13px] leading-5 transition-opacity duration-300 ${step > i ? "opacity-100" : "opacity-30"}`}
            >
              <span className="grid size-4 shrink-0 place-items-center rounded-full bg-(--ui-tint) text-(--p-accent)">
                <svg viewBox="0 0 12 12" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2l2.2 2.2 4.8-5" /></svg>
              </span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </div>
      {live && <PauseDisc paused={paused} onToggle={() => setPaused((p) => !p)} className="right-2 bottom-2" />}
    </div>
  );
}

/* ------------------------------------------------------------------ how it works: the first card's loop */

export function ImportLoop() {
  const { step, live, paused, setPaused, restart } = useStepLoop(3, 700, 1600);
  const rows = [
    ["Mon", "7:00", "Sunrise Vinyasa"],
    ["Tue", "9:30", "Mat Pilates"],
    ["Wed", "18:00", "Bouldering Intro"],
  ];
  return (
    <div className="absolute inset-0" onPointerEnter={restart}>
      <div data-ui="checklist" className="absolute inset-x-6 top-14 rounded-xl border border-(--ui-border) bg-(--ui-bg) p-4 text-(--ui-ink) shadow-(--ui-shadow)" aria-hidden="true">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="size-5 text-[#1f7a46]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
            <path d="M14 2v5a1 1 0 0 0 1 1h5M8 13h2m4 0h2m-8 4h2m4 0h2" />
          </svg>
          <p className="text-[13px] font-medium">schedule.csv</p>
          <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-medium ${step >= 3 ? "bg-(--ui-tint) text-(--p-accent)" : "bg-(--ui-fill) text-(--ui-muted)"}`}>
            {step >= 3 ? "24 classes added" : "Importing"}
          </span>
        </div>
        <ul className="mt-3 grid">
          {rows.map(([d, t, n], i) => (
            <li key={n} className={`flex items-center gap-3 border-t border-(--ui-line) py-2 text-[13px] transition-opacity duration-300 ${step > i ? "opacity-100" : "opacity-35"}`}>
              <span className="w-8 text-(--ui-muted)">{d}</span>
              <span className="w-10 font-(family-name:--font-geist-mono) text-xs tabular-nums">{t}</span>
              <span className="truncate">{n}</span>
              <svg viewBox="0 0 12 12" className="ml-auto size-3 text-(--p-accent)" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2l2.2 2.2 4.8-5" /></svg>
            </li>
          ))}
        </ul>
      </div>
      {live && <PauseDisc paused={paused} onToggle={() => setPaused((p) => !p)} className="top-1.5 right-4" />}
    </div>
  );
}

/* ------------------------------------------------------------------ features: tabs-tour (click only) */

export function FeatureTabs({ head, tabs }: { head: ReactNode; tabs: { title: string; text: string; screen: ReactNode; label: string }[] }) {
  const [active, setActive] = useState(0);
  const list = useRef<HTMLDivElement>(null);
  const ind = useRef<HTMLSpanElement>(null);
  const place = useCallback((animate: boolean) => {
    const tab = list.current?.querySelectorAll<HTMLElement>("[role=tab]")[active];
    const el = ind.current;
    if (!tab || !el) return;
    el.style.transition = animate && !reducedMotion() ? `transform 240ms ${EASE}` : "none";
    el.style.width = `${tab.offsetWidth}px`;
    el.style.height = `${tab.offsetHeight}px`;
    el.style.transform = `translate(${tab.offsetLeft}px, ${tab.offsetTop}px)`;
    el.style.opacity = "1";
  }, [active]);
  useEffect(() => { place(true); }, [place]);
  useEffect(() => {
    const ro = new ResizeObserver(() => place(false));
    if (list.current) ro.observe(list.current);
    return () => ro.disconnect();
  }, [place]);
  const onKey = (e: React.KeyboardEvent) => {
    const d = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (active + d + tabs.length) % tabs.length;
    setActive(next);
    list.current?.querySelectorAll<HTMLElement>("[role=tab]")[next]?.focus();
  };
  return (
    <>
      <div className="col-span-12 lg:col-span-5">
        {head}
        <div ref={list} role="tablist" aria-orientation="vertical" aria-label="Features" className="relative mt-8 grid gap-2 lg:mt-12" onKeyDown={onKey}>
          <span ref={ind} aria-hidden="true" className="pointer-events-none absolute top-0 left-0 rounded-lg bg-(--p-action) opacity-0" />
          {tabs.map((t, i) => (
            <button
              key={t.title}
              type="button"
              role="tab"
              id={`feat-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`feat-panel-${i} feat-screen-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              className={`relative h-12 w-full cursor-pointer rounded-lg border px-4 text-left text-base font-medium transition-[color,background-color,border-color] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--p-action) ${
                active === i ? "border-transparent text-(--p-action-ink)" : "border-(--line-strong) text-(--p-ink) hover:bg-(--line)"
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>
        <div className="mt-6 min-h-[81px] lg:mt-8 lg:min-h-[90px]">
          {tabs.map((t, i) => (
            <div key={t.title} id={`feat-panel-${i}`} role="tabpanel" aria-labelledby={`feat-tab-${i}`} hidden={active !== i}>
              <p className="max-w-[42ch] text-[17px] leading-[1.6] lg:text-[20px] lg:leading-[1.5]">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative col-span-12 mt-12 aspect-[4/3] overflow-hidden rounded-[20px] bg-(--ground-bg) sm:aspect-[16/10] lg:col-span-6 lg:col-start-7 lg:mt-0 lg:aspect-auto lg:h-[calc(100svh-192px)] xl:aspect-[5/4] xl:h-auto">
        {tabs.map((t, i) => (
          <div
            key={t.title}
            id={`feat-screen-${i}`}
            role="img"
            aria-label={t.label}
            hidden={active !== i}
            className="absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_calc(100%-96px),transparent)]"
          >
            {t.screen}
          </div>
        ))}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ iris-opens (moments/iris-opens, ported) */

export function IrisOpens({ hostId }: { hostId: string }) {
  const stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = document.getElementById(hostId);
    const st = stage.current;
    if (!root || !st) return;
    // the still rule: a phone and reduced motion get the section on its own ground, no panel
    if (reducedMotion() || isPhone()) { root.dataset.momentStill = reducedMotion() ? "reduced" : "phone"; return; }
    st.hidden = false;
    root.classList.add("is-live");
    const blocks = [...root.querySelectorAll<HTMLElement>("[data-iris-block]")];
    let rects: { el: HTMLElement; l: number; r: number; t: number; b: number }[] = [];
    const measure = () => {
      const rr = root.getBoundingClientRect();
      rects = blocks.map((el) => {
        const b = el.getBoundingClientRect();
        return { el, l: b.left - rr.left, r: b.right - rr.left, t: b.top - rr.top, b: b.bottom - rr.top };
      });
    };
    const release = () => blocks.forEach((el) => (el.style.opacity = ""));
    let open: boolean | null = null;
    let raf = 0;
    const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    const tick = () => {
      raf = 0;
      const r = root.getBoundingClientRect();
      const vh = innerHeight;
      if (r.bottom < -vh || r.top > 2 * vh) return;
      const u = Math.min(1, Math.max(0, (vh * 0.98 - r.top) / (vh * 0.78)));
      const t = 1 - (1 - u) * (1 - u);
      const sr = st.getBoundingClientRect();
      const gx = sr.left - r.left, gy = sr.top - r.top, w = sr.width, h = sr.height;
      const v0 = Math.max(0, sr.top), v1 = Math.min(vh, sr.bottom);
      const cx = w * 0.5, cy = v0 - sr.top + Math.max(0, v1 - v0) * 0.5;
      const R = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy)) + 2;
      const rad = t * R;
      st.style.setProperty("--mo-cx", `${cx.toFixed(1)}px`);
      st.style.setProperty("--mo-cy", `${cy.toFixed(1)}px`);
      st.style.setProperty("--mo-r", `${rad.toFixed(1)}px`);
      const done = t >= 0.999;
      if (done !== open) { open = done; st.style.display = done ? "none" : ""; if (done) release(); }
      if (done) return;
      const soft = Math.max(48, R * 0.12);
      for (const b of rects) {
        const x0 = b.l - gx, x1 = b.r - gx, y0 = b.t - gy, y1 = b.b - gy;
        const d = Math.hypot(Math.max(Math.abs(x0 - cx), Math.abs(x1 - cx)), Math.max(Math.abs(y0 - cy), Math.abs(y1 - cy)));
        b.el.style.opacity = String(smooth(0, 1, (rad - d) / soft));
      }
    };
    const req = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const remeasure = () => { open = null; release(); measure(); req(); };
    const ro = new ResizeObserver(remeasure);
    ro.observe(root);
    document.fonts?.ready.then(remeasure);
    addEventListener("scroll", req, { passive: true });
    addEventListener("resize", req);
    remeasure();
    return () => {
      ro.disconnect();
      removeEventListener("scroll", req);
      removeEventListener("resize", req);
      if (raf) cancelAnimationFrame(raf);
      release();
      root.classList.remove("is-live");
    };
  }, [hostId]);
  return (
    <div
      ref={stage}
      hidden
      aria-hidden="true"
      className="pointer-events-none absolute inset-[clamp(8px,1.2vw,18px)] z-20 overflow-clip rounded-[20px] [--mo-cx:50%] [--mo-cy:50%] [--mo-r:0px] motion-reduce:hidden!"
    >
      <div className="absolute inset-0 bg-(--p-bg) [mask-image:radial-gradient(circle_at_var(--mo-cx)_var(--mo-cy),transparent_calc(var(--mo-r)-0.5px),#000_var(--mo-r))]" />
      <div className="absolute top-(--mo-cy) left-(--mo-cx) h-[calc(var(--mo-r)*2)] w-[calc(var(--mo-r)*2)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-(--p-inv-ink)" />
    </div>
  );
}
