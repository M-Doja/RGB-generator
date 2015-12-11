(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(Userfactory,$state) {
		console.log('Home Controller');
			// Global Variables
		var vm = this;
		vm.title = 'RGB Random Colors Library';
		vm.status = Userfactory.status
		vm.isLogin = true; //switch between the login and register view on the login_register.html page
		vm.user = {};

		vm.registerUser = function() {
				Userfactory.registerUser(vm.user).then(function() {
					$state.go('Profile',{
				    id: vm.status._id
				  });
				
				});
			};

		vm.loginUser = function() {
			console.log('hi');
				Userfactory.logIn(vm.user).then(function() {
				  console.log('hi world');
				  $state.go('Profile', {
				    id: vm.status._id
				  });
				});
			};
			vm.logOut = function() {
						Userfactory.logOut();
						$state.go('Home');
					};




	} // end of Home Ctrl
})();
