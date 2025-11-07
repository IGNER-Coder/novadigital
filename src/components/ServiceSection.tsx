'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

// Data for the service cards (Molecule data)
const services = [
  {
    icon: '/icon-design.svg',
    title: 'Foundational Website Design',
    features: [
      'Custom UI/UX Design',
      'Responsive Mobile-First Development',
      'Core Web Vitals Optimization',
      'Basic SEO Setup',
    ],
    ctaText: 'Build Your Foundation',
    ctaLink: '#contact',
  },
  {
    icon: '/icon-lead-gen.svg',
    title: 'High-Converting Lead Generation',
    features: [
      'Landing Page Optimization',
      'Conversion Rate Analysis',
      'A/B Testing & Analytics',
      'CRM & API Integration',
    ],
    ctaText: 'Increase Your Leads',
    ctaLink: '#contact',
  },
  {
    icon: '/icon-support.svg',
    title: 'Ongoing Maintenance & Support',
    features: [
      '24/7 Uptime Monitoring',
      'Regular Security Audits',
      'Performance Tuning',
      'Dedicated Technical Support',
    ],
    ctaText: 'Secure Your Site',
    ctaLink: '#contact',
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

// The Service Card Molecule
const ServiceCard = ({ icon, title, features, ctaText, ctaLink }: (typeof services)[0]) => {
  const shouldReduceMotion = useReducedMotion();
  const variant = shouldReduceMotion ? cardVariantsReduced : cardVariants;

  return (
    <motion.div
      variants={variant}
      className="flex flex-col bg-white p-8 rounded-lg shadow-md h-full border border-gray-200"
      whileHover={shouldReduceMotion ? {} : { y: -5, rotate: 1, scale: 1.02, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="flex-shrink-0">
        <Image src={icon} alt={`${title} icon`} width={56} height={56} className="mb-6 text-[#1A1A1A]" />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-poppins font-bold text-[#1A1A1A] mb-4">{title}</h3>
        <ul className="space-y-3 text-gray-700">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <svg className="w-5 h-5 text-[#00FF85] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <motion.a
          href={ctaLink}
          className="inline-block w-full text-center px-6 py-3 bg-[#00FF85] text-[#1A1A1A] font-bold rounded-full text-lg shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 255, 133, 0.3)' }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          {ctaText}
        </motion.a>
      </div>
    </motion.div>
  );
};

// The Service Section Organism
export default function ServiceSection() {
  return (
    <section id="services" className="w-full py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#1A1A1A]">
            Your Partner in Digital Growth
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            From foundational design to ongoing support, we provide the expertise to help you succeed online.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>

        {/* Trust Indicators Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h4 className="text-2xl font-poppins font-semibold text-[#1A1A1A] mb-4">Our Clients See Real Results</h4>
            <blockquote className="font-inter text-xl text-gray-700 italic mb-4">
              "The new website is not only beautiful but has already doubled our lead generation. Their process is seamless and their support is second to none."
            </blockquote>
            <p className="font-inter font-bold text-[#1A1A1A]">- Sarah L., Founder of MarketBloom</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
