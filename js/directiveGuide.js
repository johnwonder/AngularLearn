angular.module('myApp',[])

.directive('myDirective',function(){

	return{
		restrict:String, //包括元素(E)，属性(A)，注释，类名
		priority:Number,
		terminal:Boolean,
		template:String or Template Function:
	function(tElement,tAttrs){},
		templateUrl:String,//一个代表外部html文件路径的字符串，如templateUrl:'my-dialog.html'
		//templateUrl: function(elem,attr){ return attr.value +".html"}
		replace: Boolean or String,
		scope:Boolean or Object,
		transclude:Boolean,//指令的内部可以访问外部指令的作用域，并且模板可以访问外部的作用域对象。
		//为了将作用域传递进去，scope参数的值必须通过{}或true设置成隔离作用域。如果没有设置scope参数，
		//那么指令内部的作用域将被设置成传入模板的作用域。
		controllerAs:String,
		require:String,
		link:function(scope,iElement,iAttrs){},
		compile: //返回一个对象或连接函数.如下所示：
		function(tElment,tAttrs,transclude){
			return {
			
				pre:function(scope,iElement,iAttrs,controller){...},
				post:function(scope,iElement,iAttrs,controller){...}
			
			}
			return function postlink(...){...}
		}
	
	};

});