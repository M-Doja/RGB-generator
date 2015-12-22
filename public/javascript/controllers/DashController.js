(function() {
	'use strict';
	angular.module('app')
	.controller('DashController', DashController);


	function DashController(UserFactory, $state) {
		var vm = this;
		vm.title2 = 'Dashboard';
		vm.status = UserFactory.status;
		vm.user = {};


	}
})();
