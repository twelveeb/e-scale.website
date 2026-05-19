"use client";
import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const update = () => {
      const sy = window.scrollY;
      setScrollY(sy);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? sy / total : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return { progress, scrollY };
}
