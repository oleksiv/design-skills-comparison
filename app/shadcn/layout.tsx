import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { cn } from "cn"

import "./theme.css"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Mooring: booking and scheduling for small fitness studios",
  description:
    "Mooring handles bookings, waitlists and payments for your studio, so you can get back on the mat.",
}

export default function ShadcnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        figtree.variable,
        "min-h-svh bg-background font-sans text-foreground antialiased"
      )}
    >
      {children}
    </div>
  )
}
