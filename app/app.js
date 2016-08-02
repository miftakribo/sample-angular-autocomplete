angular
	.module('search', [
		'ui.router'
	])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider){

		$stateProvider
			.state('search',{
				url: '/search',
				templateUrl: "app/view/search.html",
				controller: 'SearchCtrl',
        		controllerAs: 'search'
			});

		$urlRouterProvider.otherwise("/404");

		});