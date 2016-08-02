'use strict';

/**
 * @ngdoc function
 * @name v2App.controller:BrandCtrl
 * @description
 * # BrandCtrl
 * Controller of the v2App
 */
angular.module('search')
  .controller('SearchCtrl', searchCtrl);
  function searchCtrl($scope, searchFactory) {
    $scope.form = {};
    $scope.form.search = ''; // form input model
    $scope.form.showResult = 0; // show / hide result box
    $scope.form.recent = 1; // // show recent search or keyword search
    $scope.result={};

    $scope.showResult = function(){
    	$scope.form.showResult = 1;
    }

    $scope.hideResult = function(){
    	$scope.form.showResult = 0;
    }

	$scope.searchAll = function(){
		if ($scope.form.search == ''){
			$scope.form.recent = 1;
			$scope.searchRecentKeyword();
			$scope.searchHotKeyword();
			$scope.searchRecentItem();
		} else {
			$scope.form.recent = 0;
			$scope.searchByKeyword();
			$scope.searchByCategory();
			$scope.searchByRecommended();
		}
	}


	$scope.searchRecentKeyword = function(){
		var prop = {
			  "_id": "23785972895274985",
			  "rows": 6
			};
		searchFactory.searchRecentKeyword(prop)
		.then(function(response){
			$scope.result.recentKey = response;
		}, function(error){
			console.log(error);
		})
	}

	$scope.searchHotKeyword = function(){
		var prop = {
			  "_id": "23785972895274985"
			}
		searchFactory.searchHotKeyword(prop)
		.then(function(response){
			$scope.result.hotKey = response;
		}, function(error){
			console,log(error);
		})
	}

	$scope.searchRecentItem = function(){
		var prop = {
			  "_id": "23785972895274985",
			  "rows": 6
			}
		searchFactory.searchRecentItem(prop)
		.then(function(response){
			$scope.result.recentItem = response;
		}, function(error){
			console.log(error);
		})
	}

	$scope.searchByKeyword = function(){
		var prop = {
			  "id": "23785972895274985",
			  "query": $scope.form.search,
			  "rows": 6
			}
		searchFactory.searchByKeyword(prop)
		.then(function(response){
			$scope.result.auto = response;
		}, function(error){
			console.log('error');
		})
	}

	$scope.searchByCategory = function(){
		var prop = {
			  "id": "23785972895274985",
			  "query": $scope.form.search,
			  "rows": 6
			}

		searchFactory.searchByCategory(prop)
		.then(function(response){
			$scope.result.cat = response;
		}, function(error){
			console.log('error');
		})
	}

	$scope.searchByRecommended = function(){
		var prop = {
			  "id": "23785972895274985",
			  "sid": null,
			  "rows": 40,
			  "page": 1
			}

		searchFactory.searchByRecommended(prop)
		.then(function(response){
			console.log(response);
			$scope.result.rec = response;
		}, function(error){
			console.log('error');
		})
	}

	// initial trigger search
	$scope.searchAll();

  }
