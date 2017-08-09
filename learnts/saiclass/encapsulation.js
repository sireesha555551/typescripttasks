var abc = (function () {
    function abc() {
    }
    abc.prototype.SetUser = function (user) {
        if (user === '') {
            console.log("user is empty");
        }
        else {
            this.user = user;
        }
    };
    abc.prototype.getUser = function () {
        return this.user;
    };
    return abc;
}());
var obj1 = new abc();
console.log(obj1.SetUser('hggh'));
console.log(obj1.getUser());
