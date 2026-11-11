import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design skills for Claude, compared",
  description:
    "One landing page brief, built ten times: nine Claude design skills and a no-skill control.",
};

// Deliberately bare: no fonts or colors here, so nothing leaks into the test pages.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
