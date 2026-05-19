import type { Metadata } from "next";
import { ContactoPage } from "@/components/sections/ContactoPage";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Fala connosco. Vamos construir o teu sistema de crescimento digital.",
};

export default function Page() {
  return <ContactoPage />;
}
