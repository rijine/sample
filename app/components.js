'use strict';
; (function () {

	angular.module('app.football').component(
		'teamComponent', 
		{
			controller:TeamController,
			transclude: true,
			template : '<div>{{vm.name}}{{vm.test}}</div><div ng-transclude></div>',
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
	
	angular.module('app.football').component(
		'playersComponent', 
		{
			controller:PlayersController,
			transclude: true,
			// require the parent component, in this case accordion component
			require: {
				'parent': '^teamComponent'
			},
			template : `<div ng-repeat="player in vm.players">
							<div ng-transclude></div>
						</div>`,
			controllerAs: 'vm',
			bindings: {
				players: '='
			}
		});
	PlayersController.$inject = [];
	function PlayersController() {
		var vm=this;
		vm.test = " Test";
		vm.$onInit = function(){
			console.log('Players');
		}
	}

	angular.module('app.football').component(
		'playerComponent', 
		{
			controller:PlayerController,
			transclude: true,
			// require the parent component, in this case accordion component
			require: {
				'parent': '^playersComponent'
			},
			template : '<div>{{vm.name}}{{vm.test}}</div><div ng-transclude></div>',
			controllerAs: 'vm',
			bindings: {
				name: '='
			}
		});
	PlayerController.$inject = [];
	function PlayerController() {
		var vm=this;
		vm.test = " Test";
		vm.$onInit = function(){
			console.log('Player');
		}
	}



})();