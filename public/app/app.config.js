'use strict'
var app = angular.module('app', [])
  .controller('ctrl', ['$scope', function($scope) {
    const menuSelected = 'menuSelected';
    const menuNoSelected = 'menuNoSelected';

    /* data */
    $scope.aJobs = [
      {position: 'Software Engineer', company: 'Tracasa Intrumental', fromDate: new Date(2018, 4, 10), untilDate: 'Present', description: [], skills: ['java','html','css','javascript','angular','angularjs','react','bootstrap']},
      {position: 'Project Manager', company: 'Universidad de Navarra', fromDate: new Date(2014, 1, 1), untilDate: new Date(2018, 4, 9), description: ['Lead, coordinate and supervise the evolution and maintenance plan of the technological solutions of different functional areas', 'Participating in gathering requirements, definition and improvement of processes, functional analysis, approval of offers, risk analysis, definition of integrations.', 'Coordination of multidisciplinary teams and project management.'], skills: ['java','html','css','javascript','angular','angularjs','react','bootstrap']},
      {position: 'Project Manager / Senior Developer', company: 'CONASA', fromDate: new Date(2011, 7, 1), untilDate: new Date(2013, 12, 31), description: ['Responsible for coordinating the evolutionary and corrective of the PDM and PLM (Windchill) application of Gamesa.', 'Development of reports in BI Publisher, development of web applications and evolutionary and corrective maintenance of the applications of the University of Navarre.'], skills: ['java','html','css','javascript','spring','mongodb']},
      {position: 'Senior Developer', company: 'AVALON Tecnologias de la Informacion', fromDate: new Date(2009, 6, 1), untilDate: new Date(2011, 7, 31), description: ['Analysis and development of web applications for the Education Department of the Government of Navarre'], skills: ['java','html','css','javascript','mongodb']},
      {position: 'Senior Developer', company: 'Ibermatica', fromDate: new Date(2007, 2, 8), untilDate: new Date(2009, 5, 30), description: ['Analysis and development of web applications for the Justice Department of the Basque Government.', 'Analysis and development of core applications of Kutxabank bank.'], skills: ['java','html','css','javascript','cobol']},
      {position: 'Developer', company: 'TB-Solutions', fromDate: new Date(2006, 6, 1), untilDate: new Date(2007, 2, 7), description: ['Development of electronic banking, with J2EE technology, applying the MVC architecture. Specifically, analysis and development of the web module of collections and payments.'], skills: ['java','html','css','javascript']},
      {position: 'Developer', company: 'Freelance', fromDate: new Date(2002, 7, 1), untilDate: new Date(2006, 6, 30), description: ['Development and maintenance of web applications.'], skills: ['html','css','javascript']}
    ];

    $scope.classNav = [menuNoSelected, menuNoSelected, menuNoSelected];

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

  }]);
    