(function() {
	'use strict';
	angular.module('app')
	.controller('UpgradeController', UpgradeController);


	function UpgradeController() {
		var vm = this;
		vm.title = 'Welcome to Shaker!';
    console.log('UpgradeController in effect');



	}
})();
