(function () {
	/* body... */
	'use strict';
	angular.module('MenuApp')
	.controller('MenuAppController', MenuAppController);

	MenuAppController.$inject= ['categories'];
	function MenuAppController (categories) {
		// body... 
		var $ctrl = this;

		console.log('shol')
		$ctrl.categories=categories;
		
	}
})();