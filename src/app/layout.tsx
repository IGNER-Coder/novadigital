import './globals.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Loading all specified weights
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'NovaDigital - Web Development Solutions',
  description: 'Innovative Web Solutions for Your Business',
};

import Navbar from '../components/Navbar';



export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>

      <body>

        <Navbar />

        {children}

      </body>

    </html>

  );

}
