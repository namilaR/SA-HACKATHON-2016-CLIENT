'use strict';

/**
 * @ngdoc function
 * @name saHackathon2016ClientApp.controller:CustomerFoodListCtrl
 * @description
 * # CustomerFoodListCtrl
 * Controller of the saHackathon2016ClientApp
 */
angular.module('saHackathon2016ClientApp')
  .controller('CustomerFoodListCtrl',[
    '$scope',
    'customerDataservice',
    function ($scope,customerDataservice) {
      $scope.items = [];

      $scope.addedItems = new Array();

      customerDataservice.getSortEatsList().then(
        function(response) {
          // $scope.subjects = response.data;
          $scope.items = response.data;
          console.log(response.data);
        },
        function(error) {
          console.error(error);
        }
      );

      $scope.addItem = function (item,q) {
        $scope.addedItems.push({item: item, q:q});
        console.log( $scope.addedItems);
      };


      $scope.update = function () {
        console.log($scope.foodFilter);
        customerDataservice.getSortEatsList($scope.foodFilter).then(
          function(response) {
            // $scope.subjects = response.data;
            $scope.items = response.data;
            console.log(response.data);
          },
          function(error) {
            console.error(error);
          }
        );
      };
  }]);
