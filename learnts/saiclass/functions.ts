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

function abcde(a:number,b:number,c?:number){
    console.log(a+b+c);

}
abcde(10,20,30);


//default parameters

function ae(a:number,b:number,c:number=100){
    console.log(a+b);
}
ae(10,20);



function cd(a:number,b:number,c:number=20){
    console.log(a+b+c);
}
cd(10,20,100);

//we can give an expression 

function cp(a:number,b:number,c:number=a+b*100){
    console.log(a+b+c);
}
cp(10,20);

//arguments variable

// function test(){
//     for(var i=0;i<arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }
// test(2,3,4);

//rest parameters
function rest(...values:number[]){
    for(var i=0;i<values.length;i++){
        console.log(values[i]);
    }
}
rest(10,20,30);



function rest1(a:number,b:number,...values:number[]){
    for(var i=0;i<values.length;i++){
        console.log(values[i]);
    }
}
rest1(1,2,3,4);//3,4

//function callback
var siri=function(name:string){
    console.log("hello"+name);
}
function g(uname,callback){
    callback(uname);
}
g("hai",siri);

//function signatures

function callback(name:string){
console.log("hello"+name);
}
function test(s:string,callback:(name:string)=>void){
    console.log("inside text");
    if(typeof callback==='function'){
        callback(s);

    }
    else{
        console.log(callback);
    }
}
test('siri',callback);

