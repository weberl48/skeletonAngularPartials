'use strict';
(function() {
    console.log('app.js');
    var app = angular.module('app', ['ngResource', 'ngRoute'])

    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: '/partials/main',
                controller: 'mainCtrl'
            });
    })


    .controller('mainCtrl', function($scope) {
        $scope.myVar = "Hello Angular";
    });

})();
