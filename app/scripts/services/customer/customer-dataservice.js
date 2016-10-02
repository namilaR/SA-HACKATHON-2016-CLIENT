'use strict';

/**
 * @ngdoc service
 * @name saHackathon2016ClientApp.customer/customerDataservice
 * @description
 * # customer/customerDataservice
 * Factory in the saHackathon2016ClientApp.
 */
angular.module('saHackathon2016ClientApp')
  .factory('customerDataservice',[
    '$http',
    'CONFIG',
    function ($http,CONFIG) {
      var baseUrl = CONFIG.BASE_URL;
      var customerDataservice = {};

      customerDataservice.getSortEatsList = function(type) {
        return $http.get(baseUrl+'food-management/',{
          params: type
        });
      };

      return customerDataservice;
  }]);
