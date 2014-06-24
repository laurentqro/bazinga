'use strict';

/* jasmine specs for controllers go here */

describe('Controllers', function() {
  beforeEach(module('MyApp'))

  it('should have a MainCtrl controller', inject(function($controller) {
    var MainCtrl = $controller('MainCtrl', { $scope: {} });
    expect(MainCtrl).toBeDefined();
  }));

  it('should have a DetailCtrl controller', inject(function($controller) {
    var DetailCtrl = $controller('DetailCtrl', { $scope: {} });
    expect(DetailCtrl).toBeDefined();
  }));

  it('should have a LoginCtrl controller', inject(function($controller) {
    var LoginCtrl = $controller('LoginCtrl', { $scope: {} });
    expect(LoginCtrl).toBeDefined();
  }));

  it('should have a NavbarCtrl controller', inject(function($controller) {
    var NavbarCtrl = $controller('NavbarCtrl', { $scope: {} });
    expect(NavbarCtrl).toBeDefined();
  }));

  it('should have a LoginCtrl controller', inject(function($controller) {
    var SignupCtrl = $controller('SignupCtrl', { $scope: {} });
    expect(SignupCtrl).toBeDefined();
  }));

});


