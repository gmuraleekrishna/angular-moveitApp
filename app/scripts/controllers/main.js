'use strict';

angular.module('leaderboardApp')
  .controller('MainCtrl', function ($scope, addEntryService) {
    $scope.entry = {
      date: moment().format("DD MMMM YYYY"),
      duration: 20
    };

    this.addEntry = function(entry){
      addEntryService.send(entry);
    };
  });
