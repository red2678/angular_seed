'use strict';

(() => {
  angular.module('myApp.view1')
    .controller('View1Ctrl', ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$mdMedia', function ($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $mdMedia) {
      $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
      };
      $scope.menu = [
        {
          link: '',
          title: 'Dashboard',
          icon: 'dashboard'
        },
        {
          link: '',
          title: 'Friends',
          icon: 'group'
        },
        {
          link: '',
          title: 'Messages',
          icon: 'message'
        }
      ];
      $scope.admin = [
        {
          link: '',
          title: 'Trash',
          icon: 'delete'
        },
        {
          link: 'showListBottomSheet($event)',
          title: 'Settings',
          icon: 'settings'
        }
      ];
      $scope.activity = [
        {
          what: 'Brunch this weekend?',
          who: 'Ali Conners',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
        },
        {
          what: 'Summer BBQ',
          who: 'to Alex, Scott, Jennifer',
          when: '3:08PM',
          notes: "Wish I could come out but I'm out of town this weekend"
        },
        {
          what: 'Oui Oui',
          who: 'Sandra Adams',
          when: '3:08PM',
          notes: "Do you have Paris recommendations? Have you ever been?"
        },
        {
          what: 'Birthday Gift',
          who: 'Trevor Hansen',
          when: '3:08PM',
          notes: "Have any ideas of what we should get Heidi for her birthday?"
        },
        {
          what: 'Recipe to try',
          who: 'Brian Holt',
          when: '3:08PM',
          notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
        },
      ];
      $scope.alert = '';

      $scope.showListBottomSheet = function ($event) {
        $scope.alert = 'test';
        $mdBottomSheet.show({
          template:
          '<md-bottom-sheet class="md-list md-has-header">' +
          '<md-subheader>Settings</md-subheader>' +
          '</md-bottom-sheet>',
        });
      };

      $scope.showAdd = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Please do it!')
          .cancel('Sounds like a scam');
        $mdDialog.show(confirm).then(function() {
          $scope.alert = 'You decided to get rid of your debt.';
        }, function() {
          $scope.alert = 'You decided to keep your debt.';
        });
      };
    }])
    .controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
      $scope.items = [
        { name: 'Share', icon: 'share' },
        { name: 'Upload', icon: 'upload' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Print this page', icon: 'print' },
      ];

      $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
      };
    });

  function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
      $mdDialog.hide();
    };
    $scope.cancel = function () {
      $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  }

})();
