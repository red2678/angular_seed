'use strict';

/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl(myFirebase) {
    const $ctrl = this;
    $ctrl.login = login;

    $ctrl.user = {};

    function login() {
      myFirebase.login($ctrl.user.email, $ctrl.user.password);
    }

  }
})();
