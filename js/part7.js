var app=angular.module('myapp',[]);

app.controller('MyController',function($scope){ 
	
	$scope.roommates=[
	{name:'Arr'},
	{name:'Q'},
	{name:'Sean'},
	{name:'Anand'}
	
	];

	$scope.people= {
	'Ari':'orange',
	'Q':'purple',
	'Sean':'green'
	
	};
	
});