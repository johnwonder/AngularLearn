// var obj ={

// };
// obj.prototype = null;
function createMap() {
  /// 创建一个原型为null的空对象
  return Object.create(null);
}
 var obj = createMap();
 var getPrototypeOf    = Object.getPrototypeOf;

function isBlankObject(value) {
  //var getPrototypeOf  = Object.getPrototypeOf,
  return value !== null && typeof value === 'object' && !getPrototypeOf(value);
}

//obj.prototype = Object.prototype; 
console.log(isBlankObject(obj));
console.log(typeof obj.hasOwnProperty === 'function');