"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { METRICS } from "@/lib/constants";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    // Extract numeric part
    const match = target.match(/[\d.]+/);
    if (!match) {
      setDisplay(target);
      return;
    }

    const end = parseFloat(match[0]);
    const prefix = target.slice(0, target.indexOf(match[0]));
    const postfix = target.slice(target.indexOf(match[0]) + match[0].length);
    const hasDecimal = match[0].includes(".");
    const duration = 1800;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const value = end * eased;
      setDisplay(
        prefix +
          (hasDecimal ? value.toFixed(1) : Math.floor(value).toString()) +
          postfix
      );
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{display}</span>;
}

export function MetricsBar() {
  return (
    <section
      className="relative border-t border-b"
      style={{
        borderColor: "var(--border-color)",
        background: "var(--bg-soft)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-0">
          {METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="flex flex-col items-center text-center px-4 relative"
            >
              {/* Separator */}
              {i > 0 && (
                <div
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px"
                  style={{ background: "var(--border-color)" }}
                />
              )}

              <div
                className="font-mono text-3xl sm:text-4xl font-bold mb-2 text-gradient"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                <CountUp target={metric.value} />
              </div>
              <p
                className="text-xs sm:text-sm uppercase tracking-wide"
                style={{
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "0.08em",
                }}
              >
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
