import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="E-Scale" fill className="object-contain" />
              </div>
              <span className="font-bold text-white text-lg">E-Scale</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Construímos sistemas digitais que transformam visibilidade em
              faturação real.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  {s.icon === "Instagram" && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )}
                  {s.icon === "Linkedin" && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors duration-200 hover:text-white ${
                      link.highlight ? "text-green-400 hover:text-green-300" : "text-white/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">
              Empresa
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors duration-200 hover:text-white ${
                      link.highlight ? "text-green-400 hover:text-green-300" : "text-white/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Parceiros */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">
              Parceiros
            </h3>
            <a
              href="https://ikaruspay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center shrink-0">
                <Image
                  src="/Ikaruslg.png"
                  alt="Ikarus Pay"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-green-400 transition-colors">
                  Ikarus Pay
                </p>
                <p className="text-white/40 text-xs">Parceiro oficial</p>
              </div>
              <svg
                className="ml-auto text-white/20 group-hover:text-green-400/60 transition-colors"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            <div className="mt-6">
              <p className="text-white/40 text-xs mb-2">Contacto</p>
              <a
                href="mailto:geral@escale.pt"
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                geral@escale.pt
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 E-Scale. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
