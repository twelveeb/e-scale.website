"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [hoverType, setHoverType] = useState<"default" | "link" | "image">("default");
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });
  const ringX = useSpring(0, { stiffness: 150, damping: 20 });
  const ringY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        setHoverType("link");
      } else if (target.closest("img, [data-cursor='image']")) {
        setHoverType("image");
      } else {
        setHoverType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [isMobile, dotX, dotY, ringX, ringY]);

  if (isMobile) return null;

  const ringSize = hoverType === "link" ? 56 : hoverType === "image" ? 64 : 40;
  const ringBg = hoverType === "link" ? "rgba(37,99,235,0.15)" : "transparent";
  const ringBorder = hoverType === "link" ? "rgba(37,99,235,0.8)" : "rgba(255,255,255,0.3)";

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          background: hoverType === "link" ? "#2563EB" : "#fff",
          pointerEvents: "none",
        }}
      />

      {/* Ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: ringSize,
          height: ringSize,
          background: ringBg,
          border: `1.5px solid ${ringBorder}`,
          transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        {hoverType === "image" && (
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            Ver
          </span>
        )}
      </motion.div>
    </>
  );
}
