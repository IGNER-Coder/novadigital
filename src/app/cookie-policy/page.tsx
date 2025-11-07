'use client';

import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F7F7F7] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container mx-auto max-w-4xl"
      >
        <h1 className="text-5xl font-poppins font-bold text-[#00FF85] mb-8 text-center">
          Cookie Policy
        </h1>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">1. What are Cookies?</h2>
          <p className="font-inter text-lg leading-relaxed">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">2. How We Use Cookies</h2>
          <p className="font-inter text-lg leading-relaxed mb-4">
            We use cookies for several reasons, including:
          </p>
          <ul className="list-disc list-inside font-inter text-lg leading-relaxed space-y-2">
            <li>**Essential Website Functionality:** To enable core features like navigation and access to secure areas.</li>
            <li>**Performance and Analytics:** To understand how visitors interact with our website by collecting and reporting information anonymously.</li>
            <li>**Marketing and Personalization:** To deliver relevant advertisements and content based on your interests.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">3. Types of Cookies We Use</h2>
          <ul className="list-disc list-inside font-inter text-lg leading-relaxed space-y-2">
            <li>**Strictly Necessary Cookies:** Required for the operation of our website.</li>
            <li>**Analytical/Performance Cookies:** Allow us to recognize and count the number of visitors and to see how visitors move around our website.</li>
            <li>**Functionality Cookies:** Used to recognize you when you return to our website.</li>
            <li>**Targeting Cookies:** Record your visit to our website, the pages you have visited and the links you have followed.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-poppins font-semibold mb-4">4. Your Choices Regarding Cookies</h2>
          <p className="font-inter text-lg leading-relaxed">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-poppins font-semibold mb-4">5. More Information</h2>
          <p className="font-inter text-lg leading-relaxed">
            For more information about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#00FF85] hover:underline">www.allaboutcookies.org</a>.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
