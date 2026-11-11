"use client";

import { useEffect, useState } from "react";

// Holds display text at opacity 0 until the display face has actually loaded.
export function FontGate({
  family,
  className,
  children,
}: {
  family: string;
  className: string;
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let live = true;
    const reveal = () => live && setReady(true);
    document.fonts
      .load(`400 1em ${family}`)
      .then(() => document.fonts.ready)
      .then(reveal, reveal);
    return () => {
      live = false;
    };
  }, [family]);

  return (
    <div className={className} data-fonts={ready ? "ready" : "pending"}>
      {children}
    </div>
  );
}
