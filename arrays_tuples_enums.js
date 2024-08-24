"use strict";
//single type
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [];
arr.push("adil");
//union
// const array: number[] | string[] = [1,3,"adil"]
//not possible either all string or all number
//both num and string
var arr1 = [1, 2, "adil"];
//TUPLES -> order of the data
var user = ["adil", 5, true];
user.push("adilll"); //HOW?
//enums - restrict users choice
var user1;
(function (user1) {
    user1[user1["FIRST"] = 5] = "FIRST";
    user1[user1["SECOND"] = 6] = "SECOND";
    user1[user1["THIRD"] = 7] = "THIRD";
})(user1 || (user1 = {}));
var myChoice = user1.SECOND;
