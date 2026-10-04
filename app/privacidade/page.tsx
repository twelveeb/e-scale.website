import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/LegalContent";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacidadePage() {
  return <LegalContent page="privacidade" />;
}
