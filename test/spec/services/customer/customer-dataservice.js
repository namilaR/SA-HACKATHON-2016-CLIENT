'use strict';

describe('Service: customer/customerDataservice', function () {

  // load the service's module
  beforeEach(module('saHackathon2016ClientApp'));

  // instantiate service
  var customer/customerDataservice;
  beforeEach(inject(function (_customer/customerDataservice_) {
    customer/customerDataservice = _customer/customerDataservice_;
  }));

  it('should do something', function () {
    expect(!!customer/customerDataservice).toBe(true);
  });

});
