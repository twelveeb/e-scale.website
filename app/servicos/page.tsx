import type { Metadata } from "next";
import { ServicesPage } from "@/components/sections/ServicesPage";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Os nossos 5 sistemas de crescimento: Aquisição, Conteúdo, Conversão, Autoridade e Escala Automatizada.",
};

export default function Page() {
  return <ServicesPage />;
}
