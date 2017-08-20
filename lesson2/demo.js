var a = {}
console.log(a); //obj
function fn(){
    console.log(a);//undefined
    var a = 1;
}
console.log(a);//obj

//自执行函数
(function(){ //是属于执行代码  还是属于定义代码 //属于函数表达式

})();

var fn1 = function(){//函数表达式

}