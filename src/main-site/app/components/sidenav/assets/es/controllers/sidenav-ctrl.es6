'use strict';

/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp.components.sidenav')
    .controller('SidenavCtrl', SidenavCtrl);

  /* @ngInject */
  function SidenavCtrl($mdSidenav) {
    const $ctrl = this;

    $ctrl.close = () => {
      const nav = $mdSidenav('left');
      if (nav.isOpen()) {
        nav.close();
      }
    };
  }
})();
