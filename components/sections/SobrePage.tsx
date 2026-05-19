"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUpVariants, slideInLeft, slideInRight } from "@/lib/animations";

const VALUES = [
  {
    title: "Resultados, não relatórios",
    desc: "Medimos o nosso sucesso em faturação gerada para os nossos clientes — não em likes ou impressões.",
  },
  {
    title: "Sistemas, não serviços",
    desc: "Construímos infraestrutura digital que trabalha 24/7, não serviços mensais que param quando o contrato acaba.",
  },
  {
    title: "Transparência radical",
    desc: "Dashboard em tempo real, relatórios semanais honestos e comunicação directa. Sem surpresas.",
  },
  {
    title: "Parceria real",
    desc: "Não somos fornecedores — somos o departamento de marketing que o teu negócio merecia ter desde o início.",
  },
];

const TIMELINE = [
  { year: "2022", event: "Fundação da E-Scale em Lisboa" },
  { year: "2023", event: "Primeiros €500K gerados para clientes" },
  { year: "2024", event: "Expansão para o mercado angolano via Ikarus Pay" },
  { year: "2025", event: "€2.4M+ gerados · 127+ campanhas activas" },
  { year: "2026", event: "Sistema de Escala Automatizada lançado" },
];

const MANIFESTO_LINES = [
  "Não somos uma agência.",
  "Somos o sistema de crescimento",
  "que o teu negócio precisa.",
];

export function SobrePage() {
  return (
    <div className="pt-24 pb-32" style={{ background: "var(--bg)" }}>
      {/* Manifesto Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p variants={fadeUpVariants} className="tag mb-8">
            A nossa história
          </motion.p>
          {MANIFESTO_LINES.map((line, i) => (
            <motion.h1
              key={i}
              variants={fadeUpVariants}
              custom={i}
              className="leading-[1.1] mb-2"
              style={{
                fontSize: "clamp(32px, 5.5vw, 64px)",
                color: i === 2 ? "var(--accent-electric)" : "var(--text-primary)",
              }}
            >
              {line}
            </motion.h1>
          ))}
          <motion.p
            variants={fadeUpVariants}
            className="mt-8 text-lg sm:text-xl max-w-2xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Nascemos da frustração com agências que prometem resultados e entregam
            relatórios. Decidimos construir algo diferente: sistemas digitais que
            trabalham todos os dias, independentemente de quem os opera.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats row */}
      <section
        className="border-t border-b"
        style={{ borderColor: "var(--border-color)", background: "var(--surface)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "€2.4M+", l: "Receita gerada" },
              { v: "127+", l: "Campanhas activas" },
              { v: "98%", l: "Taxa de retenção" },
              { v: "4 anos", l: "De crescimento" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black text-gradient mb-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {s.v}
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="tag mb-4">Missão</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Tornar o crescimento digital acessível e previsível.
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Acreditamos que qualquer negócio com um produto bom merece um
              sistema de marketing que funcione. O problema nunca é o produto —
              é a ausência de sistema.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Construímos esse sistema. Para PMEs, negócios locais, clínicas e
              empreendedores que querem crescer de forma sustentável e escalável.
            </p>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border"
                style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-blue-400 text-sm">✦</span>
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-24"
        style={{ background: "var(--bg-soft)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="tag mb-4">Percurso</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              A nossa linha do tempo
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "var(--border-color)" }}
            />

            <div className="flex flex-col gap-8">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:text-left sm:pl-12"} pl-16 sm:pl-0`}>
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                      style={{
                        background: "rgba(37,99,235,0.1)",
                        color: "var(--accent-electric)",
                        fontFamily: "var(--font-geist-mono)",
                      }}
                    >
                      {item.year}
                    </div>
                    <p className="font-medium" style={{ color: "var(--text-primary)" }}>{item.event}</p>
                  </div>

                  {/* Dot */}
                  <div
                    className="absolute left-6 sm:static sm:w-4 sm:h-4 w-3 h-3 rounded-full border-2 border-blue-500 bg-blue-500/20 shrink-0 sm:mx-auto z-10"
                  />

                  <div className="flex-1 hidden sm:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
            Vamos crescer juntos?
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Fala connosco e descobre como podemos construir o teu sistema de crescimento.
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
