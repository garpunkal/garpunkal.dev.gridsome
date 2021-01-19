module.exports = function (api) {
   api.loadSource(async actions => {
    const Experiences = require('./src/data/experiences.json');
    const collection = actions.addCollection({ typeName: 'Experiences' })
    for (const exp of Experiences) { collection.addNode(exp); }
  })
}
