// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./src/views/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Definir los colores exactos de la interfaz
        'sidebar-dark-bg': '#25292D', // Un gris muy oscuro, casi negro para el fondo
        'sidebar-item-hover-bg': '#2C3034', // Un poco más claro para el hover del ítem
        'accent-teal': '#00ADB5',      // El color turquesa/verde del logo y activo
        'text-inactive-item': '#AEB1B6', // Gris claro para los ítems de menú inactivos
        'text-menu-heading': '#00ADB5',  // El mismo turquesa para "MENU" y "GENERAL"
      },
      fontSize: {
        // Ajustar tamaños de fuente si es necesario
        '2-5xl': '2.25rem', // Para el "LOGO" grande, entre 2xl y 3xl
      }
    },
  },
  plugins: [],
}