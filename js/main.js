var app=angular.module('myapp',[]);

app.run(function($rootScope){
	$rootScope.name="Ari Lerner";
});

app.controller('MyController',function($scope,$cacheFactory){

 $scope.person ={name:"Ari" }; 

var myCache = $cacheFactory("myCache",{capacity: 6});

myCache.put("name","sssss");

myCache.put("name1","sssss");
//myCache.put("name2","sssss");

myCache.put("name","sssss");
//其中，capacity会使用"近期缓存最久未使用算法"，就是说，加如缓存容量为20，现在已经缓存了缓存20个，当第21个想要被缓存的时候，最久最小未被使用的缓存键值对会被清除，以便腾出空间容纳第21个缓存。
});

app.controller('ParentController',function($scope){

	$scope.person = {greeted:false};
});

app.controller('ChildController',function($scope){

	$scope.sayHello =function(){
		
			$scope.person.greeted = true;
	};

});