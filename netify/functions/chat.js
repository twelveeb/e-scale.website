// A.N.A — Função Serverless (Netlify) que chama a API de IA
export const handler = async (event) => {
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey)
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing OPENAI_API_KEY' }) };

  const { messages = [], url = '/' } = JSON.parse(event.body || '{}');

  const system = {
    role: 'system',
    content: `
És a A.N.A — A Nossa Assistente — da E-Scale (agência digital em Portugal).
Fala em português de Portugal, tom claro, directo, simpático.
Ajuda com: serviços, planos indicativos, prazos típicos, processo, marcação de diagnóstico.
Dá dicas rápidas de marketing, mas evita consultoria profunda. Não prometas resultados.
Sugere CTAs: "Diagnóstico gratuito" ou "Envia email para geral@e-scale.store".
Dados da E-Scale:
- Serviços: Redes Sociais, Anúncios (Meta/Google), Websites, Conteúdo & Design.
- Planos indicativos: Starter 350€/mês, Growth 700€/mês, Website 950€ (único).
- Processo: Diagnóstico gratuito → Planeamento → Execução → Relatório/Optimização.
- Contacto: geral@e-scale.store | Lisboa | Seg–Sex 09:00–18:00.
- Páginas: /index.html, /servicos.html, /contacto.html, /questionario.html.
Mantém 3–6 frases; usa bullets quando ajuda. URL actual: ${url}.
`.trim()
  };

  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.5,
        messages: [system, ...messages]
      })
    });
    const j = await r.json();
    const reply = j?.choices?.[0]?.message?.content?.trim() || 'Posso ajudar noutro ponto?';
    return { statusCode: 200, body: JSON.stringify({ reply }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Upstream error', detail: String(err) }) };
  }
};

