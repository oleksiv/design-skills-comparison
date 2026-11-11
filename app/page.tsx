import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";

const skills = [
  {
    slug: "control",
    name: "No skill (control)",
    source: "n/a",
    note: "Claude with no design skill enabled. Every other page is read against this one.",
  },
  {
    slug: "frontend-design",
    name: "frontend-design",
    source: "anthropics/skills",
    note: "Anthropic's own skill and the most installed of the group. Pushes Claude to commit to an aesthetic direction before writing code.",
  },
  {
    slug: "ui-ux-pro-max",
    name: "ui-ux-pro-max",
    source: "nextlevelbuilder/ui-ux-pro-max-skill",
    note: "A searchable library of styles, palettes and font pairings that produces a design system first.",
  },
  {
    slug: "taste-skill",
    name: "taste-skill",
    source: "Leonxlnx/taste-skill",
    note: "Rules aimed at overriding the generic look of LLM-made frontends.",
  },
  {
    slug: "impeccable",
    name: "impeccable",
    source: "pbakaus/impeccable",
    note: "Paul Bakaus's skill, built around craft, critique and polish.",
  },
  {
    slug: "web-design-guidelines",
    name: "web-design-guidelines",
    source: "vercel-labs/agent-skills",
    note: "A review skill, not a generator. It is run differently from the others (see the rules below).",
  },
  {
    slug: "ui-styling",
    name: "ui-styling",
    source: "ClaudeKit",
    note: "shadcn/ui components and Tailwind conventions.",
  },
  {
    slug: "ckw-design",
    name: "ckw-design",
    source: "ckw-design plugin",
    note: "A multi-part skill: design thinking, system, spatial layout and visual philosophy.",
  },
  {
    slug: "emil-design-eng",
    name: "emil-design-eng",
    source: "emilkowalski/skills",
    note: "Emil Kowalski's design-engineering skill, weighted towards animation and small interaction details.",
  },
  {
    slug: "shadcn",
    name: "shadcn",
    source: "shadcn-ui/ui",
    note: "The official shadcn/ui skill. A component-library approach instead of aesthetic guidance.",
  },
];

const brief = readFileSync(join(process.cwd(), "brief.md"), "utf8");

const h2 = "mt-14 text-2xl font-semibold tracking-tight";
const p = "mt-4 leading-7 text-zinc-700";
const list = "mt-4 list-outside space-y-2 pl-5 leading-7 text-zinc-700";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 text-zinc-900 sm:py-24">
      <p className="text-sm font-medium text-zinc-500">
        Experiment plan · no pages built yet
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Ten landing pages, one brief: Claude design skills compared
      </h1>
      <p className="mt-6 text-lg leading-8 text-zinc-700">
        Design skills promise to make Claude build better-looking interfaces.
        This experiment gives the same landing page brief to Claude ten times,
        nine times with a different design skill and once with none, and puts
        the results side by side.
      </p>

      <h2 className={h2}>What we are testing</h2>
      <p className={p}>
        A skill is a set of instructions Claude loads for a particular kind of
        task. The question here is narrow: given an identical brief, how much
        does each design skill change the page Claude produces, and in what
        way?
      </p>
      <p className={p}>
        To isolate that, the copy is fixed. Every page has the same sections
        and the same words, so the only thing left to vary is design:
        typography, color, layout, spacing and motion.
      </p>

      <h2 className={h2}>The skills</h2>
      <p className={p}>
        The lineup covers the most installed design skills at the time of
        writing, plus a few that take a different approach. Each one gets its
        own page.
      </p>
      <ol className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200">
        {skills.map((skill, i) => (
          <li key={skill.slug} className="flex gap-4 py-4">
            <span className="w-5 shrink-0 pt-0.5 text-sm tabular-nums text-zinc-400">
              {i}
            </span>
            <div className="min-w-0">
              <Link
                href={`/${skill.slug}`}
                className="font-medium underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
              >
                {skill.name}
              </Link>
              <p className="mt-1 leading-7 text-zinc-700">{skill.note}</p>
              <p className="mt-1 text-sm break-words text-zinc-500">
                Source: {skill.source}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className={h2}>The brief</h2>
      <p className={p}>
        The product is invented: Mooring, a booking tool for small fitness
        studios. This is the full prompt each run receives, with{" "}
        <code className="font-mono text-sm">{"{slug}"}</code> replaced by the
        page name.
      </p>
      <pre className="mt-6 max-h-[32rem] overflow-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-[13px] leading-6 whitespace-pre-wrap text-zinc-800">
        {brief}
      </pre>

      <h2 className={h2}>The rules</h2>
      <ol className={`${list} list-decimal`}>
        <li>
          One fresh Claude Code session per page, with the same model and
          settings every time. Both are recorded with the results.
        </li>
        <li>
          Only the skill under test is enabled. Every other design skill is
          switched off for that session.
        </li>
        <li>
          The prompt is the brief above, preceded by one line: &ldquo;Use the{" "}
          <em>name</em> skill.&rdquo; The control run gets the brief alone.
        </li>
        <li>
          One shot. No follow-up prompts about design. The only permitted
          follow-up is fixing an error that stops the page from building, and
          each of those is logged.
        </li>
        <li>
          The output is kept as generated. Nothing is tidied up by hand.
        </li>
        <li>
          Each page lives in its own folder and cannot touch shared files, so
          one run cannot affect another.
        </li>
      </ol>
      <p className={p}>
        One exception: web-design-guidelines reviews existing code instead of
        generating it. Its page starts as a copy of the control page, and the
        skill is asked to review it and fix what it finds. That shows what an
        audit adds on top of plain Claude.
      </p>

      <h2 className={h2}>What we will compare</h2>
      <ul className={`${list} list-disc`}>
        <li>Screenshots of each page at 1440px and 390px wide.</li>
        <li>
          Whether the brief was followed: every section present, copy
          unchanged.
        </li>
        <li>Lighthouse accessibility and performance scores.</li>
        <li>Lines of code and any dependencies the run added.</li>
        <li>
          Written notes on typography, color, layout and how distinct the page
          looks from the control.
        </li>
      </ul>
      <p className={p}>
        The first four are measurements. The last is opinion and will be
        labeled as such.
      </p>

      <h2 className={h2}>Limits</h2>
      <ul className={`${list} list-disc`}>
        <li>
          One run per skill. Claude&rsquo;s output varies between runs, so a
          single page is a sample and not a verdict on the skill.
        </li>
        <li>
          One kind of page. A skill that does well on a marketing page may do
          differently on a dashboard or an app.
        </li>
        <li>
          Fixed copy removes writing from the comparison, including for skills
          that would have improved it.
        </li>
      </ul>
    </main>
  );
}
