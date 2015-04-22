var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'app/views/View1.html'
    }).when('/View2', {
        templateUrl: ''
    }).otherwise({
        redirectTo: '/'
    })
});