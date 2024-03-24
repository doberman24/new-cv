/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '450px',
        'md-a': '980px',
        'lg-a': '1150px',
        'xl-a': '1350px',
        '2xl-a': '1400px',
      },
      fontFamily: {
        philosopher: ["Philosopher", "sans-serif"],
        jura: ["Jura", "sans-serif"],
        Commissioner: ["Commissioner", "sans-serif"],
        MontsAlt: ["Montserrat Alternates", "sans-serif"]
      },
      backgroundImage: {
        'my-photo': "url('/src/img/face.jpg')",
        'calc': "url('/src/img/calc.png')",
        'calc_react': "url('/src/img/calc_react.png')",
        'lavka': "url('/src/img/lavka.png')",
        'memory': "url('/src/img/memory.png')",
        'architect': "url('/src/img/architect.png')",
        'cv': "url('/src/img/cv.jpg')",
        'weather': "url('/src/img/weather.png')",
        'newbegin': "url('/src/img/newbegin.png')",
        'cars': "url('/src/img/cars.png')",
        'messenger': "url('/src/img/messenger.png')"
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
        ringEffectMobil: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            boxShadow: 'inset 0 0 0 10px rgba(255, 255, 255, .3), 15px 15px 50px rgba(0, 0, 0, .4)'
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            boxShadow: 'inset 0 0 0 10px rgba(255, 255, 255, .3), -10px -5px 50px rgba(0, 0, 0, .4)'
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
        ringEffectMobil: 'ringEffectMobil 8s ease-in-out infinite',
        screenScan: ''
      },
    },
  },
  plugins: [],
}

