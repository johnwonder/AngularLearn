
function initWatchVal() { }
function Scope() {
 this.$$watchers = [];
}

Scope.prototype.$watch = function(watchFn, listenerFn) {
	 var watcher = {
	 watchFn: watchFn,
	 listenerFn: listenerFn,
	 last: initWatchVal
	 };
	 this.$$watchers.push(watcher);
}

Scope.prototype.$digest = function() {
 var self = this;
 var newValue, oldValue;
 _.forEach(this.$$watchers, function(watcher) {
 newValue = watcher.watchFn(self);
 oldValue = watcher.last;
 if (newValue !== oldValue) {
 watcher.last = newValue;
 watcher.listenerFn(newValue,
 (oldValue === initWatchVal ? newValue : oldValue),
 self);
 }
 });
};

var scope = new Scope();
scope.$watch(
 function(scope) { return scope.nameUpper; },
 function(newValue, oldValue, scope) {
 if (newValue) {
 scope.initial = newValue.substring(0, 1) + '.';
 }
 }
 );

scope.$watch(
 function(scope) { return scope.name; },
 function(newValue, oldValue, scope) {
 if (newValue) {
 scope.nameUpper = newValue.toUpperCase();
 }
 }
 );

scope.$digest();