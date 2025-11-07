'use client';

import { motion, useReducedMotion } from 'framer-motion';

const technologies = [
  { name: 'Next.js', icon: '/next.svg' },
  { name: 'React', icon: '/react.svg' },
  { name: 'Tailwind CSS', icon: '/tailwind.svg' },
  { name: 'Framer Motion', icon: '/framer-motion.svg' },
  { name: 'TypeScript', icon: '/typescript.svg' }, // New technology
  { name: 'Firebase', icon: '/firebase.svg' },   // New technology
  { name: 'Docker', icon: '/docker.svg' },       // New technology
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function TechnologyShowcaseSection() {
  const shouldReduceMotion = useReducedMotion();
  const animationVariants = shouldReduceMotion ? itemVariantsReduced : itemVariants;

  return (
    <section id="tech-showcase" className="w-full py-16 bg-[#F7F7F7] text-[#1A1A1A]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-poppins font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Our Core Technologies
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={animationVariants}
              className="flex flex-col items-center p-4 rounded-lg bg-white shadow-sm border border-gray-200"
            >
              {tech.icon && (
                <img src={tech.icon} alt={`${tech.name} logo`} className="w-12 h-12 mb-3" />
              )}
              <span className="font-inter font-semibold text-lg text-[#1A1A1A]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
