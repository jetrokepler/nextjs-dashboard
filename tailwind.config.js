/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,ts,jsx,tsx}', // Corrigido o caminho
    './pages/**/*.{html,js,ts,jsx,tsx}', // Inclua outras pastas, se necessário
    './components/**/*.{html,js,ts,jsx,tsx}', // Inclua outras pastas, se necessário
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
