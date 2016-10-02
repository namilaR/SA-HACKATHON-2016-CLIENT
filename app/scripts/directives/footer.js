'use strict';

/**
 * @ngdoc directive
 * @name saHackathon2016ClientApp.directive:footer
 * @description
 * # footer
 */
angular.module('saHackathon2016ClientApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'A',

      link: function postLink(scope, element, attrs) {
        //element.text('this is the footer directive');
      }
    };
  });
