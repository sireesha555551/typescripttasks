//properties:emailid,password
//action:validateCredential(){
var login = (function () {
    function login() {
    }
    login.prototype.setEmailId = function (email) {
        this.email = email;
    };
    login.prototype.setPassword = function (password) {
        this.password = password;
    };
    login.prototype.getEmailId = function () {
        return this.email;
    };
    login.prototype.getPassword = function () {
        return this.password;
    };
    login.prototype.validityCredentials = function () {
        if (this.getEmailId() === 'siri' && this.getPassword() === '123') {
            return true;
        }
        else {
            return false;
        }
    };
    return login;
}());
var user1 = new login();
user1.setEmailId('siri');
user1.setPassword('123');
var result = user1.validityCredentials();
if (result) {
    console.log('valid');
}
else {
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
