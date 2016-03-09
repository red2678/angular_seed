'use strict';

/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp.components.header')
    .controller('HeaderCtrl', HeaderCtrl);

  /* @ngInject */
  function HeaderCtrl($mdSidenav, $timeout, $scope) {
    const $ctrl = this;
    $ctrl.toggleLeft = buildDelayedToggler('left');

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait) {
      let timer;

      return function debounced() {
        const context = $scope;
        const args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(() => {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(() => {

        $mdSidenav(navID)
          .toggle();
      }, 200);
    }
  }
})();
