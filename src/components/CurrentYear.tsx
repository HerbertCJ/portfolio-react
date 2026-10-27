"use client";

import { useEffect, useState } from "react";

// Starts with the build year (matching the static HTML), then refreshes in the browser so the build never goes stale.
export default function CurrentYear({ buildYear }: { buildYear: number }) {
  const [year, setYear] = useState(buildYear);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
