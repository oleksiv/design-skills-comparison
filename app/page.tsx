import { readFileSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import skills from "./skills.json";

const brief = readFileSync(join(process.cwd(), "brief.md"), "utf8");

const kTokens = (n: number) => `${Math.round(n / 1000)}k`;
const time = (s: number) => `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, "0")}s`;

const col = "mx-auto max-w-2xl px-5";
const h2 = "mt-16 text-2xl font-semibold tracking-tight";
const p = "mt-4 leading-7 text-zinc-700";
const list = "mt-4 list-outside space-y-2 pl-5 leading-7 text-zinc-700";
const th = "px-3 py-2 text-left font-medium text-zinc-500";
const td = "px-3 py-2 tabular-nums";

export default function Home() {
  return (
    <main className="py-16 text-zinc-900 sm:py-24">
      <div className={col}>
        <p className="text-sm font-medium text-zinc-500">
          Experiment · built with Claude Opus 5.5
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Ten landing pages, one brief: Claude design skills compared
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-700">
          Design skills promise to make Claude build better-looking
          interfaces. This experiment gave the same landing page brief to
          Claude ten times, nine times with a different design skill and once
          with none. Every page below is live, so you can open each one and
          judge for yourself.
        </p>
      </div>

      <section className="mx-auto mt-14 max-w-6xl px-5">
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <li key={skill.slug}>
              <Link href={`/${skill.slug}`} className="group block">
                <Image
                  src={`/screenshots/${skill.slug}-desktop.jpg`}
                  alt={`Screenshot of the landing page built with ${skill.name}`}
                  width={1440}
                  height={900}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  priority={i < 2}
                  className="rounded-lg border border-zinc-200 transition-shadow group-hover:shadow-lg"
                />
                <p className="mt-4 flex items-baseline gap-3">
                  <span className="text-sm tabular-nums text-zinc-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold underline decoration-zinc-300 underline-offset-4 group-hover:decoration-zinc-900">
                    {skill.name}
                  </span>
                </p>
              </Link>
              <p className="mt-2 leading-7 text-zinc-700">{skill.note}</p>
              <p className="mt-2 text-sm text-zinc-500">
                {kTokens(skill.tokens)} tokens · {time(skill.seconds)} ·{" "}
                {skill.lines.toLocaleString("en-US")} lines ·{" "}
                {skill.deps === 0
                  ? "no packages added"
                  : `${skill.deps} packages added`}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className={col}>
        <h2 className={h2}>What was tested</h2>
        <p className={p}>
          A skill is a set of instructions Claude loads for a particular kind
          of task. The question here is narrow: given an identical brief, how
          much does each design skill change the page Claude produces, and in
          what way?
        </p>
        <p className={p}>
          To isolate that, the copy is fixed. Every page has the same sections
          and the same words, so what is left to vary is design: typography,
          color, layout, spacing and motion. Each skill was free to choose its
          own direction, because choosing a direction is most of what these
          skills do.
        </p>

        <h2 className={h2}>The brief</h2>
        <p className={p}>
          The product is invented: Mooring, a booking tool for small fitness
          studios. This is the full prompt each run received, with{" "}
          <code className="font-mono text-sm">{"{slug}"}</code> replaced by
          the page name.
        </p>
        <pre className="mt-6 max-h-[32rem] overflow-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-[13px] leading-6 whitespace-pre-wrap text-zinc-800">
          {brief}
        </pre>

        <h2 className={h2}>How the runs worked</h2>
        <ol className={`${list} list-decimal`}>
          <li>
            Each page was built by its own Claude Opus 5.5 agent with a fresh
            context, all ten in the same repository at the same time.
          </li>
          <li>
            Each agent was told to read one skill&rsquo;s files and follow
            them, and to use no other skill. The control agent was told to
            use none.
          </li>
          <li>
            One shot. Nobody answered questions or gave design feedback. Where
            a skill said to ask the user, the agent decided for itself.
          </li>
          <li>
            Each page lives in its own folder and could not touch shared
            files. Agents could type-check and lint, but could not run the
            app, so most of them never saw their page rendered.
          </li>
          <li>
            The output is kept as generated. The project built on the first
            try and nothing was fixed by hand.
          </li>
        </ol>
        <p className={p}>Three things did not go to plan, and they matter:</p>
        <ul className={`${list} list-disc`}>
          <li>
            The Tailwind-only rule was added after the runs had started. Runs
            that had already written custom CSS converted it, which cost them
            extra tokens and time.
          </li>
          <li>
            Skills downloaded for this test were treated as text only, and
            their bundled scripts were not executed. taste-skill and
            impeccable both rely on scripts, so those two runs are a weaker
            test of the skill.
          </li>
          <li>
            ckw-design rendered its page outside the app and had the
            screenshots reviewed before finishing. No other run saw its own
            output.
          </li>
        </ul>
        <p className={p}>
          web-design-guidelines is a special case. It reviews code instead of
          generating it, so its page is a copy of the control that the skill
          audited and fixed. The two look almost identical; the differences
          are in accessibility and interaction details.
        </p>

        <h2 className={h2}>The numbers</h2>
        <p className={p}>
          What each run cost and what it produced. Lines of code count the
          TypeScript and CSS files in the page&rsquo;s folder.
        </p>
      </div>

      <div className="mx-auto mt-6 max-w-4xl overflow-x-auto px-5">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-zinc-300">
              <th className={th}>Skill</th>
              <th className={th}>Tokens</th>
              <th className={th}>Time</th>
              <th className={th}>Tool calls</th>
              <th className={th}>Files</th>
              <th className={th}>Lines</th>
              <th className={th}>Packages</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.slug} className="border-b border-zinc-200">
                <td className="px-3 py-2 font-medium">{skill.name}</td>
                <td className={td}>{skill.tokens.toLocaleString("en-US")}</td>
                <td className={td}>{time(skill.seconds)}</td>
                <td className={td}>{skill.toolCalls}</td>
                <td className={td}>{skill.files}</td>
                <td className={td}>{skill.lines.toLocaleString("en-US")}</td>
                <td className={td}>{skill.deps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={col}>
        <p className={p}>How to read these:</p>
        <ul className={`${list} list-disc`}>
          <li>
            Tokens are the total the agent harness reported for the run. That
            includes reading the skill itself and the framework docs, not
            only writing the page, and it is not split into input and output.
          </li>
          <li>
            impeccable and ckw-design each started a second agent to review
            their work. Whether that agent&rsquo;s tokens are inside the
            total is not known.
          </li>
          <li>
            The web-design-guidelines row covers the audit only. Add the
            control row for the full cost of that page.
          </li>
          <li>
            Time is wall-clock with ten agents running at once, so treat it
            as a rough ranking.
          </li>
        </ul>

        <h2 className={h2}>Still to do</h2>
        <ul className={`${list} list-disc`}>
          <li>Lighthouse accessibility and performance scores for each page.</li>
          <li>
            A check of each page against the brief: every section present,
            copy unchanged, and what each run added that was not asked for.
          </li>
          <li>
            Written notes on typography, color and layout. Those will be
            opinion and labeled as such.
          </li>
        </ul>

        <h2 className={h2}>Limits</h2>
        <ul className={`${list} list-disc`}>
          <li>
            One run per skill. Claude&rsquo;s output varies between runs, so a
            single page is a sample and not a verdict on the skill.
          </li>
          <li>
            One kind of page. A skill that does well on a marketing page may
            do differently on a dashboard or an app.
          </li>
          <li>
            Fixed copy removes writing from the comparison, including for
            skills that would have improved it.
          </li>
          <li>
            The skills were read from disk by an agent, not loaded through
            Claude Code&rsquo;s own skill mechanism, and they ran under rules
            (one folder, no running the app) that some of them were not
            written for.
          </li>
        </ul>
      </div>
    </main>
  );
}
