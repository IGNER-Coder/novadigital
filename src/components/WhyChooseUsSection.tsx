'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const visualAnchorVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const visualAnchorVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function WhyChooseUsSection() {
  const shouldReduceMotion = useReducedMotion();
  const itemAnimation = shouldReduceMotion ? itemVariantsReduced : itemVariants;
  const visualAnimation = shouldReduceMotion ? visualAnchorVariantsReduced : visualAnchorVariants;

  const benefits = [
    {
      id: 1,
      text: '**Launch in Days, Not Months.** We build with modular, modern systems (Next.js & Tailwind) to ensure your professional online presence is live 70% faster than traditional development, solving the business problem of slow deployment.',
    },
    {
      id: 2,
      text: '**Your Website is Your Best Salesperson.** We design scalable systems of components engineered for high conversion rates, ensuring every page focuses on turning visitors into leads, not just looking pretty.',
    },
    {
      id: 3,
      text: '**Future-Proofed and Protected.** We proactively address buyer objections regarding longevity. Every project includes an explicit Maintenance Offer for security, backups, and updates, ensuring reliability for the long haul.',
    },
  ];

  return (
    <section id="why-us" className="w-full py-16 bg-[#1A1A1A] text-[#F7F7F7]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-poppins font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Why Choose Nova Digital?
        </motion.h2>

        <div className="flex flex-col md:flex-row md:gap-10 items-center">
          {/* Text Content Block (70% on Desktop, 100% on Mobile) */}
          <motion.div
            className="w-full md:w-7/12 mb-10 md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <ul className="space-y-4 text-lg font-inter">
              {benefits.map((benefit) => (
                <motion.li key={benefit.id} variants={itemAnimation} className="flex items-start">
                  <svg className="w-6 h-6 text-[#00FF85] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span dangerouslySetInnerHTML={{ __html: benefit.text.replace(/\*\*(.*?)\*\*/g, '<span class="text-[#00FF85] font-bold">$1</span>') }} />
                </motion.li>
              ))}
            </ul>

            {/* Trust Signal - Placeholder for now, will be designed next */}
            <motion.div
              className="mt-10 p-6 bg-[#1A1A1A] border border-gray-700 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <blockquote className="font-inter text-lg italic text-gray-300 mb-3">
                "Nova Digital transformed our online presence. Their strategic approach and technical prowess delivered results beyond our expectations."
              </blockquote>
              <p className="font-inter font-bold text-[#F7F7F7]">- Emily R., Tech Startup CEO</p>
            </motion.div>
          </motion.div>

          {/* Visual Anchor (30% on Desktop, 100% on Mobile) */}
          <motion.div
            className="w-full md:w-5/12 relative h-56 md:h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={visualAnimation}
          >
            <Image
              src="/hero-robot-scene.png" // Placeholder image
              alt="Nova Digital Value Proposition Visual"
              fill
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
