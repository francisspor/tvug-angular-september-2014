'use strict';

/**
 * @ngdoc function
 * @name tvugappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tvugappApp
 */
app.controller('MainCtrl', function ($scope, $window, DoctorService) {
  $scope.doctors = [];

  DoctorService.doctors().then(function(docs) {
    $scope.doctors = docs;
  });

  $scope.addDoctor = function(doc) {
    DoctorService.addDoctor(angular.copy(doc));
    $window.location.href = '#/';
  };
});
