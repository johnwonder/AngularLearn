var args = ['11','22'];

function applyFunction(key,value){

	console.log("key:"+key);
	console.log("value:"+value);
}

applyFunction.apply(null,args);

//输出 key:11 value:22

