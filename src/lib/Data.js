// import Prismic from 'prismic-javascript';

// const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
// const accessToken = process.env.REACT_APP_API_TOKEN;

// const Client = Prismic.client(apiEndpoint, { accessToken });

export const TECHNOLOGIES = {
  _HTML: {
    id: 'html',
    name: 'HTML',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1542456321/mloidi/tech/html.png',
  },
  _CSS: {
    id: 'css',
    name: 'CSS',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1542456321/mloidi/tech/css.png',
  },
  _JAVASCRIPT: {
    id: 'js',
    name: 'JavaScript',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1542456321/mloidi/tech/js.png',
  },
  _REACT: {
    id: 'react',
    name: 'React',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591122048/mloidi/tech/react.png',
  },
  _NEXTJS: {
    id: 'nextJS',
    name: 'Next.js',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591122346/mloidi/tech/NextJS.png',
  },
  _GRAPHQL: {
    id: 'graphQL',
    name: 'GraphQL',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591121704/mloidi/tech/GraphQL.png',
  },
  _APOLLO: {
    id: 'apollo',
    name: 'Apollo',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591122484/mloidi/tech/apollo.png',
  },
  _FIREBASE: {
    id: 'firebase',
    name: 'Firebase',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591122048/mloidi/tech/Firebase.png',
  },
  _NODE: {
    id: 'node',
    name: 'NodeJS',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591122048/mloidi/tech/Node.png',
  },
  _MONGODB: {
    id: 'mongodb',
    name: 'MongoDB',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1542456321/mloidi/tech/mongodb.png',
  },
  _PASSPORT: {
    id: 'passport',
    name: 'Passport',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591123463/mloidi/tech/Passport.png',
  },
  _GOOGLEMAPS: {
    id: 'googlemaps',
    name: 'Google Maps',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591122048/mloidi/tech/Google_maps.png',
  },
  _EXPRESS: {
    id: 'express',
    name: 'Express',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591122048/mloidi/tech/Expressjs.png',
  },
  _ANGULARJS: {
    id: 'angularjs',
    name: 'AngularJS',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591122048/mloidi/tech/angularJS.png',
  },
  _BOOTSTRAP: {
    id: 'bootstrap',
    name: 'Bootstrap',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/v1591122048/mloidi/tech/bootstrap.png',
  },
};

export const getTechnologies = () => {
  return [
    TECHNOLOGIES._HTML,
    TECHNOLOGIES._CSS,
    TECHNOLOGIES._JAVASCRIPT,
    TECHNOLOGIES._REACT,
    TECHNOLOGIES._NEXTJS,
    TECHNOLOGIES._GRAPHQL,
    TECHNOLOGIES._APOLLO,
    TECHNOLOGIES._FIREBASE,
    TECHNOLOGIES._NODE,
    TECHNOLOGIES._PASSPORT,
    TECHNOLOGIES._GOOGLEMAPS,
    TECHNOLOGIES._EXPRESS,
    TECHNOLOGIES._ANGULARJS,
    TECHNOLOGIES._BOOTSTRAP,
  ];
};

const works = [
  {
    id: 1,
    company: 'Tracasa Intrumental',
    companyURL: 'http://itracasa.es',
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        id: 1,
        title: 'IT Project Manager',
        startDate: new Date(2019, 0, 1),
        endDate: null,
        descriptions: [
          {
            id: 1,
            text:
              'Project management of the Department of Health of the Government of Navarre.',
          },
        ],
      },
      {
        id: 2,
        title: 'Functional Analyst',
        startDate: new Date(2018, 3, 10),
        endDate: new Date(2018, 11, 31),
        descriptions: [
          {
            id: 1,
            text:
              'Functional analysis of BPM processes, applications and integration between information systems',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'University of Navarra',
    titleURL: 'https://www.unav.edu/',
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        id: 1,
        title: 'IT Project Manager',
        startDate: new Date(2014, 0, 1),
        endDate: new Date(2018, 3, 9),
        descriptions: [
          {
            id: 1,
            text:
              'Lead, coordinate and supervise the evolution and maintenance plan of the technological solutions of different functional areas',
          },
          {
            id: 2,
            text:
              'Gathered requirements, definition and improvement of processes, functional analysis, approval of offers, risk analysis, definition of integrations.',
          },
          {
            id: 3,
            text:
              'Coordination of multidisciplinary teams and project management.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    company: 'CONASA',
    companyURL: 'http://www.conasa.es',
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        id: 1,
        title: 'Developer',
        startDate: new Date(2012, 3, 15),
        endDate: new Date(2013, 11, 31),
        descriptions: [
          {
            id: 1,
            text:
              'Development of reports in BI Publisher, development of web applications and evolutionary and corrective maintenance of the applications of the University of Navarra.',
          },
        ],
      },
      {
        id: 2,
        title: 'IT Project Manager',
        startDate: new Date(2011, 6, 1),
        endDate: new Date(2012, 3, 15),
        descriptions: [
          {
            id: 1,
            text:
              'Responsible for coordinating the evolutionary and corrective of the PDM and PLM (Windchill) application for Gamesa.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    company: 'AVALON Tecnologias de la Informacion',
    companyURL: 'https://grupoavalon.es/index.html',
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        id: 1,
        title: 'Developer',
        startDate: new Date(2009, 5, 1),
        endDate: new Date(2011, 6, 31),
        descriptions: [
          {
            id: 1,
            text:
              'Analysis and development of web applications for the Department of Education of the Government of Navarre.',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    company: 'Ibermatica',
    companyURL: 'http://ibermatica.com',
    location: 'Donostia, Gipuzkoa (Spain)',
    roles: [
      {
        id: 1,
        title: 'Developer',
        startDate: new Date(2007, 1, 8),
        endDate: new Date(2009, 4, 30),
        descriptions: [
          {
            id: 1,
            text:
              'Analysis and development of applications for the Department of Justice of the Basque Government',
          },
          {
            id: 2,
            text:
              'Analysis and development of core applications for Kutxabank bank.',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    company: 'TB-Solutions',
    companyURL: null,
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        id: 1,
        title: 'Developer',
        startDate: new Date(2006, 5, 1),
        endDate: new Date(2007, 1, 7),
        descriptions: [
          {
            id: 1,
            text:
              'Development of electronic banking, with J2EE technology, applying the MVC architecture. Specifically, analysis and development of the web module of collections and payments.',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    company: 'Freelance',
    companyURL: null,
    location: 'Pamplona, Navarre (Spain)',
    roles: [
      {
        id: 1,
        title: 'Developer',
        startDate: new Date(2002, 6, 1),
        endDate: new Date(2006, 5, 30),
        descriptions: [
          {
            id: 1,
            text: 'Development and maintenance of web applications.',
          },
        ],
      },
    ],
  },
];

const studies = [
  {
    id: 1,
    title: 'Master in Project Management PMP',
    titleURL:
      'https://www.unir.net/ingenieria/master-project-management/549200001441/',
    place: 'Universidad Internacional de la Rioja',
    placeURL: 'https://www.unir.net',
    finishDate: new Date(2016, 5, 1),
    location: 'Logroño, La Rioja (Spain)',
  },
  {
    id: 2,
    title: 'Bachelor Degree in Computer Engineering',
    titleURL: 'https://www.ehu.eus/es/grado-ingenieria-informatica',
    place: 'University of Basque Country',
    placeURL: 'https://www.ehu.eus/en/',
    finishDate: new Date(2010, 9, 1),
    location: 'San Sebastian, Gipuzkoa (Spain)',
  },
  {
    id: 3,
    title: 'Development of Computer Applications',
    titleURL: null,
    place: 'Instituto María Ana Sanz',
    placeURL: 'http://www.mariaanasanz.es/',
    finishDate: new Date(2002, 6, 1),
    location: 'Pamplona, Navarra (Spain)',
  },
];

const courses = [
  {
    id: 1,
    place: 'Wes Bos',
    placeUrl: 'https://wesbos.com/',
    title: 'Fullstack Advanced React & GraphQL',
    titleUrl: 'https://advancedreact.com',
    description:
      'It’s GraphQL API with Node.js on the backend and React and Apollo on the front end. The course cover everything from authentication and sending email to upload/c_scale,h_80ing photos and caching data. The entire front - end is built in modern React and GraphQL. ',
    finishDate: new Date(2018, 10, 1),
    appTitle: 'Sick Fits',
    appUrl: 'https://mloidi-store-prod.herokuapp.com',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1554404407/mloidi/sickFits.png',
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._REACT,
      TECHNOLOGIES._NEXTJS,
      TECHNOLOGIES._GRAPHQL,
      TECHNOLOGIES._APOLLO,
    ],
  },
  {
    id: 2,
    place: 'Wes Bos',
    placeUrl: 'https://wesbos.com/',
    title: 'React For Beginners',
    titleUrl: 'https://reactforbeginners.com/',
    description:
      'A premium step-by-step training course to get you building real world React + Firebase apps and website components. ',
    finishDate: new Date(2018, 6, 1),
    appTitle: 'Catch Of The Day',
    appUrl: 'https://cotd.mloidi.com',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1554404407/mloidi/catchDay.png',
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._REACT,
      TECHNOLOGIES._FIREBASE,
    ],
  },
  {
    id: 3,
    place: 'Wes Bos',
    placeUrl: 'https://wesbos.com/',
    title: 'Learn Node',
    titleUrl: 'https://learnnode.com/',
    description:
      'A premium training course to learn to build apps with Node.js, Express and MongoDB.',
    finishDate: new Date(2018, 5, 1),
    appTitle: "Now That's Delicious!",
    appUrl: 'https://mloidi-app-jskauyrogh.now.sh',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1554404407/mloidi/thatsDelicious.png',
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._NODE,
      TECHNOLOGIES._MONGODB,
      TECHNOLOGIES._PASSPORT,
      TECHNOLOGIES._GOOGLEMAPS,
      TECHNOLOGIES._EXPRESS,
    ],
  },
  {
    id: 4,
    place: 'Level Up Tutorials',
    placeUrl: 'https://www.leveluptutorials.com/',
    title: 'FullStack React with NextJS',
    titleUrl:
      'https://www.leveluptutorials.com/tutorials/fullstack-react-with-nextjs',
    description:
      'In this series, we will learn full-stack react with Next.js v9 and build an API with Apollo and MongoDB.',
    finishDate: new Date(2019, 11, 15),
    appTitle: "Now That's Delicious!",
    appUrl: 'https://tracker.mloidi.now.sh',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1589390801/mloidi/tracker.png',
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._REACT,
      TECHNOLOGIES._MONGODB,
      TECHNOLOGIES._NEXTJS,
      TECHNOLOGIES._GRAPHQL,
      TECHNOLOGIES._APOLLO,
    ],
  },
  {
    id: 5,
    type: 'course',
    place: 'Microsoft Academy',
    placeUrl: 'https://academy.microsoft.com/en-us/professional-program/',
    title: 'Microsoft Professional Program for Front-End Web Development',
    titleUrl:
      'https://academy.microsoft.com/en-us/certificates/3f8d10b9-784c-403b-bd96-367182a13aa3/',
    description: 'Knowledge acquired:',
    descriptionDetails: [
      'Build Dynamic Web Apps',
      'Use CSS to Build a Powerful Web UI',
      'Use UI Frameworks to Build a Responsive Web UI',
      'Use a Framework to Build a Dynamic Web UI',
      'Use a Framework to Simplify and Manage Data Binding',
      'Use a Framework to Build a Complex Single - Page Application',
      'Use Cloud Services to Create Web Apps with High Availability and Scale',
      'Use DevOps Tools and Processes to Manage Web Application Projects',
    ],
    finishDate: new Date(2018, 4, 1),
    appTitle: 'World Wide Importers',
    appUrl: 'https://worldwideimporters.mloidi.com',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1554404407/mloidi/worldImporters.png',
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._ANGULARJS,
      TECHNOLOGIES._BOOTSTRAP,
    ],
  },
];

const portfolios = [
  {
    id: 1,
    title: 'Mikel Loidi',
    titleURL: 'https://mloidi.com',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1594108321/mloidi/mloidi.png',
    location: null,
    description:
      'Make sure to check out my personal profile. Here you´ll get to know me through my work and interests.',
    public: true,
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._REACT,
    ],
    gitHubURL: 'https://github.com/mloidi/mloidi.com',
  },
  {
    id: 2,
    title: 'News about ...',
    titleURL: 'https://news.mloidi.com',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1554396432/mloidi/news.png',
    location: null,
    description:
      'It’s always been my belief that you need to check out all the different news outlets to really get a deeper understanding of what is going on in the world. So out of that personal passion, I created a platform to be able to get all the most relevant information from various resources. This is my go-to every morning with my coffee.',
    public: true,
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._REACT,
    ],
    gitHubURL: 'https://github.com/mloidi/news',
  },
  {
    id: 3,
    title: 'Contacts',
    titleURL: 'https://contacts.mloidi.com',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1554396432/mloidi/contacts.png',
    location: null,
    description:
      'If you´re like me and have lots of contacts saved in your phone, you might get lost when you are looking for that one particular person. I created this visual layout by keeping in mind that this could also help others in a company setting too. To login use "demo@mloidi.com" user name and "demo" like a password',
    public: true,
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._REACT,
      TECHNOLOGIES._MONGODB,
    ],
    gitHubURL: 'https://github.com/mloidi/contacts',
  },
  {
    id: 4,
    title: 'Cristaleria Bricovidrio',
    titleURL: 'https://bricovidrio.mloidi.com',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1554396432/mloidi/bricovidrio.png',
    location: null,
    description: 'Sample demo webpage for a glassware company.',
    public: false,
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._REACT,
    ],
    gitHubURL: 'https://github.com/mloidi/mloidi.com',
  },
  {
    id: 5,
    title: 'Weather',
    titleURL: 'https://weather.mloidi.com',
    imageURL:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,h_80/c_scale,w_300/v1594108642/mloidi/weather.png',
    location: null,
    description:
      'Because I live in a city that can have all seasons in one day, I really needed to try my hand at creating a weather website. Even with this, I will always have on me an umbrella, sunglasses and a windbreaker.',
    public: true,
    technologies: [
      TECHNOLOGIES._HTML,
      TECHNOLOGIES._CSS,
      TECHNOLOGIES._JAVASCRIPT,
      TECHNOLOGIES._REACT,
    ],
    gitHubURL: 'https://github.com/mloidi/weather',
  },
];

export const getWorks = () => {
  return works;
};

export const getStudies = () => {
  return studies;
};

export const getCourses = () => {
  return courses;
};

export const getPortfolios = () => {
  return portfolios.filter((portfolio) => {
    return portfolio.public;
  });
};

export const sample = (param) => {
  const array = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }

  if(array.length === 10 ){
    return false;
  }

  return true;
};

// export const getWorks = async () => {
//   const response = await Client.query(
//     Prismic.Predicates.at('document.type', 'work'),
//     {
//       orderings: '[my.work.order]',
//     }
//   );
//   if (response) {
//     return convertData(response.results);
//   }

//   return null;
// };

// export const convertData = (docs) => {
//   return docs.map((doc) => {
//     return {
//       id: doc.id,
//       companyURL: doc.data.titleurl.url,
//       company: doc.data.company[0].text,
//       location: doc.data.location,
//       roles: doc.data.body.map((item) => {
//         return {
//           id: item.primary.id,
//           title: item.primary.role[0].text,
//           startDate: item.primary.start_date,
//           endDate: item.primary.end_date,
//           descriptions: item.items.map((description) => {
//             return {
//               id: description.id,
//               text: description.description[0].text,
//             };
//           }),
//         };
//       }),
//     };
//   });
// };
