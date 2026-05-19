"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeUpVariants, cardVariants } from "@/lib/animations";
import { Target, Layers, TrendingUp, Crown, Zap, ArrowRight } from "lucide-react";

const ICONS = { Target, Layers, TrendingUp, Crown, Zap };

const FEATURES = [
  ["Estratégia personalizada", "Funis de conversão", "Copy que converte", "Optimização contínua"],
  ["Calendário editorial", "Copy + Design", "Carrosséis e Reels", "Distribuição multicanal"],
  ["Landing pages de alta conversão", "Email automation", "Retargeting avançado", "A/B testing"],
  ["Posicionamento de marca", "SEO de autoridade", "PR digital", "Gestão de reputação"],
  ["Automações de CRM", "Relatórios semanais", "Dashboard em tempo real", "Escalabilidade sem equipa"],
];

export function ServicesPage() {
  return (
    <div className="pt-24 pb-32" style={{ background: "var(--bg)" }}>
      {/* Header */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center"
      >
        <motion.p variants={fadeUpVariants} className="tag mb-4">
          O que construímos
        </motion.p>
        <motion.h1
          variants={fadeUpVariants}
          className="mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--text-primary)" }}
        >
          Os nossos sistemas
        </motion.h1>
        <motion.p
          variants={fadeUpVariants}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          Cada sistema foi construído para resolver um problema concreto e
          entregar resultados mensuráveis — não apenas atividade no digital.
        </motion.p>
        <motion.div variants={fadeUpVariants}>
          <Link
            href="/auditoria"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-[0_0_30px_-6px_rgba(37,99,235,0.8)]"
          >
            Pedir Auditoria Gratuita
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.section>

      {/* Services full detail */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-6"
      >
        {SERVICES.map((service, i) => {
          const Icon = ICONS[service.icon as keyof typeof ICONS] || Target;
          const features = FEATURES[i] || [];

          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="p-8 sm:p-10 rounded-2xl border"
              style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
              whileHover={{ borderColor: "rgba(37,99,235,0.3)" }}
            >
              <div className="flex flex-col sm:flex-row gap-8">
                {/* Number + Icon */}
                <div className="flex flex-col items-start gap-4 sm:w-48 shrink-0">
                  <div
                    className="font-mono text-6xl font-black opacity-10"
                    style={{ fontFamily: "var(--font-geist-mono)", color: "var(--text-primary)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center">
                    <Icon className="text-blue-400" size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                      {service.title}
                    </h2>
                    <span
                      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold shrink-0 ml-4"
                      style={{
                        borderColor: "rgba(37,99,235,0.3)",
                        color: "var(--accent-electric)",
                        background: "rgba(37,99,235,0.08)",
                        fontFamily: "var(--font-geist-mono)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      {service.metric}
                    </span>
                  </div>
                  <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg border"
                        style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                      >
                        <span className="text-blue-400 shrink-0">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 mt-20"
      >
        <div
          className="p-10 sm:p-16 rounded-3xl border text-center relative overflow-hidden"
          style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
          />
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 relative z-10" style={{ color: "var(--text-primary)" }}>
            Pronto para escalar?
          </h2>
          <p className="text-lg mb-8 relative z-10" style={{ color: "var(--text-secondary)" }}>
            Fala connosco e descobre qual sistema se adapta melhor ao teu negócio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/contacto"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-[0_0_30px_-6px_rgba(37,99,235,0.8)]"
            >
              Marcar Chamada
            </Link>
            <Link
              href="/auditoria"
              className="px-8 py-4 rounded-full border font-semibold transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
            >
              Pedir Auditoria
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
