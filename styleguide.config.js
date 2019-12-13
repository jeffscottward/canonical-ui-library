const { createConfig, babel, postcss } = require('webpack-blocks')

module.exports = {
  title: 'Quantstamp Style Guide',
  components: 'src/components/**/[A-Z]*.js',
  theme: { 
    maxWidth: '1600px',
    // color: {
    //   baseBackground: '#1C1C1C',
    //   sidebarBackground: '#2A2A2A',
    //   ribbonBackground: '#464646',
    //   codeBackground: '#FFFFFF'
    // },
    fontSize: {
      base: 16,
      text: 16,
      small: 12,
      h1: 34,
      h2: 24,
      h3: 18,
      h4: 16,
      h5: 16,
      h6: 16,
    },
  },
  // styles: {
  //   Preview: {
  //     backgroundColor: '#FFFFFF'
  //   },
  //   Preview: {
  //     preview: { backgroundColor: '#FFFFFF' }
  //   },
  //   ReactExample: {
  //     backgroundColor: '#FFFFFF'
  //   },
  //   ReactExample: {
  //     reactexample: { backgroundColor: '#FFFFFF' }
  //   }
  // },
  webpackConfig: createConfig([babel(), postcss()])
}
