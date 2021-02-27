const axios = require('axios');
const {
  stringify
} = require('postcss');

module.exports = function (api) {

  api.loadSource(async actions => {

    const Projects = require('./src/data/projects.json');
    const proCollection = actions.addCollection({
      typeName: 'Projects'
    })
    for (const pro of Projects)
      proCollection.addNode(pro);

    const config = {
      headers: {
        "X-Flatten": true,
        "X-NoResolveLanguages": 1,
        "X-Languages": "en"
      }
    };

    const {
      data: companyData
    } = await axios.get('https://cloud.squidex.io/api/content/garpunkaldev/company/', config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    const {
      data: experienceData
    } = await axios.get('https://cloud.squidex.io/api/content/garpunkaldev/experience/', config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    const {
      data: projectData
    } = await axios.get('https://cloud.squidex.io/api/content/garpunkaldev/project/', config)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    const expCollection = actions.addCollection({
      typeName: 'Experiences'
    })

  

    for (const item of experienceData.items) {

      const company = companyData.items.find(function (x) {
        return x.id === item.data.company[0]
      });
      const projects = projectData.items.filter(function (x) {
        return item.data.projects.indexOf(x.id) !== -1
      });
      const contributions = projectData.items.filter(function (x) {
        return item.data.contributions.indexOf(x.id) !== -1
      });

      const projectMap = projects.map(p => ({
        name: p.data.title,
        url: p.data.url ?? null
      }));
      const contribMap = contributions.map(p => ({
        name: p.data.title,
        url: p.data.url ?? null
      }));

      expCollection.addNode({
        "id": item.data.id,
        "title": company.data.title,
        "job": item.data.job,
        "location": company.data.location,
        "logo": {
          "url": "https://cloud.squidex.io/api/assets/garpunkaldev/" + company.data.logo[0],
          "background": company.data.logoBackgroundColour,
          "alt": company.data.title
        },
        "url": company.data.url,
        "shortUrl": company.data.shortUrl,
        "from": GetMonthYear(item.data.from),
        "to": GetMonthYear(item.data.to),
        "isCurrent": item.data.isCurrent ?? false,
        "description": item.data.description,
        "projects": {
          "title": item.data.projectsLabel,
          "items": projectMap
        },
        "contributions": {
          "title": item.data.contributionsLabel,
          "items": contribMap
        },
        orderDate: item.data.from
      })
    }
  })

  function GetMonthYear(date) {
    if (date === null || date === undefined) {
      return "";
    } else {
      var dt = new Date(date);
      return dt.toLocaleString('default', { month: 'short' }) + " " + dt.getFullYear();
    }
  }
}

// <page-query>
// query {
//    experiences: allExperiences(sortBy: "id", order: ASC) {
//    experiences: allExperiences(sortBy: "id", order: ASC) {
//     edges {
//       node {
//         id
//         title
//         job
//         location       
//         logo {
//           url			   
// 			    background
// 			    alt
//         }
//         url
//         shortUrl
//         from
//         to
//         isCurrent
//         description
//         projects {
//           title
//           items {
//             name
//             url
//           }
//         }       
//         contributions {
//            title
//           items {
//             name
//             url
//           }
//         }
//       }
//     }
//    }
//   projects : allProjects(sortBy: "id", order: ASC) {
//     edges {
//       node {
//         id 
//         projects {
//           title
//           image {
//             url
//             alt
//             width
//             height
//           }
//           url
//           position
//           large
//         }
//       }
//     }
//   } 
// }
// </page-query>