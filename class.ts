//properties:emailid,password
//action:validateCredential(){

class login{
    private email:string;
    private password:string;
    setEmailId(email:string){
        this.email=email;
    }
    setPassword(password:string){
        this.password=password;
    }
    getEmailId():string{
        return this.email;
    }
    getPassword():string{
        return this.password;
    }
    validityCredentials():boolean{
        if(this.getEmailId()==='siri' && this.getPassword()==='123'){
            return true;
        }
        else{
            return false;
        }
    }
}
var user1=new login();
user1.setEmailId('siri');
user1.setPassword('123');
var result=user1.validityCredentials();
if(result){
    console.log('valid');
}
else{
    console.log('invalid');
}
// var user1=new login();
// user1.setEmailId('renu');
// user1.setPassword('345');
// var result=user1.validityCredentials();
// if(result){
//     console.log('valid');
// }
// else{
//     console.log('invalid');
// }