const skills = [
  {
    id: 'java',
    description: 'Java',
    icon: 'faJava',
    level: '9'
  },
  {
    id: 'html',
    description: 'HTML',
    icon: 'faHtml5',
    level: '9'
  },
  {
    id: 'css',
    description: 'CSS',
    icon: 'faCss3',
    level: '7'
  },
  {
    id: 'js',
    description: 'Javascript',
    icon: 'faJs',
    level: '9'
  },
  {
    id: 'angular',
    description: 'Angular',
    icon: 'faAngular',
    level: '5'
  },
  {
    id: 'react',
    description: 'React',
    icon: 'faReact',
    level: '9'
  },
  {
    id: 'bootstrap',
    description: 'Bootstrap',
    icon: 'faBootstrap',
    level: '7'
  },
  {
    id: 'node',
    description: 'NodeJS',
    icon: 'faNode',
    level: '6'
  }
];

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
  send(skills);
  // }
};
