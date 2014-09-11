'use strict';

/**
 * @ngdoc function
 * @name tvugappApp.controller:DoctorCtrl
 * @description
 * # DoctorCtrl
 * Controller of the tvugappApp
 */
app.controller('DoctorCtrl', function ($scope, $routeParams, DoctorService) {
  $scope.doctor = null;

  DoctorService.Get($routeParams.id).then(function(doc) {
    $scope.doctor = doc;
  });
});
