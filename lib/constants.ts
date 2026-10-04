export const NAV_LINKS: ReadonlyArray<{
  key: "home" | "services" | "cases" | "about" | "partnerships" | "dropshippingAO" | "faq" | "contact";
  href: string;
  highlight?: boolean;
}> = [
  { key: "home", href: "/" },
  { key: "services", href: "/servicos" },
  { key: "cases", href: "/casos" },
  { key: "about", href: "/sobre" },
  { key: "partnerships", href: "/parcerias" },
  { key: "dropshippingAO", href: "/dropshipping-ao", highlight: true },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contacto" },
] as const;

export const SERVICE_ICONS = ["Target", "Layers", "TrendingUp", "Crown", "Zap"] as const;

export const METRIC_VALUES = ["€2.4M+", "340%", "127+", "98%"] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/escale.pt", icon: "Instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/escale-pt", icon: "Linkedin" },
] as const;

export const CONTACT_INFO = {
  email: "geral@escale.pt",
  instagram: "@escale.pt",
} as const;
