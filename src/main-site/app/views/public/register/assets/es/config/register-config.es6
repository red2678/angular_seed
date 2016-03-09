/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp.register').config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider.state('app.register', {
      url: 'register',
      views: {
        'content@': {
          controller: 'RegisterCtrl',
          controllerAs: '$ctrl',
          templateUrl: 'register.html'
        }
      }
    });
  }
})();
