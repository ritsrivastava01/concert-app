import type { Config } from 'tailwindcss';
import animationDelay from './src/plugins/animationDelay';
import buttonPlugin from './src/plugins/buttonPlugin';
import diagonalRadius from './src/plugins/diagonalRadius';
import openVariant from './src/plugins/openVariant';

export default {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          '0%, 100%': {
            transform: 'scaleY(0.5)',
          },
          '50%': {
            transform: 'scaleY(1.5)',
          },
        },
      },
      animation: {
        wavey: 'wavey 1000ms linear infinite',
      },
    },
  },
  plugins: [openVariant, animationDelay, buttonPlugin, diagonalRadius],
} satisfies Config;
