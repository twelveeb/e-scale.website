"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Lang, Dictionary } from "./types";
import { dictionaries } from "./dictionaries";

const STORAGE_KEY = "escale_lang";
const DEFAULT_LANG: Lang = "pt";
const VALID_LANGS: Lang[] = ["pt", "en", "fr", "nl", "es", "pl"];

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && VALID_LANGS.includes(saved)) {
        setLangState(saved);
        document.documentElement.setAttribute("lang", saved);
      }
    } catch {
      // ignore (private mode / blocked storage)
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    document.documentElement.setAttribute("lang", next);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
