"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeUpVariants, cardVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  Target,
  Layers,
  TrendingUp,
  Crown,
  Zap,
} from "lucide-react";

const ICONS = { Target, Layers, TrendingUp, Crown, Zap };

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = ICONS[service.icon as keyof typeof ICONS] || Target;

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px" }}
      className="group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          background: "var(--glass-bg)",
          borderColor: "var(--glass-border)",
        }}
        className={cn(
          "relative h-full p-6 sm:p-8 rounded-2xl border overflow-hidden cursor-default",
          "transition-all duration-300"
        )}
        whileHover={{
          borderColor: "rgba(37,99,235,0.5)",
          boxShadow: "0 0 40px -8px rgba(37,99,235,0.3)",
        }}
      >
        {/* Background number */}
        <div
          className="absolute -right-4 -top-6 font-mono font-black text-[120px] leading-none select-none pointer-events-none"
          style={{
            color: "var(--text-primary)",
            opacity: 0.03,
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600/25 transition-colors">
          <Icon className="text-blue-400" size={22} />
        </div>

        {/* Content */}
        <h3
          className="text-lg font-bold mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {service.description}
        </p>

        {/* Metric */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span
            className="text-xs font-semibold"
            style={{
              color: "var(--accent-electric)",
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.05em",
            }}
          >
            {service.metric}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesSection() {
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
            O que construímos
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="mb-4"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "var(--text-primary)",
            }}
          >
            Os nossos sistemas
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="max-w-lg mx-auto text-base sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Não vendemos serviços. Construímos infraestrutura.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
