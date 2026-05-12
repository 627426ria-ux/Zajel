

/* ─────────────────────────────────────────────────────────────────
   Fluid Design Token System
   ───────────────────────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600&display=swap');

  .dh-root {
    /* ── Fluid Type Scale ── */
    --text-sm:      clamp(0.75rem,   0.68rem + 0.36vw,  0.9375rem);
    --text-base:    clamp(0.8125rem, 0.74rem + 0.38vw,  1rem);
    --text-eyebrow: clamp(0.6875rem, 0.62rem + 0.34vw,  0.875rem);
    --text-h1:      clamp(2rem,      0.8rem  + 5.8vw,   5.5rem);

    /* ── Fluid Spacing ── */
    --space-xs:  clamp(0.5rem,  0.4rem + 0.5vw,  0.875rem);
    --space-sm:  clamp(0.75rem, 0.6rem + 0.75vw, 1.25rem);
    --space-md:  clamp(1rem,    0.8rem + 1.0vw,  1.75rem);
    --space-lg:  clamp(1.5rem,  1.0rem + 2.5vw,  3.25rem);
    --space-xl:  clamp(2rem,    1.2rem + 4.0vw,  5rem);

    /* ── Layout ── */
    --shell-px:       clamp(1rem,    2.5vw,  3.5rem);
    --shell-pt:       clamp(5rem,    4.5vw + 3rem, 8rem);
    --card-radius:    clamp(1.25rem, 0.6rem + 2.0vw, 2.75rem);
    --card-h:         clamp(480px,   72svh, 820px);
    --content-pad:    clamp(1.5rem,  1.0rem + 3.0vw, 5rem);
    --content-width:  clamp(280px,   20rem + 18vw,  620px);

    /* ── Brand Palette ── */
    --green-deep:  #064423;
    --green-vivid: #36B936;
    --green-btn:   #05361A;
    --green-btn-h: #032d14;

    font-family: 'Manrope', sans-serif;
  }

  /* ── Section shell ── */
  .dh-section {
    width: 100%;
    padding-inline: var(--shell-px);
    padding-top: var(--shell-pt);
    padding-bottom: clamp(1.5rem, 3vw, 3rem);
    background: #fff;
  }

  /* ── Hero card ── */
  .dh-card {
    position: relative;
    width: 100%;
    max-width: clamp(600px, 96vw, 1400px);
    margin-inline: auto;
    height: var(--card-h);
    border-radius: var(--card-radius);
    overflow: hidden;

    /* Grounding shadow — soft, not harsh */
    box-shadow:
      0 2px  8px  rgba(0,0,0,0.08),
      0 16px 48px rgba(0,0,0,0.22),
      0 40px 80px rgba(0,0,0,0.14);
  }

  /* ── Image layer ── */
  .dh-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
    display: block;
    /* Subtle scale on load for premium feel */
    animation: dh-imgReveal 1.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes dh-imgReveal {
    from { transform: scale(1.04); opacity: 0.7; }
    to   { transform: scale(1);    opacity: 1;   }
  }

  /* ── Scrim layers ── */
  /* Bottom-heavy gradient for text legibility */
  .dh-scrim-main {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0,0,0,0.88)  0%,
      rgba(0,0,0,0.55) 28%,
      rgba(0,0,0,0.18) 56%,
      transparent      100%
    );
    z-index: 1;
  }

  /* Subtle left vignette to draw eye to content */
  .dh-scrim-left {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(0,0,0,0.32) 0%,
      transparent      55%
    );
    z-index: 2;
  }

  /* ── Content block ── */
  .dh-content {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: var(--content-pad);
    padding-top: calc(var(--content-pad) * 2.5);  /* scrim fade buffer */
    width: var(--content-width);
    max-width: 90%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  /* ── Eyebrow tag ── */
  .dh-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: var(--space-sm);
    animation: dh-up 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both;
  }

  .dh-eyebrow-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(54,185,54,0.18);
    border: 0.5px solid rgba(54,185,54,0.45);
    border-radius: 999px;
    padding: 4px 10px 4px 7px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  .dh-eyebrow-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green-vivid);
    box-shadow: 0 0 0 3px rgba(54,185,54,0.25);
    flex-shrink: 0;
  }

  .dh-eyebrow-text {
    font-size: var(--text-eyebrow);
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--green-vivid);
    line-height: 1;
  }

  /* ── Headline ── */
  .dh-h1 {
    font-size: var(--text-h1);
    font-weight: 300;
    line-height: 1.04;
    letter-spacing: -0.028em;
    color: #fff;
    margin: 0 0 var(--space-sm);
    animation: dh-up 0.8s 0.32s cubic-bezier(0.22,1,0.36,1) both;
  }

  /* ── Body copy ── */
  .dh-body {
    font-size: var(--text-base);
    font-weight: 300;
    line-height: 1.68;
    color: rgba(255,255,255,0.72);
    margin: 0 0 var(--space-lg);
    max-width: 46ch;
    animation: dh-up 0.8s 0.44s cubic-bezier(0.22,1,0.36,1) both;
  }

  /* ── CTA button ── */
  .dh-btn {
    display: inline-flex;
    align-items: center;
    gap: clamp(5px, 0.8vw, 8px);
    font-family: 'Manrope', sans-serif;
    font-size: var(--text-sm);
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--green-vivid);
    background: var(--green-btn);
    border: none;
    border-radius: 999px;
    cursor: pointer;
    padding: clamp(0.6rem, 0.9vw, 0.85rem) clamp(1.1rem, 2.0vw, 1.65rem);
    transition:
      background 200ms ease,
      transform  240ms cubic-bezier(0.34,1.56,0.64,1),
      box-shadow 200ms ease;
    box-shadow:
      0 1px  4px rgba(5,54,26,0.4),
      0 4px 12px rgba(5,54,26,0.3);
    outline-offset: 3px;
    animation: dh-up 0.8s 0.56s cubic-bezier(0.22,1,0.36,1) both;
  }
  .dh-btn:hover {
    background: var(--green-btn-h);
    transform: translateY(-2px) scale(1.03);
    box-shadow:
      0 2px  8px rgba(5,54,26,0.45),
      0 8px 22px rgba(5,54,26,0.35);
  }
  .dh-btn:active {
    transform: scale(0.97);
    box-shadow: none;
  }
  .dh-btn:focus-visible {
    outline: 2px solid var(--green-vivid);
  }

  .dh-btn-icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* ── Bottom-right stats bar ── */
  .dh-stats {
    position: absolute;
    bottom: var(--content-pad);
    right: var(--content-pad);
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: clamp(0.5rem, 1.2vw, 0.875rem);
    align-items: flex-end;
    animation: dh-fade 0.9s 0.7s cubic-bezier(0.22,1,0.36,1) both;
  }

  .dh-stat {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    background: rgba(255,255,255,0.07);
    border: 0.5px solid rgba(255,255,255,0.14);
    border-radius: clamp(0.6rem, 1.2vw, 1rem);
    padding: clamp(0.5rem, 0.9vw, 0.875rem) clamp(0.75rem, 1.3vw, 1.25rem);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    min-width: clamp(80px, 8vw, 110px);
  }

  .dh-stat-value {
    font-size: clamp(1.1rem, 0.7rem + 1.8vw, 1.75rem);
    font-weight: 300;
    letter-spacing: -0.02em;
    color: #fff;
    line-height: 1;
  }

  .dh-stat-label {
    font-size: clamp(0.6rem, 0.52rem + 0.35vw, 0.75rem);
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    line-height: 1;
  }

  /* ── Shared keyframes ── */
  @keyframes dh-up {
    from { opacity: 0; transform: translateY(clamp(10px,2vw,20px)); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes dh-fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── Hide stats on very narrow viewports to avoid clutter ── */
  @media (max-width: 460px) {
    .dh-stats { display: none; }
  }
`;

const IconPlus = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);



/* ══════════════════════════════════════════════
   Component
   ══════════════════════════════════════════════ */
const DomesticHero = () => {
  return (
    <section className="dh-root dh-section" aria-label="Domestic courier hero">
      <style>{CSS}</style>

      <div className="dh-card" role="img" aria-label="Delivery driver handing over a parcel">

        {/* ── Layer 1: Background image ── */}
        <img
          src="/ChatGPT Image Apr 24, 2026 at 01_22_49 PM.png"
          alt=""
          className="dh-img"
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />

        {/* ── Layer 2: Scrim ── */}
        <div className="dh-scrim-main" aria-hidden="true" />
        <div className="dh-scrim-left"  aria-hidden="true" />

        {/* ── Layer 3: Content ── */}
        <div className="dh-content">

          

          <h1 className="dh-h1">
            Domestic<br/>
            Courier Service
          </h1>

          <p className="dh-body">
            Seamless delivery with full tracking, powered by a fleet of 100+ vans and bikes. Trusted by eCommerce, SMEs, and government for express delivery within 24 hours.
          </p>

          <button className="dh-btn">
            <span className="dh-btn-icon"><IconPlus /></span>
            Get a Quote
          </button>
        </div>

        {/* ── Layer 4: Stats — bottom-right ── */}
        

      </div>
    </section>
  );
};

export default DomesticHero;