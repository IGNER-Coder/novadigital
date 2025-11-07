'use client';

import './globals.css';
import { Inter, Poppins, Raleway } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
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
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${raleway.variable}`} suppressHydrationWarning>
      <body>
        <AnimatePresence mode="wait">
          <GlobalHeader />
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
