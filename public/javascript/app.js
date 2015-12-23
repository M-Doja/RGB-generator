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
			})
			.state('EditProfile',{
				url: '/edit_profile/:id',
				templateUrl: 'views/EditProfile.html'
			})
			.state('AddEvent',{
				url: '/add_event',
				templateUrl: 'views/AddEvent.html'
			})
			 .state('EditEventView',{
				url: '/edit_event/:id',
				templateUrl: 'views/EditEventViewer.html'
			})
				.state('EventSettings',{
				url: '/event_settings',
				templateUrl: 'views/EventSettings.html'
			})
				.state('AddProfile',{
				url: '/add_profile',
				templateUrl: 'views/AddProfile.html'
			})
			.state('Clock',{
			url: '/clock',
			templateUrl: 'views/SetClock.html'
			});
		$urlRouterProvider.otherwise('/');
	}
})();
