function AlertDemoCtrl($scope){

	$scope.alerts =[
	{ type: 'danger',msg:'Oh  snap! Change a few things up and try submitting again.'},
	{ type:'success',msg:'Well done! You successfully read this important alert message' }
	];

	$scope.addAlert = function(){
		$scope.alerts.push({msg:"Another alert!"});
	};

	$scope.closeAlert = function(index){
		$scope.alerts.splice(index,1);
	}

}


angular.module('ui.bootstrap.alert',[])
.controller('AlertController',['$scope','$attrs',function($scope,$attrs){

	$scope.closeable = 'close' in $attrs;

}])
.directive('alert',function(){

	return {
		restrict:'EA',
		controller:'AlertController',
		templateUrl:'template/alert/alert.html',
		transclude:true,
		replace:true,
		scope:{
			type:'@',
			close:'&'
		}

	};

});