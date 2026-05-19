"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <LenisProvider>{children}</LenisProvider>
    </ThemeProvider>
  );
}

function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: { raf: (t: number) => void; on: (e: "scroll", cb: unknown) => void; destroy: () => void } | null = null;
    let rafId: number;

    async function init() {
      const [{ default: Lenis }, gsapModule, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      const gsap = (gsapModule as { default?: typeof gsapModule } & typeof gsapModule).default ?? gsapModule;
      gsap.registerPlugin(ScrollTrigger);

      const lenisInstance = new Lenis({
        lerp: 0.08,
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis = lenisInstance as typeof lenis;

      lenisInstance.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time: number) => lenisInstance.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      function raf(time: number) {
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    init();

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
