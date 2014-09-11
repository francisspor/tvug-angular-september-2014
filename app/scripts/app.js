'use strict';

/**
 * @ngdoc overview
 * @name tvugappApp
 * @description
 * # tvugappApp
 *
 * Main module of the application.
 */
var app = angular
  .module('tvugappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/doctors/:id', {
        templateUrl: 'views/doctor.html',
        controller: 'DoctorCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
