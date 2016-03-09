'use strict';

/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp.search').config(config);

  /* @ngInject */
  function config($stateProvider, uiGmapGoogleMapApiProvider) {
    $stateProvider.state('app.search', {
      url: 'search',
      views: {
        'content@': {
          controller: 'SearchController',
          controllerAs: '$ctrl',
          templateUrl: 'search.html'
        }
      }
    });

    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAg9eXVlXzH3OSNsf6Lq9CUdMMYGzEyWS0',
      libraries: 'weather,geometry,visualization,places'
    });
  }
})();
