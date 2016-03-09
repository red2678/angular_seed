'use strict';

/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp.register')
    .controller('RegisterCtrl', [
      '$firebaseArray',
      RegisterCtrl
    ]);

  function RegisterCtrl() {
    const $ctrl = this;
    const ref = new Firebase('https://admin.sbfoodguide.com/');

    // Create a callback which logs the current auth state
    function authDataCallback(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
      } else {
        console.log("User is logged out");
      }
    }

    // Register the callback to be fired every time auth state changes=
    ref.onAuth(authDataCallback);

    $ctrl.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
      return {abbrev: state};
    })

  }
})();
