import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições",
};

export default function TermosPage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6" style={{ background: "var(--bg)" }}>
      <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
        Termos e Condições
      </h1>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        Ao utilizar os serviços da E-Scale, aceita os presentes termos e condições de utilização.
      </p>
      <p style={{ color: "var(--text-secondary)" }}>
        Para esclarecimentos, contacte-nos: <a href="mailto:geral@escale.pt" className="text-blue-400 hover:underline">geral@escale.pt</a>
      </p>
    </div>
  );
}
