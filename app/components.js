'use strict';
; (function () {

	angular.module('app.football').component(
		'teamComponent', 
		{
			controller:TeamController,
			template : '<div>{{vm.name}}{{vm.test}}</div>',
			controllerAs: 'vm',
			bindings: {
				name: '='
			}
		});
	TeamController.$inject = [];
	function TeamController() {
		var vm=this;
		vm.test = " Test";
	}



})();