"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LANGUAGES } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/i18n/types";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        aria-label="Language"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
        style={{ color: "var(--text-secondary)" }}
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline uppercase text-xs" style={{ fontFamily: "var(--font-geist-mono)" }}>
          {current.code}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 rounded-xl border overflow-hidden z-50"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border-color)",
              boxShadow: "0 12px 32px -8px rgba(0,0,0,0.4)",
            }}
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code as Lang);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-white/5"
                style={{
                  color: l.code === lang ? "var(--accent-electric)" : "var(--text-secondary)",
                  background: l.code === lang ? "rgba(37,99,235,0.08)" : "transparent",
                }}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LanguageSwitcherMobile() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="grid grid-cols-3 gap-2">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code as Lang)}
          className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg text-xs font-medium transition-all"
          style={{
            color: l.code === lang ? "var(--accent-electric)" : "var(--text-secondary)",
            background: l.code === lang ? "rgba(37,99,235,0.12)" : "var(--glass-bg)",
            border: `1px solid ${l.code === lang ? "rgba(37,99,235,0.4)" : "var(--border-color)"}`,
          }}
        >
          <span>{l.flag}</span>
          <span className="uppercase">{l.code}</span>
        </button>
      ))}
    </div>
  );
}
