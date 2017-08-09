//anonymous functions
// var x=function(a:number,b:number){
//     console.log(a+b);
// }
// x(10,20);
// var x=function(){
//     console.log("hello");
// }
// function m(callback){
// callback(x);
// }
// m(x);
//optional parameters
function abcde(a, b, c) {
    console.log(a + b + c);
}
abcde(10, 20, 30);
//default parameters
function ae(a, b, c) {
    if (c === void 0) { c = 100; }
    console.log(a + b);
}
ae(10, 20);
function cd(a, b, c) {
    if (c === void 0) { c = 20; }
    console.log(a + b + c);
}
cd(10, 20, 100);
//we can give an expression 
function cp(a, b, c) {
    if (c === void 0) { c = a + b * 100; }
    console.log(a + b + c);
}
cp(10, 20);
//arguments variable
// function test(){
//     for(var i=0;i<arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }
// test(2,3,4);
//rest parameters
function rest() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    for (var i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
}
rest(10, 20, 30);
function rest1(a, b) {
    var values = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        values[_i - 2] = arguments[_i];
    }
    for (var i = 0; i < values.length; i++) {
        console.log(values[i]);
    }
}
rest1(1, 2, 3, 4); //3,4
//function callback
var siri = function (name) {
    console.log("hello" + name);
};
function g(uname, callback) {
    callback(uname);
}
g("hai", siri);
//function signatures
function callback(name) {
    console.log("hello" + name);
}
function test(s, callback) {
    console.log("inside text");
    if (typeof callback === 'function') {
        callback(s);
    }
    else {
        console.log(callback);
    }
}
test('siri', callback);
