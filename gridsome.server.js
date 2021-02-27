const axios = require('axios');

module.exports = function (api) {

  api.loadSource(async actions => {

    // config
    const baseApiUrl = 'https://cloud.squidex.io/api/content/garpunkaldev/';
    const config = {
      headers: {
        "X-Flatten": true,
        "X-NoResolveLanguages": 1,
        "X-Languages": "en"
      }
    };

    // gather data from api
    const { data: companyData } = await GetAsync(baseApiUrl + 'company', config);
    const { data: projectData } = await GetAsync(baseApiUrl + 'project', config);
    const { data: experienceData } = await GetAsync(baseApiUrl + 'experience', config);
    const { data: highlightData } = await GetAsync(baseApiUrl + 'highlight', config);

    // experiences
    const expCollection = actions.addCollection({ typeName: 'Experiences' })
    for (const item of experienceData.items) {

      // filter relations
      const company = companyData.items.find(function (x) { return x.id === item.data.company[0] });
      const projects = BuildList(item.data.projects, projectData.items);
      const contribs = BuildList(item.data.contributions, projectData.items);
      // map
      expCollection.addNode(MapExperience(item, company, projects, contribs))
    }

    // projects
    const proCollection = actions.addCollection({ typeName: 'Projects' })
    for (const item of highlightData.items) {
    
      // filter relations
      const projects = BuildList(item.data.projects, projectData.items);
      
      // map
      proCollection.addNode(MapProject(item, projects));
    }
  })

  function BuildList(selection, source) {
    var items = [];
    selection.forEach(function (item) {
      const found = source.find(x => x.id == item);
      if (found != null)
        items.push(found);
    });

    return items;
  }

  function MapProject(item, projects) {
    return {
      "id": item.data.id,
      "orderNumber": item.data.orderNumber,
      "projects": projects.map(p =>
      ({
        "title": p.data.title,
        "position": p.data.position,
        "url": p.data.url,
        "large": p.data.large ?? false,
        "image": {
          "url": "https://cloud.squidex.io/api/assets/garpunkaldev/" + p.data.image[0],
          "alt": p.data.title,
          "width": p.data.large ? 615 : 300,
          "height": p.data.large ? 340 : 165,
        }
      }))
    }
  }

  function MapExperience(item, company, projects, contribs) {
    return {
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
        "items": projects.map(p => ({ "name": p.data.title, "url": p.data.url }))
      },
      "contributions": {
        "title": item.data.contributionsLabel,
        "items": contribs.map(p => ({ "name": p.data.title, "url": p.data.url }))
      },
      "orderDate": item.data.from
    }
  }

  function GetMonthYear(date) {
    if (date === null || date === undefined) {
      return "";
    } else {
      var dt = new Date(date);
      return dt.toLocaleString('default', { month: 'short' }) + " " + dt.getFullYear();
    }
  }

  async function GetAsync(url, config) {
    return await axios.get(url, config)
      .then(function (response) { return response; })
      .catch(function (error) { console.log(error); });
  }
}
