//typescript is similar to js
//data types are strings,arrays
//ts provides to type safely
//extension of ts is .ts
//function welcome(){
   // var fname:String;
    //var age:number;
    //fname="kiran";
    //age="30";
    //console.log("hello world");
//}
class person{
    public fname:String;
    public lname:String;
    private age:number;
}
class student extends person{
    section:String;
}

var siri=new student();
