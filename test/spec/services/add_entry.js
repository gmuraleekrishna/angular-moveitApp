"use strict";

describe('Service: AddEntry', function () {

  var addEntryService, httpBackend;
  
  beforeEach(module('leaderboardApp'));


  // Initialize the controller and a mock scope
  beforeEach(inject(function (_addEntryService_, $httpBackend) {
    addEntryService = _addEntryService_;
    httpBackend = $httpBackend;
  }));

  it("should POST an entry", function () {

    var entry = { date: moment().format("DD MMMM YYYY"), duration: 20};
    httpBackend.expectPOST("http://mov3it.herokuapp.com/api/reports", entry).respond(200);
    addEntryService.send(entry);
    httpBackend.flush();
    });
});
