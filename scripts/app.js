'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://task-ninjafer.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/register', {
        templateUrl: 'views/register.html' 
      })  
      .when('/post', {
        templateUrl: 'views/post.html'
        controller: 'TaskController'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html'
        controller: 'TaskController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
