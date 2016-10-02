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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the cashier/header directive');
      }
    };
  });
