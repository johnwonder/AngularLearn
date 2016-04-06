
var myModule = angular.module("TheNG",[]);
myModule.controller('MyCtrl',['$scope',function($scope){

  $scope.name = {real:'john'};
  $scope.age = {real:98};
  $scope.sex = '我是男的';
  $scope.say = function() {
    alert('Hello，我是弹出消息');
  };


}]);
myModule.directive("myDirective",function(){


  function link(scope,element, attrs) {

    alert(scope.age);

  }

	return{
		scope: {
    			name: '@',
    			age1:'=',
    			sex:'@sex1',
    			say:'&'
		},
    restrict: 'EA',
    link: link,
		templateUrl: 'template/directive_link.html'
	}

	

});