import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase'; // Adjust path
import type { FreightHeroContent } from '../admin/sections/services-freight/types';

interface PageSectionRow {
  id: string;
  enabled: boolean;
  content_en: FreightHeroContent | string;
  content_ar: FreightHeroContent | string;
}

const FreightHero: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [data, setData] = useState<FreightHeroContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchHero = async () => {
      const { data: section, error } = await supabase
        .from('page_sections')
        .select('id, enabled, content_en, content_ar')
        .eq('id', 'freight_hero')
        .single<PageSectionRow>();

      if (!isMounted) return;

      if (!error && section?.enabled) {
        const raw = i18n.language === 'ar' ? section.content_ar : section.content_en;
        const content: FreightHeroContent | null =
          typeof raw === 'string' ? JSON.parse(raw) : (raw ?? null);
        setData(content);
      } else {
        setData(null);
      }

      setLoading(false);
    };

    fetchHero();
    return () => { isMounted = false; };
  }, [i18n.language]);

  if (loading || !data) return null;

  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full"
      style={{
        fontFamily: '"Manrope", sans-serif',
        paddingInline: 'clamp(1rem, 2.5vw, 3rem)',
        paddingTop: 'clamp(5rem, 4.5vw + 3rem, 8rem)',
        paddingBottom: 'clamp(1.5rem, 3vw, 3rem)',
      }}
    >
      <div
        className="w-full mx-auto relative overflow-hidden flex items-end"
        style={{
          maxWidth: 'clamp(600px, 96vw, 1400px)',
          height: 'clamp(480px, 72svh, 820px)',
          borderRadius: 'clamp(1.25rem, 0.6rem + 2vw, 2.75rem)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08), 0 16px 48px rgba(0,0,0,0.22), 0 40px 80px rgba(0,0,0,0.14)',
        }}
      >
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-no-repeat z-0 block md:hidden ${isRtl ? 'bg-right' : 'bg-center'}`}
          style={{ backgroundImage: `url('${data.mobile_image_url}')` }}
        />
        <div
          className={`absolute inset-0 w-full h-full bg-cover bg-no-repeat z-0 hidden md:block ${isRtl ? 'bg-right' : 'bg-center'}`}
          style={{ backgroundImage: `url('${data.desktop_image_url}')` }}
        />
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.40) 40%, transparent 100%)' }}
        />

        <div
          className="relative z-20 flex flex-col items-start"
          style={{
            width: 'clamp(280px, 20rem + 18vw, 640px)',
            maxWidth: '90%',
            padding: 'clamp(1.5rem, 1rem + 3vw, 5rem)',
            paddingTop: 'clamp(3rem, 2rem + 5vw, 8rem)',
          }}
        >
          <h1
            className="text-white font-light whitespace-pre-line"
            style={{
              fontSize: 'clamp(2rem, 0.8rem + 5.8vw, 5.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              marginBottom: 'clamp(0.75rem, 1.5vw, 1.25rem)',
            }}
          >
            {data.title}
          </h1>

          <p
            className="text-white/70 font-light whitespace-pre-line"
            style={{
              fontSize: 'clamp(0.8125rem, 0.74rem + 0.38vw, 1rem)',
              lineHeight: 1.68,
              marginBottom: 'clamp(1.5rem, 1rem + 2.5vw, 3.25rem)',
              maxWidth: '46ch',
            }}
          >
            {data.description}
          </p>

          <Link
            to={data.buttonUrl || '/'}
            className="bg-[#05361A] hover:bg-[#03200F] transition-colors duration-300 text-[#36B936] rounded-full flex items-center shadow-sm hover:shadow-md"
            style={{
              gap: 'clamp(5px, 0.8vw, 8px)',
              paddingInline: 'clamp(1.1rem, 2vw, 1.75rem)',
              paddingBlock: 'clamp(0.6rem, 0.9vw, 0.875rem)',
              fontSize: 'clamp(0.75rem, 0.68rem + 0.36vw, 0.9375rem)',
            }}
          >
            <span className="font-extralight text-base leading-none">+</span>
            <span className="font-medium tracking-wide">{data.buttonLabel}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FreightHero;