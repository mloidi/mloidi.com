const skills = [
  {id:'java',status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/java.png'},
  {id:'html',status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/html.png'},
  {id:'css',status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/css.png'},
  {id:'js',status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/js.png'},
  {id:'angular',status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_100,b_rgb:092da9/v1542456321/mloidi/angular.png'},
  {id: 'angularjs', status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_100/v1542456321/mloidi/angularjs.png'},
  {id: 'react', status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/react.png'},
  {id: 'bootstrap', status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/bootstrap.png'},
  {id: 'mongodb', status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_100,b_rgb:000000/v1542456321/mloidi/mongodb.png'},
  {id:'spring',status: 'noSelected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/spring.png'},
];

export const CommonService = {
  getSkills: () => {
    return skills;
  }
};
