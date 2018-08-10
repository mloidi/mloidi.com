'use strict'
var app = angular.module('app', [])
  .controller('ctrl', ['$scope', function($scope) {
    const menuSelected = 'menuSelected';
    const menuNoSelected = 'menuNoSelected';

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
    