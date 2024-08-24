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
//functions and objects -->
var returnFunc = function (name, age) {
    return { newName: name, newAge: age };
};
var returnNewFunc = function (name, age) {
    return { newName: name, newAge: age };
};
console.log(returnFunc(obj.name, obj.age));
console.log(returnNewFunc(obj.name, obj.age));
