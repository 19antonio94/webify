(function(){
  'use strict';
  angular
    .module('LetLife.login')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/login',{
          templateUrl: 'view/components/login/login.html',
          controller: 'loginController',
          // controllerAs : 'vm'
        })
    }
})();
