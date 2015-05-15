'use strict';

/**
 * @ngdoc service
 * @name calculatorApp.addEntry
 * @description
 * # addEntry
 * Service in the calculatorApp.
 */
angular.module('leaderboardApp')
  .service('addEntryService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.send = function(entry){
      $http.post('http://mov3it.herokuapp.com/api/reports', { date: entry.date, duration: entry.duration});
      };
    });
