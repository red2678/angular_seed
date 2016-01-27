'use strict';

(() => {
  // Declare app level module which depends on views, and components
  angular.module('myApp', [
      'ngRoute',
      'ngMaterial',
      'ngMdIcons',
      'myApp.view1',
      'myApp.view2',
      'myApp.version'
    ])
    .config(['$routeProvider', '$mdThemingProvider', routeProvider]);

  function routeProvider($routeProvider, $mdThemingProvider) {
    $routeProvider.otherwise({ redirectTo: '/view1' });

    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('grey')
  }
})();
