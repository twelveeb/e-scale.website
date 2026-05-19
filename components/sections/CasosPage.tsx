"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUpVariants, cardVariants } from "@/lib/animations";

const CASES = [
  {
    client: "Clínica Estética Lisboa",
    industry: "Saúde & Beleza",
    service: "Sistema de Aquisição",
    result: "+340% ROAS",
    metric1: { label: "Leads/semana", value: "42" },
    metric2: { label: "Custo por lead", value: "€1.90" },
    story: "Em 3 meses transformámos uma presença digital inexistente num pipeline de 42 leads semanais com custo por lead abaixo de €2.",
    color: "#60A5FA",
  },
  {
    client: "Restaurante Porta da Serra",
    industry: "Restauração",
    service: "Infraestrutura de Conteúdo",
    result: "3× reservas",
    metric1: { label: "Alcance mensal", value: "85K" },
    metric2: { label: "Reservas online", value: "+180%" },
    story: "Conteúdo estratégico que transformou um restaurante local numa referência digital no sector da restauração em Portugal.",
    color: "#A78BFA",
  },
  {
    client: "Academia Fitness Pro",
    industry: "Desporto & Fitness",
    service: "Pipeline de Conversão",
    result: "4.8× ROAS",
    metric1: { label: "Novos membros", value: "89" },
    metric2: { label: "Retenção", value: "94%" },
    story: "Funnel completo de aquisição que trouxe 89 novos membros em 60 dias com uma taxa de retenção de 94%.",
    color: "#34D399",
  },
  {
    client: "Consultora B2B Tech",
    industry: "Tecnologia",
    service: "Sistema de Autoridade",
    result: "+280% visibilidade",
    metric1: { label: "LinkedIn followers", value: "+1.2K" },
    metric2: { label: "Leads qualificados", value: "28/mês" },
    story: "Posicionamento como referência no sector tech português, com 28 leads B2B qualificados por mês.",
    color: "#F59E0B",
  },
];

export function CasosPage() {
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
            Resultados reais
          </motion.p>
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-6xl font-black mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Casos de sucesso
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Números reais de clientes reais. Sem promessas vazias.
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
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="p-8 rounded-2xl border overflow-hidden relative"
              style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
              whileHover={{ borderColor: `${c.color}40` }}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 pointer-events-none"
                style={{ background: c.color }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                      style={{ background: `${c.color}15`, color: c.color, fontFamily: "var(--font-geist-mono)" }}
                    >
                      {c.industry}
                    </span>
                    <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>{c.client}</h2>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.service}</p>
                  </div>
                  <div
                    className="text-xl font-black shrink-0 ml-4"
                    style={{ color: c.color, fontFamily: "var(--font-geist-mono)" }}
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
                  {[c.metric1, c.metric2].map((m) => (
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
          <p className="tag mb-6">Impacto total</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            {[
              { v: "€2.4M+", l: "Receita gerada" },
              { v: "340%", l: "ROAS médio" },
              { v: "127+", l: "Campanhas" },
              { v: "98%", l: "Retenção" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-black text-gradient mb-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {s.v}
                </div>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{s.l}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-[0_0_30px_-6px_rgba(37,99,235,0.8)]"
          >
            O teu negócio é o próximo
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
