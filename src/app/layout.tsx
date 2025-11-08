'use client';

import './globals.css';
import { Inter, Poppins, Raleway } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion'; 
import { usePathname } from 'next/navigation'; 
import GlobalHeader from '../components/GlobalHeader';
import { SpeedInsights } from "@vercel/speed-insights/next"; // <-- 1. ADD THIS IMPORT

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
  weight: ['700', '800'], 
  variable: '--font-raleway',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); 

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body>
        <GlobalHeader />
        
        <AnimatePresence mode="wait">
          <motion.div key={pathname}>
            {children}
          </motion.div>
        </AnimatePresence>

        <SpeedInsights /> {/* <-- 2. ADD THIS COMPONENT HERE */}
      </body>
    </html>
  );
}