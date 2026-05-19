import type { Metadata } from "next";
import { DropshippingPage } from "@/components/sections/DropshippingPage";

export const metadata: Metadata = {
  title: "Dropshipping AO — E-Scale × Ikarus Pay",
  description:
    "Vende online em Angola. Sem armazém. Sem risco. Com suporte. Parceria oficial E-Scale × Ikarus Pay.",
};

export default function Page() {
  return <DropshippingPage />;
}
