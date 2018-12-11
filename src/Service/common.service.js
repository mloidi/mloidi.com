const skills = [
  {id:'java',status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/java.png'},
  {id:'html',status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/html.png'},
  {id:'css',status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/css.png'},
  {id:'png',status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/js.png'},
  {id:'angular',status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_100,b_rgb:092da9/v1542456321/mloidi/angular.png'},
  {id: 'angularjs', status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_100/v1542456321/mloidi/angularjs.png'},
  {id: 'react', status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/react.png'},
  {id: 'bootstrap', status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/bootstrap.png'},
  {id: 'mongodb', status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_100,b_rgb:000000/v1542456321/mloidi/mongodb.png'},
  {id:'spring',status: 'selected', url: 'https://res.cloudinary.com/mloidi/image/upload/c_scale,w_40/v1542456321/mloidi/spring.png'},
];

export const CommonService = {
  getSkills: () => {
    return skills;
  }
};
