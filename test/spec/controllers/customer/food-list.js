'use strict';

describe('Controller: CustomerFoodListCtrl', function () {

  // load the controller's module
  beforeEach(module('saHackathon2016ClientApp'));

  var CustomerFoodListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerFoodListCtrl = $controller('CustomerFoodListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CustomerFoodListCtrl.awesomeThings.length).toBe(3);
  });
});
