export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#0071e3',
          hover: '#0077ED',
          light: '#0071e3',
        },
        // Dark theme colors
        dark: {
          primary: '#0c0c0e',    // Main background
          secondary: '#1a1a1d',  // Card/section background
          tertiary: '#2c2c30',   // Input/button background
          quaternary: '#3c3c40', // Hover states
          text: {
            primary: '#f5f5f7',  // Main text
            secondary: '#b1b1b3', // Muted text
          },
          border: '#e5e5e7',
        },
        // Light theme colors
        light: {
          primary: '#ffffff',    // Main background
          secondary: '#f5f5f7',  // Card/section background
          tertiary: '#f5f5f7',   // Input/button background
          text: {
            primary: '#1d1d1f',  // Main text
            secondary: '#6e6e73', // Muted text
          },
          border: '#e5e5e7',
        },
        // Semantic colors
        social: {
          github: '#000000',
          linkedin: '#0077b5',
          email: '#ea4335',
        },
        // Apple legacy support
        apple: {
          blue: '#0071e3',
        },
      },
      boxShadow: {
        'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}