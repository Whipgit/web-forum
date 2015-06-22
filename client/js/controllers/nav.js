angular
  .module("web-forum")
  .controller("NavController", ["$scope", function($scope){
    $scope.name = "It Works";
    $(".button-collapse").sideNav();
  }]);
