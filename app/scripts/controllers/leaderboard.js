'use strict';

/**
 * @ngdoc function
 * @name calculatorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the calculatorApp
 */
angular.module('leaderboardApp')
  .factory('leaderboardService', function($http){
    var leaderboard = this;
    var month = moment().format("DD MMMM YYYY");

    $http.get('http://mov3it.herokuapp.com/api/new_leaderboard', {
      params:
      {
        "month": month, "email_id": "muraleekrishna.g@multunus.com"
      }
    }).success(function(data){
      leaderboard = data;
    });
    
    return {
      $get: {    
        leaderboard: leaderboard
        }
    };
  })
  .controller('leaderboardCtrl', function ( leaderboardService, $scope) {
    $scope.users = leaderboardService.leaderboard.users;
    $scope.leaderboard = leaderboardService.leaderboard;
  })
  .directive('userList', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/templates/user-list.html'
    };
  });
  
