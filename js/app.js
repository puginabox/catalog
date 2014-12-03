console.log("1 - app");

var app = angular.module('workflow', ['ngSanitize', 'ngRoute']);

app.config(['$routeProvider', function($routeprovider){
  $routeprovider.when('/page1', {
      templateUrl: 'templates/page1.html',
      controller: 'page1Controller'
  }); 
    $routeprovider.otherwise({
        redirectTo: '/page1'
    });
}]);
