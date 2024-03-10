/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        philosopher: ["Philosopher", "sans-serif"],
        jura: ["Jura", "sans-serif"],
        Commissioner: ["Commissioner", "sans-serif"],
        MontsAlt: ["Montserrat Alternates", "sans-serif"]
      },
      backgroundImage: {
        'my-photo' : "url('/src/img/face.jpg')"
      },
      keyframes: {
        ringEffect: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            boxShadow: 'inset 0 0 0 30px rgba(255, 255, 255, .3), 15px 15px 50px rgba(0, 0, 0, .4)'
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            boxShadow: 'inset 0 0 0 30px rgba(255, 255, 255, .3), -10px -5px 50px rgba(0, 0, 0, .4)'
          },
        },
        screenScan: {
          '0%': {height: '1px'},
          '99%': {height: '100%', width: '2px'},
          '100%': {
            opacity: 1,
            height: '100%',
            display: 'none',
            width: 0,
          },
        },
        switchOnDisplay: {
          '0%': {width: '50%'},
          '100%': {width: 0},
        },
        startPages: {
          '0%': {
            left: '5%',
            opacity: 0,
          },
          '100%': {
            left: 0,
            opacity: 1,
          },
        },
        backEffect: {
          '0%': {
            left: '-50px',
            opacity: 0,
          },
          '100%': {
            left: 0,
            opacity: 1,
          },
        },
      },
      animation: {
        ringEffect: 'ringEffect 8s ease-in-out infinite',
        screenScan: ''
      },
    },
  },
  plugins: [],
}

