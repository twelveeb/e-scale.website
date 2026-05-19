"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "backdrop-blur-xl border-b"
            : "bg-transparent border-transparent"
        )}
        style={{
          background: scrolled ? "var(--header-bg)" : "transparent",
          borderColor: scrolled ? "var(--border-color)" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="E-Scale"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className="font-bold text-lg tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              E-Scale
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    link.highlight
                      ? "text-green-400 hover:text-green-300"
                      : active
                      ? "text-white"
                      : "hover:text-white"
                  )}
                  style={
                    !link.highlight
                      ? { color: active ? "var(--text-primary)" : "var(--text-secondary)" }
                      : {}
                  }
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/auditoria"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_20px_-4px_rgba(37,99,235,0.8)]"
            >
              Pedir Auditoria
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 rounded-full bg-current origin-center"
                style={{ color: "var(--text-primary)" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-5 h-0.5 rounded-full bg-current"
                style={{ color: "var(--text-primary)" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 rounded-full bg-current origin-center"
                style={{ color: "var(--text-primary)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 lg:hidden flex flex-col"
            style={{ background: "var(--surface)", borderLeft: "1px solid var(--border-color)" }}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "var(--border-color)" }}>
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7">
                  <Image src="/logo.png" alt="E-Scale" fill className="object-contain" />
                </div>
                <span className="font-bold" style={{ color: "var(--text-primary)" }}>E-Scale</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 p-6 flex flex-col gap-1 overflow-y-auto">
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                        link.highlight
                          ? "text-green-400 bg-green-400/5 hover:bg-green-400/10"
                          : active
                          ? "bg-blue-600/15 text-blue-400"
                          : "hover:bg-white/5"
                      )}
                      style={
                        !link.highlight && !active
                          ? { color: "var(--text-secondary)" }
                          : {}
                      }
                    >
                      {link.label}
                      {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="p-6 border-t" style={{ borderColor: "var(--border-color)" }}>
              <Link
                href="/auditoria"
                className="block w-full text-center py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
              >
                Pedir Auditoria
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
