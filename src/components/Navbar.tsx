import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100; // Offset for better accuracy

      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIX 1: Added 'as const'
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } as const },
    exit: { x: "100%" }
  };

  const linkVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  const navbarHeightVariants = {
    initial: { paddingBlock: "1rem" }, // py-4
    scrolled: { paddingBlock: "0.5rem" }, // py-2
  };

  const logoSizeVariants = {
    initial: { fontSize: "1.875rem" }, // text-3xl
    scrolled: { fontSize: "1.5rem" }, // text-2xl
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#1A1A1A]/50 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
      >
        <motion.div
          variants={navbarHeightVariants}
          initial="initial"
          animate={scrolled ? "scrolled" : "initial"}
          className="container mx-auto px-6 flex items-center justify-between relative"
        >
          {/* Left-aligned Logo */}
          <motion.div variants={logoSizeVariants} initial="initial" animate={scrolled ? "scrolled" : "initial"}>
            <Link href="/" className={`font-raleway transition-colors duration-300 ${scrolled ? 'text-[#F7F7F7]' : 'text-[#1A1A1A]'}`}>
              <span className="font-bold">Nova</span>
              <span className="font-semibold">Digital</span>
            </Link>
          </motion.div>
          {/* Right-aligned Links (Desktop) */}
          <div className="flex-1 hidden md:flex justify-end items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative font-poppins font-medium text-[#1A1A1A] hover:text-gray-700 transition-colors group"
                animate={activeLink === link.id ? 'active' : 'rest'}
                whileHover="hover"
              >
                {link.name}
                <motion.span
                  variants={{
                    rest: { scaleX: 0, originX: 0 },
                    hover: { scaleX: 1, originX: 0 },
                    active: { scaleX: 1, originX: 0 },
                  }}
                  // FIX 2: Added 'as const'
                  transition={{ duration: 0.3, ease: "easeOut" } as const}
                  className="absolute bottom-0 left-0 h-0.5 bg-[#00FF85] w-full"
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex-1 flex justify-end">
            <button onClick={toggleMenu} className="text-[#1A1A1A] focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
              </svg>
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 w-full h-full bg-[#1A1A1A] z-40 flex flex-col items-center justify-center"
          >
            <motion.div
              className="flex flex-col space-y-8"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="relative font-poppins font-semibold text-4xl text-[#F7F7F7] hover:text-gray-300 transition-colors duration-300 group"
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {link.name}
                  <motion.span
                    variants={{
                      rest: { scaleX: 0, originX: 0 },
                      hover: { scaleX: 1, originX: 0 },
                    }}
                    // FIX 3: Added 'as const'
                    transition={{ duration: 0.3, ease: "easeOut" } as const}
                    className="absolute bottom-0 left-0 h-0.5 bg-[#00FF85] w-full"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}