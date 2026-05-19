import type { Metadata } from "next";
import { FAQPage } from "@/components/sections/FAQPage";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Respostas às perguntas mais frequentes sobre a E-Scale, os nossos serviços e o Dropshipping AO.",
};

export default function Page() {
  return <FAQPage />;
}
