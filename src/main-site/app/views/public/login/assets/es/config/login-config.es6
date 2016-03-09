/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp.login').config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('app.login', {
      url: 'login',
      views: {
        'content@': {
          controller: 'LoginCtrl',
          controllerAs: '$ctrl',
          templateUrl: 'login.html'
        }
      }
    });
  }
})();
