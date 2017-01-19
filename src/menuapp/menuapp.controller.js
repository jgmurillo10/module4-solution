(function () {
	/* body... */
	'use strict';
	angular.module('MenuApp')
	.controller('MenuAppController', MenuAppController);

	MenuAppController.$inject= ['categories'];
	function MenuAppController (categories) {
		// body... 
		var categoriesCtrl = this;

		console.log('shol');
		categoriesCtrl.categories=categories;
		
	}
})();