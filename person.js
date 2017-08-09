var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var person = (function () {
    function person() {
    }
    return person;
}());
var student = (function (_super) {
    __extends(student, _super);
    function student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return student;
}(person));
var siri = new student();
