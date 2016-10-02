'use strict';
; (function () {


    angular.module('app.football').controller('HomeCtrl', HomeCtrl);
    HomeCtrl.$inject = [];
    function HomeCtrl() {
        var vm = this;
        //vm.teams = ['1','2','3','4','5'];
        vm.teams = [
            {
                name: "X1",
                players: [
                    {
                        name:"name1",
                        contact:'323234'
                    },
                    {
                        name:"name2",
                        contact:'323234'
                    },
                    {
                        name:"name3",
                        contact:'323234'
                    }
                ]
            },
            {
                name: "X2",
                players: [
                    {
                        name:"name1",
                        contact:'323234'
                    },
                    {
                        name:"name2",
                        contact:'323234'
                    },
                    {
                        name:"name3",
                        contact:'323234'
                    }
                ]
            },
            {
                name: "X3",
                players: [
                    {
                        name:"name1",
                        contact:'323234'
                    },
                    {
                        name:"name2",
                        contact:'323234'
                    },
                    {
                        name:"name3",
                        contact:'323234'
                    }
                ]
            }
        ];

    }

    angular.module('app.football').controller('LoginCtrl', LoginCtrl);
    LoginCtrl.$inject = [];
    function LoginCtrl() {

    }

})();