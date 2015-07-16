var app = angular.module('myapp',[]);

app.controller('MainCtrl',function($scope){
});
app.directive('helloWorld',function(){

return {
	restrict:'AE',
	replace : true,
	template:'<p style="background-color:{{color}}"></p>',
	link:function(scope,elem,attr){
	
		elem.bind('click',function(){
		
			elem.css('background-color','white');
		scope.$apply(function(){
			scope.color="white";
		});
		
		});

		elem.bind('mouseover',function(){
		
			elem.css('cursor','pointer');
		});

	}

}

});

//});
