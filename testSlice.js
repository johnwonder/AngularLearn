function decorator(originalFn){

	return function(){

		var args = Array.prototype.slice.apply(arguments);
	  args.unshift(new Date());

      originalFn.apply(null,args);
	}
}
 
 var fn = decorator(function() {

 	console.log( arguments);
 });

 fn('asa');
