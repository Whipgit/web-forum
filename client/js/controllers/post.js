angular
  .module("web-forum")
  .controller("PostController", ["$scope", $StateParams, function($scope, $StateParams){
    $scope.name = "It Works";
  }]);
