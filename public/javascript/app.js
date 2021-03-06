(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('Home',{
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('Profile',{
				url: '/profile/:id',
				templateUrl: 'views/Profile.html'
			});
		$urlRouterProvider.otherwise('/');
	}
})();
