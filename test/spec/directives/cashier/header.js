'use strict';

describe('Directive: cashier/header', function () {

  // load the directive's module
  beforeEach(module('saHackathon2016ClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cashier/header></cashier/header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cashier/header directive');
  }));
});
