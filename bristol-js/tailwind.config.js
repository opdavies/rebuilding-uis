module.exports = {
  purge: {
    mode: 'layers',
    content: [
      'public/index.html',
      'src/**/*.vue'
    ]
  },
  theme: {
    aspectRatio: {
      '16/9': [16, 9]
    },
    colors: {
      black: '#222',
      gray: {
        50: '#f7f7f7'
      },
      blue: {
        500: '#337ab7',
        550: '#286090',
        600: '#204d74'
      },
      white: '#fff',
      yellow: '#fde546'
    },
    fontFamily: {
      display: ['Raleway'],
      body: ['Lato']
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-aspect-ratio')
  ],
  experimental: {
    applyComplexClasses: true
  },
  future: {
    purgeLayersByDefault: true
  }
}
