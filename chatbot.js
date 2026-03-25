/**
 * OPTIMA PRAXIS AI Chatbot — Zero-OPEX, Claude-quality responses
 * Runs entirely client-side with pre-generated intelligent knowledge base
 * (c) 2026 TAVARA Holdings / OPTIMA PRAXIS
 */
(function() {
  'use strict';

  // ─── KNOWLEDGE BASE (Claude-generated) ────────────────────────────
  const SITE = 'blasramos';
  const BOT_NAME = 'BLAS AI';
  const BOT_TAGLINE = 'Blas Ramos — Intelligent Assistant';
  const ACCENT = '#E52235';
  const ACCENT2 = '#1F3461';
  const BG_DARK = '#0B1730';

  const KB = [
    // ── GREETINGS ──
    { q: ["hello","hi","hey","good morning","good afternoon","good evening","greetings","howdy"],
      a: "Welcome to OPTIMA PRAXIS. I'm here to help you learn about our advisory services, the OPXIS Framework, or how to start a conversation with Blas Ramos and the team. What would you like to explore?",
      cat: "greeting" },

    // ── ABOUT OPTIMA PRAXIS ──
    { q: ["what is optima praxis","tell me about optima praxis","who is optima praxis","about the company","about your company","what do you do","what does optima praxis do"],
      a: "OPTIMA PRAXIS is an independent advisory practice delivering enterprise transformation, executive coaching, management consulting, and leadership training across 10+ global industries. 'Optima' means the best that is possible. 'Praxis' means putting knowledge into sustained action. Together: the practice of achieving what others only plan for. We are a TAVARA Holdings company. Would you like to know about our services, the OPXIS Framework, or who we serve?",
      cat: "about" },
    { q: ["optima praxis meaning","what does the name mean","why optima praxis"],
      a: "'Optima' means the best that is possible. 'Praxis' means putting knowledge into sustained action. Together, OPTIMA PRAXIS represents the practice of achieving what others only plan for — transformation at the highest global standard.",
      cat: "about" },
    { q: ["tavara","tavara holdings","parent company","who owns optima praxis"],
      a: "OPTIMA PRAXIS is a TAVARA Holdings company. TAVARA Holdings is the parent organization that encompasses OPTIMA PRAXIS, Solomon Teknika, and other ventures under the leadership of Blas Ramos.",
      cat: "about" },
    { q: ["where are you located","location","based","office","philippines","address"],
      a: "OPTIMA PRAXIS is based in the Philippines and serves clients across APAC and global markets. We work with leaders and organizations wherever real transformation is needed. You can reach us at care@tavaraholdings.com or +63 968 157 7288.",
      cat: "about" },
    { q: ["contact","email","phone","reach","get in touch","how to contact"],
      a: "You can reach OPTIMA PRAXIS through several channels:\n\n📧 Email: care@tavaraholdings.com\n📱 Phone: +63 968 157 7288\n\nOr use the contact form on our website — just scroll to the 'Start the Conversation' section. We'd love to hear about your transformation needs.",
      cat: "contact" },

    // ── SERVICES ──
    { q: ["services","what services","offerings","what do you offer","how can you help","what can you do for me"],
      a: "OPTIMA PRAXIS offers four core services — each a different entry point to lasting transformation:\n\n1️⃣ **Keynote Speaking** — Commissioned keynotes for corporate forums, government summits, and conferences\n2️⃣ **Executive Coaching** — One-on-one coaching for senior executives and emerging leaders\n3️⃣ **Management Consulting** — Strategic advisory and operational transformation\n4️⃣ **Training & Workshops** — Custom capability programs and leadership development\n\nWhich service interests you most?",
      cat: "services" },
    { q: ["keynote","speaking","speaker","keynote speaking","public speaking","conference"],
      a: "Our Keynote Speaking service delivers commissioned keynotes for corporate leadership forums, government summits, industry conferences, and academic institutions. Blas Ramos brings perspectives grounded in real transformation experience — not borrowed theory — that challenge assumptions and move organizations to act. Past engagements include government agencies, private corporations, and academic institutions across the Philippines and APAC.",
      cat: "services" },
    { q: ["coaching","executive coaching","coach","leadership coaching","one on one","1 on 1"],
      a: "Our Executive Coaching provides one-on-one engagements for senior executives, emerging leaders, and high-potential individuals navigating career transitions, organizational complexity, or personal reinvention. Grounded in proven behavioral methodologies (including NLP and ICF coaching frameworks) and 20+ years of real enterprise leadership accountability. Each engagement is personalized through the OPXIS Framework.",
      cat: "services" },
    { q: ["consulting","management consulting","advisory","strategic advisory","strategy"],
      a: "Our Management Consulting provides strategic advisory and operational transformation for corporations, conglomerates, family businesses, and government institutions. We bring structured thinking, honest counsel, and implementation discipline to the decisions that define organizations. We don't hand clients a report and walk away — we are in the room, in the hard conversations, until transformation actually happens.",
      cat: "services" },
    { q: ["training","workshops","workshop","capability","learning","development","programs"],
      a: "Our Training & Workshops are custom-designed capability programs, competency frameworks, and leadership workshops for corporate teams, government agencies, academic institutions, and private organizations. Built to produce measurable behavior change — not just attendance records and certificates. Programs can be delivered as half-day workshops, multi-day intensives, or ongoing development tracks.",
      cat: "services" },

    // ── OPXIS FRAMEWORK ──
    { q: ["opxis","framework","methodology","opxis framework","what is opxis","method","approach","5 phase"],
      a: "The OPXIS Framework is our proprietary 5-phase transformation methodology at the heart of everything we do:\n\n🅾️ **Own** — Own your reality. Confront where you are with clarity and courage.\n🅿️ **Propel** — Propel through barriers. Break through what's been holding you back.\n❌ **Exceed** — Exceed your goals. Go beyond what you thought was possible.\nℹ️ **Integrate** — Integrate new patterns. Embed lasting change into your DNA.\n🔷 **Soar** — Soar to multiply impact. Scale your transformation to others.\n\nOPXIS was forged from 20+ years of leading real transformation. It's not a template for the comfortable — it's built for those who refuse to stay where they are.",
      cat: "opxis" },
    { q: ["own phase","phase 1","first phase","own your reality"],
      a: "Phase 1: OWN — Own your reality. This is about confronting where you are with clarity and courage. Before any transformation can begin, you must see your current state without filters. Most organizations and leaders skip this step, and that's why their change initiatives fail.",
      cat: "opxis" },
    { q: ["propel phase","phase 2","second phase","propel through"],
      a: "Phase 2: PROPEL — Propel through barriers. This is about breaking through what's been holding you back. Once you've owned your reality, you identify and dismantle the barriers — whether structural, cultural, or personal — that have kept you stuck.",
      cat: "opxis" },
    { q: ["exceed phase","phase 3","third phase","exceed goals"],
      a: "Phase 3: EXCEED — Exceed your goals. This is about going beyond what you thought was possible. With barriers cleared and reality owned, you can now set and achieve targets that previously seemed unreachable.",
      cat: "opxis" },
    { q: ["integrate phase","phase 4","fourth phase","integrate patterns"],
      a: "Phase 4: INTEGRATE — Integrate new patterns. This is about embedding lasting change into your DNA. Transformation that doesn't become habit is just a temporary high. This phase ensures your new capabilities become permanent.",
      cat: "opxis" },
    { q: ["soar phase","phase 5","fifth phase","soar multiply","scale"],
      a: "Phase 5: SOAR — Soar to multiply impact. This is about scaling your transformation to others. True transformation doesn't stop with you — it creates ripple effects across your team, organization, and beyond.",
      cat: "opxis" },

    // ── WHO WE SERVE ──
    { q: ["who do you serve","clients","target","audience","industries","sectors","who are your clients"],
      a: "We serve leaders and organizations serious about transformation:\n\n🏢 **Corporations & Conglomerates** — Enterprise strategy, operational transformation, executive capability\n🏛️ **Government & Public Sector** — Advisory, training, capability-building for public institutions\n👨‍👩‍👧‍👦 **Family Businesses & SMEs** — Professionalize leadership, build systems, navigate transitions\n👤 **Individual Leaders & Teams** — Executive coaching and team development at every stage\n\nWe've worked across 11 global industries including Financial Technology, Telecommunications, Retail, BPO, and more.",
      cat: "clients" },
    { q: ["corporation","enterprise","large company","conglomerate"],
      a: "For Corporations & Conglomerates, we deliver enterprise-level strategy, operational transformation, and executive capability programs for organizations navigating growth, restructuring, or competitive disruption. Our track record includes P&L responsibility for $65M service operations and leading transformations across 5 multinational organizations in APAC, NA, and EMEA.",
      cat: "clients" },
    { q: ["government","public sector","agency","public institution"],
      a: "For Government & Public Sector, we provide advisory, training, and capability-building for government agencies and public institutions committed to elevating service delivery, leadership quality, and organizational effectiveness. Blas has delivered keynotes and training programs for government audiences in the Philippines.",
      cat: "clients" },
    { q: ["family business","sme","small business","startup","family owned"],
      a: "For Family Businesses & SMEs, we provide structured advisory for family-owned enterprises and scaling businesses ready to professionalize leadership, build lasting systems, and navigate generational or growth transitions. We understand the unique dynamics of family enterprises — where business decisions are personal decisions.",
      cat: "clients" },

    // ── BLAS RAMOS ──
    { q: ["blas ramos","founder","who is blas","about blas","cvo","chief visionary officer","who founded"],
      a: "Blas Ramos is the Founder & Chief Visionary Officer of OPTIMA PRAXIS and Chief Architect of the OPXIS Framework. He brings 20+ years driving enterprise transformation across APAC and global markets, with direct P&L responsibility for $65M service operations and experience across 11 global industries. He's also the creator of the personal brand 'Breaking Limits Achieves Success' (B.L.A.S.). Learn more about his personal journey at blasramos.com.",
      cat: "blas" },
    { q: ["experience","background","career","resume","credentials","qualifications","certifications"],
      a: "Blas Ramos holds an impressive set of credentials:\n\n📜 Independent Corporate Directors (ICD) Program Graduate\n📜 Certified Management Consultant (CMC) Program Graduate\n📜 ICF Trained Coach (In Progress)\n📜 Certified Scrum Product Owner (CSPO)\n📜 NLP Practitioner (ABNLP Certified)\n📜 ITIL v4 Foundation\n📜 SRE Foundation\n📜 PMP Trained\n🎓 BS Computer Engineering, MAPUA University\n📚 Published Researcher, WIT Press (UK)\n\nHis career spans Financial Technology, IT Consulting, Telecommunications, Retail, BPO, Automotive, FMCG, Mining, and Pharmaceuticals.",
      cat: "blas" },

    // ── VALUES ──
    { q: ["values","great values","what do you stand for","principles","culture","mission"],
      a: "Our GREAT Values guide everything we do:\n\n**G** — Grace-Centered Giving (Malasakit). Compassion for every listener.\n**R** — Resolute Resilience (Grit). Criticism fuels growth. Doubt becomes determination.\n**E** — Extraordinary Excellence. Precision, passion, impact. Every engagement.\n**A** — Authentic Compassionate Action (Integrity). Truth without performance.\n**T** — Transformational Impact (Purpose). Not entertainment. Transformation.\n\nThe Standard: Real leaders ACT — Accountable, Committed, Transparent.",
      cat: "values" },

    // ── PRICING / ENGAGEMENT ──
    { q: ["pricing","cost","how much","fees","rates","investment","price","budget"],
      a: "Every engagement is custom-designed to match the specific needs, scale, and context of the client. We don't use cookie-cutter packages. The best way to discuss investment is to start a conversation — tell us about your situation, and we'll design an approach that delivers maximum value. Reach out at care@tavaraholdings.com or use the contact form on our website.",
      cat: "pricing" },
    { q: ["how to start","get started","engage","hire","book","schedule","begin"],
      a: "Starting is simple — just one honest conversation. Here's how:\n\n1. Use the contact form on our website (scroll to 'Start the Conversation')\n2. Email us at care@tavaraholdings.com\n3. Call +63 968 157 7288\n\nTell us where you are and where you need to go. We'll take it from there.",
      cat: "engagement" },

    // ── THOUGHT LEADERSHIP ──
    { q: ["articles","insights","blog","thought leadership","content","writings","read"],
      a: "Our Insights section features thought leadership from Blas Ramos, including articles on leadership, transformation, operations, and personal resilience. Some featured pieces include:\n\n📝 'Stop Fixing the Process. Start Leading the People.'\n📝 'The Leader Who Won't Change Themselves Will Never Change the Organization'\n📝 'Visibility Is Not Arrogance. It Is Accountability.'\n📝 'You Can't Fix the System Until You Fix What the System Did to the Team'\n\nCheck the Insights section on our website for more.",
      cat: "content" },

    // ── DIFFERENTIATORS ──
    { q: ["why optima praxis","what makes you different","unique","differentiator","why choose you","why you"],
      a: "Three things set OPTIMA PRAXIS apart:\n\n🌍 **Global Rigor** — Methodology benchmarked against the world's best advisory practices, delivered by a practitioner with 20+ years across 11 industries.\n\n🎯 **Context-Driven Practice** — We don't arrive with a pre-built playbook. We study the room, earn the trust, and design every engagement around your specific realities.\n\n🤝 **Accountability Without Exit** — We don't disappear after the engagement ends. Every recommendation we make is one we're prepared to stand behind and see through.",
      cat: "differentiator" },

    // ── MISC ──
    { q: ["thank you","thanks","appreciate","helpful"],
      a: "You're welcome! If you'd like to explore further or start a conversation with our team, just say the word. We're here to help you change the course and change the story.",
      cat: "closing" },
    { q: ["bye","goodbye","see you","take care"],
      a: "Thank you for visiting OPTIMA PRAXIS. Remember — transformation starts with one honest conversation. We're here when you're ready. Change the Course. Change the Story.",
      cat: "closing" },
    { q: ["help","what can you do","what can i ask","options","menu"],
      a: "I can help you with:\n\n🔹 Learn about OPTIMA PRAXIS and our story\n🔹 Explore our four services (Speaking, Coaching, Consulting, Training)\n🔹 Understand the OPXIS Framework\n🔹 Learn about Blas Ramos and his background\n🔹 Find out who we serve and our industries\n🔹 Get contact information\n🔹 Start the engagement process\n\nJust ask me anything!",
      cat: "help" },
  ];

  // ─── FUZZY MATCHING ENGINE ────────────────────────────────────────
  function tokenize(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 1);
  }

  function matchScore(input, keywords) {
    const inputTokens = tokenize(input);
    let score = 0;
    const inputLower = input.toLowerCase();

    for (const kw of keywords) {
      const kwLower = kw.toLowerCase();
      // Exact phrase match in input
      if (inputLower.includes(kwLower)) {
        score += kwLower.split(/\s+/).length * 3;
        continue;
      }
      // Token overlap
      const kwTokens = tokenize(kw);
      for (const kt of kwTokens) {
        for (const it of inputTokens) {
          if (it === kt) score += 2;
          else if (it.includes(kt) || kt.includes(it)) score += 1;
        }
      }
    }
    return score;
  }

  function findBestAnswer(input) {
    let bestScore = 0;
    let bestAnswer = null;

    for (const entry of KB) {
      const score = matchScore(input, entry.q);
      if (score > bestScore) {
        bestScore = score;
        bestAnswer = entry;
      }
    }

    if (bestScore >= 2) return bestAnswer.a;

    // Fallback
    return "That's a great question. While I may not have a specific answer for that, I'd encourage you to reach out directly to our team — they can give you the most thorough response.\n\n📧 care@tavaraholdings.com\n📱 +63 968 157 7288\n\nOr use the contact form on this page. Is there anything else I can help you explore?";
  }

  // ─── CHATBOT UI ───────────────────────────────────────────────────
  function injectStyles() {
    const css = document.createElement('style');
    css.textContent = `
      #opx-chat-btn{position:fixed;bottom:28px;right:28px;z-index:99999;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,${ACCENT},${ACCENT2});border:none;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s}
      #opx-chat-btn:hover{transform:scale(1.08);box-shadow:0 6px 28px rgba(0,0,0,0.4)}
      #opx-chat-btn svg{width:28px;height:28px;fill:#fff}
      #opx-chat-btn .close-x{display:none}
      #opx-chat-btn.open svg.chat-icon{display:none}
      #opx-chat-btn.open .close-x{display:block}

      #opx-chat-box{position:fixed;bottom:100px;right:28px;z-index:99998;width:380px;max-width:calc(100vw - 40px);height:520px;max-height:calc(100vh - 140px);border-radius:16px;background:#fff;box-shadow:0 12px 48px rgba(0,0,0,0.2);display:flex;flex-direction:column;overflow:hidden;opacity:0;transform:translateY(20px) scale(0.95);pointer-events:none;transition:opacity .3s,transform .3s}
      #opx-chat-box.open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}

      .opx-chat-header{background:linear-gradient(135deg,${BG_DARK},${ACCENT2});padding:18px 20px;display:flex;align-items:center;gap:12px}
      .opx-chat-header .avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,${ACCENT},${ACCENT2});display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff;flex-shrink:0}
      .opx-chat-header .info{flex:1}
      .opx-chat-header .name{color:#fff;font-weight:600;font-size:15px;font-family:'Inter',sans-serif}
      .opx-chat-header .tagline{color:rgba(255,255,255,0.7);font-size:11px;font-family:'Inter',sans-serif}
      .opx-chat-header .status{width:8px;height:8px;border-radius:50%;background:#4ADE80;margin-right:4px;display:inline-block}

      .opx-chat-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;background:#f9f9fb}
      .opx-chat-messages::-webkit-scrollbar{width:4px}
      .opx-chat-messages::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px}

      .opx-msg{max-width:85%;padding:12px 16px;border-radius:16px;font-size:13.5px;line-height:1.55;font-family:'Inter',sans-serif;word-wrap:break-word;animation:opx-fade .3s ease}
      .opx-msg.bot{background:#fff;color:#1a1a2e;border:1px solid #e8e8ee;border-bottom-left-radius:4px;align-self:flex-start;box-shadow:0 1px 3px rgba(0,0,0,0.04)}
      .opx-msg.user{background:linear-gradient(135deg,${ACCENT},${ACCENT2});color:#fff;border-bottom-right-radius:4px;align-self:flex-end}
      .opx-msg.bot strong{color:${ACCENT2}}

      .opx-typing{display:flex;gap:4px;padding:12px 16px;align-self:flex-start}
      .opx-typing span{width:7px;height:7px;border-radius:50%;background:#bbb;animation:opx-bounce .6s ease infinite}
      .opx-typing span:nth-child(2){animation-delay:.15s}
      .opx-typing span:nth-child(3){animation-delay:.3s}

      .opx-chat-input{display:flex;padding:12px 16px;border-top:1px solid #eee;background:#fff;gap:8px;align-items:center}
      .opx-chat-input input{flex:1;border:1px solid #e0e0e0;border-radius:24px;padding:10px 16px;font-size:13.5px;font-family:'Inter',sans-serif;outline:none;transition:border .2s}
      .opx-chat-input input:focus{border-color:${ACCENT}}
      .opx-chat-input input::placeholder{color:#aaa}
      .opx-chat-input button{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,${ACCENT},${ACCENT2});border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .15s}
      .opx-chat-input button:hover{transform:scale(1.06)}
      .opx-chat-input button svg{width:18px;height:18px;fill:#fff}

      .opx-quick-replies{display:flex;flex-wrap:wrap;gap:6px;padding:0 16px 12px}
      .opx-quick-replies button{background:#f0f0f5;border:1px solid #e0e0e5;border-radius:20px;padding:6px 14px;font-size:12px;font-family:'Inter',sans-serif;color:#555;cursor:pointer;transition:all .15s}
      .opx-quick-replies button:hover{background:${ACCENT};color:#fff;border-color:${ACCENT}}

      @keyframes opx-fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes opx-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}

      @media(max-width:480px){
        #opx-chat-box{bottom:0;right:0;width:100vw;max-width:100vw;height:100vh;max-height:100vh;border-radius:0}
        #opx-chat-btn{bottom:16px;right:16px;width:54px;height:54px}
      }
    `;
    document.head.appendChild(css);
  }

  function formatMessage(text) {
    return text
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  function createWidget() {
    // Floating button
    const btn = document.createElement('button');
    btn.id = 'opx-chat-btn';
    btn.setAttribute('aria-label', 'Chat with us');
    btn.innerHTML = `
      <svg class="chat-icon" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M7 9h10v2H7zm0-3h10v2H7z"/></svg>
      <svg class="close-x" viewBox="0 0 24 24" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"/></svg>
    `;

    // Chat box
    const box = document.createElement('div');
    box.id = 'opx-chat-box';
    box.innerHTML = `
      <div class="opx-chat-header">
        <div class="avatar">B</div>
        <div class="info">
          <div class="name"><span class="status"></span>${BOT_NAME}</div>
          <div class="tagline">${BOT_TAGLINE}</div>
        </div>
      </div>
      <div class="opx-chat-messages" id="opx-messages"></div>
      <div class="opx-quick-replies" id="opx-quick">
        <button data-q="Who is Blas Ramos?">About Blas</button>
        <button data-q="What is Blas' experience?">Experience</button>
        <button data-q="What is the OPXIS Framework?">OPXIS</button>
        <button data-q="Tell me about the stories and insights">Stories</button>
        <button data-q="How do I get started?">Get Started</button>
      </div>
      <div class="opx-chat-input">
        <input type="text" id="opx-input" placeholder="Ask me anything..." autocomplete="off">
        <button id="opx-send" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>
      </div>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(box);

    // Event handlers
    let isOpen = false;
    btn.addEventListener('click', () => {
      isOpen = !isOpen;
      box.classList.toggle('open', isOpen);
      btn.classList.toggle('open', isOpen);
      if (isOpen && !box.dataset.welcomed) {
        box.dataset.welcomed = '1';
        addBotMessage("Hello! I'm **BLAS AI**, your intelligent assistant for blasramos.com — the personal site of Blas Ramos, Founder of OPTIMA PRAXIS.\n\nI can help you explore Blas' background, experience, the OPXIS Framework, his journey of personal reinvention, or how to connect. What would you like to know?");
      }
    });

    const input = document.getElementById('opx-input');
    const sendBtn = document.getElementById('opx-send');

    function handleSend() {
      const text = input.value.trim();
      if (!text) return;
      addUserMessage(text);
      input.value = '';
      showTyping();
      // Simulate human-like response delay
      const delay = 600 + Math.random() * 800;
      setTimeout(() => {
        hideTyping();
        const answer = findBestAnswer(text);
        addBotMessage(answer);
      }, delay);
    }

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

    // Quick replies
    document.getElementById('opx-quick').addEventListener('click', e => {
      const btn = e.target.closest('[data-q]');
      if (!btn) return;
      input.value = btn.dataset.q;
      handleSend();
    });
  }

  const msgs = () => document.getElementById('opx-messages');

  function addBotMessage(text) {
    const div = document.createElement('div');
    div.className = 'opx-msg bot';
    div.innerHTML = formatMessage(text);
    msgs().appendChild(div);
    msgs().scrollTop = msgs().scrollHeight;
  }

  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'opx-msg user';
    div.textContent = text;
    msgs().appendChild(div);
    msgs().scrollTop = msgs().scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'opx-typing';
    div.id = 'opx-typing-ind';
    div.innerHTML = '<span></span><span></span><span></span>';
    msgs().appendChild(div);
    msgs().scrollTop = msgs().scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById('opx-typing-ind');
    if (el) el.remove();
  }

  // ─── INIT ─────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { injectStyles(); createWidget(); });
  } else {
    injectStyles(); createWidget();
  }
})();
