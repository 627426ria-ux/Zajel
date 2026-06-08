import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-white px-5"
        style={{ fontFamily: '"Manrope", sans-serif' }}
      >
        <div className="text-center">
          <h1 className="text-[#0A4D26] text-[1.6rem] font-light mb-4">Service Not Found</h1>
          <Link to="/all-services" className="text-[#36B936] hover:underline font-medium text-[15px]">
            Return to All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .sdp-root {
          font-family: 'Manrope', sans-serif;
          background: white;
          min-height: 100vh;
          /* Reduced top padding on mobile so content isn't buried */
          padding-top: clamp(88px, 14vw, 128px);
          padding-bottom: clamp(56px, 8vw, 96px);
        }

        .sdp-inner {
          max-width: 800px;
          margin: 0 auto;
          /* Tighter horizontal padding on small screens */
          padding-left: clamp(16px, 5vw, 32px);
          padding-right: clamp(16px, 5vw, 32px);
        }

        /* ── Back link ── */
        .sdp-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: rgba(10, 77, 38, 0.5);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          margin-bottom: clamp(28px, 6vw, 48px);
          transition: color 0.2s ease;
        }
        .sdp-back:hover { color: #36B936; }

        /* ── Header ── */
        .sdp-header {
          display: flex;
          align-items: flex-start;
          gap: clamp(12px, 3vw, 18px);
          margin-bottom: clamp(14px, 3vw, 24px);
        }

        .sdp-icon {
          /* Fixed small size on mobile so it doesn't crowd the title */
          width: clamp(40px, 10vw, 56px);
          height: clamp(40px, 10vw, 56px);
          border-radius: 50%;
          background: rgba(54, 185, 54, 0.10);
          color: #36B936;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          /* Align to first line of title */
          margin-top: 4px;
        }

        .sdp-title {
          font-size: clamp(1.75rem, 6vw, 3.5rem);
          font-weight: 300;
          color: #0A4D26;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin: 0;
        }

        .sdp-subtitle {
          color: #36B936;
          font-size: clamp(13px, 2.5vw, 18px);
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-bottom: clamp(28px, 6vw, 48px);
          /* Indent to align with title (icon width + gap) */
          padding-left: calc(clamp(40px, 10vw, 56px) + clamp(12px, 3vw, 18px));
        }

        /* ── Overview ── */
        .sdp-overview {
          margin-bottom: clamp(28px, 6vw, 48px);
        }
        .sdp-overview p {
          color: #6b7280;
          font-weight: 300;
          line-height: 1.75;
          font-size: clamp(14px, 2vw, 16px);
          margin: 0;
        }

        /* ── Key Advantages ── */
        .sdp-features {
          margin-bottom: clamp(36px, 8vw, 64px);
        }
        .sdp-features-heading {
          color: #0A4D26;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 500;
          margin-bottom: clamp(16px, 3vw, 24px);
          padding-bottom: clamp(12px, 2vw, 16px);
          border-bottom: 1px solid #f3f4f6;
        }
        .sdp-features-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 2.5vw, 18px);
        }
        .sdp-feature-item {
          display: flex;
          align-items: flex-start;
          gap: clamp(10px, 2vw, 14px);
        }
        .sdp-feature-icon {
          color: #36B936;
          flex-shrink: 0;
          /* Nudge down to align with text baseline */
          margin-top: 2px;
          /* Slightly smaller icon on mobile */
          width: clamp(16px, 3.5vw, 20px);
          height: clamp(16px, 3.5vw, 20px);
        }
        .sdp-feature-text {
          color: #6b7280;
          font-weight: 300;
          line-height: 1.65;
          font-size: clamp(13px, 2vw, 15px);
        }

        /* ── CTA Box ── */
        .sdp-cta {
          background: #F8FAF8;
          border-radius: clamp(1.25rem, 4vw, 2rem);
          /* Stack vertically on mobile, row on sm+ */
          padding: clamp(20px, 5vw, 40px);
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 3vw, 24px);
          border: 1px solid #f3f4f6;
        }

        @media (min-width: 540px) {
          .sdp-cta {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .sdp-cta-btn {
            width: auto !important;
            white-space: nowrap;
          }
        }

        .sdp-cta-heading {
          color: #0A4D26;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 500;
          margin: 0 0 6px;
        }
        .sdp-cta-sub {
          color: rgba(10, 77, 38, 0.65);
          font-size: clamp(12px, 1.8vw, 14px);
          font-weight: 300;
          margin: 0;
        }
        .sdp-cta-btn {
          width: 100%;
          background: #0A4D26;
          color: #36B936;
          border: none;
          border-radius: 9999px;
          padding: clamp(11px, 2vw, 14px) clamp(22px, 4vw, 32px);
          font-size: clamp(13px, 1.8vw, 14px);
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(10,77,38,0.18);
          transition: background 0.25s ease, transform 0.15s ease;
          font-family: 'Manrope', sans-serif;
        }
        .sdp-cta-btn:hover { background: #000; }
        .sdp-cta-btn:active { transform: scale(0.97); }
      `}</style>

      <div className="sdp-root">
        <div className="sdp-inner">

          {/* Back */}
          <Link to="/all-services" className="sdp-back">
            <ArrowLeft size={15} />
            Back to All Services
          </Link>

          {/* Header: icon + title on same row */}
          <div className="sdp-header">
            <div className="sdp-icon">{service.icon}</div>
            <h1 className="sdp-title">{service.title}</h1>
          </div>

          {/* Subtitle — indented to align with title */}
          <h3 className="sdp-subtitle">{service.subtitle}</h3>

          {/* Overview */}
          <div className="sdp-overview">
            <p>{service.overview}</p>
          </div>

          {/* Key Advantages */}
          <div className="sdp-features">
            <h4 className="sdp-features-heading">Key Advantages</h4>
            <ul className="sdp-features-list">
              {service.features.map((feature, idx) => (
                <li key={idx} className="sdp-feature-item">
                  <CheckCircle2 className="sdp-feature-icon" />
                  <span className="sdp-feature-text">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="sdp-cta">
            <div>
              <h4 className="sdp-cta-heading">Ready to ship with us?</h4>
              <p className="sdp-cta-sub">Get a tailored quote for your specific needs.</p>
            </div>
            <button className="sdp-cta-btn">Get a Quote</button>
          </div>

        </div>
      </div>
    </>
  );
}