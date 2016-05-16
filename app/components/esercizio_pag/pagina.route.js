(function(){
  'use strict';
  angular
    .module('LetLife.pagina')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/pagina',{
          templateUrl: 'view/components/esercizio_pag/pagina.html',
          controller: 'paginaController',
          // controllerAs : 'vm'
        })
    }
})();
