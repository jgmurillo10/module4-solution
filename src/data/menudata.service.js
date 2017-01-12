(function () {
	/* body... */
	angular.module('data')
	.service('MenuDataService', MenuDataService);


	function MenuDataService () {
		// body... 
		service = this;

		service.getAllCategories = function () {
			/* body... */
		};
		service.getItemsForCategory = function (categoryShortName) {
			/* body... */
		};
	};
})();