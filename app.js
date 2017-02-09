var creative2 = angular.module('creative2', ['ngMaterial']);
creative2.controller('cookbook', function($scope, $http, $window) {

  $scope.searchText = '';
  $scope.loading = false;

  $scope.search = function () {
    $scope.loading = true;
    $.getJSON('https://api.edamam.com/search?q=' + $scope.searchText + '&app_id=d2bf1fb2&app_key=d75f521a8637036cfa268cb3a78fd825',
      function (resp) {
        $scope.searchedText = $scope.searchText;
        $scope.recipes = resp.hits;
        $scope.loading = false;
        $scope.$apply();
        console.log(resp);
      }
    );
  };

  $scope.open = function (url) {
    $window.open(url, "_blank");
  };


});