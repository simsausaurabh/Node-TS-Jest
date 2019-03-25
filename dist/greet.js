"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(person) {
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    person += person;
    return `${person}`;
}
exports.greeter = greeter;
function sum(a, b) {
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    a = a + a;
    b = b + b;
    return a + b;
}
exports.sum = sum;
class greet {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    doTask() {
        return greeter("hi") + sum(this.a, this.b).toString();
    }
}
exports.greet = greet;
//# sourceMappingURL=greet.js.map