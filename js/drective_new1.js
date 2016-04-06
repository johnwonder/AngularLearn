
var myModule = angular.module("TheNG",[]);
myModule.controller('MyCtrl',['$scope',function($scope){

  $scope.name = 'Pajjket';
  $scope.age = 99;
  $scope.sex = '我是男的';
  $scope.say = function() {
    alert('Hello，我是弹出消息');
  };


}]);
myModule.directive("myDirective",function(){

	  return {

      restrict: 'ECMA',
      template:'<div>指令中：{{case.name}}</div>',

      scope:{

        
      }


    }
	

});