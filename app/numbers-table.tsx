"use client";

import { useState } from "react";
import skills from "./skills.json";

type Skill = (typeof skills)[number];
type Key = "name" | "tokens" | "seconds" | "toolCalls" | "lines" | "deps" | "copy" | "words" | "a11y" | "perf";

const COPY_TOTAL = 47; // pieces of copy in the brief

const columns: { key: Key; label: string }[] = [
  { key: "name", label: "Skill" },
  { key: "tokens", label: "Tokens" },
  { key: "seconds", label: "Time" },
  { key: "toolCalls", label: "Tool calls" },
  { key: "lines", label: "Lines" },
  { key: "deps", label: "Packages" },
  { key: "copy", label: "Copy kept" },
  { key: "words", label: "Words" },
  { key: "a11y", label: "Accessibility" },
  { key: "perf", label: "Performance" },
];

const time = (s: number) => `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, "0")}s`;

const format = (skill: Skill, key: Key) =>
  key === "seconds"
    ? time(skill.seconds)
    : key === "copy"
      ? `${skill.copy}/${COPY_TOTAL}`
      : typeof skill[key] === "number"
        ? skill[key].toLocaleString("en-US")
        : skill[key];

export default function NumbersTable() {
  // null = the article's own order
  const [sort, setSort] = useState<{ key: Key; asc: boolean } | null>(null);

  const rows = sort
    ? [...skills].sort((a, b) => {
        const [x, y] = [a[sort.key], b[sort.key]];
        const d =
          typeof x === "number" && typeof y === "number"
            ? x - y
            : String(x).localeCompare(String(y));
        return sort.asc ? d : -d;
      })
    : skills;

  return (
    <table className="w-full min-w-[68rem] border-collapse text-sm">
      <thead>
        <tr className="border-b border-zinc-300">
          {columns.map(({ key, label }) => {
            const active = sort?.key === key;
            return (
              <th
                key={key}
                aria-sort={active ? (sort.asc ? "ascending" : "descending") : "none"}
                className="p-0 text-left"
              >
                <button
                  type="button"
                  // Numbers start high-to-low, names A to Z; clicking again flips.
                  onClick={() =>
                    setSort({ key, asc: active ? !sort.asc : key === "name" })
                  }
                  className={`w-full cursor-pointer px-3 py-2 text-left font-medium whitespace-nowrap hover:text-zinc-900 ${active ? "text-zinc-900" : "text-zinc-500"}`}
                >
                  {label}
                  <span aria-hidden="true" className="ml-1 inline-block w-3">
                    {active ? (sort.asc ? "↑" : "↓") : ""}
                  </span>
                </button>
              </th>
            );
          })}
          <th className="px-3 py-2 text-left font-medium text-zinc-500">
            Run conditions
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((skill) => (
          <tr key={skill.slug} className="border-b border-zinc-200 align-top">
            {columns.map(({ key }) => (
              <td
                key={key}
                className={`px-3 py-2 whitespace-nowrap ${key === "name" ? "font-medium" : "tabular-nums"}`}
              >
                {format(skill, key)}
              </td>
            ))}
            <td className="min-w-56 px-3 py-2 leading-5 text-zinc-600">
              {skill.conditions}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
