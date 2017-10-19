/** 
http://blog.csdn.net/liyanq528/article/details/53782279
 * 由于directive在angular中的地位之重，所以得认真对待。但理解难啊，所以决定逐个属性进行实例分析 
 * directive实例分析第三篇：transclude 
 * Created by liyanq on 16/12/21. 
 */  
  
/**这个属性含义重大，配合angular自带的指令ng-transclude使用，变换莫测。 
 * 1，replace的取值和scope一样，可以为bool值，也可以是obj。默认为false 
 * 2，replace为true或obj，意思就是允许插入点操作，配合指令ng-transclude；如果不允许的话，模版里面不能有ng-transclude指令存在，否则有错。 
 * 3，指令中的插入点所插入的内容，就是html标签中的内容。如内容2中的<span>。 
 * 4，如果没有插入点内容的话，插入点标签中的标签不被替换。如内容3。 
 * 5，ng-transclude的内置指令可以是EAC的形式，可以指定插入点名称，需要配合指令的transclude使用，也就是对象形式。 
 * 6，指定多点插入的时候，如果不加?修饰就必须得有内容，否则抱错：Required transclusion slot `title` was not filled. 
 * 7，指定多点插入的时候，还有个默认的内容，和为true的时候一样。如内容5 
 * */  
  
var app = angular.module("testDirectiveTransclude", []);  
  

  app.directive("transcludedef", function () {  
    var dir = [];  
    //dir.replace = true;//看的容易 // 替换掉当前指令节点 如果为false 那么保留指令自定义节点
    dir.restrict = "E";  

    //transclude false的时候。模板中不能有ngTransclude 除非有parent
    dir.transclude = true;//默认值为false //这里导致传入的transcludeFn参数实效childTranscludeFn函数传入
    dir.template = "<div>" +  
        "<div>我是模版中的内容</div>" +  
        "<div ng-transclude>我是模版中的插入点</div>" +//不可以这样写，虽然效果一样，但控制台有错误。  
        "<div>我是模版中的插入点</div>" +  
        "</div>";  
    return dir;  
});

//app.directive("transcludeTrue", function () {  
//     var dir = [];  
//     dir.replace = true;//看的容易  
//     dir.restrict = "E";  
//     dir.transclude = true;  
//     dir.template = "<div>" +  
//         "<div>我是模版中的内容</div>" +  
//         "<div ng-transclude>我是模版中的插入点</div>" +  
//         "<ng-transclude>我是模版中的插入点</ng-transclude>" +  
//         "</div>";  
//     return dir;  
// })
app.directive("transcludeMultiSlotPoint", function () {  
    var dir = [];  
    dir.replace = false;//看的容易 //不替换也可以 
    dir.restrict = "E";  
    dir.transclude = {  
        title: "?multiSlotPointTile",         
        //title: "?multiSlotPointTile",
        content: "?multiSlotPointContent",  
        footer: "?multiSlotPointFooter"  
    };  
    dir.template = "<div>" +  
        "<div>我是模版中的内容</div>" +  //重复属性没用
        "<div ng-transclude='title' ng-transclude='footer'>我是模版中的插入点的标题</div>" +  
        //搞错了 ，ng-transclude不会使hasTranscludeDirective为true 反而因为有compile方法 ，导致会加入postLinkFn 最终执行的事postLinkFn
        "<div ng-transclude='content'>我是模版中的插入点的内容</div>" +  
        "<div class='ng-transclude:footer'>我是模版中的插入点页脚</div>" +  
        "<div ng-transclude>我是模版中的默认插入点的内容</div>" +  
        "</div>";  
    return dir;  
});