describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('leaderboardApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('sets the current date and default duration', function () {
    expect(scope.entry.date).toBe(moment().format("DD MMMM YYYY"));
    expect(scope.entry.duration).toBe(20);
  });
});
