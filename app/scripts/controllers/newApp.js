'use strict';

/**
 * @ngdoc function
 * @name aobappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aobappApp
 */
angular.module('aobappApp')
  .controller('newAppCtrl', function($scope) {
    
    $scope.selectedPriority="Low";
    $scope.partOf="BAU";
    $scope.type="SOX";
  
    
    $scope.priorities = {
        Low : "Low",
        Medium : "Medium",
        High : "High"
    };
    
    $scope.releases=['Jan17','Feb17','Mar17'];
    $scope.selectedRelease=$scope.releases[0];
    
    $scope.isgConsultants=['Vinodini Govindraj','Robert Murace','Alex Linnik','Elke'];
    $scope.selectedAppIsgConsultant=$scope.isgConsultants[0];
    
    
  });
