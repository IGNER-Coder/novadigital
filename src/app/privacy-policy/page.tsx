'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F7F7F7] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-5xl font-poppins font-bold text-[#00FF85] mb-8 text-center">
          Privacy Policy
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">1. Introduction</h2>
          <p className="font-inter text-lg leading-relaxed">
            Welcome to Nova Digital's Privacy Policy. We are committed to protecting your personal data and your right to privacy. This policy explains what information we collect, how we use it, and what rights you have in relation to it.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">2. Information We Collect</h2>
          <p className="font-inter text-lg leading-relaxed mb-4">
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
          </p>
          <ul className="list-disc list-inside font-inter text-lg leading-relaxed space-y-2">
            <li>Personal Data: Name, email address, phone number, and similar contact data.</li>
            <li>Usage Data: Information about how you use our website, such as pages visited and time spent.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="font-inter text-lg leading-relaxed">
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
          <ul className="list-disc list-inside font-inter text-lg leading-relaxed space-y-2 mt-4">
            <li>To facilitate account creation and logon process.</li>
            <li>To send you marketing and promotional communications.</li>
            <li>To respond to your inquiries and offer support.</li>
            <li>To improve our Website and services.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">4. Sharing Your Information</h2>
          <p className="font-inter text-lg leading-relaxed">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">5. Your Privacy Rights</h2>
          <p className="font-inter text-lg leading-relaxed">
            You have rights under applicable data protection laws. These include the right to access, correct, or delete your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-poppins font-semibold mb-4">6. Contact Us</h2>
          <p className="font-inter text-lg leading-relaxed">
            If you have questions or comments about this policy, you may contact us at: <a href="mailto:info@novadigital.com" className="text-[#00FF85] hover:underline">info@novadigital.com</a>
          </p>
        </section>
      </motion.div>
    </main>
  );
}
