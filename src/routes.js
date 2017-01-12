(function () {
	/* body... */
	angular.module('MenuApp')
	.config(RoutesConfig);


	RoutesConfig.$inject= ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
		// body... 

		//makes url pretty removing #
		// $locationProvider.html5Mode(true);
		//redirect to home page is there is a mistake into url inpt
		$urlRouterProvider.otherwise('/');

		//setup UI states

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/menuapp/templates/home.template.html'
		})
		.state('categories',{

		})
		.state('items', {

		});


	}
})();