module.exports = {
  content: ['./*.html', './client/**/*.[tj]sx'],
  media: false,
  theme: {
    extend: {
      colors: {
        primary: '#E4EBF2',
        grey: '#65768C',
        darkGreen: '#99A638',
        lightGreen: '#B0BF3B',
        warning: '#F27C7C',
      },
      fontFamily: {
        serif: ['"Roboto Slab"', 'serif'],
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
