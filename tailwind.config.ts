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
    extend: {},
  },
  plugins: [],
};
export default config;
