var a = {}
console.log(a); //obj
function fn(){
    console.log(a);//undefined
    var a = 1;
}
console.log(a);//obj