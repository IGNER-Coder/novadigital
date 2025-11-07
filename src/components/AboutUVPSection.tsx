'use client';

import { motion } from 'framer-motion';

export default function AboutUVPSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about-uvp" className="w-full py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-poppins font-bold text-[#1A1A1A] mb-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Why Choose Nova Digital?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-inter text-gray-700 leading-relaxed mb-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          At Nova Digital, we believe your online presence should be a powerful asset, not a liability. We combine cutting-edge technology with strategic design to build websites that not only look stunning but also drive tangible business results.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl font-inter text-gray-700 leading-relaxed"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }}
        >
          Our focus is on creating seamless user experiences, optimizing for speed, and implementing smart solutions that help you convert browsers into loyal customers. Partner with us to transform your digital vision into reality.
        </motion.p>
      </div>
    </section>
  );
}
