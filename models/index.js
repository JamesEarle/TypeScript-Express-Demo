"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = (function () {
    function Student(pid, name, activity) {
        this.pid = pid;
        this.name = name;
        this.activity = activity;
    }
    Student.prototype.greet = function () {
        return "Hi! I'm " + this.name + ". Lately I've been " + this.activity;
    };
    return Student;
}());
exports.Student = Student;
