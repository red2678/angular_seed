/**
 * Created by atrimble on 3/5/16.
 */
'use strict';

(() => {
  angular.module('myApp.components.sidenav')
    .component('sbSidenav', {
      controller: 'SidenavCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'sidenav.html'
    });
})();
