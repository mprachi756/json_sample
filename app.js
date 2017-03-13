var myApp = angular.module('myApp', ['ui.router', 'ngResource']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/forecast');
    
    $stateProvider
    .state('forecast', {
        url:'/forecast',
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .state('about',{
        url:'/about',
        templateUrl: 'pages/about.html',
        controller: 'aboutCtrl'
    })
});
myApp.service('cityService', function () {
    this.city = "London, GB";
   
})

myApp.controller('forecastController', ['$scope', 'cityService', '$http', '$resource', '$stateParams', function ($scope, cityService, $http, $resource, $stateParams) {
    $scope.city = cityService.city;
        $http({
  method: 'GET',
  url: 'json/city.json'
}).then(function (response) {
     $scope.details = response.data;
  })
    $scope.convertCelsius = function (degK) {
        return Math.round(degK - 273.15);
    }
    $scope.convertDate = function (dt) {
        return new Date(dt * 1000);
    }
    
    
}]);