import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./mooring.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-m-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-m-mono" });

export const metadata: Metadata = {
  title: "Mooring | Booking and scheduling for small fitness studios",
  description:
    "Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.",
};

// Theme tokens live here as CSS variables; custom curves because the built-in keywords are too weak.
const theme = [
  "[--paper:#f5f3ee] [--surface:#ffffff] [--ink:#0e1a22] [--ink-2:#33404a] [--muted:#69737b]",
  "[--line:rgb(14_26_34/0.09)] [--line-strong:rgb(14_26_34/0.16)] [--tide:#1d6b66] [--tide-soft:#e1edea]",
  "[--ease-out:cubic-bezier(0.23,1,0.32,1)] [--ease-in-out:cubic-bezier(0.77,0,0.175,1)]",
].join(" ");

const base = [
  "min-h-screen bg-(--paper) text-(--ink) antialiased",
  "font-[family-name:var(--font-m-sans),ui-sans-serif,system-ui,sans-serif]",
  "selection:bg-(--tide-soft) selection:text-(--ink)",
  "[&_:is(a,summary):focus-visible]:rounded-lg [&_:is(a,summary):focus-visible]:outline-2",
  "[&_:is(a,summary):focus-visible]:outline-offset-3 [&_:is(a,summary):focus-visible]:outline-(--tide)",
].join(" ");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={`${sans.variable} ${mono.variable} ${theme} ${base}`}>{children}</div>;
}
