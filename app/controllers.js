'use strict';
; (function () {


    angular.module('app.football').controller('HomeCtrl', HomeCtrl);
    HomeCtrl.$inject = [];
    function HomeCtrl() {
    	var vm=this;
    	vm.teams = ['1','2','3','4','5'];

    }

    angular.module('app.football').controller('LoginCtrl', LoginCtrl);
    LoginCtrl.$inject = [];
    function LoginCtrl() {

    }

})();