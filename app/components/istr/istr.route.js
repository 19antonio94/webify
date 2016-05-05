(function(){
  'use strict';
  angular
    .module('LetLife.istr')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/istruzioni',{
          templateUrl: 'view/components/istr/istr.html',
          controller: 'istrController',
          // controllerAs : 'vm'
        })
    }
})();
