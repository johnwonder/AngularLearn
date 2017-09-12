var args = ['11','22'];

function applyFunction(key,value){

	console.log("key:"+key);
	console.log("value:"+value);
}

function applyFunction1(key,value){

	console.log("key:"+key);
	console.log("value:"+value);


}

applyFunction.apply(null,args);


var provider = {
   name :  "ss"	
};

console.log(applyFunction1.apply(provider,args));

//输出 key:11 value:22

