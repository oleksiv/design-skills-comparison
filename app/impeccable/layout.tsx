import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./mooring.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Mooring: bookings, waitlists and payments for small studios",
  description:
    "Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.",
};

export default function MooringLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${archivo.variable} min-h-screen bg-(--mr-ground) font-(family-name:--font-archivo) text-(--mr-ink) antialiased [--mr-focus:var(--mr-blue)] selection:bg-(--mr-tape) selection:text-(--mr-ink) motion-safe:[:root:has(&)]:scroll-smooth [:root:has(&)]:[scrollbar-color:var(--mr-blue)_var(--mr-ground)] [&_:focus-visible]:outline-3 [&_:focus-visible]:outline-offset-3 [&_:focus-visible]:outline-(--mr-focus)`}
    >
      {children}
    </div>
  );
}
