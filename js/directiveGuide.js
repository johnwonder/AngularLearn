angular.module('myApp',[])

.directive('myDirective',function(){

	return{
		restrict:String, //����Ԫ��(E)������(A)��ע�ͣ�����
		priority:Number,
		terminal:Boolean,
		template:String or Template Function:
	function(tElement,tAttrs){},
		templateUrl:String,//һ�������ⲿhtml�ļ�·�����ַ�������templateUrl:'my-dialog.html'
		//templateUrl: function(elem,attr){ return attr.value +".html"}
		replace: Boolean or String,
		scope:Boolean or Object,
		transclude:Boolean,//ָ����ڲ����Է����ⲿָ��������򣬲���ģ����Է����ⲿ�����������
		//Ϊ�˽������򴫵ݽ�ȥ��scope������ֵ����ͨ��{}��true���óɸ������������û������scope������
		//��ôָ���ڲ��������򽫱����óɴ���ģ���������
		controllerAs:String,
		require:String,
		link:function(scope,iElement,iAttrs){},
		compile: //����һ����������Ӻ���.������ʾ��
		function(tElment,tAttrs,transclude){
			return {
			
				pre:function(scope,iElement,iAttrs,controller){...},
				post:function(scope,iElement,iAttrs,controller){...}
			
			}
			return function postlink(...){...}
		}
	
	};

});