'use strict';

angular.module('myApp.view2', ['ngRoute'])
  .config(['$routeProvider', config]);

function config($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2.html',
    controller: 'View2Ctrl'
  });
}
