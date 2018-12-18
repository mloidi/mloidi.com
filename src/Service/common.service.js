const skills = [
  {
    id: 'java',
    description: 'Java',
    level: '9',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/java.png'
  },
  {
    id: 'html',
    description: 'HTML',
    level: '9',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/html.png'
  },
  {
    id: 'css',
    description: 'CSS',
    level: '8',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/css.png'
  },
  {
    id: 'js',
    description: 'Javascript',
    level: '8',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/js.png'
  },
  {
    id: 'angular',
    description: 'Angular',
    level: '5',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_100,b_rgb:092da9/v1542456321/mloidi/angular.png'
  },
  {
    id: 'angularjs',
    description: 'AngularJS',
    level: '7',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_100/v1542456321/mloidi/angularjs.png'
  },
  {
    id: 'react',
    description: 'ReactJS',
    level: '6',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/react.png'
  },
  {
    id: 'bootstrap',
    description: 'Bootstrap',
    level: '7',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/bootstrap.png'
  },
  {
    id: 'mongodb',
    description: 'MongoDB',
    level: '6',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_100,b_rgb:000000/v1542456321/mloidi/mongodb.png'
  },
  {
    id: 'spring',
    description: 'Spring',
    level: '5',
    status: 'noSelected',
    url:
      'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/spring.png'
  }
];

export const CommonService = {
  getSkills: () => {
    return skills;
  }
};
