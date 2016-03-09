/**
 * Created by atrimble on 3/5/16.
 */
'use strict';

(() => {
  angular.module('myApp.components.footer')
    .component('sbFooter', {
      templateUrl: 'footer.html',
      controller: 'FooterCtrl',
      controllerAs: '$ctrl'
    });
})();
