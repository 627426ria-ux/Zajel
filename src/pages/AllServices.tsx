import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export default function AllServicesPage() {
  const [activeService, setActiveService] = useState(SERVICES_DATA[0].id);

  const handleScrollTo = (id: string) => {
    setActiveService(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .asp-root {
          font-family: 'Manrope', sans-serif;
          background: #F8FAF8;
          min-height: 100vh;
          padding-bottom: clamp(48px, 8vw, 96px);
        }

        /* ── Header ── */
        .asp-header-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(88px, 14vw, 128px) clamp(16px, 5vw, 48px) clamp(32px, 5vw, 48px);
        }

        .asp-header-inner {
          display: flex;
          flex-direction: column;
          gap: clamp(12px, 3vw, 24px);
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: clamp(24px, 4vw, 40px);
        }

        @media (min-width: 1024px) {
          .asp-header-inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .asp-header-title {
          color: #0A4D26;
          font-size: clamp(1.6rem, 5vw, 3rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.02em;
          max-width: 640px;
          margin: 0;
        }

        .asp-header-desc {
          color: rgba(10,77,38,0.65);
          font-size: clamp(13px, 1.8vw, 15px);
          line-height: 1.7;
          max-width: 480px;
          font-weight: 300;
          margin: 0;
        }

        /* ── Main grid ── */
        .asp-body {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 clamp(16px, 5vw, 48px);
        }

        /* Mobile: no sidebar, just cards */
        .asp-grid {
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 3vw, 24px);
        }

        /* Mobile contact form — shown below cards on mobile only */
        .asp-mobile-contact {
          display: block;
          margin-top: clamp(24px, 5vw, 40px);
        }
        @media (min-width: 1024px) {
          .asp-mobile-contact { display: none; }
        }

        /* Desktop: show sidebar + 9-col content */
        @media (min-width: 1024px) {
          .asp-pill-nav { display: none; }
          .asp-grid {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: clamp(24px, 3vw, 48px);
            align-items: start;
          }
        }

        /* ── Sidebar ── */
        .asp-sidebar {
          display: none;
        }
        @media (min-width: 1024px) {
          .asp-sidebar {
            display: flex;
            flex-direction: column;
            gap: 20px;
            position: sticky;
            top: 112px;
          }
        }

        .asp-sidebar-nav-card,
        .asp-sidebar-contact-card {
          background: white;
          border-radius: 1rem;
          padding: clamp(16px, 2vw, 24px);
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          border: 1px solid #f3f4f6;
        }

        .asp-sidebar-label {
          color: #0A4D26;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
          padding: 0 12px;
        }

        .asp-nav-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          text-align: left;
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 13px;
          cursor: pointer;
          border: none;
          background: transparent;
          transition: all 0.2s ease;
          font-family: 'Manrope', sans-serif;
        }
        .asp-nav-active {
          background: rgba(54,185,54,0.10);
          color: #0A4D26;
          font-weight: 500;
        }
        .asp-nav-active .asp-nav-icon { color: #36B936; }
        .asp-nav-inactive { color: #9ca3af; font-weight: 300; }
        .asp-nav-inactive .asp-nav-icon { color: #d1d5db; }
        .asp-nav-inactive:hover { background: #f9fafb; color: #0A4D26; }

        .asp-contact-heading {
          color: #0A4D26;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .asp-field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 14px; }
        .asp-label { font-size: 11px; color: #9ca3af; font-weight: 500; }
        .asp-input {
          width: 100%;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 9px 12px;
          font-size: 13px;
          font-family: 'Manrope', sans-serif;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          box-sizing: border-box;
        }
        .asp-input:focus { border-color: #36B936; background: white; }
        .asp-input::placeholder { color: #d1d5db; }

        .asp-submit {
          width: 100%;
          background: #36B936;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 11px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          font-family: 'Manrope', sans-serif;
          transition: background 0.25s ease;
          margin-top: 4px;
        }
        .asp-submit:hover { background: #0A4D26; }

        /* ── Service Cards ── */
        .asp-cards-col {
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 2.5vw, 20px);
        }

        .asp-card {
          background: white;
          border-radius: clamp(1rem, 2.5vw, 1.5rem);
          border: 1px solid #f3f4f6;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s ease;
        }
        .asp-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.09); }

        @media (min-width: 560px) {
          .asp-card { flex-direction: row; }
        }

        /* Image */
        .asp-card-img-link {
          display: block;
          position: relative;
          overflow: hidden;
          /* Full width strip on mobile */
          width: 100%;
          height: 180px;
          flex-shrink: 0;
          background: #e5e7eb;
        }

        @media (min-width: 560px) {
          .asp-card-img-link {
            width: clamp(160px, 24vw, 280px);
            height: auto;
          }
        }

        .asp-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .asp-card-img-link:hover .asp-card-img { transform: scale(1.05); }

        /* Body */
        .asp-card-body {
          padding: clamp(16px, 3vw, 28px) clamp(16px, 3vw, 28px) clamp(18px, 3.5vw, 32px);
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .asp-card-title-link { text-decoration: none; width: max-content; max-width: 100%; }
        .asp-card-title-link:hover { opacity: 0.75; }

        .asp-card-title {
          color: #0A4D26;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          font-weight: 500;
          margin: 0 0 4px;
          line-height: 1.25;
        }

        .asp-card-subtitle {
          color: #36B936;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .asp-card-desc {
          color: #9ca3af;
          font-weight: 300;
          font-size: clamp(12px, 1.8vw, 14px);
          line-height: 1.7;
          margin-bottom: clamp(14px, 2.5vw, 24px);
        }

        .asp-card-footer {
          margin-top: auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: clamp(10px, 1.8vw, 16px);
          border-top: 1px solid #f3f4f6;
        }

        .asp-card-bestfor {
          font-size: clamp(11px, 1.5vw, 13px);
        }
        .asp-card-bestfor-label { font-weight: 600; color: #0A4D26; }
        .asp-card-bestfor-val { color: #9ca3af; font-weight: 300; }

        .asp-learn-more {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #36B936;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .asp-learn-more:hover { color: #0A4D26; }
        .asp-learn-more:hover .asp-learn-arrow {
          transform: translate(2px, -2px);
        }
        .asp-learn-arrow { transition: transform 0.2s ease; }
      `}</style>

      <div className="asp-root">

        {/* Header */}
        <div className="asp-header-wrap">
          <div className="asp-header-inner">
            <h1 className="asp-header-title">
              Comprehensive Courier &amp; Logistics Services in the UAE
            </h1>
            <p className="asp-header-desc">
              ZAJEL offers a complete range of courier, freight, and logistics services designed to support individuals, SMEs, and large enterprises. From domestic deliveries and e-commerce fulfillment to international freight and customs clearance.
            </p>
          </div>
        </div>

        <div className="asp-body">

          <div className="asp-grid">

            {/* Sidebar — desktop only */}
            <aside className="asp-sidebar">
              {/* Nav list */}
              <div className="asp-sidebar-nav-card">
                <p className="asp-sidebar-label">Service Lists</p>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleScrollTo(s.id)}
                      className={`asp-nav-btn ${activeService === s.id ? 'asp-nav-active' : 'asp-nav-inactive'}`}
                    >
                      <span className="asp-nav-icon">{s.icon}</span>
                      {s.title}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contact widget */}
              <div className="asp-sidebar-contact-card">
                <p className="asp-contact-heading">Have any Question?</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="asp-field">
                    <label className="asp-label">Full Name</label>
                    <input type="text" className="asp-input" />
                  </div>
                  <div className="asp-field">
                    <label className="asp-label">Email address</label>
                    <input type="email" placeholder="Enter your email address" className="asp-input" />
                  </div>
                  <button type="submit" className="asp-submit">Submit</button>
                </form>
              </div>
            </aside>

            {/* Cards */}
            <div className="asp-cards-col">
              {SERVICES_DATA.map((service) => (
                <div key={service.id} id={service.id} className="asp-card">

                  {/* Image */}
                  <Link to={`/services/${service.id}`} className="asp-card-img-link">
                    <img src={service.image} alt={service.title} className="asp-card-img" />
                  </Link>

                  {/* Content */}
                  <div className="asp-card-body">
                    <Link to={`/services/${service.id}`} className="asp-card-title-link">
                      <h2 className="asp-card-title">{service.title}</h2>
                    </Link>
                    <h4 className="asp-card-subtitle">{service.subtitle}</h4>
                    <p className="asp-card-desc">{service.description}</p>

                    <div className="asp-card-footer">
                      <p className="asp-card-bestfor">
                        <span className="asp-card-bestfor-label">Best for: </span>
                        <span className="asp-card-bestfor-val">{service.bestFor}</span>
                      </p>
                      <Link to={`/services/${service.id}`} className="asp-learn-more">
                        <span>Learn More</span>
                        <ArrowUpRight size={14} className="asp-learn-arrow" />
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Contact form — mobile only, shown below cards */}
          <div className="asp-mobile-contact">
            <div className="asp-sidebar-contact-card">
              <p className="asp-contact-heading">Have any Question?</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="asp-field">
                  <label className="asp-label">Full Name</label>
                  <input type="text" className="asp-input" />
                </div>
                <div className="asp-field">
                  <label className="asp-label">Email address</label>
                  <input type="email" placeholder="Enter your email address" className="asp-input" />
                </div>
                <button type="submit" className="asp-submit">Submit</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}