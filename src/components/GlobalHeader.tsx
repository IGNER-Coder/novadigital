"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

const GlobalHeader = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust scroll threshold as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleHashChange = () => {
      setActiveLink(window.location.hash.substring(1) || "home");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial active link

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [scrolled]);

  const headerVariants = {
    hidden: { y: prefersReducedMotion ? 0 : -100, opacity: prefersReducedMotion ? 1 : 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  const linkVariants = {
    hover: { color: "#00FF85", transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  } as const;

  const whatsappVariants = {
    hover: { scale: 1.1, boxShadow: "0px 0px 12px rgba(0, 255, 133, 0.6)", transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  } as const;

  const logoVariants = {
    hover: { letterSpacing: prefersReducedMotion ? "0em" : "0.05em", transition: { duration: 0.3 } },
  } as const;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1A1A1A] shadow-lg" : "bg-transparent"}`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <nav className={`container mx-auto px-4 flex items-center justify-between h-16 transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-white text-2xl font-bold flex items-baseline"
          variants={logoVariants}
          whileHover="hover"
          onClick={() => setActiveLink("home")}
        >
          <span className={`font-raleway font-extrabold ${scrolled ? "text-white" : "text-[#1A1A1A]"}`}>Nova</span>
          <span className={`font-inter ml-1 ${scrolled ? "text-white" : "text-[#1A1A1A]"}`}>Digital</span>
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`focus:outline-none w-12 h-12 flex items-center justify-center ${scrolled ? "text-white" : "text-[#1A1A1A]"}`}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Primary Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Services", "Why Us", "Contact"].map((item) => (
            <motion.li key={item} variants={linkVariants} whileHover="hover" whileTap="tap">
              <a
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className={`relative hover:text-[#00FF85] transition-colors duration-200 ${scrolled ? "text-white" : "text-[#1A1A1A]"} ${activeLink === item.toLowerCase().replace(/ /g, "-") ? "text-[#00FF85] font-bold" : ""}`}
                onClick={() => setActiveLink(item.toLowerCase().replace(/ /g, "-"))}
              >
                {item}
                {activeLink === item.toLowerCase().replace(/ /g, "-") && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 h-[2px] bg-[#00FF85] bottom-[-5px]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Primary CTA WhatsApp Icon (Desktop) */}
        <motion.a
          href="https://wa.me/yourphonenumber" // Replace with actual WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#00FF85] text-[#1A1A1A] shadow-lg hover:shadow-xl transition-all duration-200"
          variants={whatsappVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-7 h-7"
          >
            {/* This is the correct, full path string */}
            <path d="M380.9 97.1C339.1 55.3 283.5 32 223.8 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.7-29.4-28.4-63.7-28.4-99.2 0-101.8 82.3-184.2 184.7-184.2 50.4 0 98.1 19.7 134.7 56.4 36.7 36.7 56.6 84.5 56.6 134.7 0 102.4-82.6 185-184.6 185zm138.2-110.1c-4.4-2.2-26.7-13.2-30.9-14.7-4.2-1.5-7.2-2.2-10.2 2.2-3 4.4-11.5 14.7-14.7 17-3 2.2-6.1 2.5-11.2.3-5.1-2.2-21.5-7.9-40.8-25.2-15.7-14.1-26.1-31.5-29.1-36.7-3-5.2-.3-8.1 2-10.2 2-2.2 4.4-5.8 6.7-8.7 2.2-2.8 3-5.1 4.4-7.2 1.5-2.2.7-4.1-.3-6.1-1.5-3-10.2-24.4-14-33.2-3.7-8.7-7.4-7.5-10.2-7.9-2.8-.4-6.1-.4-9.2-.4s-8.1 1.5-12.2 7.2c-4.1 5.8-15.7 15.4-15.7 37.5 0 22.1 16.1 43.3 18.3 46.2 2.2 2.8 31.5 48.2 76.6 67.2 45.1 19 54.1 15.4 60.1 14.4 7.3-1.2 22.7-9.2 25.7-18.3 3-9.1 3-17 2.2-18.3-1-.7-4.3-1.3-9.3-3.9z" />
          </svg>
        </motion.a>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#1A1A1A] absolute top-16 left-0 right-0 py-4 shadow-lg"
        >
          <ul className="flex flex-col items-center space-y-4">
            {["Home", "Services", "Why Us", "Contact"].map((item) => (
              <motion.li key={item} variants={linkVariants} whileHover="hover" whileTap="tap">
                <a
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className={`relative text-lg hover:text-[#00FF85] transition-colors duration-200 text-white ${activeLink === item.toLowerCase().replace(/ /g, "-") ? "text-[#00FF85] font-bold" : ""}`}
                  onClick={() => {
                    setActiveLink(item.toLowerCase().replace(/ /g, "-"));
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                  {activeLink === item.toLowerCase().replace(/ /g, "-") && (
                    <motion.span
                      layoutId="underline-mobile"
                      className="absolute left-0 right-0 h-[2px] bg-[#00FF85] bottom-[-5px]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
            <motion.li variants={whatsappVariants} whileHover="hover" whileTap="tap">
              <a
                href="https://wa.me/yourphonenumber" // Replace with actual WhatsApp link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00FF85] text-[#1A1A1A] shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Chat on WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  {/* THIS IS THE FIX. This path is now complete. */}
                  <path d="M380.9 97.1C339.1 55.3 283.5 32 223.8 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.7-29.4-28.4-63.7-28.4-99.2 0-101.8 82.3-184.2 184.7-184.2 50.4 0 98.1 19.7 134.7 56.4 36.7 36.7 56.6 84.5 56.6 134.7 0 102.4-82.6 185-184.6 185zm138.2-110.1c-4.4-2.2-26.7-13.2-30.9-14.7-4.2-1.5-7.2-2.2-10.2 2.2-3 4.4-11.5 14.7-14.7 17-3 2.2-6.1 2.5-11.2.3-5.1-2.2-21.5-7.9-40.8-25.2-15.7-14.1-26.1-31.5-29.1-36.7-3-5.2-.3-8.1 2-10.2 2-2.2 4.4-5.8 6.7-8.7 2.2-2.8 3-5.1 4.4-7.2 1.5-2.2.7-4.1-.3-6.1-1.5-3-10.2-24.4-14-33.2-3.7-8.7-7.4-7.5-10.2-7.9-2.8-.4-6.1-.4-9.2-.4s-8.1 1.5-12.2 7.2c-4.1 5.8-15.7 15.4-15.7 37.5 0 22.1 16.1 43.3 18.3 46.2 2.2 2.8 31.5 48.2 76.6 67.2 45.1 19 54.1 15.4 60.1 14.4 7.3-1.2 22.7-9.2 25.7-18.3 3-9.1 3-17 2.2-18.3-1-.7-4.3-1.3-9.3-3.9z" />
                </svg>
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default GlobalHeader;