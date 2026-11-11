import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./theme.css";

// tasteskill deal for kind software: pairing "manrope" (display 500, text 400/500, one family).
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "Mooring: booking and scheduling for small fitness studios",
  description:
    "Bookings, waitlists and payments for yoga, pilates and climbing studios run by their owners.",
  other: { "page-type": "software", "site-kind": "software" },
};

export default function TasteSkillLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-type="software"
      className={`${manrope.variable} min-h-svh overflow-x-clip bg-(--ts-bg) font-(family-name:--font-manrope) text-base leading-[1.55] text-(--ts-ink) antialiased selection:bg-(--ts-action)/25`}
    >
      {children}
    </div>
  );
}
