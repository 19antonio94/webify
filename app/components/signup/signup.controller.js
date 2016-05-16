(function() {
    'use strict';

    angular
        .module('LetLife.signup')
        .controller('signupController',signupf);

function signupf($scope,$http,API,$window,$location)
{
$scope.f="NULL";
$scope.a=function(email,password,terms,nda,privacy){
  var jsonLogin = {"email": email, "password": password, "termsConditions": terms, "nda": nda, "privacy": privacy};

  $http({
    method: 'POST',
    url: API.url+'/v1/signup',
    headers:{
      "Content-Type" : "application/json"
    },
    data: jsonLogin
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.f="Registrato";
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.f=response.data.error;
    });

       }

}

})();
