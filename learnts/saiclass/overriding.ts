class A{

    fullName(firstName:string,lastName:string):string{
        return firstName+ ' '+ lastName;

    }
}
class B extends A{
     fullName(firstName:string,lastName:string):string{
        return  "The full name is:"+ firstName+ ' '+ lastName;

    } 
}
var obj= new B();
var fn=obj.fullName('renu','siri');
console.log(fn);
