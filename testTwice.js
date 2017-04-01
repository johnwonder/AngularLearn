
var BOOLEAN_ATTR = {};
 BOOLEAN_ATTR['test'] = 'test';
 var BOOLEAN_ELEMENTS = {'ss':true};

 var ss = function(){

 		console.log('access1');
 	return "ss";
 }
function getBooleanAttrName(element, name) {
  // check dom last since we will most likely fail on name
  var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];

  // booleanAttr is here twice to minimize DOM access
  //
  return booleanAttr && BOOLEAN_ELEMENTS[ss()] && booleanAttr;
}

var test = getBooleanAttrName('ss','test') ;

console.log(test);
console.log(test);