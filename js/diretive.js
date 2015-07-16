var app = angular.module('myapp',[]);

app.directive('helloWorld',function(){

return {
	restrict:'AE',
	replace : false,
	template:'<h3>Hello World!</h3>'

}

});