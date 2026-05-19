"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";

type Step = "input" | "scanning" | "results";

const SCAN_LINES = [
  "A verificar SEO técnico...",
  "A analisar velocidade de carregamento...",
  "A auditar redes sociais...",
  "A verificar estrutura de conteúdo...",
  "A analisar conversão da landing page...",
  "A calcular score de autoridade...",
  "A gerar recomendações...",
];

const SCORE = 42;
const CATEGORIES = [
  { name: "SEO", score: 38, color: "#EF4444" },
  { name: "Conteúdo", score: 52, color: "#F59E0B" },
  { name: "Conversão", score: 31, color: "#EF4444" },
  { name: "Autoridade", score: 47, color: "#F59E0B" },
];

const RECOMMENDATIONS = [
  "Optimizar meta tags — detectadas em 6 páginas sem descrição",
  "Velocidade crítica — página carrega em 5.2s (recomendado: <2s)",
  "Ausência de call-to-action acima da dobra em 80% das páginas",
];

export function AuditSection() {
  const [step, setStep] = useState<Step>("input");
  const [url, setUrl] = useState("");
  const [scanLines, setScanLines] = useState<string[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [scoreDisplay, setScoreDisplay] = useState(0);
  const lineIndex = useRef(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setStep("scanning");
    setScanLines([]);
    setScanProgress(0);
    lineIndex.current = 0;

    // Add lines progressively
    const lineInterval = setInterval(() => {
      if (lineIndex.current < SCAN_LINES.length) {
        setScanLines((prev) => [...prev, SCAN_LINES[lineIndex.current]]);
        lineIndex.current++;
      } else {
        clearInterval(lineInterval);
      }
    }, 600);

    // Progress bar
    const progressInterval = setInterval(() => {
      setScanProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setStep("results");
            // Animate score
            let s = 0;
            const scoreInterval = setInterval(() => {
              s += 2;
              setScoreDisplay(Math.min(s, SCORE));
              if (s >= SCORE) clearInterval(scoreInterval);
            }, 40);
          }, 500);
          return 100;
        }
        return p + 2.2;
      });
    }, 100);
  };

  return (
    <section className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariants} className="tag mb-4">
            Gratuito
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="mb-4"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", color: "var(--text-primary)" }}
          >
            Auditoria inteligente
          </motion.h2>
          <motion.p variants={fadeUpVariants} style={{ color: "var(--text-secondary)" }}>
            Analisa a tua presença digital em segundos.
          </motion.p>
        </motion.div>

        {/* Audit Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-2xl mx-auto"
        >
          <div
            className="relative rounded-3xl border overflow-hidden"
            style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
          >
            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {/* Step 1: Input */}
                {step === "input" && (
                  <motion.div
                    key="input"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                      Introduz o teu website
                    </h3>
                    <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                      Analisamos SEO, velocidade, conversão e autoridade digital.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://www.teusite.pt"
                        required
                        className="flex-1 px-4 py-3 rounded-xl border text-base outline-none focus:border-blue-500 transition-colors"
                        style={{
                          background: "var(--bg-soft)",
                          borderColor: "var(--border-color)",
                          color: "var(--text-primary)",
                        }}
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold whitespace-nowrap transition-all duration-200 hover:shadow-[0_0_20px_-4px_rgba(37,99,235,0.8)]"
                      >
                        Analisar agora
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* Step 2: Scanning */}
                {step === "scanning" && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-[pulse-dot_1s_ease-in-out_infinite]" />
                      <p className="text-sm font-semibold" style={{ color: "var(--accent-electric)", fontFamily: "var(--font-geist-mono)" }}>
                        A analisar {url}
                      </p>
                    </div>

                    {/* Scan lines */}
                    <div className="mb-6 space-y-2 min-h-[140px]">
                      {scanLines.map((line, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-sm"
                          style={{
                            color: i === scanLines.length - 1 ? "var(--text-primary)" : "var(--text-secondary)",
                            fontFamily: "var(--font-geist-mono)",
                          }}
                        >
                          {i === scanLines.length - 1 ? "▶ " : "✓ "}{line}
                        </motion.p>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-blue-500"
                        style={{ width: `${scanProgress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                      {/* Scan glow */}
                      <div
                        className="absolute inset-y-0 w-24 rounded-full"
                        style={{
                          left: `${scanProgress - 12}%`,
                          background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.6), transparent)",
                          transition: "left 0.1s linear",
                        }}
                      />
                    </div>
                    <p className="text-xs mt-2 text-right" style={{ color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
                      {Math.round(scanProgress)}%
                    </p>
                  </motion.div>
                )}

                {/* Step 3: Results */}
                {step === "results" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
                      {/* Score circle */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="relative w-24 h-24">
                          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              fill="none"
                              stroke="#EF4444"
                              strokeWidth="8"
                              strokeLinecap="round"
                              strokeDasharray={`${(scoreDisplay / 100) * 264} 264`}
                              className="transition-all duration-100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-black" style={{ fontFamily: "var(--font-geist-mono)", color: "#EF4444" }}>
                              {scoreDisplay}
                            </span>
                            <span className="text-xs" style={{ color: "var(--text-muted)" }}>/100</span>
                          </div>
                        </div>
                        <span className="text-xs mt-2 font-semibold text-red-400">Crítico</span>
                      </div>

                      {/* Categories */}
                      <div className="flex-1 grid grid-cols-2 gap-3 w-full">
                        {CATEGORIES.map((cat) => (
                          <div key={cat.name}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}>
                                {cat.name}
                              </span>
                              <span className="text-xs font-bold" style={{ color: cat.color, fontFamily: "var(--font-geist-mono)" }}>
                                {cat.score}
                              </span>
                            </div>
                            <div className="h-1 rounded-full" style={{ background: "var(--border-color)" }}>
                              <motion.div
                                className="h-full rounded-full"
                                style={{ background: cat.color }}
                                initial={{ width: 0 }}
                                animate={{ width: `${cat.score}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold mb-3" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.08em" }}>
                        PRIORIDADES
                      </p>
                      {RECOMMENDATIONS.map((rec, i) => (
                        <div key={i} className="flex gap-3 mb-2">
                          <span className="text-red-400 shrink-0 mt-0.5">⚠</span>
                          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{rec}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/auditoria"
                        className="flex-1 text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-[0_0_20px_-4px_rgba(37,99,235,0.8)]"
                      >
                        Quero o relatório completo
                      </Link>
                      <button
                        onClick={() => { setStep("input"); setUrl(""); }}
                        className="px-4 py-3 rounded-xl border text-sm font-medium transition-colors hover:bg-white/5"
                        style={{ borderColor: "var(--border-color)", color: "var(--text-secondary)" }}
                      >
                        Nova análise
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
