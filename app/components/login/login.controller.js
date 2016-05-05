(function() {
    'use strict';

    angular
        .module('LetLife.login')
        .controller('loginController',loginf);

function loginf($scope,$http,API)
{

$scope.a=function(a,b)
{
var jsonLogin = {"grant_type": "password", "username": a, "password": b};


$http({
method: 'GET',
url: API.url+'/v1/email_exists/'+a,
headers:{
  "Content-Type" : "application/json"
},
data: jsonLogin
}).then(function successCallback(response) {
if(response.data.result==true){

   $http({
     method: 'POST',
     url: API.url+'/auth/token',
     headers:{
       "Content-Type" : "application/json"
     },
   data: jsonLogin
   }).then(function successCallback(response) {
        $scope.f="Il token e': "+response.data.access_token;

       // this callback will be called asynchronously
       // when the response is available
     }, function errorCallback(response) {
         $scope.f="inserire pass";
       // called asynchronously if an error occurs
       // or server returns response with an error status.
     });
   }


   else {
     $scope.f = "inserire email valida"
   }

  // this callback will be called asynchronously
  // when the response is available
}, function errorCallback(response) {
    $scope.f=response;
  // called asynchronously if an error occurs
  // or server returns response with an error status.
});








/* $http({
  method: 'POST',
  url: API.url+'/auth/token',
  headers:{
    "Content-Type" : "application/json"
  },
data: jsonLogin
}).then(function successCallback(response) {
     $scope.f=response.data.access_token;

    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
      $scope.f=response;
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });*/
};
}

})();
