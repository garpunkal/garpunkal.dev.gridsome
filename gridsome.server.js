const axios = require('axios');

module.exports = function (api) {

  api.loadSource(async actions => {

    // config
    const baseApiUrl = 'https://cloud.squidex.io/api/content/garpunkaldev/';
    const config = {
      headers: {
        "X-Flatten": true,
        "X-NoResolveLanguages": 1,
        "X-Languages": "en",
        "timeout": 1000,
        "retry": 3,
        "retryDelay": 4000
      }
    };

    // gather data from api
    const { data: companyData } = await GetAsync(baseApiUrl + 'company', config);
    const { data: projectData } = await GetAsync(baseApiUrl + 'project', config);
    const { data: experienceData } = await GetAsync(baseApiUrl + 'experience', config);
    const { data: homeData } = await GetAsync(baseApiUrl + 'home', config);

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

    // home
    const homeCollection = actions.addCollection({ typeName: 'Homes' })
    for (const item of homeData.items) {
      homeCollection.addNode(MapHome(item));
    } 
  })

  async function GetAsync(url, config) {
    return await axios
      .get(url, config)
      .then(response => { return response; })
      .catch(err => { console.log(err); });
  }

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
      "image": {
        "webp": "https://cloud.squidex.io/api/assets/garpunkaldev/" + item.data.image + "?cache=31536000&format=WEBP",
        "url": "https://cloud.squidex.io/api/assets/garpunkaldev/" + item.data.image + "?cache=31536000",
        "alt": item.data.title
      },
      "sortOrder": item.data.SortOrder ?? 0,
      "isHighlight": GetBool(item.data.IsHighlight),
      "isWinner": GetBool(item.data.IsWinner)
    }
  }

  function MapExperience(item, company, projects, contribs) {
    return {
      "id": item.data.id,
      "title": company.data.title,
      "job": item.data.job,
      "location": item.data.location,
      "logo": {
        "webp": "https://cloud.squidex.io/api/assets/garpunkaldev/" + company.data.logo[0] + "?cache=31536000&format=WEBP",
        "url": "https://cloud.squidex.io/api/assets/garpunkaldev/" + company.data.logo[0] + "?cache=31536000",
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

  function MapHome(item) {
    return {
      "id": item.id,
      "title": item.data.title,
      "subTitle": item.data.subTitle,
      "githubUrl": item.data.githubUrl,
      "image": {
        "webp": "https://cloud.squidex.io/api/assets/garpunkaldev/" + item.data.profileImage + "?cache=31536000&format=WEBP",
        "url": "https://cloud.squidex.io/api/assets/garpunkaldev/" + item.data.profileImage + "?cache=31536000",
        "alt": item.data.title
      },
      githubSource: MapLink(item.data.githubSource),
      specialisms: item.data.specialisms.map(p => MapLink(p)),
      socials: item.data.socials.map(p => MapLink(p)),
      footerLinks: item.data.footerLinks.map(p => MapLink(p)),
      projectsLabel: item.data.projectsLabel,
      articlesLabel: item.data.articlesLabel,
      experiencesLabel: item.data.experiencesLabel,
    };
  }

  function MapLink(item) {
    return {
      "title": item.title ?? "",
      "url": item.url ?? "",
      "cssClasses": item.cssClasses?? "",
      "svgPath": item.svgPath?? "",
      "svgStroke": item.svgStroke?? "",
      "svgStrokeWidth": item.svgStrokeWidth?? "",
      "svgFill": item.svgFill?? "",
      "svgStrokeLineCap": item.svgStrokeLineCap?? "",
      "svgStrokeLineJoin": item.svgStrokeLineJoin?? "",
      "rel": item.rel ?? "",
      "displayComponent": item.displayComponent ?? true
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
}