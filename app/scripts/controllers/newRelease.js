
'use strict';

angular.module('aobappApp')
  .controller('newReleaseCtrl', function($scope) {
    
 
    $scope.releaseCoordinators=['Sandro Ferella','Aatish Das','Appala Srinivas'];
    $scope.selectedReleaseCoordinator=$scope.releaseCoordinators[0];
    
  });



