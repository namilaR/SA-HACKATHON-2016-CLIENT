'use strict';

describe('Controller: CustomerHeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('saHackathon2016ClientApp'));

  var CustomerHeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerHeaderCtrl = $controller('CustomerHeaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomerHeaderCtrl.awesomeThings.length).toBe(3);
  });
});
