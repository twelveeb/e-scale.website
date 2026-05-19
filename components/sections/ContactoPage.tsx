"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpVariants, slideInLeft, slideInRight } from "@/lib/animations";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants";

const SERVICES_OPTIONS = [
  "Sistema de Aquisição",
  "Infraestrutura de Conteúdo",
  "Pipeline de Conversão",
  "Sistema de Autoridade",
  "Escala Automatizada",
  "Dropshipping AO",
  "Outro",
];

export function ContactoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    website: "",
    servico: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle = {
    background: "var(--bg-soft)",
    borderColor: "var(--border-color)",
    color: "var(--text-primary)",
  };

  return (
    <div className="pt-24 pb-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.p variants={fadeUpVariants} className="tag mb-4">
            Fala connosco
          </motion.p>
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-6xl font-black mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Vamos crescer juntos.
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            className="text-lg max-w-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Conta-nos o teu negócio e o que pretendes alcançar. Respondemos em
            menos de 24 horas.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-10">
              <h2 className="text-lg font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Informação de contacto
              </h2>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <div className="w-9 h-9 rounded-lg border flex items-center justify-center shrink-0" style={{ borderColor: "var(--border-color)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  {CONTACT_INFO.email}
                </a>
                <div
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <div className="w-9 h-9 rounded-lg border flex items-center justify-center shrink-0" style={{ borderColor: "var(--border-color)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    </svg>
                  </div>
                  {CONTACT_INFO.instagram}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-4" style={{ color: "var(--text-secondary)", letterSpacing: "0.08em", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase" }}>
                Redes sociais
              </h2>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
                    style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                  >
                    {s.icon === "Instagram" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )}
                    {s.icon === "Linkedin" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Response time badge */}
            <div
              className="mt-10 p-4 rounded-xl border flex items-center gap-3"
              style={{ background: "rgba(37,99,235,0.04)", borderColor: "rgba(37,99,235,0.15)" }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-[pulse-dot_1.5s_ease-in-out_infinite] shrink-0" />
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Tempo de resposta médio:{" "}
                <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  &lt; 24 horas
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  Mensagem enviada!
                </h2>
                <p style={{ color: "var(--text-secondary)" }}>
                  Respondemos em menos de 24 horas. Até breve!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border"
                style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Nome */}
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="O teu nome"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-blue-500 transition-colors"
                      style={inputStyle}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@exemplo.pt"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-blue-500 transition-colors"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Website */}
                <div className="mb-5">
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://www.teusite.pt"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-blue-500 transition-colors"
                    style={inputStyle}
                  />
                </div>

                {/* Serviço */}
                <div className="mb-5">
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    O que procuras? *
                  </label>
                  <select
                    required
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    style={inputStyle}
                  >
                    <option value="" disabled>Selecciona um serviço</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Mensagem */}
                <div className="mb-6">
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Conta-nos o teu negócio e o que pretendes alcançar..."
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-blue-500 transition-colors resize-none"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 disabled:opacity-60 hover:shadow-[0_0_30px_-6px_rgba(37,99,235,0.8)] flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      A enviar...
                    </>
                  ) : (
                    "Enviar mensagem"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
