'use strict';

/**
 * @ngdoc overview
 * @name aobappApp
 * @description
 * # aobappApp
 *
 * Main module of the application.
 */
angular
  .module('aobappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/app/newApp', {
        templateUrl: 'views/newApp.html',
        controller: 'newAppCtrl',
        controllerAs: 'newApp'
      })    
    .when('/app/appLayers',{
       templateUrl:'views/appLayers.html',
        controller:'appLayersCtrl',
        controllerAs:'appLayers'
        })    
    .when('/database/newDatabase',{
        templateUrl:'views/newDatabase.html',
        controller:'newDatabaseCtrl',
        controllerAs:'newDatabase'
    })    
    .when('/release/newRelease',{
        templateUrl:'views/newRelease.html',
         controller: 'newReleaseCtrl',
        controllerAs: 'newRelease'
    }) 
     .otherwise({
        redirectTo: '/'
      });
  });
