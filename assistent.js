/* E-Scale — A.N.A (A Nossa Assistente) | Widget de chat */
(() => {
  const STYLE = `
    .es-assist-btn{position:fixed;right:18px;bottom:18px;z-index:9999;border:0;border-radius:999px;padding:12px 16px;cursor:pointer;background:linear-gradient(90deg,#6ee7b7,#22d3ee);color:#042022;font-weight:700;box-shadow:0 8px 24px rgba(34,211,238,.25);transition:.2s}
    .es-assist-btn:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(34,211,238,.35)}
    .es-chat{position:fixed;right:18px;bottom:76px;width:340px;max-width:92vw;height:460px;background:rgba(11,18,32,.96);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.10);border-radius:16px;overflow:hidden;z-index:9998;display:none;box-shadow:0 16px 48px rgba(0,0,0,.45);color:#e6eef8;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial}
    .es-chat-header{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.08);background:rgba(6,16,36,.6)}
    .es-chat-header .brand{display:flex;gap:8px;align-items:center}
    .es-chat-header img{width:22px;height:22px;border-radius:6px;object-fit:contain}
    .es-chat-header strong{font-weight:800}
    .es-chat-body{height:calc(460px - 50px - 56px);padding:12px;overflow:auto}
    .es-msg{margin-bottom:10px;display:flex;gap:8px}
    .es-msg.user{justify-content:flex-end}
    .es-bubble{max-width:82%;padding:10px 12px;border-radius:12px;line-height:1.4;font-size:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10)}
    .es-msg.user .es-bubble{background:linear-gradient(90deg,#6ee7b7,#22d3ee);color:#042022;border:0}
    .es-chat-input{display:flex;gap:8px;padding:10px;border-top:1px solid rgba(255,255,255,.08);background:rgba(6,16,36,.6)}
    .es-chat-input input{flex:1;padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#e6eef8}
    .es-chat-input button{padding:10px 12px;border-radius:10px;border:0;cursor:pointer;background:linear-gradient(90deg,#6ee7b7,#22d3ee);color:#042022;font-weight:700}
    @media (max-width:480px){.es-chat{right:10px;bottom:70px;width:calc(100vw - 20px);height:70vh}}
  `;
  const style = document.createElement('style'); style.textContent = STYLE; document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.className = 'es-assist-btn'; btn.textContent = 'A.N.A';
  btn.setAttribute('aria-label','Abrir a assistente A.N.A');
  document.body.appendChild(btn);

  const chat = document.createElement('div');
  chat.className = 'es-chat';
  chat.innerHTML = `
    <div class="es-chat-header">
      <div class="brand">
        <img src="logobg.png" alt="E-Scale">
        <div><strong>A.N.A</strong><div style="font-size:11px;opacity:.8">A Nossa Assistente</div></div>
      </div>
      <button id="es-close" style="background:none;border:0;color:#e6eef8;font-size:18px;cursor:pointer">✕</button>
    </div>
    <div class="es-chat-body" id="es-body"></div>
    <div class="es-chat-input">
      <input id="es-input" type="text" placeholder="Como posso ajudar?">
      <button id="es-send">Enviar</button>
    </div>`;
  document.body.appendChild(chat);

  const body = chat.querySelector('#es-body');
  const input = chat.querySelector('#es-input');
  const send  = chat.querySelector('#es-send');
  const closeBtn = chat.querySelector('#es-close');

  const KEY = 'escale_ana_history_v1';
  let history = JSON.parse(localStorage.getItem(KEY)||'[]');

  function push(role,text,save=true){
    const wrap = document.createElement('div'); wrap.className = `es-msg ${role==='user'?'user':'assistant'}`;
    const b = document.createElement('div'); b.className='es-bubble'; b.textContent=text;
    wrap.appendChild(b); body.appendChild(wrap); body.scrollTop = body.scrollHeight;
    if(save){ history.push({role,content:text}); localStorage.setItem(KEY, JSON.stringify(history.slice(-40))); }
  }
  function hello(){
    push('assistant','Olá 👋 sou a **A.N.A** da E-Scale. Posso esclarecer serviços, planos, prazos e marcar um diagnóstico gratuito. Em que posso ajudar?');
  }
  function render(){ body.innerHTML=''; history.length?history.forEach(m=>push(m.role,m.content,false)):hello(); }

  async function ask(text){
    push('user',text);
    const thinking = document.createElement('div'); thinking.className='es-msg';
    thinking.innerHTML = `<div class="es-bubble">A pensar…</div>`; body.appendChild(thinking); body.scrollTop=body.scrollHeight;
    try{
      const res = await fetch('/.netlify/functions/chat',{
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ messages: history.concat([{role:'user',content:text}]).slice(-20), url: location.pathname })
      });
      const data = await res.json(); thinking.remove();
      push('assistant', data.reply || 'Desculpa — não consegui responder agora.');
    }catch(e){ thinking.remove(); push('assistant','Ups! Ligação falhou. Tenta novamente em instantes.'); }
  }

  btn.addEventListener('click', ()=>{ chat.style.display = chat.style.display==='block'?'none':'block'; render(); input.focus(); });
  closeBtn.addEventListener('click', ()=> chat.style.display='none');
  send.addEventListener('click', ()=> input.value.trim() && ask(input.value.trim()));
  input.addEventListener('keydown', e=>{ if(e.key==='Enter' && input.value.trim()) ask(input.value.trim()); });
})();
