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
      .when('/newApp', {
        templateUrl: 'views/newApp.html',
        controller: 'newAppCtrl',
        controllerAs: 'newApp'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/codeeasy', {
        templateUrl: 'views/codeeasy.html',
        controller: 'CodeeasyCtrl',
        controllerAs: 'codeeasy'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
