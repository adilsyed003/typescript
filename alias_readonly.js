"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { _id: 567, name: "adil", age: 19, isPaid: true };
}
console.log(createUser({ _id: 345, name: "", age: 0, isPaid: false }));
