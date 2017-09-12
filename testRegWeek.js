
var weekStrs = ["日","一","二","三","四","五","六"];

var testStr ="2,3,";
var WEEK_REGEXP = /(1)?(2)?,(3)?(4)?(5)?(6)?(7)?/;
var swStr2  ="周";

 testStr.replace(WEEK_REGEXP,function(data,first,second,three,four,five,six,seven,index,len) {
 
		console.log(second);

	swStr2 = !first ? swStr2+ weekStrs[0] : swStr2;
swStr2 = !second ? swStr2+  weekStrs[1] :swStr2;

console.log("three:"+three);
 swStr2 = !three ? swStr2+ weekStrs[2] : swStr2;
 swStr2 = !four ? swStr2+ weekStrs[3] : swStr2;
 swStr2 = !five ? swStr2+  weekStrs[4] : swStr2;
 swStr2 = !six ? swStr2+  weekStrs[5] : swStr2;
  swStr2 = !seven ? swStr2+ weekStrs[6] :swStr2;
});

 console.log(swStr2);