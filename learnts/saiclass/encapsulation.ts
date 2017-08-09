class abc{
    private user:string;
    private password:string;

SetUser(user:string){
    if(user===''){
        console.log("user is empty");
    }
    else{
        this.user=user;

    }

}
getUser():string{
    return this.user;
}
}
var obj1=new abc();
console.log(obj1.SetUser('hggh'));
console.log(obj1.getUser());