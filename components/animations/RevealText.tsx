"use client";

import { motion } from "framer-motion";
import { letterVariants, staggerContainer } from "@/lib/animations";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
  return (
    <motion.span
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      aria-label={text}
      className={className}
      style={{ display: "inline-block", perspective: "600px" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          custom={i + delay}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
