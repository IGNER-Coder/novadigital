'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const whatsappVariants = {
    hover: { scale: 1.1, boxShadow: '0px 0px 20px rgba(0, 255, 133, 0.8)', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-20 bg-[#1A1A1A] text-[#F7F7F7]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
          Ready to Elevate Your Digital Presence?
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Let's connect and discuss how Nova Digital can transform your business online.
        </p>

        <motion.a
          href="https://wa.me/yourphonenumber" // IMPORTANT: Replace with actual WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#00FF85] text-[#1A1A1A] font-bold text-xl shadow-lg"
          variants={whatsappVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Chat with us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-8 h-8 mr-3"
          >
            <path d="M380.9 97.1C339.1 55.3 283.5 32 223.8 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.7-29.4-28.4-63.7-28.4-99.2 0-101.8 82.3-184.2 184.7-184.2 50.4 0 98.1 19.7 134.7 56.4 36.7 36.7 56.6 84.5 56.6 134.7 0 102.4-82.6 185-184.6 185zm138.2-110.1c-4.4-2.2-26.7-13.2-30.9-14.7-4.2-1.5-7.2-2.2-10.2 2.2-3 4.4-11.5 14.7-14.7 17-3 2.2-6.1 2.5-11.2.3-5.1-2.2-21.5-7.9-40.8-25.2-15.7-14.1-26.1-31.5-29.1-36.7-3-5.2-.3-8.1 2-10.2 2-2.2 4.4-5.8 6.7-8.7 2.2-2.8 3-5.1 4.4-7.2 1.5-2.2.7-4.1-.3-6.1-1.5-3-10.2-24.4-14-33.2-3.7-8.7-7.4-7.5-10.2-7.9-2.8-.4-6.1-.4-9.2-.4s-8.1 1.5-12.2 7.2c-4.1 5.8-15.7 15.4-15.7 37.5 0 22.1 16.1 43.3 18.3 46.2 2.2 2.8 31.5 48.2 76.6 67.2 45.1 19 54.1 15.4 60.1 14.4 7.3-1.2 22.7-9.2 25.7-18.3 3-9.1 3-17 2.2-18.3-1-.7-4.3-1.3-9.3-3.9z" />
          </svg>
          Chat Now on WhatsApp
        </motion.a>
      </div>
    </motion.section>
  );
}
