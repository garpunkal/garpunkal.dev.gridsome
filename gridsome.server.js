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

    // highlights
    const highCollection = actions.addCollection({ typeName: 'Highlights' })
    for (const item of projectData.items) {
      // map
      if (item.data.IsHighlight === true) {
        highCollection.addNode(MapProject(item));
      }
    }
  })

  function BuildList(selection, source) {
    var items = [];

    if (selection)
      selection.forEach(function (item) {
        const found = source.find(x => x.id == item);
        if (found != null)
          items.push(found);
      });

    return items;
  }

  function MapProject(item) {
    return {
      "id": item.data.id,
      "title": item.data.title,
      "position": item.data.position,
      "url": item.data.url,
      "large": GetBool(item.data.large),
      "image": {
        "url": "https://cloud.squidex.io/api/assets/garpunkaldev/" + item.data.image[0] + "?cache=5184000",
        "alt": item.data.title,
        "width": item.data.large ? 615 : 300,
        "height": item.data.large ? 340 : 165,
      },
      "sortOrder": item.data.SortOrder,
      "isHighlight": GetBool(item.data.IsHighlight)
    }
  }

  function MapExperience(item, company, projects, contribs) {
    return {
      "id": item.data.id,
      "title": company.data.title,
      "job": item.data.job,
      "location": item.data.location,
      "logo": {
        "url": "https://cloud.squidex.io/api/assets/garpunkaldev/" + company.data.logo[0] + "?cache=5184000",
        "background": company.data.logoBackgroundColour,
        "alt": company.data.title
      },
      "url": company.data.url,
      "shortUrl": company.data.shortUrl,
      "from": GetDate(item.data.from),
      "to": GetDate(item.data.to),
      "isCurrent": GetBool(item.data.isCurrent),
      "description": item.data.description,
      "hideDescription": GetBool(item.data.hideDescription),
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

  function GetDate(date) {
    if (date === null || date === undefined) {
      return null;
    } else {
      return new Date(date);
    }
  }

  function GetBool(value) {
    return (value === null || value === undefined) ? false : value;
  }

  async function GetAsync(url, config) {

    retryWrapper(axios, { retry_time: 2 })
    const result = await axios.get(url, config)
      .then(function (response) { return response; })
      .catch(function (error) { console.log(error); });

    return result;
  }

  const axios = require("axios")
  const retryWrapper = (axios, options) => {    
      const max_time = options.retry_time;
      let counter = 0;
      axios.interceptors.response.use(null, (error) => {
        console.log("==================");
        console.log(`Counter: ${counter}`);
        console.log("Error: ", error.response.statusText);
        console.log("==================");

        const config = error.config
        if (counter < max_time) {
          counter++
          return new Promise((resolve) => {
            resolve(axios(config))
          })
        }
        return Promise.reject(error)
      })  
  }
}