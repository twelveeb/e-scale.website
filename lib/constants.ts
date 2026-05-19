export const NAV_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  highlight?: boolean;
}> = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Casos", href: "/casos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Parcerias", href: "/parcerias" },
  { label: "Dropshipping AO", href: "/dropshipping-ao", highlight: true },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const SERVICES = [
  {
    id: 1,
    title: "Sistema de Aquisição",
    description:
      "Pipeline de prospeção outbound + inbound que alimenta o negócio todos os dias.",
    metric: "35 leads/semana",
    icon: "Target",
  },
  {
    id: 2,
    title: "Infraestrutura de Conteúdo",
    description:
      "Conteúdo estratégico que educa, converte e posiciona — sem improviso.",
    metric: "3× engagement",
    icon: "Layers",
  },
  {
    id: 3,
    title: "Pipeline de Conversão",
    description:
      "Landing pages, funnels e automações que transformam cliques em clientes.",
    metric: "4.2× ROAS",
    icon: "TrendingUp",
  },
  {
    id: 4,
    title: "Sistema de Autoridade",
    description:
      "Posicionamento digital que coloca a tua marca como referência no mercado.",
    metric: "+280% visibilidade",
    icon: "Crown",
  },
  {
    id: 5,
    title: "Escala Automatizada",
    description:
      "Sistemas que trabalham para o teu negócio 24/7 — sem depender de ti.",
    metric: "24/7 activo",
    icon: "Zap",
  },
] as const;

export const METRICS = [
  { value: "€2.4M+", label: "Receita gerada para clientes" },
  { value: "340%", label: "ROAS médio" },
  { value: "127+", label: "Campanhas activas" },
  { value: "98%", label: "Taxa de retenção" },
] as const;

export const FAQ_ITEMS = [
  {
    category: "Geral",
    items: [
      {
        q: "O que é a E-Scale?",
        a: "A E-Scale é uma agência de crescimento digital que constrói sistemas de aquisição, conversão e autoridade para negócios em Portugal e Angola.",
      },
      {
        q: "Como posso começar a trabalhar convosco?",
        a: "Pede uma auditoria gratuita no nosso website. A nossa equipa analisa a tua presença digital e apresenta um plano personalizado.",
      },
      {
        q: "Trabalham com que tipo de negócios?",
        a: "PMEs, negócios locais, clínicas, lojas online, prestadores de serviços e empreendedores que querem crescer de forma sustentável.",
      },
    ],
  },
  {
    category: "Serviços",
    items: [
      {
        q: "Que serviços oferece a E-Scale?",
        a: "Oferecemos 5 sistemas: Aquisição, Conteúdo, Conversão, Autoridade e Escala Automatizada. Cada um resolve um problema específico do teu negócio.",
      },
      {
        q: "Fazem gestão de redes sociais?",
        a: "Sim, mas com uma abordagem estratégica. Não publicamos conteúdo por publicar — cada peça tem um objetivo de conversão.",
      },
      {
        q: "Quanto tempo leva a ver resultados?",
        a: "Os primeiros resultados aparecem em 30-60 dias. Resultados consistentes e escaláveis surgem a partir do 3.º mês.",
      },
    ],
  },
  {
    category: "Preços",
    items: [
      {
        q: "Quais são os vossos preços?",
        a: "Os preços variam consoante o sistema e o nível de suporte. Pede uma auditoria gratuita para receberes uma proposta personalizada.",
      },
      {
        q: "Têm contratos de longo prazo?",
        a: "Trabalhamos com contratos mensais renováveis. Não existem períodos mínimos obrigatórios — mantemo-nos porque os resultados falam por si.",
      },
    ],
  },
  {
    category: "Dropshipping AO",
    items: [
      {
        q: "Preciso de investimento inicial para o Dropshipping AO?",
        a: "Não. O modelo é zero risco — não precisas de armazém, stock ou investimento inicial para começar.",
      },
      {
        q: "Como recebo as comissões?",
        a: "Recebes comissão por cada venda realizada através do teu link. A Ikarus Pay trata do pagamento e da logística.",
      },
      {
        q: "A Ikarus trata da entrega em Angola?",
        a: "Sim, completamente. O catálogo, a logística e a entrega são geridos 100% pela Ikarus Pay.",
      },
      {
        q: "A E-Scale faz o marketing?",
        a: "Sim, criamos a tua estratégia de marketing completa — anúncios, conteúdo, landing pages e campanhas de aquisição.",
      },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/escale.pt", icon: "Instagram" },
  { label: "LinkedIn", href: "https://linkedin.com/company/escale-pt", icon: "Linkedin" },
] as const;

export const CONTACT_INFO = {
  email: "geral@escale.pt",
  instagram: "@escale.pt",
} as const;

export const DROPSHIPPING_STEPS = [
  { step: 1, title: "Registas-te na Ikarus Pay", desc: "Cria a tua conta gratuitamente e acede ao catálogo de produtos." },
  { step: 2, title: "A E-Scale cria a tua estratégia", desc: "Desenvolvemos o teu plano de marketing completo — anúncios, conteúdo e funnels." },
  { step: 3, title: "Os clientes compram, a Ikarus entrega", desc: "Toda a logística e entrega em Angola é gerida 100% pela Ikarus Pay." },
  { step: 4, title: "Tu recebes a comissão", desc: "Até 40% de comissão por venda, pago diretamente na tua conta." },
] as const;
