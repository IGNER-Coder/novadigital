'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function GlobalFooter() {
  const shouldReduceMotion = useReducedMotion();

  const footerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.footer
      id="footer"
      className="w-full bg-[#1A1A1A] text-[#F7F7F7] py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 text-center text-sm">
        <div className="mb-6">
          <p className="font-inter">&copy; {new Date().getFullYear()} Nova Digital. All rights reserved.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-inter font-medium">
          <a href="/privacy-policy" className="hover:text-[#00FF85] transition-colors duration-200">Privacy Policy</a>
          <a href="/cookie-policy" className="hover:text-[#00FF85] transition-colors duration-200">Cookie Policy</a>
          <a href="/terms-conditions" className="hover:text-[#00FF85] transition-colors duration-200">Terms and Conditions</a>
          <a href="/contact-support" className="hover:text-[#00FF85] transition-colors duration-200">Contact & Support</a>
        </nav>
      </div>
    </motion.footer>
  );
}
