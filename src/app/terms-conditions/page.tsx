'use client';

import { motion } from 'framer-motion';

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F7F7F7] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-5xl font-poppins font-bold text-[#00FF85] mb-8 text-center">
          Terms and Conditions
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="font-inter text-lg leading-relaxed">
            By accessing and using the Nova Digital website (the "Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">2. Services Provided</h2>
          <p className="font-inter text-lg leading-relaxed">
            Nova Digital provides web development, lead generation, and ongoing maintenance and support services. Details of these services are outlined on our website and in individual client agreements.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">3. User Obligations</h2>
          <p className="font-inter text-lg leading-relaxed">
            As a user, you agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">4. Intellectual Property</h2>
          <p className="font-inter text-lg leading-relaxed">
            All content on this website, including text, graphics, logos, and images, is the property of Nova Digital or its content suppliers and protected by international copyright laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="font-inter text-lg leading-relaxed">
            Nova Digital will not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use or the inability to use the service.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-poppins font-semibold mb-4">6. Governing Law</h2>
          <p className="font-inter text-lg leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
