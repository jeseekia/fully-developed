var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $routeProvider.when('/', {
    controller: 'mainCtrl',
    templateUrl: 'views/home.html'
  }).when('/about', {
    controller: 'mainCtrl',
    templateUrl: 'views/about.html'
  }).when('/portfolio', {
    controller: 'mainCtrl',
    templateUrl: 'views/portfolio.html'
  }).when('/contact', {
    controller: 'mainCtrl',
    templateUrl: 'views/contact.html'
  });

  $locationProvider.hashPrefix('');
});

app.controller('mainCtrl', function($scope){


});
