'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-poppins font-bold text-2xl text-tropical-teal">
            NovaDigital
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative font-poppins font-medium text-dark-grey"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {link.name}
                <motion.div
                  variants={{
                    rest: { scaleX: 0, originX: 0 },
                    hover: { scaleX: 1, originX: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 h-0.5 bg-tropical-teal w-full"
                />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-tropical-teal text-white font-poppins font-semibold py-2 px-4 rounded-lg shadow-md"
            >
              Book a Call
            </motion.a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-dark-grey focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden fixed top-0 left-0 right-0 z-40 pt-20 bg-white h-screen"
          >
            <div className="flex flex-col items-center space-y-8 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="font-poppins font-semibold text-2xl text-dark-grey hover:text-tropical-teal transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                href="#contact"
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-tropical-teal text-white font-poppins font-bold py-4 px-8 rounded-lg shadow-lg text-xl mt-4"
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
