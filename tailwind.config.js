/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,       // Center the container
      padding: {
        DEFAULT: '2rem',  // Default horizontal padding
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: {
          light: '#f91942',  // Light purple
          DEFAULT: '#f91942', // Purple
          dark: '#434190',    // Dark purple
        },
        secondary: {
          light: '#63B3ED',   // Light blue
          DEFAULT: '#3182CE', // Blue
          dark: '#2C5282',    // Dark blue
        },
        accent: {
          DEFAULT: '#FBBF24', // Yellow accent
        },
      },
    },
  },
  plugins: [],
};
