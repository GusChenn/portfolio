import type { Config } from 'tailwindcss';
import STYLES from './src/styles';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...STYLES.base.colors,
    },
    fontFamily: {
      ...STYLES.base.fonts,
    },
    space: {
      ...STYLES.base.spaces,
    },
    fontSize: {
      ...STYLES.base.fontSizes,
    },
    padding: {
      ...STYLES.base.spaces,
    },
    margin: {
      ...STYLES.base.spaces,
    },
    gap: {
      ...STYLES.base.spaces,
    },
    borderRadius: {
      ...STYLES.extra.borderRadius,
    },
    extend: {
      dropShadow: {
        highlight: '0 0 12px rgb(0 0 0 / 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
