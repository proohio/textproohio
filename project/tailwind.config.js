/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(186, 66, 255)',
        secondary: 'rgb(0, 225, 255)',
        background: 'rgb(36, 36, 36)',
        'input-background': 'rgba(54, 54, 54, 0.8)',
      },
      borderRadius: {
        lg: '12px',
      },
    },
  },
  plugins: [],
};