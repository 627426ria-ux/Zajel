import LanguageSwitcher from "./LanguageSwitcher";
import  { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────
// BRAND COLORS
// Primary Dark:  #004E09
// Primary Light: #2BA735
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// NAVIGATION DATA
// ─────────────────────────────────────────────

const solutionsCategories = [
  {
    id: "individual",
    label: "Individual Business",
    tagline: "Personal delivery solutions",
    items: [
      {
        name: "On Demand Express",
        desc: "Instant solutions for urgent deliveries.",
        path: "/domestic-courier",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      },
      {
        name: "International Shipping",
        desc: "Global reach with local expertise.",
        path: "/international-courier",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      },
    ],
  },
  {
    id: "business",
    label: "Business Solutions",
    tagline: "Scale with confidence",
    items: [
      {
        name: "Ecommerce",
        desc: "First, mid, and last-mile perfection.",
        path: "/ecommerce",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      },
      {
        name: "Global Freight",
        desc: "Air, sea, and road cargo routing.",
        path: "/freight-courier",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
      },
    ],
  },
  {
    id: "secure",
    label: "Secure Solutions",
    tagline: "Certified, compliant, protected",
    items: [
      {
        name: "Gov & Institutional",
        desc: "Compliant document handling.",
        path: "/secure-gov",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
      },
      {
        name: "Secure ID",
        desc: "Emirates ID & passport delivery.",
        path: "/secure-id",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><line x1="7" y1="15" x2="12" y2="15"/><line x1="7" y1="11" x2="9" y2="11"/><circle cx="17" cy="10" r="2"/><path d="M14 16c0-1.6 2-3 3-3s3 1.4 3 3"/></svg>
      },
      {
        name: "Secure Docs",
        desc: "Courts, MOFA, and Customs.",
        path: "/secure-docs",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6"/><path d="M12 18s-3-2-3-5a3 3 0 0 1 6 0c0 3-3 5-3 5z"/></svg>
      },
      {
        name: "Secure Mail",
        desc: "Confidential corporate mail.",
        path: "/secure-mail",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      },
    ],
  },
];

const supportCategories = [
  {
    id: "help",
    label: "Help Center",
    tagline: "We're here for you",
    items: [
      { 
        name: "Support Ticket", 
        desc: "Open a case with our team.",
        path: "/support",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>
      },
      { 
        name: "FAQs", 
        desc: "Answers to common questions.",
        path: "/faq",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    tagline: "Our story, your future",
    items: [
      { 
        name: "Careers", 
        desc: "Join our logistics network.",
        path: "/careers",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      },
      { 
        name: "About Us", 
        desc: "Our mission, vision, and history.",
        path: "/about",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      },
    ]
  },
  {
    id: "resources",
    label: "Resources",
    tagline: "Stay informed",
    items: [
      { 
        name: "Blog", 
        desc: "Latest news and insights.",
        path: "/blog",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
      },
      { 
        name: "Contact", 
        desc: "Get in touch directly.",
        path: "/contact",
        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      },
    ]
  },
];

// ─────────────────────────────────────────────
// LOGO 
// ─────────────────────────────────────────────
const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <div className="flex items-center gap-3 flex-shrink-0">
      {/* Zajel logotype — from Logotype_Positive_DUAL.svg, cropped to content bounds */}
      <svg width="150" height="35" viewBox="434 388 1052 304" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path fill="#36B936" d="M1086.07,456.18c-17.92,0-26.17,9.76-31.62,16.22l-15.02,17.58l11.41,9.24l12.1-13.92
			c7.18-9.18,14.97-13.83,23.14-13.83c8.35,0,12.16,5.27,13.58,8.01c-13.56,3.24-27.85,14.35-27.85,36.04
			c0,28.6-7.64,46.97-25.49,61.07c1.13-3.48,2.1-6.95,2.88-10.34c5.95-26.04,0.41-46.49-16.03-59.14
			c-30.93-23.81-106.81-80.6-121.71-91.75l-9.85-7.36l-2.59,11.53c-0.38,1.7-3.67,17.26-3.24,37.5c0.59,28.09,8.29,51.46,22.27,67.59
			c15.08,17.4,37.18,26.69,65.7,27.65c-17.95,19.88-49.92,55.24-57.82,63.98l-14.04,15.53l18.25-0.78
			c14.03-0.9,38.51-4.62,58.42-10.09c5.67-8.96,12.82-19.88,12.82-19.88l-0.73,0.26c-16.35,5.8-39.21,10.9-52.01,12.64
			c18.54-20.51,53.75-59.47,58.38-64.63l12.76-14.21l-19.04,1.48c-32.33,2.53-56.26-4.84-71.1-21.93
			c-20.29-23.36-19.77-59.64-17.53-79.69c20.03,14.99,84.16,63.05,111.73,84.28c14.58,11.23,13.61,30.4,10.23,44.51
			c-3.76,15.7-11.13,28.61-11.2,28.74l-12.22,21.18l22.51-10.66c28.42-15.6,53.92-34.02,53.92-87.49c0-15.09,10.99-21.85,21.87-21.85
			h7.65v-7.65C1116.6,467.59,1100.76,456.18,1086.07,456.18"/>
          <polygon fill="#132818" points="454.16,631.84 454.16,614.24 515.31,550.03 454.96,550.03 454.96,532.8 538.53,532.8 538.53,550.1 
			538.4,550.14 478.19,614.52 540.54,614.52 540.54,631.84 	"/>
          <path fill="#132818" d="M760.01,632.86c-4.35,0-8.7-0.47-12.94-1.4c-14.15-3.1-25.88-11.5-33.03-23.64
			c-7.23-12.28-8.88-26.78-4.67-40.83c5.36-17.87,19.52-30.94,36.97-34.1c2.78-0.5,5.59-0.76,8.35-0.76
			c13.7,0,26.01,6.03,34.67,16.98c8.91,11.29,12.64,25.78,10.51,40.87l-72.07,0.06l0.06,0.42c1.32,9.3,7.89,17.28,17.56,21.36
			c4.82,2.03,10.01,3.06,15.45,3.06h0c10.77,0,22.72-4.17,33.72-11.75l-0.14,19.5C784.18,629.21,772.22,632.86,760.01,632.86z
			 M754.8,549.95c-3.79,0-7.6,0.77-11.32,2.27c-8.32,3.38-14.35,11.67-16.12,22.17l-0.07,0.43l53.98,0.03l-0.06-0.42
			c-0.96-7.14-4.1-13.32-9.34-18.36C766.97,552.06,761.07,549.95,754.8,549.95z"/>
          <path fill="#132818" d="M1454.71,493.72c-1.35,0-2.68,0.25-3.95,0.73c-2.78,1.05-4.98,3.13-6.2,5.84c-1.22,2.71-1.3,5.74-0.25,8.52
			c1.63,4.29,5.81,7.18,10.41,7.18l0,0c1.35,0,2.68-0.25,3.96-0.73c5.73-2.18,8.63-8.62,6.44-14.36
			C1463.49,496.61,1459.3,493.72,1454.71,493.72z"/>
          <path fill="#132818" d="M680.31,493.6c-1.35,0-2.68,0.25-3.95,0.73c-2.78,1.06-4.98,3.13-6.2,5.85c-1.22,2.71-1.31,5.73-0.25,8.51
			c1.63,4.29,5.81,7.18,10.41,7.18l0,0c1.35,0,2.68-0.25,3.95-0.73c2.78-1.05,4.98-3.13,6.2-5.84c1.22-2.71,1.31-5.74,0.25-8.52
			C689.09,496.49,684.91,493.6,680.31,493.6z"/>
          <path fill="#132818" d="M633.12,671.98v-16.31l7.84,0.01c5.95,0,11.84-1.42,17.04-4.09c8.01-4.12,12.98-11.84,12.98-20.13v-54.34
			l-0.08-27.11V532.8l17.74,0.04l-0.15,96.73c-0.02,16.76-9.77,31.29-25.45,37.93c-7.03,2.98-14.52,4.49-22.27,4.49l-0.38,0H633.12z"
			/>
          <rect x="1408.23" y="493.72" fill="#132818" width="18.1" height="138.06"/>
          <rect x="818.88" y="493.72" fill="#132818" width="18.09" height="138.06"/>
          <circle fill="#132818" cx="1306.45" cy="659.24" r="11.13"/>
          <path fill="#132818" d="M600.23,633.51c-28,0-50.78-22.78-50.78-50.78c0-28,22.78-50.78,50.78-50.78c27.87,0,50.65,22.68,50.77,50.56
			l0.01,0.37v49.04h-17.53v-10.85l-0.61,0.51C623.72,629.27,612.12,633.51,600.23,633.51z M600.23,549.74
			c-18.18,0-32.98,14.79-32.98,32.98c0,18.19,14.8,32.98,32.98,32.98s32.98-14.79,32.98-32.98
			C633.21,564.54,618.41,549.74,600.23,549.74z"/>
          <path fill="#132818" d="M1407.75,671.32v-16.31l7.82,0.01c5.96,0,11.86-1.42,17.06-4.1c8-4.12,12.98-11.84,12.98-20.13v-54.34
			l-0.08-27.11v-16.52l17.74,0.04l-0.14,96.04c-0.03,16.75-9.78,31.28-25.45,37.93c-7.03,2.98-14.52,4.49-22.27,4.49l-0.38,0H1407.75
			z"/>
          <path fill="#132818" d="M1172.07,670.37c-28.48,0-51.65-23.17-51.65-51.65c0-11.29,3.65-22.05,10.56-31.13l14.11,10.71
			c-4.49,5.92-6.86,12.97-6.86,20.42c0,18.66,15.18,33.84,33.84,33.84c18.66,0,33.84-15.18,33.84-33.84v-125h17.81v120.25h145.07
			l-0.6-0.63c-2.4-2.5-4.59-6.59-6.5-12.16c-1.93-5.63-3.75-13.01-5.41-21.93c-1.16-7.11-2.73-12.91-4.68-17.22
			c-1.96-4.36-4.55-7.5-7.7-9.34c-3.15-1.84-7.19-2.77-12-2.77c-4.4,0-8.89,0.65-13.37,1.93c-4.36,1.25-8.99,3.19-13.76,5.78
			l-7.07-16.07c5.42-3.37,11.15-5.81,17.05-7.24c6.02-1.47,12.51-2.21,19.28-2.21c3.82,0,7.39,0.3,10.58,0.91
			c3.19,0.6,6.09,1.5,8.63,2.69c5.84,2.77,10.54,7.06,13.98,12.76c3.44,5.71,6.03,14.01,7.7,24.67c1.16,7.51,2.46,14,3.88,19.29
			c1.42,5.31,2.99,9.81,4.67,13.38c1.69,3.59,3.61,6.37,5.7,8.28l-0.12,17.7h-167.06l-0.07,0.27
			C1215.87,654.62,1195.37,670.37,1172.07,670.37z"/>
        </g>
      </svg>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// ICON PLACEHOLDER  (16×16 dashed box)
// ─────────────────────────────────────────────
const IconPlaceholder = () => (
  <div
    style={{
      width: 18,
      height: 18,
      border: "1.5px dashed currentColor",
      borderRadius: 4,
      opacity: 0.4,
    }}
  />
);

// ─────────────────────────────────────────────
// CHEVRON
// ─────────────────────────────────────────────
const Chevron = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    style={{
      transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      flexShrink: 0,
    }}
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─────────────────────────────────────────────
// MEGA MENU PANEL  (full-width, below navbar)
// ─────────────────────────────────────────────
const MegaMenuPanel = ({ type, categories, isOpen, onClose, onMouseEnter }: { type: string; categories: any[]; isOpen: boolean; onClose: () => void; onMouseEnter?: () => void }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const panelRef = useRef(null);

  useEffect(() => {
    if (isOpen) setActiveCategory(0);
  }, [isOpen]);

  const activeItems = categories[activeCategory]?.items ?? [];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="mega-backdrop"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.15)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 48,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Panel */}
      <div
  ref={panelRef}
  onMouseEnter={onMouseEnter}
  onMouseLeave={() => onClose()}
  className="mega-panel"
  style={{
    position: "fixed",
          left: 0,
          right: 0,
          zIndex: 49,
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-12px)",
          pointerEvents: isOpen ? "auto" : "none",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          willChange: "transform, opacity",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: "0 0 24px 24px",
              boxShadow: "0 24px 60px rgba(0,0,0,0.06), 0 4px 20px rgba(0,0,0,0.03)",
              display: "flex",
              overflow: "hidden",
              minHeight: 380,
            }}
          >
            {/* ── LEFT SIDEBAR ──────────────────────────────── */}
            <div
              style={{
                width: 290,
                flexShrink: 0,
                background: "#f8fbf8",
                borderRight: "1px solid rgba(0,78,9,0.04)",
                padding: "36px 16px",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#2BA735",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0 16px",
                  marginBottom: 20,
                  fontFamily: '"Manrope", sans-serif',
                }}
              >
                {type === "solutions" ? "Categories" : "Help & Info"}
              </p>

              {categories.map((cat, idx) => {
                const isActive = activeCategory === idx;
                return (
                  <button
                    key={cat.id}
                    onMouseEnter={() => setActiveCategory(idx)}
                    onClick={() => setActiveCategory(idx)}
                    className={`sidebar-btn ${isActive ? "active" : ""}`}
                  >
                    <span className="sidebar-btn-title">
                      {cat.label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="sidebar-active-arrow">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="sidebar-btn-desc">{cat.tagline}</span>
                  </button>
                );
              })}
            </div>

            {/* ── CENTER GRID ───────────────────────────────── */}
            <div
              style={{
                flex: 1,
                padding: "32px 40px",
                display: "flex",
                flexDirection: "column",
                background: "#ffffff"
              }}
            >
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 300,
                  color: "#0A4D26",
                  marginBottom: 24,
                  letterSpacing: "-0.01em",
                }}
              >
                {categories[activeCategory]?.label}
              </p>

              <div
                key={activeCategory}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 8,
                }}
              >
                {activeItems.map((item: any, idx: number) => (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => {
                      onClose();
                    }}
                    className="mega-item"
                    style={{ animationDelay: `${idx * 0.04}s` }}
                  >
                    <div className="mega-icon">
                      {item.icon ?? <IconPlaceholder />}
                    </div>

                    <div className="mega-text">
                      <p
                        style={{
                          margin: 0,
                          fontSize: 14.5,
                          fontWeight: 500,
                          color: "#0A4D26",
                          fontFamily: '"Manrope", sans-serif',
                          lineHeight: 1.3,
                        }}
                      >
                        {item.name}
                      </p>
                      <p
                        style={{
                          margin: "4px 0 0",
                          fontSize: 12.5,
                          fontWeight: 300,
                          color: "#6b7280",
                          fontFamily: '"Manrope", sans-serif',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mega-arrow"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── RIGHT CONVERSION CARD ─────────────────────── */}
            <div
              style={{
                padding: "32px 32px 32px 0",
                display: "flex",
                alignItems: "stretch",
                background: "#ffffff"
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// ─────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [mobileSubCat, setMobileSubCat] = useState<Record<string, number | null>>({});

  const toggle = (key: string) => setOpenSection((p) => (p === key ? null : key));
  const toggleSub = (key: string, idx: number) => setMobileSubCat((p) => ({ ...p, [key]: p[key] === idx ? null : idx }));

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Track Shipment", path: "/track" },
  ];

  const megaItems = [
    { key: "solutions", label: "Solutions", categories: solutionsCategories },
    { key: "support", label: "Support", categories: supportCategories },
  ];

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 58,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(85vw, 400px)",
          background: "#fff",
          zIndex: 59,
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          willChange: "transform",
          fontFamily: '"Manrope", sans-serif',
          boxShadow: "-30px 0 60px rgba(0,0,0,0.1)",
        }}
      >
        {/* header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: 72,
            borderBottom: "1px solid rgba(0,0,0,0.04)",
            flexShrink: 0,
          }}
        >
          <Logo />
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#6b7280",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* scroll area */}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 0" }}>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => onClose()}
              style={{
                display: "block",
                padding: "16px 24px",
                fontSize: 15,
                fontWeight: 400,
                color: "#0A4D26",
                textDecoration: "none",
                borderBottom: "1px solid rgba(0,0,0,0.03)",
              }}
            >
              {item.label}
            </Link>
          ))}

          {megaItems.map(({ key, label, categories }) => (
            <div key={key} style={{ borderBottom: "1px solid rgba(0,0,0,0.03)" }}>
              <button
                onClick={() => toggle(key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "16px 24px",
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#0A4D26",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: '"Manrope", sans-serif',
                }}
              >
                {label}
                <Chevron open={openSection === key} />
              </button>

              {openSection === key && (
                <div style={{ paddingBottom: 16 }}>
                  {categories.map((cat, catIdx) => (
                    <div key={cat.id}>
                      <button
                        onClick={() => toggleSub(key, catIdx)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                          padding: "12px 24px 12px 32px",
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#9ca3af",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontFamily: '"Manrope", sans-serif',
                        }}
                      >
                        {cat.label}
                        <Chevron open={mobileSubCat[key] === catIdx} />
                      </button>

                      {mobileSubCat[key] === catIdx &&
                        cat.items.map((item, iIdx) => (
                          <Link
                            key={iIdx}
                            to={item.path}
                            onClick={() => onClose()}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 16,
                              padding: "12px 24px 12px 40px",
                              textDecoration: "none",
                            }}
                          >
                            <div
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: 10,
                                background: "#fafafa",
                                border: "1px solid rgba(0,0,0,0.04)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#0A4D26",
                                flexShrink: 0,
                              }}
                            >
                              {item.icon ?? <IconPlaceholder />}
                            </div>
                            <div>
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: 14,
                                  fontWeight: 500,
                                  color: "#0A4D26",
                                  fontFamily: '"Manrope", sans-serif',
                                }}
                              >
                                {item.name}
                              </p>
                              <p
                                style={{
                                  margin: "4px 0 0",
                                  fontSize: 12,
                                  fontWeight: 300,
                                  color: "#6b7280",
                                  fontFamily: '"Manrope", sans-serif',
                                }}
                              >
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Quotation */}
          <Link
            to="/quotation"
            onClick={() => onClose()}
            style={{
              display: "block",
              padding: "16px 24px",
              fontSize: 15,
              fontWeight: 400,
              color: "#0A4D26",
              textDecoration: "none",
              borderBottom: "1px solid rgba(0,0,0,0.03)",
            }}
          >
            Quotation
          </Link>

          {/* Language Mobile Menu */}
          <div style={{ padding: "24px" }}>
          <LanguageSwitcher />
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            padding: "20px 24px 32px",
            background: "#fafafa",
            borderTop: "1px solid rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            flexShrink: 0,
          }}
        >
          <Link to="/login" className="btn-login" style={{ width: "100%", textAlign: "center" }}>
            Login
          </Link>
          <Link to="/download" className="btn-download" style={{ width: "100%", textAlign: "center", justifyContent: "center", display: "flex" }}>
            Download App
          </Link>
        </div>
      </div>
    </>
  );
};

// ─────────────────────────────────────────────
// MAIN NAVBAR
// ─────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 100);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleMenu = (key: string) => setActiveMenu((p) => (p === key ? null : key));

  const navLinks = [
    { label: "Track Shipment", path: "/track" },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        /* Outer fixed wrapper - controls the inset "container" padding on larger screens */
        .nav-outer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 0;
          transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Shell = the actual visible bar. Holds background, blur, radius, shadow */
        .nav-shell {
          max-width: 1600px;
          margin: 0 auto;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 1. Flush Snapped State (When Scrolled or Menu Open) */
        .nav-snapped {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.04);
        }

        /* 2. Premium Attached Glass (Top State) */
        .nav-top-glass {
          background: rgba(255, 255, 255, 0.55); 
          backdrop-filter: blur(24px) saturate(150%);
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.6); 
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02); 
        }

        /* Laptop and larger: nav sits inset inside a contained, rounded, floating shell */
        @media (min-width: 1024px) {
          .nav-outer {
            padding: 14px 24px 0;
          }
          .nav-shell {
            border-radius: 20px;
            overflow: hidden;
          }
          .nav-shell.nav-snapped {
            border: 1px solid rgba(0, 0, 0, 0.06);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          }
          .nav-shell.nav-top-glass {
            border: 1px solid rgba(255, 255, 255, 0.6);
          }
        }

        /* Inner container */
        /* Smooth transition for the inner container (Dynamic Height) */
        .nav-inner {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
          min-height: 76px; /* A slightly taller, premium baseline */
          height: auto; /* Allows it to grow if content wraps */
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px clamp(20px, 4vw, 48px); /* Vertical padding hugs the content */
          margin: 0 auto;
          max-width: 1600px; 
        }

        /* Calm, Fading Navigation Links */
        .nav-link {
          position: relative;
          color: #0A4D26;
          opacity: 0.7;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        .nav-link:hover, .nav-link:focus { 
          opacity: 1; 
          color: #0A4D26; 
        }

        /* Minimal CTAs */
        .btn-login {
          background: transparent;
          border: none;
          color: #004E09;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.3s ease;
          padding: 8px 12px;
          font-size: 13px;
          font-family: "Manrope", sans-serif;
          opacity: 0.8;
          text-decoration: none;
        }
        .btn-login:hover {
          opacity: 1;
        }

        .btn-download {
          background: transparent;
          border: 1px solid rgba(0, 78, 9, 0.3); /* Delicate Wireframe */
          border-radius: 50px;
          color: #004E09;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 8px 24px;
          font-size: 13px;
          font-family: "Manrope", sans-serif;
          white-space: nowrap;
          text-decoration: none;
        }
        .btn-download:hover {
          border-color: #004E09;
          background: rgba(0, 78, 9, 0.04);
        }

        /* Staggered Grid Animation for Center Menu Items */
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .mega-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          border-radius: 16px;
          text-decoration: none;
          background: transparent;
          transition: all 0.2s ease;
          position: relative;
          opacity: 0; 
          animation: fadeSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .mega-item:hover { background: #fafafa; }

        .mega-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f4fbf4; 
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2BA735;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .mega-item:hover .mega-icon {
          background: #2BA735;
          color: #fff;
          transform: scale(1.04); 
        }

        .mega-text { position: relative; flex: 1; }
        .mega-arrow {
          margin-top: 4px;
          opacity: 0;
          transform: translateX(-4px);
          color: #2BA735;
          transition: all 0.2s ease;
        }
        .mega-item:hover .mega-arrow {
          opacity: 1;
          transform: translateX(2px);
        }

        .sidebar-btn {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          border-radius: 14px;
          margin-bottom: 6px;
          overflow: hidden;
        }
        .sidebar-btn::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) scaleY(0);
          height: 40%;
          width: 3px;
          background: #2BA735;
          border-radius: 0 4px 4px 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
        }
        .sidebar-btn:hover { background: rgba(255, 255, 255, 0.5); }
        .sidebar-btn.active {
          background: #fff;
          border-color: rgba(0, 78, 9, 0.05);
          box-shadow: 0 10px 24px rgba(0, 78, 9, 0.04);
          transform: translateX(4px);
        }
        .sidebar-btn.active::before {
          transform: translateY(-50%) scaleY(1);
          opacity: 1;
        }
        .sidebar-btn-title {
          font-size: 15px;
          font-weight: 500;
          color: rgba(10, 77, 38, 0.55);
          font-family: "Manrope", sans-serif;
          transition: color 0.3s ease;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .sidebar-btn.active .sidebar-btn-title { font-weight: 700; color: #0A4D26; }
        .sidebar-btn-desc {
          font-size: 12.5px;
          color: rgba(10, 77, 38, 0.4);
          font-weight: 400;
          font-family: "Manrope", sans-serif;
          transition: color 0.3s ease;
        }
        .sidebar-btn.active .sidebar-btn-desc { color: #2BA735; }
        .sidebar-active-arrow {
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          color: #2BA735;
        }
        .sidebar-btn.active .sidebar-active-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .lang-toggle {
          color: #0A4D26;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: "Manrope", sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 0;
          white-space: nowrap; 
          flex-shrink: 0; 
        }
        .lang-toggle:hover { color: #2BA735; }

        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: block !important; }
        }

        /* Mega menu sits right below the navbar; offset matches its floating desktop height */
        .mega-backdrop,
        .mega-panel {
          top: 64px;
        }
        @media (min-width: 1024px) {
          .mega-backdrop,
          .mega-panel {
            top: 92px;
          }
        }
      `}</style>

      {/* ── NAVBAR BAR ── */}
      <nav className="nav-outer">
        <div className={`nav-shell ${scrolled || activeMenu ? "nav-snapped" : "nav-top-glass"}`}>
          <div className="nav-inner">
            {/* LOGO */}
            <div style={{ flexShrink: 0, display: "flex" }}>
              <Link to="/" style={{ textDecoration: "none" }} onClick={() => setActiveMenu(null)}>
                <Logo />
              </Link>
            </div>

            {/* DESKTOP CENTER LINKS */}
            <div className="desktop-nav" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(20px, 2.5vw, 36px)", flex: 1 }}>
              {navLinks.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setActiveMenu(null)}
                  onMouseEnter={closeMenu} 
                  className="nav-link"
                  style={{ fontFamily: '"Manrope", sans-serif', fontSize: 14, textDecoration: "none" }}
                >
                  {label}
                </Link>
              ))}

              {/* Dropdown toggles */}
              {[
                { key: "solutions", label: "Solutions" },
                { key: "support", label: "Support" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => toggleMenu(key)}
                  onMouseEnter={() => openMenu(key)} 
                  className="nav-link"
                  style={{
                    fontFamily: '"Manrope", sans-serif',
                    fontSize: 14,
                    background: "none",
                    border: "none",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    cursor: "pointer",
                    color: activeMenu === key ? "#2BA735" : "",
                    opacity: activeMenu === key ? 1 : undefined,
                  }}
                >
                  {label}
                  <Chevron open={activeMenu === key} />
                </button>
              ))}

              <Link
                to="/about"
                onClick={() => setActiveMenu(null)}
                onMouseEnter={closeMenu}
                className="nav-link"
                style={{ fontFamily: '"Manrope", sans-serif', fontSize: 14, textDecoration: "none" }}
              >
                About
              </Link>
            </div>

            {/* DESKTOP RIGHT CTAs */}
            <div className="desktop-nav" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "clamp(12px, 1.5vw, 20px)", flexShrink: 0 }}>
            <LanguageSwitcher />

              <Link to="/login" className="btn-login" onClick={() => setActiveMenu(null)}>
                Login
              </Link>

              <Link to="/download" className="btn-download" onClick={() => setActiveMenu(null)}>
                Download App
              </Link>
            </div>

            {/* MOBILE HAMBURGER */}
            <div className="mobile-only" style={{ display: "none" }}>
              <button
                onClick={() => setMobileOpen(true)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#0A4D26", padding: 8 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MEGA MENU PANELS ── */}
      <MegaMenuPanel
  type="solutions"
  categories={solutionsCategories}
  isOpen={activeMenu === "solutions"}
  onClose={closeMenu}                         // ← was () => setActiveMenu(null)
  onMouseEnter={() => openMenu("solutions")}  // ← was () => setActiveMenu("solutions")
/>
<MegaMenuPanel
  type="support"
  categories={supportCategories}
  isOpen={activeMenu === "support"}
  onClose={closeMenu}                         // ← was () => setActiveMenu(null)
  onMouseEnter={() => openMenu("support")}    // ← was () => setActiveMenu("support")
/>

      {/* ── MOBILE MENU ── */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}