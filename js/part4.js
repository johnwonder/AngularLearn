var app=angular.module('myapp',[]);

app.run(function($rootScope){
	$rootScope.name="Ari Lerner";
});

//app.controller('MyController',function($scope){ $scope.person ={name:"Ari" }; });

app.controller('ParentController',function($scope){

	$scope.person = {greeted:false};
});

app.controller('ChildController',function($scope){

	$scope.sayHello =function(){
		
			$scope.person.greeted = true;
	};

});