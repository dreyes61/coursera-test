(function() {

 'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope','$filter'];

  function LunchCheckController($scope, $filter) {
    $scope.foods ="";
    $scope.response = "";

    $scope.showMessage = function () {
      if($scope.foods) {
          $scope.color = "color:blue";
          $scope.borderColor = "border-color:blue";
          var splitter = ",";
          var arrayOfFoods = $scope.foods.split(splitter);
          var count = 0;
          for (var i=0; i<arrayOfFoods.length; i++) {
            if (!(arrayOfFoods[i].length == 0 || !arrayOfFoods[i].trim())) {
              count += 1;
            }
      }
      if(count>3){
        $scope.response="Too much!";
      }else{
        $scope.response="Enjoy!";
      }
    }
      else{
        $scope.color = "color:red";
        $scope.borderColor = "border-color:red";
        $scope.response = "Please enter data first";
      }
    };
};
})();
