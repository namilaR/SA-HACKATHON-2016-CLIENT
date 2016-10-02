'use strict';

/**
 * @ngdoc directive
 * @name saHackathon2016ClientApp.directive:cashier/header
 * @description
 * # cashier/header
 */
angular.module('saHackathon2016ClientApp')
  .directive('cashier/header', function () {
    return {
      template: 'views/cashier/header.html',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
