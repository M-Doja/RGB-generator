(function() {
	'use strict';
	angular.module('app')
	.controller('EventController', EventController);


	function EventController() {
		var vm = this;
		vm.title = 'Welcome to Shaker!';
	}
})();
