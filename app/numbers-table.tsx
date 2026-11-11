"use client";

import { useState } from "react";
import skills from "./skills.json";

type Skill = (typeof skills)[number];
type Key = "name" | "tokens" | "seconds" | "toolCalls" | "files" | "lines" | "deps";

const columns: { key: Key; label: string }[] = [
  { key: "name", label: "Skill" },
  { key: "tokens", label: "Tokens" },
  { key: "seconds", label: "Time" },
  { key: "toolCalls", label: "Tool calls" },
  { key: "files", label: "Files" },
  { key: "lines", label: "Lines" },
  { key: "deps", label: "Packages" },
];

const time = (s: number) => `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, "0")}s`;

const format = (skill: Skill, key: Key) =>
  key === "seconds"
    ? time(skill.seconds)
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
    <table className="w-full min-w-[40rem] border-collapse text-sm">
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
        </tr>
      </thead>
      <tbody>
        {rows.map((skill) => (
          <tr key={skill.slug} className="border-b border-zinc-200">
            {columns.map(({ key }) => (
              <td
                key={key}
                className={`px-3 py-2 ${key === "name" ? "font-medium" : "tabular-nums"}`}
              >
                {format(skill, key)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
