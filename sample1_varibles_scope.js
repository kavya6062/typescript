var count = 0;
var Bird = (function () {
    function Bird() {
        this.name = "Parrot";
    }
    Bird.prototype.createPrivateVar = function () {
        var localVar = 20;
    };
    Bird.prototype.getStaticCount = function () {
        return Bird.staticCount;
    };
    Bird.prototype.incrementStatic = function () {
        Bird.staticCount++;
    };
    return Bird;
}());
Bird.staticCount = 0;
var bird1 = new Bird();
console.log(bird1.name);
console.log(bird1.incrementStatic());
console.log(bird1.getStaticCount());
console.log(bird1.createPrivateVar());
var bird2 = new Bird();
console.log(bird2.name);
console.log(bird2.incrementStatic());
console.log(bird2.getStaticCount());
//Static variables will be shared by all the instances of the same class.
