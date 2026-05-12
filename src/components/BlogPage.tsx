import React from 'react';
import { Link } from 'react-router-dom';

// --- MOCK DATA ---
const blogPosts = [
  {
    id: 1,
    category: "Courier Tips",
    date: "21, Jun, 2026",
    title: "How to Save Time With Smart Pickup Scheduling",
    image: "/blog-1.jpg", 
  },
  {
    id: 2,
    category: "International Shipping",
    date: "15, Jul, 2026",
    title: "Understanding Customs, Duties & DDP vs DDU Explained",
    image: "/blog-2.jpg",
  },
  {
    id: 3,
    category: "E-commerce Success",
    date: "29, May, 2026",
    title: "How UAE E-commerce Brands Are Scaling With Reliable COD Delivery",
    image: "/blog-3.jpg",
  },
  {
    id: 4,
    category: "International Shipping",
    date: "15, Jul, 2026",
    title: "Understanding Customs, Duties & DDP vs DDU Explained",
    image: "/blog-4.jpg",
  },
  {
    id: 5,
    category: "E-commerce Success",
    date: "29, May, 2026",
    title: "How UAE E-commerce Brands Are Scaling With Reliable COD Delivery",
    image: "/blog-5.jpg",
  },
  {
    id: 6,
    category: "Technology in Logistics",
    date: "10, Aug, 2026",
    title: "The Future of Smart Logistics in the UAE",
    image: "/blog-6.jpg",
  },
  {
    id: 7,
    category: "E-commerce Success",
    date: "29, May, 2026",
    title: "How UAE E-commerce Brands Are Scaling With Reliable COD Delivery",
    image: "/blog-7.jpg",
  },
  {
    id: 8,
    category: "Technology in Logistics",
    date: "10, Aug, 2026",
    title: "The Future of Smart Logistics in the UAE",
    image: "/blog-8.jpg",
  },
  {
    id: 9,
    category: "Courier Tips",
    date: "21, Jun, 2026",
    title: "How to Save Time With Smart Pickup Scheduling",
    image: "/blog-9.jpg",
  }
];

const BlogPage: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#FDFDFD] pt-24 pb-16 px-6 lg:px-24" style={{ fontFamily: '"Manrope", sans-serif' }}>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          
          {/* Left: Title & Slim Button */}
          <div className="max-w-2xl">
            <h1 className="text-[#064423] text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] font-light leading-[1.1] tracking-tight mb-8">
              Insights, Guides & Stories <br className="hidden md:block" />
              from the World of Logistics
            </h1>
            
            
          </div>

          {/* Right: Description */}
          <div className="md:w-[350px] lg:w-[400px] pt-2">
            <p className="text-[#064423]/60 text-[13px] lg:text-[14px] leading-relaxed font-light">
              Stay updated with expert advice, trends, and case studies on how Zajel powers smarter deliveries for individuals and businesses across the UAE.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Sub-component: Minimalist Blog Card ---

const BlogCard = ({ post }: { post: any }) => {
  return (
    <Link 
      to={`/blog/${post.id}`} 
      className="group flex flex-col bg-white rounded-[2rem] border border-[#064423]/5 overflow-hidden hover:shadow-[0_10px_40px_rgba(6,68,35,0.06)] hover:border-[#064423]/15 transition-all duration-500 cursor-pointer block"
    >
      
      {/* Image Container */}
      <div className="w-full h-[240px] overflow-hidden bg-[#F9FBF9]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      {/* Card Content */}
      <div className="p-8 flex flex-col flex-grow">
        
        {/* Meta Row: Category & Date */}
        <div className="flex justify-between items-center mb-6">
          <span className="border border-[#064423]/10 text-[#064423]/70 text-[11px] px-3.5 py-1.5 rounded-full font-light tracking-wide">
            {post.category}
          </span>
          <span className="text-[#064423]/50 text-[11px] font-light flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#064423]/20"></span>
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[#064423] text-[18px] lg:text-[19px] font-medium leading-[1.35] mb-8 flex-grow group-hover:text-[#36B936] transition-colors">
          {post.title}
        </h3>

        {/* Read More Link */}
        <div className="text-[#064423] text-[13px] font-medium flex items-center gap-2 mt-auto group-hover:text-[#36B936] transition-colors">
          Read More 
          <span className="font-light text-lg mb-[2px] group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>

      </div>
    </Link>
  );
};

export default BlogPage;