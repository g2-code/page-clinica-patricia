# G2 Code — Design System

> Tecnologia estratégica para empresas que querem crescer mais e operar melhor.

G2 Code (estilizado **G2Code**) é uma empresa B2B que aumenta o resultado dos seus clientes por meio de **Inteligência Artificial, automação e desenvolvimento de software sob medida**. O trabalho é consultivo e estratégico: identificar gargalos operacionais, implementar soluções tecnológicas inteligentes e transformar dados em decisões. Público-alvo: CEOs, empresários e gestores.

Este design system traduz essa identidade — **escura, minimalista e moderna** — em tokens, componentes e telas reutilizáveis.

## Fontes deste material
- `uploads/g2code_dark_bg.png` — logo principal (wordmark "G2" em gradiente violeta→magenta sobre preto, com "CODE" em contorno). Copiado para `assets/g2code-logo.png`.
- `uploads/WhatsApp Image 2026-06-12 at 14.57.27.jpeg` — variação do mark. Copiado para `assets/g2code-logo-badge.jpeg`.
- Briefing de landing page (estrutura de 7 seções para geração de leads / diagnóstico gratuito).

Nenhum codebase ou Figma foi fornecido — as cores foram amostradas diretamente do logo; tipografia e componentes foram derivados do briefing e da estética minimalista escura solicitada.

---

## CONTENT FUNDAMENTALS

**Idioma:** Português do Brasil.

**Tom:** consultivo, direto e orientado a resultado. Fala-se com gestores: foco em eficiência, crescimento, controle e decisão — nunca em jargão técnico cru. A tecnologia é meio, o resultado do negócio é o fim.

**Pessoa:** trata o cliente por **você / sua empresa**; a G2Code fala em **nós / nossa metodologia**. Ex.: "Identificamos gargalos…", "Transformamos dados em decisões…".

**Estrutura de copy:**
- **Headlines** curtas, afirmativas, com 1–3 palavras-chave em destaque por gradiente ("**Aumente** a eficiência da sua empresa com **Tecnologia** e **IA**").
- **Perguntas de dor** para criar identificação ("Sua equipe gasta horas com tarefas repetitivas?").
- **Provas com número concreto** ("Redução de 70% no tempo gasto com atendimentos").
- Frases de apoio curtas, sem encher linguiça. Evitar excesso de texto.

**Casing:** Title/sentence case normal no corpo. CAIXA ALTA só em eyebrows e labels mono, sempre com `letter-spacing` largo (ex.: `MÉTODO G2CODE`, `IA · AUTOMAÇÃO · DEV`).

**Emoji:** não. A única marcação "icônica" no texto é o check ✓ em listas de garantias/benefícios — e mesmo esse é preferencialmente um ícone SVG, não o caractere.

**Evitar:** aparência de software house genérica; promessas vagas; termos como "robôs", "cérebros", "cyberpunk", circuitos. A comunicação é premium e corporativa.

---

## VISUAL FOUNDATIONS

**Vibe geral:** dark-first, premium, minimalista. Muito espaço negativo. Um único eixo de cor (violeta→magenta) sobre preto-azulado. Tudo respira.

**Cor**
- Fundo: quase-preto com leve subtom violeta (`--ink-950 #08070d` → `--ink-900 #0e0c17`). Nunca preto puro chapado nas superfícies de conteúdo.
- Acento único: violeta `--violet-500 #7b1fe8`, com magenta `--magenta-500 #be13ec` como segundo ponto. O gradiente assinatura `--grad-brand` (indigo `#4D0BE0` → purple `#8B14E0` → magenta `#BE13EC`, ~120°) vem direto do logo.
- Texto: branco-violáceo `--text-strong #f6f4fc` para títulos; cinzas frios (`--ink-200/300/400`) para corpo e apoio. Hierarquia feita por cor + peso, não por tamanho apenas.
- Status: verde `#2fd58a`, âmbar `#f5b13d`, vermelho `#f5566b`, azul `#46a6ef` — usados com parcimônia.

**Tipografia**
- **Display:** Space Grotesk (geométrica, levemente arredondada, "tech") — títulos, números das etapas, métricas. Tracking apertado (`-0.02em`).
- **Corpo:** Sora — leitura calma e geométrica.
- **Mono:** JetBrains Mono — eyebrows em caixa alta espaçada, código, rótulos de dados.
- ⚠️ Substituição: as três são aproximações via Google Fonts. Se houver fontes oficiais licenciadas, substituir em `tokens/fonts.css`.

**Fundos / motivos**
- Grid hairline sutil (linhas a 6% de branco, célula ~64px) com máscara radial no topo das seções.
- Glow radial violeta (`--grad-glow`) atrás de heros e CTAs — difuso, nunca duro.
- Glass: superfícies com `backdrop-filter: blur(16px)` e borda branca a 10% para overlays/nav.
- Sem imagens fotográficas no material atual; sem ilustrações desenhadas à mão; sem texturas de grão.

**Cantos / cards**
- Raios generosos e arredondados, ecoando o mark: cards `--radius-xl (28px)`, botões/badges `pill`, ícones em quadrado `--radius-md (14px)`.
- Card padrão: gradiente vertical sutil de superfície (`--surface-card` → transparente), borda 1px a 10% branco, `--shadow-md`. No hover (quando interativo): sobe 3px, borda vira violeta (`--border-accent`) e o glow aparece suave.

**Sombras**
- Profundas e suaves sobre o quase-preto (`--shadow-md/lg/xl`). Para acento, o **glow violeta** (`--glow-violet`) = anel violeta 1px + halo difuso. Sombra nunca é dura/preta-cinza estilo material.

**Bordas / divisores:** sempre brancos com baixa opacidade (6–16%), nunca cinza sólido. Acento = `--border-accent` (violeta a 55%).

**Movimento**
- Entradas suaves: `opacity 0 + translateY(26px)` → revela no scroll, `transition .7s` com `--ease-out` (cubic-bezier(.16,1,.3,1)). Stagger via `transition-delay`.
- Hover de botão primário: sobe 2px + `brightness(1.08)` + glow mais forte. Press: encolhe para `scale(.98)`.
- `--ease-spring` para microinterações com leve "pop"; sem bounces exagerados, sem loops decorativos infinitos. Respeitar `prefers-reduced-motion`.

**Transparência / blur:** usados em nav (sticky, glass) e overlays. No conteúdo, transparência aparece nas bordas e nos fades de superfície, não em blocos inteiros.

**Layout:** mobile-first. Container máx. ~1120px. Grade de 8px. Seções com respiro vertical grande (`clamp(64px,12vw,120px)`). Nav sticky translúcida. Eyebrow → título → subtítulo é o padrão de cabeçalho de seção.

---

## ICONOGRAPHY

- **Sistema:** ícones de **traço (outline)**, peso ~2px, cantos arredondados (`stroke-linecap/linejoin: round`) — alinhados ao estilo **Lucide / Feather**. Coerentes com o minimalismo do mark.
- **Formato:** SVG inline (currentColor) — escalam, herdam cor do contexto (geralmente `--violet-200` dentro de "ícone-chip" com fundo `--accent-soft` e borda violeta). Nunca PNG, nunca emoji.
- **Caixa do ícone:** quadrado `--radius-md`, fundo `--accent-soft`, borda `--border-accent`, ícone violeta-claro centralizado. Usado em problemas, soluções e listas.
- **Check de garantia:** SVG de "check" na cor `--success` dentro de círculo `--success-dim`.
- ⚠️ Substituição: como nenhum set próprio foi fornecido, os ícones atuais são desenhados no padrão Lucide. Se preferir, é trivial trocar por `lucide` via CDN mantendo o mesmo peso/estilo. Flag para o usuário.
- **Não** usar: ícones preenchidos pesados, duotone colorido, emoji, caracteres unicode como ícone.

---

## ÍNDICE / MANIFESTO

**Raiz**
- `styles.css` — ponto de entrada (somente `@import`). Consumidores linkam este arquivo.
- `readme.md` — este guia.
- `SKILL.md` — wrapper p/ Agent Skills (Claude Code).

**Tokens** (`tokens/`)
- `colors.css` — escalas violeta/magenta/ink, status, gradientes, aliases semânticos.
- `typography.css` — famílias, escala (xs→5xl), pesos, tracking.
- `spacing.css` — grade de 8px, containers.
- `effects.css` — raios, sombras, glow, blur/glass, easing, durações.
- `fonts.css` — `@import` das webfonts (Space Grotesk, Sora, JetBrains Mono).
- `base.css` — reset + defaults de elemento + helpers de marca.

**Guidelines / specimen cards** (`guidelines/`) — cards do Design System tab: gradiente da marca, escalas violeta/ink, semânticas/superfícies, type display/body/mono/scale, spacing, raios+elevação, logo, motivos.

**Components** (`components/core/`) — `Button`, `Badge`, `Card`, `Input`, `Accordion`. Cada um com `.jsx` + `.d.ts` + `.prompt.md`; vitrine em `core.card.html`. Namespace de runtime: `window.G2CodeDesignSystem_8e4259`.

**UI Kits** (`ui_kits/`)
- `landing/index.html` — landing page completa de geração de leads (7 seções: hero, storytelling de problemas, método 01·02·03, prova social com scroll horizontal, soluções, área de CTA reservada, compromissos + FAQ). Mobile-first.

**Assets** (`assets/`) — `g2code-logo.png` (principal), `g2code-logo-badge.jpeg`.

---

### Caveats
- Fontes e ícones são aproximações (Google Fonts + estilo Lucide) — aguardando arquivos/sets oficiais.
- Cases da prova social na landing são placeholders.
