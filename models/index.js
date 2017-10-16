"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog = (function () {
    function Dog(id, name, age) {
        this.url = "/img/dog.jpg";
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Dog.prototype.speak = function () {
        return "Woof!";
    };
    return Dog;
}());
exports.Dog = Dog;
var Cat = (function () {
    function Cat(id, name, age) {
        this.url = "/img/cat.jpg";
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Cat.prototype.speak = function () {
        return "Meow!";
    };
    return Cat;
}());
exports.Cat = Cat;
