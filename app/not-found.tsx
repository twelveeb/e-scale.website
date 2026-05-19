import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "404 — Página não encontrada" };

export default function NotFound() {
  return (
    <div
      className="min-h-dvh flex flex-col items-center justify-center text-center px-4"
      style={{ background: "var(--bg)" }}
    >
      <p
        className="text-[120px] font-black leading-none mb-4 text-gradient"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        404
      </p>
      <h1 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        Página não encontrada
      </h1>
      <p className="mb-8 max-w-sm" style={{ color: "var(--text-secondary)" }}>
        A página que procuras não existe ou foi removida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
