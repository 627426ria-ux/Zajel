import React from 'react';

const BlogDetail: React.FC = () => {
  return (
    <article className="w-full min-h-screen bg-[#FDFDFD] pt-24 pb-16 px-6 lg:px-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        
        {/* 1. Article Header */}
        <header className="mb-12">
          <h1 className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight max-w-[1000px] mb-8">
            Zajel launches 'Zajel International' to revolutionise GCC eCommerce delivery
          </h1>
          
          {/* Author Block */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#EAF1E7]">
              <img src="/author-omar.jpg" alt="Omar Farook" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div>
              <h4 className="text-[#064423] text-[14px] font-medium">Omar Farook</h4>
              <p className="text-[#064423]/50 text-[12px] font-light">UI/UX Designer</p>
            </div>
          </div>
        </header>

        {/* 2. Hero Image */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden mb-16 bg-[#F9FBF9] border border-[#064423]/5">
          <img 
            src="/zajel-delivery-hero.jpg" 
            alt="Zajel Delivery Bike" 
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        {/* 3. Main Content Area (Sidebar + Article) */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Sidebar: Table of Contents (Sticky) */}
          <aside className="w-full lg:w-[300px] shrink-0 lg:sticky lg:top-10">
            <h3 className="text-[#064423] text-[18px] font-medium mb-1 leading-snug">Design Thinking:<br/>Creating Product Users Love</h3>
            <p className="text-[#064423]/40 text-[11px] font-light mb-8">Jun 11, 2026</p>
            
            <nav className="space-y-4 mb-10 border-l border-[#064423]/10 pl-4">
              <TocLink active label="The Power of Design Thinking in Crafting Innovative Products That Users Adore" />
              <TocLink label="What is Design Thinking?" />
              <TocLink label="Different Phases of Design Thinking" />
              <TocLink label="Building a Solid Customer Relationship" />
              <TocLink label="Why Should Startups Include Design Thinking In Early-Stage Product Development?" />
              <TocLink label="Final Thoughts" />
              <TocLink label="Boost Your Startup Growth with Marketube Expert Solutions" />
            </nav>

            {/* Social Share */}
            <div className="flex items-center gap-4 text-[#064423]/40">
              <SocialIcon><LinkedInSVG /></SocialIcon>
              <SocialIcon><FacebookSVG /></SocialIcon>
              <SocialIcon><TwitterSVG /></SocialIcon>
              <SocialIcon><ShareSVG /></SocialIcon>
            </div>
          </aside>

          {/* Right Area: Article Content */}
          <div className="flex-1 max-w-[800px] text-[#064423]/80 text-[15px] font-light leading-[1.8] space-y-8">
            
            <h2 className="text-[#064423] text-[22px] font-medium leading-snug mb-4">
              Zajel launches 'Zajel International' to revolutionise GCC eCommerce delivery
            </h2>
            <p>
              DAX, a leading logistics provider under TX, announced today the launch of "DAX International", its new international solution for eCommerce parcel delivery across the Gulf Cooperation Council (GCC) region. This service is aimed at streamlining the delivery procedures for companies that are seeking to broaden their reach to customers in Saudi Arabia as well as Oman, Kuwait, Bahrain, Qatar, and Jordan.
            </p>

            {/* Highlight/Quote Block */}
            <blockquote className="my-10 p-8 rounded-2xl bg-[#EAF1E7]/50 border-l-4 border-[#36B936]">
              <p className="text-[#064423] font-medium text-[16px] italic leading-relaxed">
                Tariq Al Wahedi, General Manager of DAX, commented: "We are delighted to launch the DAX International the latest product to be rolled out following the launch of DAX. This represents a significant step forward in our mission to further cement our position as a leading provider of CEP services. DAX is committed to customers convenience and reshaping the logistics landscape with an eye on future advancements and expansion. Our overarching goal at DAX is to expand our service offerings, penetrate new markets, and meet diverse needs. With DAX, the future of logistics is within reach, and it is more connected than ever."
              </p>
            </blockquote>

            <h3 className="text-[#064423] text-[18px] font-medium mt-10 mb-4">Different Phases of Design Thinking</h3>
            <p>
              The Dubai CommerCity report on the MEASA eCommerce landscape states that the eCommerce in GCC grew by an impressive 33 per cent annually from 2019 to 2022. This growth was almost double the global rate of 17 per cent. By 2023, the GCC's total eCommerce revenue is expected to reach USD 50 billion, increasing at a compound annual growth rate (CAGR) of 10.95 per cent between 2023 and 2027. This increase is supported by an expanding number of online shoppers, reaching almost 60 per cent.
            </p>
            <p>
              The Dubai CommerCity report on the MEASA eCommerce landscape states that the eCommerce in GCC grew by an impressive 33 per cent annually from 2019 to 2022. This growth was almost double the global rate of 17 per cent. By 2023, the GCC's total eCommerce revenue is expected to reach USD 50 billion, increasing at a compound annual growth rate (CAGR) of 10.95 per cent between 2023 and 2027. This increase is supported by an expanding number of online shoppers, reaching almost 60 per cent.
            </p>

            {/* Inline Article Image 1 */}
            <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden my-12 bg-[#F9FBF9] border border-[#064423]/5">
              <img src="/zajel-event.jpg" alt="Zajel International Event" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>

            <h2 className="text-[#064423] text-[22px] font-medium leading-snug mt-12 mb-4">
              Zajel launches 'Zajel International' to revolutionise GCC eCommerce delivery
            </h2>
            <p>
              DAX, a leading logistics provider under TX, announced today the launch of "DAX International", its new international solution for eCommerce parcel delivery across the Gulf Cooperation Council (GCC) region. This service is aimed at streamlining the delivery procedures for companies that are seeking to broaden their reach to customers in Saudi Arabia as well as Oman, Kuwait, Bahrain, Qatar, and Jordan.
            </p>

            <h3 className="text-[#064423] text-[18px] font-medium mt-10 mb-4">What is Design Thinking?</h3>
            <p>
              Tariq Al Wahedi, General Manager of DAX, commented: "We are delighted to launch the DAX International the latest product to be rolled out following the launch of DAX. This represents a significant step forward in our mission to further cement our position as a leading provider of CEP services. DAX is committed to customers convenience and reshaping the logistics landscape with an eye on future advancements and expansion. Our overarching goal at DAX is to expand our service offerings, penetrate new markets, and meet diverse needs. With DAX, the future of logistics is within reach, and it is more connected than ever."
            </p>

            {/* Inline Article Image 2 */}
            <div className="w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden my-12 bg-[#F9FBF9] border border-[#064423]/5">
              <img src="/zajel-office.jpg" alt="Zajel Office" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>

          </div>
        </div>

        {/* 4. Related Posts Section */}
        <div className="mt-32 pt-16 border-t border-[#064423]/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RelatedCard 
              category="Courier Tips" 
              date="21, Jun, 2026" 
              title="How to Save Time With Smart Pickup Scheduling" 
              image="/blog-1.jpg" 
            />
            <RelatedCard 
              category="International Shipping" 
              date="15, Jul, 2026" 
              title="Understanding Customs, Duties & DDP vs DDU Explained" 
              image="/blog-2.jpg" 
            />
            <RelatedCard 
              category="E-commerce Success" 
              date="29, May, 2026" 
              title="How UAE E-commerce Brands Are Scaling With Reliable COD Delivery" 
              image="/blog-3.jpg" 
            />
          </div>
        </div>

      </div>
    </article>
  );
};

// --- Sub-Components ---

const TocLink = ({ label, active }: { label: string, active?: boolean }) => (
  <a href="#" className={`block text-[13px] transition-colors leading-relaxed ${active ? 'text-[#064423] font-medium' : 'text-[#064423]/50 font-light hover:text-[#36B936]'}`}>
    {active && <span className="text-[#36B936] mr-2">•</span>}
    {label}
  </a>
);

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="w-8 h-8 rounded-full border border-[#064423]/10 flex items-center justify-center hover:bg-[#EAF1E7] hover:text-[#36B936] hover:border-[#EAF1E7] transition-all">
    {children}
  </a>
);

const RelatedCard = ({ category, date, title, image }: any) => (
  <article className="group flex flex-col bg-white rounded-[1.5rem] border border-[#064423]/5 overflow-hidden hover:shadow-[0_10px_40px_rgba(6,68,35,0.06)] hover:border-[#064423]/15 transition-all duration-500 cursor-pointer">
    <div className="w-full h-[180px] overflow-hidden bg-[#F9FBF9]">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-center mb-4">
        <span className="border border-[#064423]/10 text-[#064423]/70 text-[10px] px-3 py-1 rounded-full font-light tracking-wide">{category}</span>
        <span className="text-[#064423]/50 text-[10px] font-light">{date}</span>
      </div>
      <h3 className="text-[#064423] text-[15px] font-medium leading-[1.35] mb-6 flex-grow group-hover:text-[#36B936] transition-colors">{title}</h3>
      <div className="text-[#064423] text-[12px] font-medium flex items-center gap-2 mt-auto group-hover:text-[#36B936] transition-colors">
        Read More <span className="font-light text-lg mb-[2px] group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  </article>
);

// --- Simple Minimal SVGs for Socials ---
const LinkedInSVG = () => <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>;
const FacebookSVG = () => <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;
const TwitterSVG = () => <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>;
const ShareSVG = () => <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;

export default BlogDetail;