module.exports = {
  content: ['./*.html', './client/**/*.[tj]sx'],
  media: false,
  theme: {
    extend: {
      colors: {
        primary: '#DF4E41',
        pink: '#F18A81',
        warmPink: '#EDC1AF',
        coldPink: '#ECDBD2',
        lightPink: '#FFFAFA',
      },
      fontFamily: {
        display: ['Oswald'],
        body: ['"Open Sans"'],
      },
      backgroundImage: {
        neighbours: "url('public/images/background-image.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
