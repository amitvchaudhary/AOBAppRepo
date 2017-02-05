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
    
    
    $scope.cars = {
        Low : "Low",
        Medium : "Medium",
        High : "High"
    };
    
    
    
  });
