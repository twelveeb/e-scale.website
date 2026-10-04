"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUpVariants, cardVariants } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { METRIC_VALUES } from "@/lib/constants";

const CASE_COLORS = ["#60A5FA", "#A78BFA", "#34D399", "#F59E0B"];
const CASE_METRIC_VALUES = [
  ["42", "€1.90"],
  ["85K", "+180%"],
  ["89", "94%"],
  ["+1.2K", "28/mês"],
];

export function CasosPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-24 pb-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.p variants={fadeUpVariants} className="tag mb-4">
            {t.casos.tag}
          </motion.p>
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-6xl font-black mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {t.casos.title}
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.casos.subtitle}
          </motion.p>
        </motion.div>

        {/* Cases grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20"
        >
          {t.casos.cases.map((c, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="p-8 rounded-2xl border overflow-hidden relative"
              style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
              whileHover={{ borderColor: `${CASE_COLORS[i]}40` }}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 pointer-events-none"
                style={{ background: CASE_COLORS[i] }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                      style={{ background: `${CASE_COLORS[i]}15`, color: CASE_COLORS[i], fontFamily: "var(--font-geist-mono)" }}
                    >
                      {c.industry}
                    </span>
                    <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>{c.client}</h2>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.service}</p>
                  </div>
                  <div
                    className="text-xl font-black shrink-0 ml-4"
                    style={{ color: CASE_COLORS[i], fontFamily: "var(--font-geist-mono)" }}
                  >
                    {c.result}
                  </div>
                </div>

                {/* Story */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {c.story}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                  {[
                    { label: c.metric1Label, value: CASE_METRIC_VALUES[i][0] },
                    { label: c.metric2Label, value: CASE_METRIC_VALUES[i][1] },
                  ].map((m) => (
                    <div key={m.label}>
                      <div
                        className="text-xl font-bold"
                        style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-mono)" }}
                      >
                        {m.value}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-secondary)" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 sm:p-16 rounded-3xl border text-center mb-12"
          style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}
        >
          <p className="tag mb-6">{t.casos.impactTag}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            {t.casos.impactStats.map((label, i) => (
              <div key={label}>
                <div className="text-3xl font-black text-gradient mb-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {METRIC_VALUES[i]}
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{label}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-[0_0_30px_-6px_rgba(37,99,235,0.8)]"
          >
            {t.casos.ctaBtn}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
