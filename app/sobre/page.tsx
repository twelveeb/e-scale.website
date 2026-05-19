import type { Metadata } from "next";
import { SobrePage } from "@/components/sections/SobrePage";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Não somos uma agência. Somos o sistema de crescimento que o teu negócio precisa.",
};

export default function Page() {
  return <SobrePage />;
}
