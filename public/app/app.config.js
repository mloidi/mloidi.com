'use strict'
var app = angular.module('app', [])
  .controller('ctrl', ['$scope', function($scope) {
    const menuSelected = 'menuSelected';
    const menuNoSelected = 'menuNoSelected';
    const typeClass = 'class';
    const typeImage = 'image';
    const typeText = 'text';

    const java = {description: 'java', image: 'java.png', imageType: typeImage, imageStyle: {width: '40px'}};
    const html = {description: 'html', image: 'html.png', imageType: typeImage, imageStyle: {width: '30px'}};
    const css = {description: 'css', image: 'css.png', imageType: typeImage, imageStyle: {width: '30px'}};
    const javascript = {description: 'javascript', image: 'js.png', imageType: typeImage, imageStyle: {width: '30px'}};
    const cobol = {description: 'cobol', image: 'Cobol', imageType: typeText, imageStyle: ''};
    const mongodb = {description: 'mongodb', image: 'mongodb.png', imageType: typeImage, imageStyle: {width: '80px','background-color': '#42494f'}};
    const angular = {description: 'angular', image: 'angular.png', imageType: typeImage, imageStyle:  {width: '80px','background-color': '#1976d2'}};
    const angularjs = {description: 'angularjs', image: 'angularjs.png', imageType: typeImage, imageStyle: {width: '80px'}};
    const react = {description: 'react', image: 'react.svg', imageType: typeImage, imageStyle: {width: '30px'}};
    const bootstrap = {description: 'bootstrap', image: 'bootstrap.png', imageType: typeImage, imageStyle: {width: '20px'}};
    const spring = {description: 'spring', image: 'spring.png', imageType: typeImage, imageStyle:  {width: '20px'}};
    const skills = [java, html, css, javascript, cobol, mongodb, angular, angularjs, react, bootstrap, spring];

    const spanish = 'Es';
    const english = 'En';
    const basque = 'Eu';
    const englishText = {
      spanish: spanish,
      english: english,
      home: 'Home',
      experience: 'Experience',
      myWork: 'My work',
      aboutMe: 'About me',
      workingOnIt: 'Working on it!!',
      resume: 'Resume',
      myWorkDescription: 'Here you can see some things I did'
    };
    const spanishText = {
      spanish: spanish,
      english: english,
      home: 'Inicio',
      experience: 'Experiencia',
      myWork: 'Mis trabajos',
      aboutMe: 'Sobre mi',
      workingOnIt: 'Trabajando en ello!!',
      resume: 'Curriculum',
      myWorkDescription: 'Aqui puedes ver unos ejemplos de cosas que he hecho.'
    };

    /* data */
    $scope.aJobs = [
      {position: 'Software Engineer', company: 'Tracasa Intrumental', companyImage: 'iTracasa.png', companyStyle: '', fromDate: new Date(2018, 3, 10), untilDate: 'Present', description: [], skills: [java,html,css,javascript,angular,angularjs,react,bootstrap]},
      {position: 'Project Manager', company: 'Universidad de Navarra', companyImage: 'unav.png', companyStyle: {background: '#aa0d0f'}, fromDate: new Date(2014, 0, 1), untilDate: new Date(2018, 3, 9), description: ['Lead, coordinate and supervise the evolution and maintenance plan of the technological solutions of different functional areas', 'Participating in gathering requirements, definition and improvement of processes, functional analysis, approval of offers, risk analysis, definition of integrations.', 'Coordination of multidisciplinary teams and project management.'], skills: [java,html,css,javascript,angular,angularjs,react,bootstrap]},
      {position: 'Project Manager / Senior Developer', company: 'CONASA', companyImage: 'conasa.png', companyStyle: '', fromDate: new Date(2011, 6, 1), untilDate: new Date(2013, 11, 31), description: ['Responsible for coordinating the evolutionary and corrective of the PDM and PLM (Windchill) application of Gamesa.', 'Development of reports in BI Publisher, development of web applications and evolutionary and corrective maintenance of the applications of the University of Navarre.'], skills: [java,html,css,javascript,spring,mongodb]},
      {position: 'Senior Developer', company: 'AVALON Tecnologias de la Informacion', companyImage: 'avalon.png', companyStyle: '', fromDate: new Date(2009, 5, 1), untilDate: new Date(2011, 6, 31), description: ['Analysis and development of web applications for the Education Department of the Government of Navarre'], skills: [java,html,css,javascript,mongodb]},
      {position: 'Senior Developer', company: 'Ibermatica', companyImage: 'ibermatica.png', companyStyle: '', fromDate: new Date(2007, 1, 8), untilDate: new Date(2009, 4, 30), description: ['Analysis and development of web applications for the Justice Department of the Basque Government.', 'Analysis and development of core applications of Kutxabank bank.'], skills: [java,html,css,javascript,cobol]},
      {position: 'Developer', company: 'TB-Solutions', companyImage: 'tbs.png', companyStyle: '', fromDate: new Date(2006, 5, 1), untilDate: new Date(2007, 1, 7), description: ['Development of electronic banking, with J2EE technology, applying the MVC architecture. Specifically, analysis and development of the web module of collections and payments.'], skills: [java,html,css,javascript]},
      {position: 'Developer', company: 'Freelance', companyImage: 'noImage.png', companyStyle: '', fromDate: new Date(2002, 6, 1), untilDate: new Date(2006, 5, 30), description: ['Development and maintenance of web applications.'], skills: [html,css,javascript]}
    ];

    $scope.classNav = [menuSelected, menuNoSelected, menuNoSelected];
    $scope.classNavLanguage = [menuSelected, menuNoSelected];

    $scope.language = english;
    $scope.text = englishText;


    $scope.typeClass = typeClass;
    $scope.typeImage = typeImage;
    $scope.typeText = typeText;

    $scope.changeLanguage = (language) => {
      $scope.language = language;
      setAllLanguageMenuNoSelected();
      if (language === english) {
        $scope.text = englishText;
        $scope.classNavLanguage[0] = menuSelected;
      } else {
        $scope.text = spanishText;
        $scope.classNavLanguage[1] = menuSelected;
      }
    }

    $scope.clickMenu = (iMenu) => {
      setAllMenuNoSelected();
      if(isSelected(iMenu)){
        $scope.classNav[iMenu] = menuNoSelected;
      } else {
        $scope.classNav[iMenu] = menuSelected;
      }
    }

    /* Helpers */
    function isSelected(iMenu) {
      return $scope.classNav[iMenu] === menuSelected
    }

    function setAllMenuNoSelected (){
      $scope.classNav = [menuNoSelected, menuNoSelected, menuNoSelected];
    }

    function setAllLanguageMenuNoSelected (){
      $scope.classNavLanguage = [menuNoSelected, menuNoSelected];
    }

  }]);
    
