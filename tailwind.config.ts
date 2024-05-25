import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'btn': 'linear-gradient(90deg, #1abc9c 0%, #3498db 100%)',
        'rebtn': 'linear-gradient(90deg,  #3498db 0%, #1abc9c 100%)',
        'btn2': 'linear-gradient(to left, #378CE7, #67C6E3 29%)',
        'rebtn2': 'linear-gradient(to left, #67C6E3, #378CE7 29%)',
        'cover':  'radial-gradient(circle at right, #5DEBD7, #C5FF95)',
        'circle': 'repeating-radial-gradient(circle, #67C6E3, #378CE7 20%)',
      },
      fontFamily: {
        author: ['var(--font-author)']  ,
        satoshi: ['var(--font-satoshi)'],
        outfit: ['var(--font-outfit)']
      },
    },
  },
  plugins: [],
};
export default config;
