"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField").then((m) => m.ParticleField),
  {
    ssr: false,
    loading: () => null,
  }
);

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <ParticleField />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      {/* Blue glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        {/* Tag */}
        <motion.div variants={fadeUpVariants} className="mb-8">
          <span className="tag opacity-80">
            Agência de Crescimento Digital · Portugal
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUpVariants}
          className="mb-6 leading-[1.05]"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
          }}
        >
          <span className="block text-white">A atenção é</span>
          <span className="block text-gradient">a nova moeda.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUpVariants}
          className="mb-10 max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.5,
          }}
        >
          Construímos sistemas digitais que transformam
          <br className="hidden sm:block" /> visibilidade em faturação real.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contacto"
            className="group relative px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(37,99,235,0.9)]"
          >
            <span>Marcar Chamada</span>
          </Link>
          <Link
            href="/auditoria"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            Pedir Auditoria
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="tag text-[10px] opacity-40">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="opacity-40"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
