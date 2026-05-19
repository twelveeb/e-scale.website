import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacidadePage() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 sm:px-6" style={{ background: "var(--bg)" }}>
      <h1 className="text-3xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
        Política de Privacidade
      </h1>
      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
        A E-Scale respeita a privacidade dos seus utilizadores e está comprometida em proteger os dados pessoais de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD).
      </p>
      <p style={{ color: "var(--text-secondary)" }}>
        Para esclarecimentos, contacte-nos: <a href="mailto:geral@escale.pt" className="text-blue-400 hover:underline">geral@escale.pt</a>
      </p>
    </div>
  );
}
