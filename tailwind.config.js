/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#00BFFF',
        'neon-purple': '#8A2BE2',
        'dark-navy': '#050816',
        'black-accent': '#02040A',
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          from: {
            textShadow: '0 0 10px rgba(0, 191, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)',
          },
          to: {
            textShadow: '0 0 20px rgba(0, 191, 255, 0.8), 0 0 30px rgba(0, 191, 255, 0.5)',
          },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '12px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '40px',
      },
    },
  },
  safelist: [
    // Explicitly safelist custom glass classes to prevent purging
    'glass',
    'glass-card',
    'liquid-glass',
    'glow-border',
    'text-gradient',
    'liquid-button',
    // Safelist backdrop-blur variants for dynamic classes
    'backdrop-blur',
    'backdrop-blur-xl',
    'backdrop-blur-2xl',
    'bg-white/3',
    'bg-white/5',
    'bg-black/30',
    'border-white/5',
    'border-white/10',
  ],
  plugins: [],
}
