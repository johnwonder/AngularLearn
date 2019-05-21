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


 url = "http://url.com/id./format?q=x".replace(/\.\/(?=\w+($|\?))/, '.');

 console.log(url);
//输出 key:11 value:22

var testCase = 4;
 switch (testCase) {
              case 4:
                 console.log(4);
              //fallthrough
              case 3:
               console.log(4);
              case 2:
                if (false) {
                 	
                } else {
                    console.log("break");
                  break;
                }
              case 1:
                 
                break;
              case 0: break;
              default:
                 break;
}

