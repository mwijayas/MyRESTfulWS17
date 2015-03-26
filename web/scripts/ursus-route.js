/**
 * Created by Mahima on 3/19/2015.
 */

var demoApp = angular.module('demoApp', ['ngRoute', 'ngResource', 'ngTouch', 'ui.grid', 'ui.grid.expandable', 'ui.grid.pinning', 'ui.grid.moveColumns', 'colorpicker.module', 'wysiwyg.module']);

demoApp.config(function ($routeProvider) {
    var viewBase = '/partials/';
    $routeProvider
        .when('/login', {
            controller: 'SimpleController',
            templateUrl: viewBase + 'login.html'
        })
        .when('/patients', {
            controller: 'SimpleController',
            templateUrl: viewBase + 'patients.html'
        })
        .when('/view1', {
            controller: 'SimpleController',
            templateUrl: viewBase + 'view1.html'
        })
        .when('/view2', {
            controller: 'SimpleController',
            templateUrl: viewBase + 'view2.html'
        })
        .otherwise({redirectTo: '/login'});
});

