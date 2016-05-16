(function(){
  'use strict';
  angular
    .module('LetLife.signup')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/signup',{
          templateUrl: 'view/components/signup/signup.html',
          controller: 'signupController',
          // controllerAs : 'vm'
        })
    }
})();
 
