/**
 * Created by atrimble on 3/5/16.
 */
'use strict';

(() => {
  angular.module('myApp.components.header')
    .component('sbHeader', {
      templateUrl: 'header.html',
      controller: 'HeaderCtrl',
      controllerAs: '$ctrl'
    });
})();
