/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(210, 30%, 95%)',
        text: 'hsl(210, 30%, 20%)',
        accent: 'hsl(140, 70%, 45%)',
        primary: 'hsl(210, 60%, 50%)',
        surface: 'hsl(0, 0%, 100%)',
        purple: {
          900: '#1a0033',
          800: '#2d1b69',
          700: '#4c1d95',
          600: '#7c3aed',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c4b5fd',
          200: '#ddd6fe',
          100: '#ede9fe',
        },
      },
      borderRadius: {
        'lg': '16px',
        'md': '8px',
        'sm': '4px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(210, 30%, 20%, 0.1)',
        'modal': '0 16px 24px hsla(210, 30%, 20%, 0.2)',
      },
    },
  },
  plugins: [],
}
