'use strict';

/**
 * @ngdoc overview
 * @name saHackathon2016ClientApp
 * @description
 * # saHackathon2016ClientApp
 *
 * Main module of the application.
 */
angular
  .module('saHackathon2016ClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/c/food-list', {
        templateUrl: 'views/customer/food-list.html',
        controller: 'CustomerFoodListCtrl',
        controllerAs: 'customerFoodList'
      })
      .when('/c/my-orders', {
        templateUrl: 'views/customer/orders.html',
        controller: 'CustomerFoodListCtrl',
        controllerAs: 'customerFoodList'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant('CONFIG', {
  'APP_NAME': 'Acadamic Resource Management',
  'APP_VERSION': '0.0.1',
  'GOOGLE_ANALYTICS_ID': '',
  'BASE_URL': 'http://localhost:8002/',
  'SYSTEM_LANGUAGE': ''
})
