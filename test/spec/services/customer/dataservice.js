'use strict';

describe('Service: customer/dataservice', function () {

  // load the service's module
  beforeEach(module('saHackathon2016ClientApp'));

  // instantiate service
  var customer/dataservice;
  beforeEach(inject(function (_customer/dataservice_) {
    customer/dataservice = _customer/dataservice_;
  }));

  it('should do something', function () {
    expect(!!customer/dataservice).toBe(true);
  });

});
