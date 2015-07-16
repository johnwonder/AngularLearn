var app=angular.module('myapp',[]);

app.run(function($rootScope){
	$rootScope.name="Ari Lerner";
});

app.controller('MyController',function($scope){
	
	$scope.person ={name:"Ari" };

	var updateClock = function(){
		$scope.clock = new Date();
	};

	var timer = setInterval(function(){
		$scope.$apply(updateClock);
	},1000);

	updateClock();

});

app.controller('DemoController',function($scope){

	$scope.counter= 0;
	$scope.add = function(amount){
	
		$scope.counter +=amount;
	};
	$scope.subtract = function(amount){
		$scope.counter -= amount;
	};
});


app.controller('PlayerController',function($scope){

	$http({
		
		method:'JSONP',
		url:''
		
	}).success(function(data,status){
	
		

	}).error(function(data,status){
	
	
	});


});
