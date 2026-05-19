import type { Metadata } from "next";
import { CasosPage } from "@/components/sections/CasosPage";

export const metadata: Metadata = {
  title: "Casos de Sucesso",
  description: "Resultados reais de clientes reais. Vê como a E-Scale transformou negócios em Portugal.",
};

export default function Page() {
  return <CasosPage />;
}
