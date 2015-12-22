(function() {
	'use strict';
	angular.module('app', ['ui.router',  'ngAnimate', 'ngMaterial'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('Home',{
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('Dash',{
				url: '/dash/:id',
				templateUrl: 'views/Dash.html'
			})
			.state('EventPage',{
				url: '/events',
				templateUrl: 'views/EventPage.html'
			})
			 .state('EventHome',{
				url: '/events_admin',
				templateUrl: 'views/RunningEvent.html'
			})
				.state('Upgrade',{
				url: '/upgrade',
				templateUrl: 'views/Upgrade.html'
			})
				.state('Exit',{
				url: '/exit_page',
				templateUrl: 'views/ExitPage.html'
			})
			.state('Profile',{
			url: '/profile/:id',
			templateUrl: 'views/Profile.html'
			});
		$urlRouterProvider.otherwise('/');
	}
})();
