import { 
  Package, Banknote, RotateCcw, ShoppingCart, 
  Mail, FileCheck, Warehouse, ArrowRightLeft, Truck, 
  Plane, Ship 
} from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'standard-courier',
    icon: <Package size={16} />,
    title: 'Standard Courier',
    subtitle: 'Reliable Domestic Courier Services Across the UAE',
    description: 'Our standard courier service ensures secure and timely delivery of documents and parcels to any location in the UAE within 24 hours, supported by real-time tracking and professional handling.',
    bestFor: 'Documents, parcels, regular deliveries',
    image: '/standard-courier.jpg',
    overview: 'Our standard courier service guarantees seamless, secure, and timely delivery of documents and parcels anywhere within the UAE. With ZAJEL, you get more than just a delivery; you get total operational peace of mind backed by an extensive local network of over 100+ delivery vehicles.',
    features: [
      'Guaranteed 24-Hour Delivery across all major UAE emirates.',
      'Real-Time Tracking with instant SMS and email notifications.',
      'Digital Proof of Delivery (e-POD) captured at handover.',
      'Dedicated bilingual customer service desk.'
    ]
  },
  {
    id: 'cash-on-delivery',
    icon: <Banknote size={16} />,
    title: 'Cash-on-Delivery (COD)',
    subtitle: 'Flexible Payment Solutions for Domestic Shipments',
    description: 'We offer cash-on-delivery services for all domestic shipments. Consignees receive official proof of receipt and payment confirmation for every delivered parcel.',
    bestFor: 'Businesses, e-commerce sellers',
    image: '/cod-service.jpg',
    overview: 'Empower your customers with the flexibility to pay upon receipt. Our Cash-on-Delivery service handles payment collection securely and remits funds directly to your business account with fast turnaround times.',
    features: [
      'Secure cash handling by vetted personnel.',
      'Fast remittance cycles back to your corporate account.',
      'Digital receipts and seamless integration with your accounting software.',
      'Reduced return rates for e-commerce stores.'
    ]
  },
  {
    id: 'return-service',
    icon: <RotateCcw size={16} />,
    title: 'Return Service',
    subtitle: 'Reverse Logistics with Proof of Delivery',
    description: 'Our return service ensures parcels and documents are delivered and returned back to the sender with verified proof of receipt—ideal for approvals, confirmations, and legal documents.',
    bestFor: 'Legal, corporate, approved documents',
    image: '/return-service.jpg',
    overview: 'Streamline your reverse logistics. Whether it is a signed legal contract that needs to come back immediately, or a returned e-commerce item, we handle the round-trip seamlessly.',
    features: [
      'Same-day return receipt processing.',
      'Perfect for Court documents and MOFA attestations.',
      'Hassle-free reverse logistics for e-commerce returns.',
      'Unbroken chain of custody.'
    ]
  },
  {
    id: 'ecommerce-delivery',
    icon: <ShoppingCart size={16} />,
    title: 'E-Commerce Delivery',
    subtitle: 'Reliable Courier Services for Online Businesses',
    description: 'ZAJEL provides cost-effective and scalable e-commerce delivery solutions across the UAE, including fast delivery options, COD support, and return logistics.',
    bestFor: 'Online stores, retailers, marketplaces',
    image: '/ecommerce-delivery.jpg',
    overview: 'Built to scale your online business. From seamless API platform integrations to rapid last-mile delivery, we delight your customers at the doorstep.',
    features: [
      'End-to-end order fulfillment and warehousing.',
      'Automated inventory management updates.',
      'Fast last-mile delivery to your customers.',
      'Dedicated 24/7 support for growing online brands.'
    ]
  },
  {
    id: 'mailroom-management',
    icon: <Mail size={16} />,
    title: 'Mailroom Management',
    subtitle: 'Secure & Efficient Corporate Mailroom Solutions',
    description: 'We offer customized mailroom management services designed to streamline inbound and outbound mail handling for corporate offices and institutions.',
    bestFor: 'Corporates, government entities',
    image: '/mailroom-management.jpg',
    overview: 'Discreet, priority routing for board-level communications, financial instruments, and sensitive corporate mail. We act as an extension of your internal operations.',
    features: [
      'Scheduled daily or twice-daily sweeps.',
      'Secure inter-branch office routing.',
      'Consolidated billing for enterprise accounts.',
      'Tamper-evident packaging for executive mail.'
    ]
  },
  {
    id: 'customs-clearance',
    icon: <FileCheck size={16} />,
    title: 'Customs Clearance',
    subtitle: 'Smooth Import & Export Clearance Services',
    description: 'Our customs clearance services include preparation and submission of documentation required for imports and exports, ensuring compliance with UAE regulations and minimizing delays.',
    bestFor: 'International trade, freight shipments',
    image: '/customs-clearance.jpg',
    overview: 'Navigate complex borders with ease. Our dedicated clearance agents handle all documentation, tariffs, and regulatory compliance to ensure your shipments move without delay.',
    features: [
      'Direct integration with UAE customs portals.',
      'Pre-clearance processing for faster transit.',
      'Tariff classification and duty management.',
      'Dedicated compliance consultants.'
    ]
  },
  {
    id: 'warehousing',
    icon: <Warehouse size={16} />,
    title: 'Warehousing',
    subtitle: 'Flexible Storage & Distribution Solutions',
    description: 'Secure warehousing solutions designed to support short-term and long-term storage needs, complete with inventory management and fulfillment services.',
    bestFor: 'International trade, freight shipments',
    image: '/warehousing.jpg',
    overview: 'State-of-the-art storage facilities equipped to handle your inventory safely. From pallet storage to pick-and-pack fulfillment, our warehousing adapts to your volume.',
    features: [
      'Climate-controlled and secure storage environments.',
      'Real-time inventory visibility via digital dashboards.',
      'Pick, pack, and labeling fulfillment services.',
      'Flexible short-term and long-term storage contracts.'
    ]
  },
  {
    id: 'express-import-export',
    icon: <ArrowRightLeft size={16} />,
    title: 'Express Import & Export',
    subtitle: 'Fast International Trade Solutions',
    description: 'ZAJEL Express Import & Export services ensure timely delivery of international shipments based on confirmed transit times at booking.',
    bestFor: 'International business shipments',
    image: '/express-import-export.jpg',
    overview: 'Connect your business to the globe. Our express import and export services provide priority handling and fixed transit times for your most time-sensitive international shipments.',
    features: [
      'Door-to-door international delivery.',
      'Priority customs processing.',
      'Dedicated international account managers.',
      'Coverage across 200+ global destinations.'
    ]
  },
  {
    id: 'gcc-road-freight',
    icon: <Truck size={16} />,
    title: 'GCC Road Freight',
    subtitle: 'Cross-Border Road Freight Across the GCC',
    description: 'Powered by our extensive fleet, our road freight services cover the entire GCC region, enabling reliable cross-border cargo movement.',
    bestFor: 'Regional trade & distribution',
    image: '/gcc-road-freight.jpg',
    overview: 'The backbone of regional trade. Our GCC road freight service utilizes a modern fleet to provide cost-effective, reliable transit across the Arabian Peninsula.',
    features: [
      'Full Truckload (FTL) and Less than Truckload (LTL) options.',
      'GPS tracked fleet for real-time visibility.',
      'Cross-border customs clearance support.',
      'Temperature-controlled transit available.'
    ]
  },
  {
    id: 'air-freight',
    icon: <Plane size={16} />,
    title: 'Air Freight',
    subtitle: 'Fast Global Air Cargo Services',
    description: 'Our air freight services provide fast and secure transportation for urgent and high-value shipments worldwide, supported by door-to-door logistics expertise.',
    bestFor: 'Time-critical global shipments',
    image: '/air-freight.jpg',
    overview: 'When speed is the only option. Our air freight division partners with premier global airlines to secure priority routing for your high-value or urgent cargo.',
    features: [
      'Next-flight-out routing options.',
      'Consolidation services for cost efficiency.',
      'Door-to-door or airport-to-airport transit.',
      'Specialized handling for fragile or high-value goods.'
    ]
  },
  {
    id: 'sea-freight',
    icon: <Ship size={16} />,
    title: 'Sea Freight',
    subtitle: 'Cost-Effective Worldwide Sea Cargo Solutions',
    description: 'ZAJEL offers reliable sea freight services with access to global shipping routes, ideal for large volumes and cost-optimized cargo movement.',
    bestFor: 'Bulk shipments, international trade',
    image: '/sea-freight.jpg',
    overview: 'The most cost-effective method for global bulk shipping. We leverage deep relationships with major ocean carriers to guarantee space and optimize your supply chain costs.',
    features: [
      'Full Container Load (FCL) and Less than Container Load (LCL).',
      'End-to-end container tracking.',
      'Port-to-port and door-to-door delivery.',
      'Comprehensive marine insurance options.'
    ]
  }
];