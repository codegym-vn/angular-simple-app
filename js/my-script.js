/**
 * Created by nhatnk on 6/27/17.
 */

var app = angular.module('myApp', []);

app.controller('calculatorCtrl', function($scope){
    $scope.firstNumber = 0;
    $scope.secondNumber = 0;
    $scope.result = 0;

    $scope.calculateSum = function(){
        $scope.result = parseInt($scope.firstNumber) + parseInt($scope.secondNumber);
    }
});