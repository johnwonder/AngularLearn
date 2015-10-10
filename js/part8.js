var myModule=angular.module("MyModule",[]);

myModule.controller('MyCtrl',['$scope',function($scope){

	$scope.pureWater ="纯净水";
}]);

myModule.directive("drink",function(){

	return {
		restrict:'AE',
		scope:{
			water:'@'
		},
		link:function(scope,element,attrs){
			//scope.water = attrs.water;
			//scope.pureWater="脏水";
			alert(scope.water);
		},
		template:'<div>{{water}}</div>'
		
	
	}

});