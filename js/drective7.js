
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

	return{
		scope: {
    			name: '@',
    			age:'=',
    			sex:'@sex1',
    			say:'&'
		},
		template: 'Say：{{age}} {{sex}}<br>改变隔离scope的name：<input type="buttom" value="" ng-model="name" class="ng-pristine ng-valid"><input type="button" value="在directive中执行父scope定义的方法" ng-click="say()"/>'
	}

	

});