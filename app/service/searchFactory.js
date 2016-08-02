'use strict';

/**
 * @ngdoc service
 * @name v2App.app.service.nativeads
 * @description
 * # app.service.nativeads
 * Service in the v2App.
 */
angular.module('search')
  .factory('searchFactory', searchFactory);
  function searchFactory($http,$q) {
    var apiUrl= 'http://private-7de1ee-sparseshop.apiary-mock.com/';
    var search = {};

    // search recent
    search.searchRecentKeyword = function(prop){
      var deferred = $q.defer();

      $http.get(apiUrl+'autocomplete/recent-keyword', prop)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(error,status){
        deferred.reject(status);
      })

      return deferred.promise;
    };

    search.searchHotKeyword = function(prop){
      var deferred = $q.defer();

      $http.get(apiUrl+'autocomplete/hot-keyword', prop)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(error,status){
        deferred.reject(status);
      })

      return deferred.promise;
    };

    search.searchRecentItem = function(prop){
      var deferred = $q.defer();

      $http.get(apiUrl+'autocomplete/recent-product', prop)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(error,status){
        deferred.reject(status);
      })

      return deferred.promise;
    }

    // end search recent

    // search by keyword
    search.searchByKeyword = function(prop){
      var deferred = $q.defer();

      $http.get(apiUrl+'autocomplete/keyword',prop)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(error,status){
        deferred.reject(status);
      });

      return deferred.promise;
    };

    search.searchByCategory = function(prop){
      var deferred = $q.defer();

      $http.get(apiUrl+'autocomplete/category',prop)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(error,status){
        deferred.reject(status);
      });

      return deferred.promise;
    };

    search.searchByRecommended = function(prop){
      var deferred = $q.defer();

      $http.get(apiUrl+'product-recommended',prop)
      .success(function(response){
        deferred.resolve(response);
      })
      .error(function(error,status){
        deferred.reject(status);
      });

      return deferred.promise;
    };

    return search;
  }