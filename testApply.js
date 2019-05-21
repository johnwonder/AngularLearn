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

var MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;

function isValidDottedPath(path) {
  return (path != null && path !== '' && path !== 'hasOwnProperty' &&
      MEMBER_NAME_REGEX.test('.' + path));
}

function lookupDottedPath(obj, path) {
  console.log("path is" + (path != ''))
  if (!isValidDottedPath(path)) {
    
    console.log("not isValidDottedPath");
    //throw $resourceMinErr('badmember', 'Dotted member path "@{0}" is invalid.', path);
  }
  // var keys = path.split('.');
  // for (var i = 0, ii = keys.length; i < ii && angular.isDefined(obj); i++) {
  //   var key = keys[i];
  //   obj = (obj !== null) ? obj[key] : undefined;
  // }
  // return obj;
}

lookupDottedPath(null,"@".substr(1))



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

