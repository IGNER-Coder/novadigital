'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-soft-ivory text-dark-grey overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center justify-center text-center z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold font-poppins text-dark-grey mb-4"
        >
          Welcome to NovaDigital
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl font-inter text-dark-grey mb-8 max-w-2xl"
        >
          Your journey to innovative web solutions starts here.
        </motion.p>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 16px rgba(0, 255, 133, 0.6)" }}
          className="bg-tropical-teal text-dark-grey font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Book a Free 15-Minute Strategy Call
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-1/2 md:w-1/3 lg:w-1/4 z-0"
      >
        <Image
          src="/hero-robot-scene.png"
          alt="NovaDigital Hero Robot Scene"
          width={500}
          height={500}
          layout="responsive"
          objectFit="contain"
        />
      </motion.div>
    </section>
  );
}