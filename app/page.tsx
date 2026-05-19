import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { AuditSection } from "@/components/sections/AuditSection";

export const metadata: Metadata = {
  title: "E-Scale — Agência de Crescimento Digital",
  description:
    "Construímos sistemas digitais que transformam visibilidade em faturação real. Líderes em crescimento digital em Portugal.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <ServicesSection />
      <DashboardSection />
      <AuditSection />
    </>
  );
}
