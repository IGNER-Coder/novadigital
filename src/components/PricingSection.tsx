'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

// Data for the pricing cards
const pricingTiers = [
  {
    icon: '/icon-design.svg',
    title: 'Foundational Website Design',
    price: '$2,500',
    period: 'one-time',
    features: [
      { text: 'Custom UI/UX Design', details: 'Tailored design to match your brand identity.' },
      { text: 'Responsive Mobile-First Development', details: 'Ensuring optimal viewing across all devices.' },
      { text: 'Core Web Vitals Optimization', details: 'Fast loading speeds for better user experience and SEO.' },
      { text: 'Basic SEO Setup', details: 'Fundamental search engine optimization to get you started.' },
      { text: '5-Page Custom Website', details: 'Includes Home, About, Services, Contact, and one additional page.' },
    ],
    ctaText: 'Build Your Foundation',
    ctaLink: '#contact',
    highlight: false,
  },
  {
    icon: '/icon-lead-gen.svg',
    title: 'High-Converting Lead Generation',
    price: '$4,000',
    period: 'one-time',
    features: [
      { text: 'Landing Page Optimization', details: 'Optimized pages designed to capture leads effectively.' },
      { text: 'Conversion Rate Analysis', details: 'In-depth analysis to identify and improve conversion bottlenecks.' },
      { text: 'A/B Testing & Analytics', details: 'Data-driven testing to maximize performance.' },
      { text: 'CRM & API Integration', details: 'Seamless integration with your existing customer relationship management systems.' },
      { text: 'Content Strategy & AI Chatbot', details: 'Engaging content and AI-powered chatbots for enhanced user interaction.' },
      { text: 'Advanced SEO & Google Analytics', details: 'Comprehensive SEO strategies and detailed analytics reporting.' },
    ],
    ctaText: 'Increase Your Leads',
    ctaLink: '#contact',
    highlight: true,
  },
  {
    icon: '/icon-support.svg',
    title: 'Ongoing Maintenance & Support',
    price: '$300',
    period: 'per month',
    features: [
      { text: '24/7 Uptime Monitoring', details: 'Continuous monitoring to ensure your site is always live.' },
      { text: 'Regular Security Audits', details: 'Proactive security checks to protect your website from threats.' },
      { text: 'Performance Tuning', details: 'Ongoing optimization for speed and efficiency.' },
      { text: 'Dedicated Technical Support', details: 'Priority access to our expert support team.' },
      { text: 'Monthly Backups & Updates', details: 'Ensuring your data is safe and software is current.' },
    ],
    ctaText: 'Secure Your Site',
    ctaLink: '#contact',
    highlight: false,
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const cardVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Tooltip Component
const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex items-center">
      <span
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="cursor-help"
      >
        {children}
      </span>
      {show && (
        <div className="absolute z-10 px-3 py-2 text-sm font-inter text-white bg-gray-800 rounded-md shadow-lg -top-2 left-full ml-2 w-48">
          {content}
        </div>
      )}
    </div>
  );
};

// The Pricing Card Component
const PricingCard = ({ icon, title, price, period, features, ctaText, ctaLink, highlight }: (typeof pricingTiers)[0]) => {
  const shouldReduceMotion = useReducedMotion();
  const variant = shouldReduceMotion ? cardVariantsReduced : cardVariants;

  return (
    <motion.div
      variants={variant}
      className={`relative flex flex-col bg-white p-8 rounded-lg shadow-md h-full border ${highlight ? 'border-[#00FF85]' : 'border-gray-200'}`}
      whileHover={shouldReduceMotion ? {} : { y: -5, rotate: 1, scale: 1.02, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00FF85] text-[#1A1A1A] text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Most Popular
        </div>
      )}
      <div className="flex-shrink-0 text-center mb-6">
        {icon && <Image src={icon} alt={`${title} icon`} width={56} height={56} className="mx-auto mb-4" />}
        <h3 className="text-2xl font-poppins font-bold text-[#1A1A1A]">{title}</h3>
      </div>
      <div className="flex-grow text-center mb-6">
        <p className="text-5xl font-raleway font-extrabold text-[#1A1A1A]">{price}</p>
        <p className="text-gray-600 text-lg">{period}</p>
      </div>
      <div className="mb-8">
        <ul className="space-y-3 text-gray-700 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-[#00FF85] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <Tooltip content={feature.details}>
                <span>{feature.text}</span>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <motion.a
          href={ctaLink}
          className="inline-block w-full text-center px-6 py-3 bg-[#00FF85] text-[#1A1A1A] font-bold rounded-full text-lg shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 255, 133, 0.3)' }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          {ctaText}
        </motion.a>
        <p className="text-center text-sm text-gray-500 mt-4 font-inter">Quality guaranteed, results delivered.</p>
      </div>
    </motion.div>
  );
};

// The Pricing Section Organism
export default function PricingSection() {
  return (
    <section id="services" className="w-full py-20 bg-[#1A1A1A] text-[#F7F7F7]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#F7F7F7]">
            Our Flexible Pricing Plans
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs and budget. All plans are designed for growth.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.title} {...tier} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
