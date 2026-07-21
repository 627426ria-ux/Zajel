import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

// ==========================================
// SVG COMPONENTS & GRAPHICS (UNTOUCHED)
// ==========================================
const EnglishZajel = ({ className }: { className?: string }) => (
  <svg width="60" height="28" viewBox="0 0 88 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0.046875 26.3873L2.12145 22.7774L13.2438 3.82281H2.64238C2.64238 3.82281 4.08637 0.46875 6.59963 0.46875H20.7104L18.8735 3.58519L7.65977 23.0424H14.9802C17.201 23.0424 18.1423 26.3873 18.1423 26.3873H0.046875Z" fill="currentColor"/>
    <path d="M48.6054 3.63089C48.6054 1.13591 52.59 0.46875 52.59 0.46875V19.0943C52.59 20.7393 52.4438 22.0005 52.1605 22.8779C51.7767 24.0386 51.0729 24.9616 50.0494 25.6653C49.0349 26.369 47.6915 26.7163 46.019 26.7163C44.0632 26.7163 42.5553 26.168 41.5043 25.0713C40.4533 23.9746 39.9141 22.3661 39.9141 20.2458L43.6885 19.8071C43.7342 20.9404 43.8987 21.7446 44.1912 22.2107C44.6207 22.9327 45.2787 23.28 46.1652 23.28C47.0609 23.28 47.6915 23.0241 48.057 22.5215C48.4226 22.0097 48.6145 20.9495 48.6145 19.3411V3.63089H48.6054Z" fill="currentColor"/>
    <path d="M55.5391 26.3873V0.46875H70.2348C70.2348 0.46875 69.1564 3.82281 67.0726 3.82281H59.542V11.4357H65.5281V14.7806H59.542V23.0333H66.6522C69.3757 23.0333 70.6095 26.3782 70.6095 26.3782H55.5391V26.3873Z" fill="currentColor"/>
    <path d="M72.8281 26.3965V3.64003C72.8281 1.12677 76.8311 0.46875 76.8311 0.46875V23.0515H83.6123C85.5955 23.0515 86.7836 26.3965 86.7836 26.3965H72.8281Z" fill="currentColor"/>
    <path d="M27.0273 18.5368L29.705 5.46785L32.4376 18.5368H27.0273ZM31.743 0.46875H27.9594L19.7891 26.3873H25.4005L26.3418 21.8726H33.1139L34.0461 26.3873H39.6667L31.743 0.46875Z" fill="currentColor"/>
  </svg>
);

const ArabicZajel = ({ className }: { className?: string }) => (
  <svg width="60" height="27" viewBox="0 0 87 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M68.5617 3.19869V25.9277H72.5647V0.0274171C72.5555 0.0274171 68.5617 0.685435 68.5617 3.19869ZM82.8096 6.69898V9.44072C83.2026 8.37144 86.8034 7.70429 86.8034 7.70429V4.96255C86.7943 4.96255 82.8096 5.43778 82.8096 6.69898ZM82.7914 11.9448V19.6034C82.7914 23.3322 80.47 22.8844 79.0535 22.8844C77.646 22.8844 76.1838 26.54 76.1838 26.54C76.1838 26.54 86.7943 28.0023 86.7943 21.6232V9.38589C86.7943 9.38589 82.7914 10.0256 82.7914 11.9448ZM55.3009 22.0162V24.4837H58.9474V20.9377C58.9474 20.9377 55.3009 20.8555 55.3009 22.0162ZM47.6971 11.0492C49.79 11.0492 58.7646 11.0492 58.7646 11.0492V15.637H18.132V0C18.132 0 14.1474 0.667156 14.1474 3.16214V18.9454V20.5448C14.1474 21.6597 13.2426 22.5645 12.1276 22.5645H5.50176C5.12705 22.5645 4.77977 22.464 4.47818 22.2812C4.46904 22.2812 4.4599 22.2721 4.4599 22.2721C4.44162 22.2629 4.42334 22.2446 4.4142 22.2355C4.37764 22.2081 4.35023 22.1898 4.32282 22.1715C4.28626 22.1441 4.2497 22.1258 4.22229 22.0984C4.19487 22.0801 4.18572 22.0619 4.15831 22.0436C4.09433 21.9887 4.0395 21.9339 3.98466 21.8699C3.96638 21.8558 3.94811 21.8334 3.92983 21.806C3.90241 21.7694 3.875 21.7328 3.84758 21.6963C3.8293 21.6689 3.81102 21.6415 3.79275 21.6232C3.77447 21.5866 3.74704 21.5501 3.72877 21.5135C3.71049 21.477 3.69222 21.4404 3.6648 21.3947C3.64652 21.349 3.6191 21.2942 3.60082 21.2485C3.58254 21.2028 3.56426 21.1571 3.55512 21.1114C3.54598 21.084 3.53685 21.0566 3.53685 21.02C3.52771 20.9652 3.51857 20.9195 3.50944 20.8646C3.5003 20.8372 3.50029 20.8098 3.50029 20.7824C3.49115 20.7001 3.48202 20.6179 3.48202 20.5356V15.5914C3.48202 13.992 0 13.8823 0 13.8823V15.0339V21.9979C0 24.1364 1.73644 25.9186 3.875 25.9186H5.17275C5.20017 25.9186 5.21845 25.9277 5.24586 25.9277H12.5846C12.6486 25.9277 12.6943 25.9277 12.7582 25.9186H14.2388C16.3773 25.9186 18.1138 24.1364 18.1138 21.9979V19.5029C18.1138 19.4206 18.1229 19.3567 18.1229 19.2653H62.7584V7.69515H44.5258C44.535 7.69515 45.6134 11.0492 47.6971 11.0492Z" fill="currentColor"/>
  </svg>
);

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


// ==========================================
// MAIN FOOTER COMPONENT
// ==========================================
const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <footer
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full text-white font-sans relative overflow-hidden"
      style={{
        fontFamily: '"Manrope", sans-serif',
        background: 'linear-gradient(135deg, #6CC24A 0%, #2FA84F 45%, #0E7A3D 75%, #045A2C 100%)'
      }}
    >
      <div className="max-w-[1440px] w-full mx-auto relative z-10 px-6 sm:px-10 lg:px-12 xl:px-16 pt-12 pb-10 lg:pt-16 lg:pb-12">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-8">

          {/* Brand Info */}
          <div className="flex flex-col w-full lg:w-[28%] shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <EnglishZajel className="h-6 w-auto" />
              <ArabicZajel className="h-6 w-auto" />
            </div>

            <p className="text-xs font-light text-white/80 leading-relaxed mb-5 max-w-[260px]">
              {t('footer.description')}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle><path d="M8 9h4v2a4 4 0 0 1 4-2c3 0 4 2 4 5v7h-4v-6c0-1.5-.5-3-2-3s-2 1.5-2 3v6H8z"></path></svg>
              </a>
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.73 16h5L9 4z" /><path d="M4 20l6.76-6.76" /><path d="M20 4l-6.76 6.76" /></svg>
              </a>
              <a href="#" className="text-white hover:text-white/70 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>

            <p className="text-[11px] font-light text-white/60">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 md:gap-x-8 lg:gap-x-10 w-full lg:w-auto">

            <div className="flex flex-col gap-2.5">
              <h4 className="text-sm font-medium mb-1 tracking-tight">{t('footer.quickLinks.title')}</h4>
              <Link to="/" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.home')}</Link>
              <Link to="/ship" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.ship')}</Link>
              <Link to="/track" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.track')}</Link>
              <Link to="/rates" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.rates')}</Link>
              <Link to="/business" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.business')}</Link>
              <Link to="/solutions" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.solutions')}</Link>
              <Link to="/support" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.support')}</Link>
              <Link to="/about" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.about')}</Link>
              <Link to="/careers" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.careers')}</Link>
              <Link to="/blog" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.quickLinks.blog')}</Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-sm font-medium mb-1 tracking-tight">{t('footer.services.title')}</h4>
              <Link to="/services/same-day" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.services.sameDay')}</Link>
              <Link to="/services/next-day" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.services.nextDay')}</Link>
              <Link to="/international-courier" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.services.international')}</Link>
              <Link to="/freight-courier" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.services.freight')}</Link>
              <Link to="/ecommerce" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.services.ecommerce')}</Link>
              <Link to="/services/white-glove" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.services.whiteGlove')}</Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-sm font-medium mb-1 tracking-tight">{t('footer.locations.title')}</h4>
              <Link to="/locations/dubai" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.locations.dubai')}</Link>
              <Link to="/locations/abu-dhabi" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.locations.abuDhabi')}</Link>
              <Link to="/locations/sharjah" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.locations.sharjah')}</Link>
              <Link to="/locations/ajman" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.locations.ajman')}</Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-sm font-medium mb-1 tracking-tight">{t('footer.helpLegal.title')}</h4>
              <Link to="/support" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.helpLegal.helpCenter')}</Link>
              <Link to="/claims" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.helpLegal.claims')}</Link>
              <Link to="/alerts" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.helpLegal.alerts')}</Link>
              <Link to="/pdpl" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.helpLegal.pdpl')}</Link>
              <Link to="/terms" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.helpLegal.terms')}</Link>
              <Link to="/policy" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.helpLegal.policy')}</Link>
              <Link to="/ally" className="text-xs font-light text-white/80 hover:text-white transition-colors">{t('footer.helpLegal.ally')}</Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;