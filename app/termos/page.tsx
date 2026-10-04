import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/LegalContent";

export const metadata: Metadata = {
  title: "Termos e Condições",
};

export default function TermosPage() {
  return <LegalContent page="termos" />;
}
