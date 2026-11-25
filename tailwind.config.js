/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#dc2626',
          darkRed: '#991b1b',
          blue: '#1d4ed8',
          darkBlue: '#1e3a8a',
          navy: '#0f172a'
        }
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slight': 'bounceSlight 2s infinite',
        'siren-glow': 'sirenGlow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        bounceSlight: {
          '0%, 100%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'translateY(0)' },
        },
        sirenGlow: {
          '0%': { boxShadow: '0 0 15px rgba(220, 38, 38, 0.6)' },
          '100%': { boxShadow: '0 0 25px rgba(29, 78, 216, 0.8)' }
        }
      }
    },
  },
  plugins: [],
}

