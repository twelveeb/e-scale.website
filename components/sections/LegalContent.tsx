"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function LegalContent({ page }: { page: "termos" | "privacidade" }) {
  const { t } = useLanguage();
  const title = page === "termos" ? t.legal.termosTitle : t.legal.privacidadeTitle;
  const body = page === "termos" ? t.legal.termosP1 : t.legal.privacidadeP1;

  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6" style={{ background: "var(--bg)" }}>
      <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
        {title}
      </h1>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        {body}
      </p>
      <p style={{ color: "var(--text-secondary)" }}>
        {t.legal.contactPrefix} <a href="mailto:geral@escale.pt" className="text-blue-400 hover:underline">geral@escale.pt</a>
      </p>
    </div>
  );
}
