(function() {
  'use strict';
  angular.module('app')
  .controller("GlobalController", GlobalController);
  function GlobalController($state, $stateProvider, UserFactory){
    var vm  = this;
    vm.showLogOut = true;

    vm.logIn = function() {
        UserFactory.logIn(vm.user).then(function() {
          // vm.showLogOut = false;
          $state.go('Profile', {
            id: vm.status._id
          });
        });
      };


    vm.logout = function() {
      UserFactory.logout();
      $state.go('Home');
    };



}
})();
