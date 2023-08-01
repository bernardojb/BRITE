/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // sm: "575px",
      // md: "768px",
      // lg: "1025px",
      // xl: "1104px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1104px',      
    },
    colors: {
      //text colors
      'primary': '#1C212D',
      'secondary': '#9A9AA0',
      //backgrounds
      'cream': '#F6F6F6',
      'dark': '#26262E',
      //components
      'navbar': '#ffffff9e',
      'validator': "#FF6363",
      //basic colors
      'white': '#ffffff',
      'black': '#000000',
      'teste': '#ae0000',
      'placeholder': '#e9e9e9bb',
      'brite': '#432AF4',
      
    },
    container: {
      center: true,
      padding: "1rem",
      // padding: "8.188rem",
    },
    fontSize: {
      xs: ["0.875rem", { lineHeight: "normal" }],
      sm: ["1.063rem", { lineHeight: "normal" }],
      md: ["1.063rem", { lineHeight: "normal" }],
      base: ["1.25rem", { lineHeight: "normal" }],
      "baselg": ["1.625rem", { lineHeight: "normal" }],
      lg: ["2rem", { lineHeight: "42px" }],
      xl: ["3rem", { lineHeight: "58px" }],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
