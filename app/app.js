(function() {
  'use strict';

  var LetLife = angular
  .module('LetLife', [
    // vendors libs
    'ngRoute',
    'ngStorage',
    'ngResource',

    'LetLife.header',

    'LetLife.underconstruction',

    'LetLife.istr',
    'LetLife.login',
    'LetLife.pagina',
    'LetLife.signup'



  ])

  LetLife.config(config);

  function config( $routeProvider, $httpProvider, $localStorageProvider){
   /* TODO
   if logged goto dashboard, if not goto login
   */

     $httpProvider.interceptors.push('myHttpInterceptor');


/*    $routeProvider.when('/login', {
         templateUrl:'/home/ad2014/Scrivania/webify/build/view/components/login/login.html',
         controller:'loginCtrl'
    }
  );*/
      $routeProvider.otherwise({
          redirectTo: function() {
              window.location = '#/uc'
          }
      });
   };

 LetLife.run(run);

 function run($localStorage, $rootScope){
   if ($localStorage.isLogged === false){
     angular.element( document.querySelector( '#html')).addClass('full');
   }
 }

})();
