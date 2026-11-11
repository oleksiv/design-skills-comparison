import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";

import { cn } from "./lib/utils";
import "./ui-styling.css";

const outfit = Outfit({ subsets: ["latin"] });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono-marker" });

export const metadata: Metadata = {
  title: "Mooring",
  description:
    "Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.",
};

// shadcn/ui theme tokens, scoped to this route as arbitrary-property utilities (light, then dark).
const tokens = [
  "[--background:oklch(0.982_0.008_85)]",
  "[--foreground:oklch(0.24_0.045_250)]",
  "[--card:oklch(0.995_0.004_85)]",
  "[--card-foreground:oklch(0.24_0.045_250)]",
  "[--primary:oklch(0.3_0.06_250)]",
  "[--primary-foreground:oklch(0.975_0.012_85)]",
  "[--secondary:oklch(0.95_0.014_85)]",
  "[--muted-foreground:oklch(0.47_0.03_250)]",
  "[--accent:oklch(0.68_0.15_40)]",
  "[--tide:oklch(0.5_0.08_215)]",
  "[--border:oklch(0.89_0.015_85)]",
  "[--ring:oklch(0.55_0.08_230)]",
  "dark:[--background:oklch(0.19_0.035_250)]",
  "dark:[--foreground:oklch(0.95_0.012_85)]",
  "dark:[--card:oklch(0.225_0.04_250)]",
  "dark:[--card-foreground:oklch(0.95_0.012_85)]",
  "dark:[--primary:oklch(0.93_0.02_85)]",
  "dark:[--primary-foreground:oklch(0.24_0.045_250)]",
  "dark:[--secondary:oklch(0.27_0.04_250)]",
  "dark:[--muted-foreground:oklch(0.74_0.025_250)]",
  "dark:[--accent:oklch(0.74_0.14_45)]",
  "dark:[--tide:oklch(0.77_0.08_210)]",
  "dark:[--border:oklch(0.32_0.04_250)]",
  "dark:[--ring:oklch(0.75_0.06_220)]",
];

export default function MooringLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        tokens,
        outfit.className,
        mono.variable,
        "min-h-dvh bg-background text-foreground antialiased selection:bg-accent/30",
      )}
    >
      {children}
    </div>
  );
}
