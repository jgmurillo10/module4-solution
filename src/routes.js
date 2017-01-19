(function () {
	/* body... */
	angular.module('MenuApp')
	.config(RoutesConfig);


	RoutesConfig.$inject= ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider) {
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
			url: '/categories',
			templateUrl: 'src/menuapp/templates/categories.template.html',
			controller: 'MenuAppController as menuController',
			resolve: {
				categories: ['MenuDataService', function  (MenuDataService) {
					// body... 
					return MenuDataService.getAllCategories().then(function (response) {
						return response.data;
						/* body... */
					});
				}]
			}
		})
		.state('items', {
			url: '/items/{categoryShortName}',
			templateUrl: 'src/menuapp/templates/items.template.html',
			controller: 'ItemController as itemController',
			resolve: {
				items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
					/* body... */
					return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function (response) {
						return response.data.menu_items;
						/* body... */
					});
				}]
			}

		});


	}
})();