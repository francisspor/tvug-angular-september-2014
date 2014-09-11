'use strict';

/**
 * @ngdoc service
 * @name tvugappApp.DoctorService
 * @description
 * # DoctorService
 * Service in the tvugappApp.
 */
 app.service('DoctorService', function DoctorService($http, $q) {

   this.doctors = function() {
     var deferred = $q.defer();
     $http.get('http://localhost/TheDoctors/api/Doctors')
     .success(function(data) {
       deferred.resolve(data);
     }).error(function(data) {
       deferred.reject(data);
     });
     return deferred.promise;
   };

  this.Get = function(id) {
    var deferred = $q.defer();
    $http.get('http://localhost/TheDoctors/api/Doctors/' + id)
    .success(function(data) {
      deferred.resolve(data);
    }).error(function(data) {
      deferred.reject(data);
    });
    return deferred.promise;
  };

  this.addDoctor = function(doctor) {
    $http.post('http://localhost/TheDoctors/api/Doctors', doctor);
  };
 });
