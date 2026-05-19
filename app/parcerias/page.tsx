import type { Metadata } from "next";
import { ParceriasPage } from "@/components/sections/ParceriasPage";

export const metadata: Metadata = {
  title: "Parcerias",
  description: "Os nossos parceiros estratégicos. E-Scale × Ikarus Pay.",
};

export default function Page() {
  return <ParceriasPage />;
}
