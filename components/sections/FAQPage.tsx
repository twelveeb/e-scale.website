"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { staggerContainer, fadeUpVariants } from "@/lib/animations";
import Link from "next/link";

const CATEGORIES = ["Geral", "Serviços", "Preços", "Dropshipping AO"];

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Geral");
  const [openItem, setOpenItem] = useState<number | null>(0);

  const items = FAQ_ITEMS.find((f) => f.category === activeCategory)?.items || [];

  return (
    <div className="pt-24 pb-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariants} className="tag mb-4">
            Perguntas frequentes
          </motion.p>
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl font-black mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            FAQ
          </motion.h1>
          <motion.p variants={fadeUpVariants} style={{ color: "var(--text-secondary)" }}>
            Tudo o que precisas saber sobre a E-Scale e os nossos serviços.
          </motion.p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenItem(0); }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                background: activeCategory === cat
                  ? (cat === "Dropshipping AO" ? "rgba(39,174,96,0.15)" : "rgba(37,99,235,0.15)")
                  : "var(--glass-bg)",
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: activeCategory === cat
                  ? (cat === "Dropshipping AO" ? "rgba(39,174,96,0.4)" : "rgba(37,99,235,0.4)")
                  : "var(--glass-border)",
                color: activeCategory === cat
                  ? (cat === "Dropshipping AO" ? "#27AE60" : "var(--accent-electric)")
                  : "var(--text-secondary)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-2"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden"
                style={{ background: "var(--glass-bg)", borderColor: "var(--glass-border)" }}
              >
                <button
                  onClick={() => setOpenItem(openItem === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-medium pr-4" style={{ color: "var(--text-primary)" }}>
                    {item.q}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: "var(--text-muted)", flexShrink: 0 }}
                    className={`transition-transform duration-300 ${openItem === i ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openItem === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div
                          className="h-px mb-4"
                          style={{ background: "var(--border-color)" }}
                        />
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border text-center"
          style={{ background: "var(--surface)", borderColor: "var(--border-color)" }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
            Ainda tens dúvidas?
          </h3>
          <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
            Fala connosco directamente. Respondemos em menos de 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-[0_0_20px_-4px_rgba(37,99,235,0.8)]"
          >
            Enviar mensagem
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
