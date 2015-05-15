'use strict';

angular
  .module('leaderboardApp', [
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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/leaderboard.html', {
        templateUrl: 'views/leaderboard.html',
        controller: 'leaderboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
