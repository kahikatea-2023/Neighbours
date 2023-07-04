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
        neighbours: "url('/images/background-image.png')",
      },
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      width: {
        42: '168px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
