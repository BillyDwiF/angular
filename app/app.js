var myRpsiApp = angular.module("myRpsiApp", []);

myRpsiApp.controller("RpsiController", [
  "$scope",
  function ($scope) {
    $scope.removeItem = function (item) {
      var removedItem = $scope.items.indexOf(item);
      $scope.items.splice(removedItem, 1);
    };

    $scope.addItem = function () {
      $scope.items.push({
        name: $scope.newitem.name,
        color: $scope.newitem.color,
        price: parseInt($scope.newitem.price),
        available: true,
      });

      $scope.newitem.name = "";
      $scope.newitem.color = "";
      $scope.newitem.price = "";
    };

    $scope.items = [
      {
        name: "iphone 14 ",
        color: "green",
        price: "50",
        available: true,
      },
      {
        name: "Poco F5",
        color: "Yellow",
        price: "30",
        available: true,
      },
      {
        name: "Channel",
        color: "orange",
        price: "10",
        available: false,
      },
      {
        name: "Gucci",
        color: "purple",
        price: "1000",
        available: true,
      },
    ];
  },
]);
