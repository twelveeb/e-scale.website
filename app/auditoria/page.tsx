import type { Metadata } from "next";
import { AuditoriaPage } from "@/components/sections/AuditoriaPage";

export const metadata: Metadata = {
  title: "Auditoria Gratuita",
  description: "Recebe uma análise completa da tua presença digital. Gratuito e sem compromisso.",
};

export default function Page() {
  return <AuditoriaPage />;
}
