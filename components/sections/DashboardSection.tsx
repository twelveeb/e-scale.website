"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";

const TOASTS = [
  { icon: "🔔", msg: "Novo lead — Clínica Lisboa" },
  { icon: "🔔", msg: "Campanha atingiu 200 cliques" },
  { icon: "🔔", msg: "ROAS subiu para 5.1×" },
  { icon: "🔔", msg: "Novo lead — Estúdio Porto" },
  { icon: "🔔", msg: "Email aberto — conversão detectada" },
];

function MiniLineChart({ progress }: { progress: number }) {
  const points = [0, 18, 10, 32, 25, 48, 38, 60, 52, 75, 68, 90, 82, 100];
  const trimmed = points.slice(0, Math.max(2, Math.round(points.length * progress)));

  const w = 300;
  const h = 80;
  const xs = trimmed.map((_, i) => (i / (points.length - 1)) * w);
  const ys = trimmed.map((v) => h - (v / 100) * h);
  const d =
    "M " + xs.map((x, i) => `${x} ${ys[i]}`).join(" L ");

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="overflow-visible">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Area fill */}
      <path
        d={`${d} L ${xs[xs.length - 1]} ${h} L ${xs[0]} ${h} Z`}
        fill="url(#chartGrad)"
      />
      {/* Line */}
      <path d={d} fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dot at end */}
      {xs.length > 0 && (
        <circle
          cx={xs[xs.length - 1]}
          cy={ys[ys.length - 1]}
          r="4"
          fill="#60A5FA"
          className="drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]"
        />
      )}
    </svg>
  );
}

export function DashboardSection() {
  const [chartProgress, setChartProgress] = useState(0);
  const [leads, setLeads] = useState(17);
  const [roas, setRoas] = useState(4.2);
  const [reach, setReach] = useState(168000);
  const [cpl, setCpl] = useState(2.8);
  const [toast, setToast] = useState<{ id: number; msg: string; icon: string } | null>(null);
  const toastIndex = useRef(0);
  const inView = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView.current) {
          inView.current = true;
          // Animate chart in
          let p = 0;
          const interval = setInterval(() => {
            p += 0.025;
            setChartProgress(Math.min(p, 1));
            if (p >= 1) clearInterval(interval);
          }, 40);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Increment metrics
  useEffect(() => {
    const interval = setInterval(() => {
      if (!inView.current) return;
      setLeads((v) => v + (Math.random() > 0.7 ? 1 : 0));
      setRoas((v) => Math.min(6.5, v + (Math.random() > 0.8 ? 0.1 : 0)));
      setReach((v) => v + Math.floor(Math.random() * 200));
      setCpl((v) => Math.max(1.5, v - (Math.random() > 0.9 ? 0.05 : 0)));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Show toasts
  useEffect(() => {
    const interval = setInterval(() => {
      if (!inView.current) return;
      const t = TOASTS[toastIndex.current % TOASTS.length];
      setToast({ id: Date.now(), msg: t.msg, icon: t.icon });
      toastIndex.current++;
      setTimeout(() => setToast(null), 3500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatReach = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return n.toString();
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-soft)" }}
    >
      {/* BG gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariants} className="tag mb-4">
            Ao vivo
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="mb-4"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)", color: "var(--text-primary)" }}
          >
            Resultados em tempo real
          </motion.h2>
          <motion.p variants={fadeUpVariants} style={{ color: "var(--text-secondary)" }}>
            O que acontece enquanto não estás a ver.
          </motion.p>
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {/* Main Chart Card */}
          <div
            className="lg:col-span-2 p-6 rounded-2xl border"
            style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                  Receita gerada
                </p>
                <p className="text-3xl font-bold mt-1 text-gradient" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  €48.2K
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1L9 5H6V9H4V5H1L5 1Z" fill="#22c55e" />
                </svg>
                <span className="text-green-400 text-xs font-semibold">+24%</span>
              </div>
            </div>
            <p className="text-xs mb-6" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)", letterSpacing: "0.05em" }}>
              Este mês · Actualizado há 2min
            </p>
            <div className="h-24">
              <MiniLineChart progress={chartProgress} />
            </div>
          </div>

          {/* Side metrics */}
          <div className="flex flex-col gap-4">
            {/* Leads */}
            <div
              className="p-5 rounded-2xl border flex items-center justify-between"
              style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
            >
              <div>
                <p className="text-xs mb-1" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}>
                  Leads hoje
                </p>
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-mono)" }}>
                  {leads}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-[pulse-dot_1.5s_ease-in-out_infinite]" />
                <span className="text-xs text-green-400">ao vivo</span>
              </div>
            </div>

            {/* ROAS */}
            <div
              className="p-5 rounded-2xl border flex items-center justify-between"
              style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
            >
              <div>
                <p className="text-xs mb-1" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}>
                  ROAS campanha
                </p>
                <p className="text-2xl font-bold text-gradient" style={{ fontFamily: "var(--font-geist-mono)" }}>
                  {roas.toFixed(1)}×
                </p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>

            {/* Alcance */}
            <div
              className="p-5 rounded-2xl border flex items-center justify-between"
              style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
            >
              <div>
                <p className="text-xs mb-1" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}>
                  Alcance semanal
                </p>
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-mono)" }}>
                  {formatReach(reach)}
                </p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>

            {/* CPL */}
            <div
              className="p-5 rounded-2xl border flex items-center justify-between"
              style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
            >
              <div>
                <p className="text-xs mb-1" style={{ color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}>
                  Custo por lead
                </p>
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-geist-mono)" }}>
                  €{cpl.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                  <polyline points="17 18 23 18 23 12" />
                </svg>
                <span className="text-xs text-green-400">↓ 12%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Toast notification */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg max-w-xs"
              style={{
                background: "var(--surface)",
                borderColor: "var(--glass-border)",
                backdropFilter: "blur(20px)",
              }}
            >
              <span className="text-lg">{toast.icon}</span>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {toast.msg}
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-[pulse-dot_1.5s_ease-in-out_infinite] ml-auto shrink-0" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
