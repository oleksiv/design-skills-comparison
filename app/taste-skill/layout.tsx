import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./theme.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Mooring: class booking software for small fitness studios",
  description:
    "Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.",
  openGraph: {
    title: "Mooring: class booking software for small fitness studios",
    description: "Bookings, waitlists and payments for yoga, pilates and climbing studios. 14 days free. No card required.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  // tasteskill: the page type and kind, read by its checker (SKILL.md section 1)
  other: { "page-type": "software", "site-kind": "software" },
  // canonical: left out until the client's domain is known
};

export const viewport: Viewport = { themeColor: "#ddd6c6", viewportFit: "cover" };

// The root layout is shared and bare, and the page's shell must be header.nav, main and
// footer.closing straight under <body>, so the page's marks go on <html> before first paint: the
// page type, radius, button look and lit ground, the fonts and ground, and m-enter, which holds the
// hero's words for the entrance (the 700 ms mark shows them whatever happens to the script).
const htmlClasses = [geist.variable, geistMono.variable, "bg-(--p-bg)", "font-(family-name:--font-geist)", "text-(--p-ink)", "antialiased", "m-enter"];
const headLine = `(function(){var d=document.documentElement;d.dataset.type='software';d.dataset.radius='soft';d.dataset.buttons='solid';d.dataset.ground='sage';d.classList.add.apply(d.classList,${JSON.stringify(htmlClasses)});setTimeout(function(){d.classList.add('m-enter-done')},700)})();`;

export default function TasteSkillLayout({ children }: LayoutProps<"/taste-skill">) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: headLine }} />
      {children}
    </>
  );
}
