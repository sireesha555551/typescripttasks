var renusiri = (function () {
    function renusiri() {
    }
    renusiri.prototype.s = function () {
        console.log("siri");
    };
    renusiri.prototype.r = function () {
        console.log("renu");
    };
    return renusiri;
}());
var hghg = new renusiri();
hghg.s();
