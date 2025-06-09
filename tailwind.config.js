/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: generateColorVars('--primary'),
        secondary: generateColorVars('--secondary'),
        accent: generateColorVars('--accent'),
        neutral: generateColorVars('--neutral'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-in-up': 'slideInUp 0.8s ease forwards',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/4808267/pexels-photo-4808267.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'about-pattern': "url('https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};

// Helper function to generate Tailwind color shades from CSS variables
function generateColorVars(base) {
  return {
    50: `rgb(var(${base}-50))`,
    100: `rgb(var(${base}-100))`,
    200: `rgb(var(${base}-200))`,
    300: `rgb(var(${base}-300))`,
    400: `rgb(var(${base}-400))`,
    500: `rgb(var(${base}-500))`,
    600: `rgb(var(${base}-600))`,
    700: `rgb(var(${base}-700))`,
    800: `rgb(var(${base}-800))`,
    900: `rgb(var(${base}-900))`,
    950: `rgb(var(${base}-950))`,
  };
}
