'use strict';

/**
 * @ngdoc directive
 * @name saHackathon2016ClientApp.directive:customer/header
 * @description
 * # customer/header
 */
angular.module('saHackathon2016ClientApp')
  .directive('customerHeader', function () {
    return {
      templateUrl: 'views/customer/header.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
       
      }
    };
  });
