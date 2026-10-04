"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AuditSection } from "./AuditSection";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const INCLUDES_ICONS = ["🔍", "📱", "🎯", "🏆", "⚡", "📊"];

export function AuditoriaPage() {
  const { t } = useLanguage();
  return (
    <div className="pt-24 pb-32" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center"
      >
        <motion.p variants={fadeUpVariants} className="tag mb-4">
          {t.auditoriaPage.tag}
        </motion.p>
        <motion.h1
          variants={fadeUpVariants}
          className="mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--text-primary)" }}
        >
          {t.auditoriaPage.title}
        </motion.h1>
        <motion.p
          variants={fadeUpVariants}
          className="text-lg sm:text-xl max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          {t.auditoriaPage.subtitle}
        </motion.p>
      </motion.section>

      {/* Audit tool */}
      <AuditSection />

      {/* What's included */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag mb-4">{t.auditoriaPage.includesTag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            {t.auditoriaPage.includesTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.auditoriaPage.includes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border"
              style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
            >
              <span className="text-3xl mb-4 block">{INCLUDES_ICONS[i]}</span>
              <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl border"
          style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            {t.auditoriaPage.ctaTitle}
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            {t.auditoriaPage.ctaDesc}
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-[0_0_30px_-6px_rgba(37,99,235,0.8)]"
          >
            {t.auditoriaPage.ctaBtn}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
