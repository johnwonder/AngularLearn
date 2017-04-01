function setupModuleLoader(window) {

 

  function ensure(obj, name, factory) {
    return obj[name] || (obj[name] = factory());
  }

  var angular = ensure(window, 'angular', Object);

	return ensure(angular, 'module', function() {
 
    	var modules = {};

    	return function module(name, requires, configFn) {

    			  return ensure(modules, name, function() {

    			  		 var moduleInstance = {
    			  		 		hello : 'hello angular'
    			  		 };

    			  		 return moduleInstance;
    			  });
    	};

	})
}

var window = {};

 angularModule = setupModuleLoader(window);

   angularModule('ng', ['ngLocale'], ['$provide', function ngModule($provide) {}]);


   console.log(window.angular.module('ng').hello)