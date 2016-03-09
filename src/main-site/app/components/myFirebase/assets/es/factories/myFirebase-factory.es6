'use strict';

/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp.components.myFirebase')
    .factory('myFirebase', myFirebase);

  function myFirebase($log) {

    // Firebase.enableLogging(true);

    const _url = 'https://angular1xseed.firebaseapp.com';
    const _ref = new Firebase(_url);

    return {
      register: (email, password) => {
        _ref.createUser({ email, password }, returnErrorMessage);

        function returnErrorMessage(error, userData) {
          if (error) {
            switch (error.code) {
              case 'EMAIL_TAKEN':
                $log('The new user account cannot be created because the email is already in use.');
                break;
              case 'INVALID_EMAIL':
                $log('The specified email is not a valid email.');
                break;
              default:
                $log('Error creating user:', error);
            }
          } else {
            $log('Successfully created user account with uid:', userData.uid);
            $log('user data', userData);
          }
        }
      },
      login: (email, password) => {
        return _ref.authWithPassword({ email, password }, returnErrorMessage);

        function returnErrorMessage(error, authData) {
          if (error) {
            $log('Login Failed!', error);
          } else {
            $log('Authenticated successfully with payload:', authData);
          }
        }
      },
      addItem: (item) => {
        _ref.push(item);
      },
      removeAll: () => {
        _ref.remove();
      },
      deleteItem: (id) => {
        const itemRef = new Firebase(_url + '/' + id);
        itemRef.remove();
      }
    };
  }
})();
