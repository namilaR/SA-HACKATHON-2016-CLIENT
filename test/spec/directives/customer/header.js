'use strict';

describe('Directive: customer/header', function () {

  // load the directive's module
  beforeEach(module('saHackathon2016ClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<customer/header></customer/header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the customer/header directive');
  }));
});
