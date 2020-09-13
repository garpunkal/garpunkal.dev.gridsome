module.exports = {
  purge: 
  {
  //  mode: 'layers',
 //   layers: ['base','components', 'utilities'],
    content: [ ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
