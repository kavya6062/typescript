var Person = (function () {
    function Person(name, age) {
        if (age === void 0) { age = 0; }
        this.name = name;
        this.age = age;
    }
    Person.prototype.walking = function () {
        console.log(this.name + "  is walking");
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var p1 = new Person("Raj");
p1.walking();
console.log(p1.name, p1.getAge());
