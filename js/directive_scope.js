var app = angular.module('myapp',[]);

app.controller("AppCtrl", ['$scope',function($scope) {  
             
            $scope.ctrlFlavor = "blackberry";  
        }]);  
  
app.directive("drink", function() {  
            return {  
                scope: {  
                    flavor: "=ab"  
                },  
                template: '<input type="text" ng-model="flavor">'  
            };  
        });  