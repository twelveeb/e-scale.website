"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";

export function ParceriasPage() {
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
            Ecossistema
          </motion.p>
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-6xl font-black mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Parceiros
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Trabalhamos com parceiros que partilham a nossa visão: sistemas que
            funcionam de verdade e geram resultados reais.
          </motion.p>
        </motion.div>

        {/* Main partner: Ikarus Pay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 sm:p-16 rounded-3xl border mb-12 overflow-hidden"
          style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}
        >
          {/* BG Decoration */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #27AE60, transparent)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/8 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-green-400 text-xs font-semibold tracking-wide">Parceiro Principal</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/5 border" style={{ borderColor: "var(--border-color)" }}>
                  <Image src="/Ikaruslg.png" alt="Ikarus Pay" fill className="object-contain p-1" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Ikarus Pay</h2>
                  <p className="text-sm" style={{ color: "#27AE60" }}>Plataforma de e-commerce em Angola</p>
                </div>
              </div>

              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                A Ikarus Pay é a plataforma líder de dropshipping e pagamentos
                digitais em Angola. Em parceria com a E-Scale, criamos um
                ecossistema completo que permite a qualquer pessoa vender
                produtos online em Angola sem armazém ou investimento inicial.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  ["Logística completa", "Entrega em toda Angola"],
                  ["Catálogo gerido", "Centenas de produtos"],
                  ["Pagamentos seguros", "Processamento local"],
                  ["Suporte dedicado", "Equipa em Angola"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex flex-col gap-1">
                    <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{title}</span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{desc}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/dropshipping-ao"
                  className="px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:shadow-[0_0_20px_-4px_rgba(39,174,96,0.8)]"
                  style={{ background: "#27AE60" }}
                >
                  Ver parceria completa
                </Link>
                <a
                  href="https://ikaruspay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border font-semibold text-sm transition-all duration-200 hover:bg-white/5 flex items-center gap-2"
                  style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                >
                  Visitar Ikarus Pay
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Visual card */}
            <div className="flex justify-center">
              <div
                className="relative p-8 rounded-2xl border w-full max-w-xs text-center"
                style={{ background: "var(--glass-bg)", borderColor: "rgba(39,174,96,0.2)" }}
              >
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-white/5 border" style={{ borderColor: "var(--border-color)" }}>
                  <Image src="/Ikaruslg.png" alt="Ikarus Pay" fill className="object-contain p-2" />
                </div>
                <h3 className="font-bold mb-1" style={{ color: "var(--text-primary)" }}>Ikarus Pay</h3>
                <p className="text-xs mb-6" style={{ color: "#27AE60" }}>Parceiro Oficial</p>

                <div className="flex justify-center items-center gap-3 mb-6">
                  <div className="relative w-8 h-8">
                    <Image src="/logo.png" alt="E-Scale" fill className="object-contain" />
                  </div>
                  <span className="text-lg font-bold" style={{ color: "var(--text-muted)" }}>×</span>
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/5">
                    <Image src="/Ikaruslg.png" alt="Ikarus" fill className="object-contain p-0.5" />
                  </div>
                </div>

                <p className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                  &quot;E-Scale traz os clientes. Ikarus entrega.&quot;
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Become a partner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl border text-center"
          style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Quer ser parceiro?
          </h2>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Se tens uma plataforma, produto ou serviço complementar ao nosso
            ecossistema, fala connosco.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200"
          >
            Entrar em contacto
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
