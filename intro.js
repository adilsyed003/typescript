"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = { name: "adil", age: 19 };
console.log(obj.name);
console.log(obj.age);
console.log("adil 19 years");
//functions:->
var addName = function (name, age) {
    return "Your name is ".concat(name, " and age is ").concat(age);
};
console.log(addName(obj.name, obj.age));
