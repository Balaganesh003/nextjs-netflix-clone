module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#db0510',
        'primary-red-hover': '#e50914',
      }, spacing: {
        '128': '24rem',
      },
      backgroundImage: {
        'hero-background': "url('../public/background-img.jpg')",
      },
      opacity: {
        '60': '0.6',
        '10': '0.1',
      }

    },
  },
  plugins: [],
}