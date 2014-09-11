'use strict';

describe('Service: DoctorService', function () {

  // load the service's module
  beforeEach(module('tvugappApp'));

  // instantiate service
  var DoctorService;
  beforeEach(inject(function (_DoctorService_) {
    DoctorService = _DoctorService_;
  }));

  it('should do something', function () {
    expect(!!DoctorService).toBe(true);
  });

});
