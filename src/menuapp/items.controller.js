(function () {
	/* body... */
	'use strict';

	angular.module('MenuApp')
	.controller('ItemController', ItemController);


	ItemController.$inject=['items'];
	function ItemController (items) {
		// body... 
		var itemsCtrl=this;
		itemsCtrl.items=items;
	}
})();