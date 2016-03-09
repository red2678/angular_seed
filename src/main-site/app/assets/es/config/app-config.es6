/**
 * Created by atrimble on 2/27/16
 */

(() => {
  angular.module('myApp').config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('app', {
      url: '/',
      views: {
        header: {
          template: '<sb-header></sb-header>'
        },
        sidebar: {
          template: '<sb-sidenav></sb-sidenav>'
        },
        content: {
          controller: 'AppCtrl',
          controllerAs: '$ctrl',
          templateUrl: 'content.html'
        },
        footer: {
          template: '<sb-footer></sb-footer>'
        }
      }
    });

    const customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      contrastDefaultColor: 'light',
      contrastDarkColors: ['50'],
      50: 'ffffff'
    });

    $mdThemingProvider.definePalette('customBlue', customBlueMap);

    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        default: '500',
        'hue-1': '50'
      })
      .accentPalette('pink');

    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('grey');
  }
})();
