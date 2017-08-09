//var username:string='siri';
//username=100;
//console.log(username);
var age:number=19;
function ageCheck(age:number):boolean{
    if(age>=19){
        return true;
    }
    else{
        return false;
    }
}
var result=ageCheck(age);
if(result){
    console.log('eligible');
}
else{
    console.log('not');
}