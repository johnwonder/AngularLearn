console.log(null == undefined)
console.log(null === undefined)//false
console.log('8' == 8)


var fn = function isValidIdentifierStart(ch) {
    return ('a' <= ch && ch <= 'z' ||
            'A' <= ch && ch <= 'Z' ||
            '_' === ch || ch === '$');
  }


console.log(fn('.'));

console.log("true is not null but not object:"+ (true !== null && typeof true === 'object'))


var CLASS_DIRECTIVE_REGEXP = /(([\w\-]+)(?:\:([^;]+))?;?)/;
var match = CLASS_DIRECTIVE_REGEXP.exec("my-dir: exp; my-dir: exp;");

console.log("match[2]:" + match[2]);
console.log("match[3]:" + match[3]);
console.log("match[0]:" + match[0]);
console.log("match[1]:" + match[1]);
console.log(match.index);



var context = { test :1};

function testContext(context){

console.log(context);
	// context = context || {};
	// context.test =2;
}


testContext(context);
console.log(context.test);


testContext.call("ss");

