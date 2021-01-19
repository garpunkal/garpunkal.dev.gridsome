module.exports = function (api) {
   api.loadSource(async actions => {
    const Experiences = require('./src/data/experiences.json');
    const expCollection = actions.addCollection({ typeName: 'Experiences' })
    for (const exp of Experiences) { expCollection.addNode(exp); }

    const Projects = require('./src/data/projects.json');
    const proCollection = actions.addCollection({ typeName: 'Projects' })
    for (const pro of Projects) { proCollection.addNode(pro); }
  })
}
