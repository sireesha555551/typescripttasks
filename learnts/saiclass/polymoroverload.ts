// class a{
//     add(a:number,b:number):void;
//     add(a:string,b:string):void;
//     add(a:any,b:any):void{
//         if(typeof a==='number'&& typeof b==='number'){
//             console.log(a+b);
//         }
//         if(typeof a==='string' && typeof b==='string'){
//             console.log(a+b);
//         }
//     }
// }
// var b = new a();
// b.add(10,20);
// b.add('siri','renu');

//complex example
class a{
    login(user:string,password:string):void;
    login(user:string,password:string,otp:number):void;
    login(user:string,password:string,otp:number,capcha:string):void;
    login(user:any,password:any,otp?:any,capcha?:any){
        if(typeof user==='string' && typeof password==='string'){
            if(user===''||password===''){
                console.log("username and password is empty");
                return false;
            }
                if(user==='abc'&& password==='cba'){
                    console.log("successfully complted");
                    return true;
            
                }
             
        }
            if(typeof user==='string' && typeof password==='string' && typeof otp==='number'){
                if(user===''||password===''||otp===0){
                    console.log("username and password and otp is empty");
                        return false;
                    }
                   if(user==='abc'&& password==='cba' && otp===123){
                    console.log("successfully complted");
                    return true;
            
                }
            }
             if(typeof user==='string' && typeof password==='string' && typeof otp==='number' && typeof capcha==='string'){
                if(user===''||password===''||otp===0||capcha===''){
                    console.log("username and password and otp and captha is empty");
                        return false;
                    }
                   if(user==='abc'&& password==='cba' && otp===123 && capcha==='gfgf'){
                    console.log("successfully complted");
                    return true;
            
                }
            }
    }
}
var user=new a();
user.login('abc','cba',12345);