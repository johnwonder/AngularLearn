function stringifyFn(fn) {
  // Support: Chrome 50-51 only
  // Creating a new string by adding `' '` at the end, to hack around some bug in Chrome v50/51
  // (See https://github.com/angular/angular.js/issues/14487.)
  // TODO (gkalpak): Remove workaround when Chrome v52 is released
  return Function.prototype.toString.call(fn) + ' ';
}
function isClass(func) {
    // IE 9-11 do not support classes and IE9 leaks with the code below.
    // if (msie <= 11) {
    //   return false;
    // }
    // Support: Edge 12-13 only
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/6156135/
    /*调用 stringifyFn字符串化后再用正则判断*/
    //ES2015 class 在Edge12-13中会出现constructor(){}的情况
    return typeof func === 'function'
      && /^(?:class\b|constructor\()/.test(stringifyFn(func));
  }

  var test=new Array();
class Person {
  constructor(name) {
    this.name=name||"Default";
  }
  // toString(){
  //   return 'Name:'+this.name;
  // }
}
console.log(stringifyFn(Person));
console.log(typeof Person === 'function');
console.log(isClass(Person));