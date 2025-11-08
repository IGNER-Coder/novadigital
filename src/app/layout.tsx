'use client';

import './globals.css';
import { Inter, Poppins, Raleway } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion'; // 1. Import motion
import { usePathname } from 'next/navigation'; // 2. Import usePathname
import GlobalHeader from '../components/GlobalHeader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['700', '800'], // Bold and Extra-bold for "Nova"
  variable: '--font-raleway',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // 3. Get the current page path

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body>
        {/* 4. Move static components *outside* AnimatePresence */}
        <GlobalHeader />
        
        <AnimatePresence mode="wait">
          {/* 5. Wrap children in a motion.div with the pathname as the key */}
          {/* This fixes the error and enables page transitions */}
          <motion.div key={pathname}>
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}