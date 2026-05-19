"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { DROPSHIPPING_STEPS, FAQ_ITEMS } from "@/lib/constants";
import { staggerContainer, fadeUpVariants, cardVariants } from "@/lib/animations";

const ADVANTAGES = [
  { icon: "📦", title: "Sem armazém", desc: "Nenhum stock físico necessário. Zero custos de armazenagem." },
  { icon: "📋", title: "Catálogo gerido", desc: "Centenas de produtos geridos pela Ikarus Pay." },
  { icon: "🚚", title: "Logística incluída", desc: "Entrega em Angola gerida 100% pela Ikarus Pay." },
  { icon: "📢", title: "Marketing profissional", desc: "Estratégia completa de aquisição pela E-Scale." },
  { icon: "🛡️", title: "Zero risco", desc: "Sem investimento inicial. Começas sem perder nada." },
  { icon: "🎧", title: "Suporte completo", desc: "Equipa dedicada disponível para ti 24/7." },
];

const STATS = [
  { value: "12M+", label: "Consumidores online em Angola" },
  { value: "€0", label: "Investimento inicial" },
  { value: "40%", label: "Comissão máxima por venda" },
  { value: "24/7", label: "Suporte dedicado" },
];

function CountUpStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/[\d.]+/);
    if (!match) { setDisplayed(value); return; }
    const end = parseFloat(match[0]);
    const pre = value.slice(0, value.indexOf(match[0]));
    const post = value.slice(value.indexOf(match[0]) + match[0].length);
    const dur = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - t, 4);
      const v = end * e;
      setDisplayed(pre + (match[0].includes(".") ? v.toFixed(1) : Math.floor(v).toString()) + post);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-black text-gradient mb-2" style={{ fontFamily: "var(--font-geist-mono)" }}>
        {displayed}
      </div>
      <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</p>
    </div>
  );
}

export function DropshippingPage() {
  const dropFaqs = FAQ_ITEMS.find((f) => f.category === "Dropshipping AO")?.items || [];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16" style={{ background: "#000" }}>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 text-center">
        {/* BG Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #27AE60, transparent)" }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Partnership badge */}
          <motion.div variants={fadeUpVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Parceria Oficial E-Scale × Ikarus Pay
            </span>
          </motion.div>

          {/* Logos */}
          <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-6 mb-10">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image src="/logo.png" alt="E-Scale" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold text-white/30">×</span>
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center border border-white/10">
              <Image src="/Ikaruslg.png" alt="Ikarus Pay" fill className="object-contain p-1" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariants}
            className="leading-tight mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff" }}
          >
            Vende online
            <br />
            em Angola.
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="text-xl sm:text-2xl font-semibold mb-4"
            style={{ color: "#27AE60" }}
          >
            Sem armazém. Sem risco. Com suporte.
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="text-base sm:text-lg max-w-xl mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            A parceria que junta o marketing da E-Scale com a logística da
            Ikarus Pay para criares um negócio online em Angola.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ikaruspay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(39,174,96,0.9)]"
              style={{ background: "#27AE60" }}
            >
              Começar agora
            </a>
            <Link
              href="#como-funciona"
              className="px-8 py-4 rounded-full border font-semibold transition-all duration-200 hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
            >
              Saber mais
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* WHAT IS */}
      <section
        id="como-funciona"
        className="py-24 border-t"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="tag mb-4" style={{ color: "#27AE60" }}>O que é</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Dropshipping AO em Angola
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                O Dropshipping AO é um modelo de negócio onde vendes produtos
                online em Angola sem nunca precisares de ter stock ou armazém.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                A <span style={{ color: "#27AE60", fontWeight: 600 }}>Ikarus Pay</span> trata do catálogo,
                da logística e da entrega. A{" "}
                <span style={{ color: "#60A5FA", fontWeight: 600 }}>E-Scale</span> cria a tua estratégia
                de marketing, anúncios e aquisição de clientes. Tu ficas com a comissão.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Zero investimento inicial",
                  "Catálogo gerido pela Ikarus Pay",
                  "Marketing gerido pela E-Scale",
                  "Comissão por cada venda realizada",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(39,174,96,0.15)", border: "1px solid rgba(39,174,96,0.3)" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#27AE60" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="p-8 rounded-3xl border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <Image src="/logo.png" alt="E-Scale" fill className="object-contain p-1" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">E-Scale</div>
                    <div className="text-xs" style={{ color: "#60A5FA" }}>Marketing · Anúncios · Aquisição</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <Image src="/Ikaruslg.png" alt="Ikarus Pay" fill className="object-contain p-1" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Ikarus Pay</div>
                    <div className="text-xs" style={{ color: "#27AE60" }}>Catálogo · Logística · Entrega</div>
                  </div>
                </div>
                <div
                  className="h-px mb-6"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1" style={{ fontFamily: "var(--font-geist-mono)" }}>
                    TU
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "#27AE60" }}>
                    Ficas com a comissão
                  </div>
                </div>
              </div>
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-3xl -z-10 blur-2xl opacity-20"
                style={{ background: "radial-gradient(circle, #27AE60, transparent)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-24 border-t" style={{ borderColor: "rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.01)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="tag mb-4" style={{ color: "#27AE60" }}>Como funciona</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              4 passos para começar
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DROPSHIPPING_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {/* Connector line */}
                {i < DROPSHIPPING_STEPS.length - 1 && (
                  <div
                    className="absolute top-6 left-full w-full h-px hidden lg:block"
                    style={{ background: "linear-gradient(90deg, rgba(39,174,96,0.4), transparent)", zIndex: 0 }}
                  />
                )}
                <div
                  className="p-6 rounded-2xl border relative z-10"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full border flex items-center justify-center font-mono font-bold text-sm mb-4"
                    style={{
                      borderColor: "rgba(39,174,96,0.4)",
                      color: "#27AE60",
                      background: "rgba(39,174,96,0.08)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="py-20 border-t"
        style={{ borderColor: "rgba(255,255,255,0.04)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <CountUpStat key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 border-t" style={{ borderColor: "rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.01)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Porquê o Dropshipping AO?
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {ADVANTAGES.map((adv, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="p-6 rounded-2xl border"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                whileHover={{ borderColor: "rgba(39,174,96,0.3)", background: "rgba(39,174,96,0.03)" }}
              >
                <span className="text-3xl mb-4 block">{adv.icon}</span>
                <h3 className="text-sm font-bold mb-2 text-white">{adv.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{adv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PARTNERSHIP BLOCK */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 sm:p-16 rounded-3xl border text-center overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(39,174,96,0.2)" }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-10"
                style={{ background: "#27AE60" }}
              />
              <div
                className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-10"
                style={{ background: "#2563EB" }}
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="relative w-14 h-14 sm:w-20 sm:h-20">
                  <Image src="/logo.png" alt="E-Scale" fill className="object-contain" />
                </div>
                <span className="text-2xl font-bold text-white/30">×</span>
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                  <Image src="/Ikaruslg.png" alt="Ikarus Pay" fill className="object-contain p-2" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                E-Scale traz os clientes.
                <br />
                <span style={{ color: "#27AE60" }}>Ikarus entrega.</span>
                <br />
                Tu ficas com o lucro.
              </h2>
              <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                Junta-te à parceria e começa a vender online em Angola hoje.
              </p>
              <a
                href="https://ikaruspay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(39,174,96,0.9)]"
                style={{ background: "#27AE60" }}
              >
                Começar agora — Grátis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t px-4 sm:px-6" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Perguntas frequentes</h2>
          </motion.div>
          <div className="flex flex-col gap-3">
            {dropFaqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/3 transition-colors"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="text-sm font-medium text-white">{faq.q}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="2"
                    className={`shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4"
                    style={{ background: "rgba(255,255,255,0.01)" }}
                  >
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
