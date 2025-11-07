import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-ivory': 'var(--soft-ivory)',
        'tropical-teal': 'var(--tropical-teal)',
        'dark-grey': 'var(--dark-grey)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
        raleway: ['var(--font-raleway)'],
      },
    },
  },
  plugins: [],
};

export default config;
