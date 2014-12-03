console.log("1 - app");

var app = angular.module('workflow', ['ngSanitize', 'ngRoute']);

app.config(['$routeProvider',
    function ($routeprovider) {
        $routeprovider.when('/page1', {
            templateUrl: 'templates/page1.html',
            controller: 'page1Controller'
        });
        $routeprovider.when('/page2', {
            templateUrl: 'templates/page2.html',
            controller: 'page2Controller'
        });
        $routeprovider.when('/page3', {
            templateUrl: 'templates/page3.html',
            controller: 'page3Controller'
        });
        $routeprovider.when('/page4', {
            templateUrl: 'templates/page4.html',
            controller: 'page4Controller'
        });
        $routeprovider.otherwise({
            redirectTo: '/page1'
        });
}]);