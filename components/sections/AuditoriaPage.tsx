"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AuditSection } from "./AuditSection";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";

const INCLUDES = [
  { icon: "🔍", title: "Análise SEO técnica", desc: "Velocidade, meta tags, estrutura de URLs, sitemap e indexação." },
  { icon: "📱", title: "Auditoria de redes sociais", desc: "Consistência de perfil, frequência de publicação e engagement." },
  { icon: "🎯", title: "Análise de conversão", desc: "Landing pages, CTAs, formulários e funil de vendas." },
  { icon: "🏆", title: "Score de autoridade", desc: "Posicionamento digital e presença na pesquisa orgânica." },
  { icon: "⚡", title: "Velocidade e performance", desc: "Core Web Vitals, tempo de carregamento e optimização mobile." },
  { icon: "📊", title: "Relatório personalizado", desc: "Recomendações prioritizadas específicas para o teu negócio." },
];

export function AuditoriaPage() {
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
          Gratuito · Sem compromisso
        </motion.p>
        <motion.h1
          variants={fadeUpVariants}
          className="mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--text-primary)" }}
        >
          Auditoria Gratuita
        </motion.h1>
        <motion.p
          variants={fadeUpVariants}
          className="text-lg sm:text-xl max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Analisa a tua presença digital em segundos. Identifica os problemas
          críticos e recebe um plano de acção personalizado.
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
          <p className="tag mb-4">O que analisamos</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Relatório completo incluído
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INCLUDES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border"
              style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
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
            Preferes falar diretamente?
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            Marca uma chamada de 30 minutos e analisamos o teu negócio juntos.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-[0_0_30px_-6px_rgba(37,99,235,0.8)]"
          >
            Marcar Chamada
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
