function instantiate(Type, locals, serviceName) {
      // Check if Type is annotated and use just the given function at n-1 as parameter
      // e.g. someModule.factory('greeter', ['$window', function(renamed$window) {}]);
      var ctor = (Array.isArray(Type) ? Type[Type.length - 1] : Type);
      var args = [];//injectionArgs(Type, locals, serviceName);
      // Empty object at position 0 is ignored for invocation with `new`, but required.
      args.unshift(null);
      return new (Function.prototype.bind.apply(ctor, args))();
    }


    function testBind(){

    	this.name ="john";
    }

    console.log(instantiate(testBind).name);

    //输出john

