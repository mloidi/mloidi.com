const about = {
  name: 'Mikel Loidi',
  descriptions: [
    { line: 1, text: 'Hi, my name is Mikel Loidi. ' },
    {
      line: 2,
      text:
        'I am a web developer currently located in Pamplona Spain. You know, the running of the bulls. When I’m not running with them, my main focus is to developing new web technologies. In my free time, I am constantly experimenting with new projects, pushing my skills to adapt  the latest web tech to build new web designs.'
    },
    {
      line: 3,
      text:
        'I am passionate about development and design. On the frontend, I work mainly with React while on the backend I work with Node and Express. As for a data base I prefer to use MongoDB.'
    },
    {
      line: 4,
      text:
        'As a growing community, the web industry is one that I have learned so much from and hope to give back just as much. I am mostly excited about the future of this industry. There is so much we have yet to discover, and I cannot wait to see what is coming next.'
    }
  ],
  profile:
    'Advanced developer with 15 years of experience in structuring, developing and implementing applications and innovative use of technology. Able to complete projects efficiently and satisfy clients.',
  areas: [
    'Advanced programming and design skills',
    'Excellent problem solving skills',
    'Strong collaborative skills',
    'Project Management'
  ],
  github: 'https://github.com/mloidi/',
  githubIcon: 'faGithub',
  linkedin: 'https://www.linkedin.com/in/mikel-loidi-ardanaz/',
  linkedinIcon: 'faLinkedin',
  twitter: 'https://twitter.com/mikelloidi',
  twitterIcon: 'faTwitter',
  mail: 'mailto:mikel@mloidi.com',
  mailIcon: 'faEnvelope'
};

exports.handler = (event, context, callback) => {
  const send = body => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Request-With, Content-Type, Accept'
      },
      body: JSON.stringify(body)
    });
  };

  // if (event.httpMethod == 'GET') {
    send(about);
  // }
};
