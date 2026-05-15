import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// ─────────────────────────────────────────────
// ZAJEL BRAND TOKENS
// Zajel Green:  #36B936
// Dark Green:   #064423
// ─────────────────────────────────────────────

const springEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: springEase, delay: i * 0.13 },
  }),
};

// ─────────────────────────────────────────────
// RESPONSIVE HOOK
// ─────────────────────────────────────────────
function useBreakpoint() {
  const [bp, setBp] = useState<'xs' | 'sm' | 'md' | 'lg'>('lg');
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 380) setBp('xs');
      else if (w < 520) setBp('sm');
      else if (w < 768) setBp('md');
      else setBp('lg');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return bp;
}

const isMobile = (bp: string) => bp === 'xs' || bp === 'sm' || bp === 'md';

// ─────────────────────────────────────────────
// SHARED GLASS SHELL
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// SVG SPARKLINE
// ─────────────────────────────────────────────




// ─────────────────────────────────────────────
// CARD 1 — Future of Logistics
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// APP STORE BUTTON
// ─────────────────────────────────────────────
const AppStoreBtn = ({
  store,
  mobile,
}: {
  store: 'apple' | 'google';
  mobile: boolean;
}) => {
  const isApple = store === 'apple';

  const AppleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  const GoogleIcon = () => (
    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.80482 11.4617L0.0895996 22.0059C0.0905121 22.0078 0.090512 22.0106 0.0914244 22.0125C0.389807 23.1574 1.41179 24 2.62539 24C3.11083 24 3.56616 23.8656 3.95671 23.6305L3.98773 23.6118L14.9229 17.1593L9.80482 11.4617Z" fill="#EA4335"/>
<path d="M19.6331 9.66619L19.624 9.65966L14.9028 6.86123L9.58391 11.7013L14.9219 17.1582L19.6176 14.3878C20.4406 13.9324 21 13.045 21 12.0223C21 11.0052 20.4489 10.1225 19.6331 9.66619Z" fill="#FBBC04"/>
<path d="M0.0894234 1.99331C0.0310244 2.21353 0 2.44494 0 2.68382V21.3163C0 21.5552 0.0310245 21.7866 0.0903359 22.0059L10.1386 11.7313L0.0894234 1.99331Z" fill="#4285F4"/>
<path d="M9.87657 11.9999L14.9044 6.85935L3.98192 0.383507C3.58499 0.139962 3.12145 -4.76837e-06 2.62597 -4.76837e-06C1.41237 -4.76837e-06 0.388558 0.844468 0.0901759 1.99034C0.0901759 1.99127 0.0892639 1.9922 0.0892639 1.99314L9.87657 11.9999Z" fill="#34A853"/>
</svg>

  );

  return (
    <motion.a
      href={isApple ? '#app-store' : '#play-store'}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: mobile ? 7 : 9,
        borderRadius: 999,
        paddingInline: mobile ? '1rem' : '1.4rem',
        paddingBlock: mobile ? '0.45rem' : '0.6rem',
        background: isApple ? 'rgba(255,255,255,0.13)' : 'white',
        border: isApple ? '1px solid rgba(255,255,255,0.30)' : 'none',
        backdropFilter: isApple ? 'blur(6px)' : 'none',
        boxShadow: isApple ? 'none' : '0 4px 20px rgba(0,0,0,0.12)',
        cursor: 'pointer',
        textDecoration: 'none',
        fontFamily: '"Manrope", sans-serif',
      }}
    >
      {isApple ? <AppleIcon /> : <GoogleIcon />}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2 }}>
        <span style={{
          fontSize: mobile ? 8 : 9,
          fontWeight: 400,
          color: isApple ? 'rgba(255,255,255,0.75)' : 'rgba(6,68,35,0.55)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>
          {isApple ? 'Download on the' : 'Get it on'}
        </span>
        <span style={{
          fontSize: mobile ? 12 : 13,
          fontWeight: mobile ? 500 : 600,
          color: isApple ? 'white' : '#064423',
          letterSpacing: '-0.01em',
        }}>
          {isApple ? 'App Store' : 'Google Play'}
        </span>
      </div>
    </motion.a>
  );
};

// ─────────────────────────────────────────────
// MAIN HERO COMPONENT
// ─────────────────────────────────────────────
export const AppHero = () => {
  const bp = useBreakpoint();
  const mobile = isMobile(bp);

  // Card scale — hidden on mobile, shown on desktop
  

  // Phone image sizing — much bigger on mobile
  const phoneMaxH =
    bp === 'xs' ? '62vh' :
    bp === 'sm' ? '60vh' :
    bp === 'md' ? '58vh' :
    'calc(100vh - 320px)';

  const phoneW =
    bp === 'xs' ? '115vw' :
    bp === 'sm' ? '105vw' :
    bp === 'md' ? '80vw' :
    'min(700px, 85vw)';

  // Heading — lighter weight on all sizes
  const headingSize =
    bp === 'xs' ? '1.75rem' :
    bp === 'sm' ? '2rem' :
    'clamp(2rem, 1rem + 4vw, 3.5rem)';

  // ── CHANGED: reduced from 600/700 to 300/400 ──
  const headingWeight = mobile ? 300 : 400;

  // Top section padding — compact on mobile so phone gets more room
  const topPaddingTop =
    bp === 'xs' ? '0.75rem' :
    bp === 'sm' ? '1rem' :
    bp === 'md' ? '1.25rem' :
    '2rem';

  // Gap between buttons and phone zone
  const phoneZoneMarginTop =
    bp === 'xs' ? '0.5rem' :
    bp === 'sm' ? '0.75rem' :
    '1rem';

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');`}</style>

      <section
        className="relative w-full overflow-hidden flex flex-col items-center"
        style={{
          fontFamily: '"Manrope", sans-serif',
          paddingTop: '72px',
          height: '100dvh',
          minHeight: '100svh',
          background: `
            linear-gradient(
              160deg,
              #064423  0%,
              #064423  8%,
              #1a7a36  20%,
              #36B936  45%,
              #36B936  100%
            )
          `,
        }}
      >
        {/* ── DESKTOP: top text section ── */}
        {!mobile && (
          <div
            className="relative z-10 flex flex-col items-center text-center w-full"
            style={{
              paddingInline: '1.5rem',
              paddingTop: topPaddingTop,
              paddingBottom: '0.5rem',
            }}
          >
            <motion.h1
              variants={fadeUp} custom={1} initial="hidden" animate="visible"
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontWeight: headingWeight,
                fontSize: headingSize,
                letterSpacing: '-0.02em',
                lineHeight: 1.08,
                color: 'white',
                marginBottom: '1.25rem',
                maxWidth: '600px',
              }}
            >
              The Smartest App<br />For All Your Shipments
            </motion.h1>
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" animate="visible"
              style={{ display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <AppStoreBtn store="apple" mobile={false} />
              <AppStoreBtn store="google" mobile={false} />
            </motion.div>
          </div>
        )}

        {/* ── PHONE + FLOATING CARDS ZONE ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: springEase, delay: 0.3 }}
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: mobile ? '100%' : 560,
            margin: '0 auto',
            paddingInline: mobile ? 0 : '1.5rem',
            marginTop: mobile ? 0 : phoneZoneMarginTop,
            flex: 1,
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Phone image — anchored to bottom */}
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
            <img
              src="/ChatGPT Image May 15, 2026, 04_09_08 PM (1).png"
              alt="App mockup"
              style={{
                width: phoneW,
                height: 'auto',
                maxHeight: phoneMaxH,
                objectFit: 'contain',
                display: 'block',
                transform: 'rotate(-6deg)',
                transformOrigin: 'bottom center',
                filter: 'drop-shadow(0 24px 48px rgba(6,68,35,0.35))',
                marginLeft: mobile ? '5%' : 0,
              }}
            />
          </div>

          {/* ── MOBILE ONLY: heading + CTAs overlaid above the phone ── */}
          {mobile && (
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" animate="visible"
              style={{
                position: 'absolute',
                bottom: '60%',
                left: 0,
                right: 0,
                zIndex: 40,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                paddingInline: bp === 'xs' ? '1.25rem' : '1.5rem',
                gap: 12,
              }}
            >
              <motion.h1
                variants={fadeUp} custom={1}
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  fontWeight: headingWeight,
                  fontSize: headingSize,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.12,
                  color: 'white',
                  margin: 0,
                  maxWidth: '340px',
                  textShadow: '0 2px 16px rgba(6,68,35,0.25)',
                }}
              >
                The Smartest App<br />For All Your Shipments
              </motion.h1>
              <motion.div
                variants={fadeUp} custom={2}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <AppStoreBtn store="apple" mobile={true} />
                <AppStoreBtn store="google" mobile={true} />
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom fade */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '45%',
            zIndex: 20,
            pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 80% 60% at 20% 100%, #f0faf0 40%, transparent 75%),
              radial-gradient(ellipse 70% 55% at 70% 100%, #f0faf0 40%, transparent 72%),
              radial-gradient(ellipse 60% 50% at 45% 100%, #f0faf0 35%, transparent 70%),
              radial-gradient(ellipse 50% 45% at 85% 100%, #f0faf0 30%, transparent 68%),
              linear-gradient(to bottom, transparent 0%, #f0faf0 80%)
            `,
          }}
        />
      </section>
    </>
  );
};

export default AppHero;