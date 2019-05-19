var args = ['11','22'];

function applyFunction(key,value){

	console.log("key:"+key);
	console.log("value:"+value);
}

function applyFunction1(key,value){

	console.log("key:"+key);
	console.log("value:"+value);

}

function applyFactory(){
	args.push("33");
}

var cache = { "apply" : applyFactory };

cache.apply();

cache.apply();

console.log(args);

applyFunction.apply(null,args);


var provider = {
   name :  "ss"	
};

console.log(applyFunction1.apply(provider,args));

//输出 key:11 value:22

