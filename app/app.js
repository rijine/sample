'use strict';
; (function () {
    angular.module('app.football', ['ui.router']);

    angular.module('app.football').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'pageProvider'];
    function RouteConfig($stateProvider, $urlRouterProvider, pageProvider) {
        $stateProvider
            /*.state(
            'home', {
                url: '/home',
                templateUrl: '/pages/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Home'
                }
            })*/
            .state(
            'home', {
                url: '/home',
                views: {
                    '': {
                        templateUrl: '/pages/home.html',
                        controller: 'HomeCtrl',
                        controllerAs:'vm'
                    },
                    'footer': {
                        templateUrl: pageProvider.getTemplate('footer')
                    }
                }
            })
            .state(
            'login', {
                url: '/login',
                templateUrl: pageProvider.getTemplate('login'),
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Login'
                }
            }
            );
        $urlRouterProvider.otherwise('/home');
    }


    angular.module('app.football').provider('page', pageProvider);
    function pageProvider() {
        var CONSTANT = "/pages";
        this.$get = function () {
            return {}
        }
        this.getTemplate = function (name) {
            return CONSTANT + '/' + name + '.html';
        }
    };


    /*angular.module('app.football').controller('HomeCtrl', HomeCtrl);
    function HomeCtrl() {

    }

    angular.module('app.football').controller('LoginCtrl', LoginCtrl);
    function LoginCtrl() {

    }*/

})();