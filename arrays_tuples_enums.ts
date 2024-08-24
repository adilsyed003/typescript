//single type

const arr: string[] = [];
arr.push("adil");

//union

// const array: number[] | string[] = [1,3,"adil"]

//not possible either all string or all number

//both num and string

const arr1: (string | number)[] = [1, 2, "adil"];

//TUPLES -> order of the data

let user: [string, number, boolean] = ["adil", 5, true];

user.push("adilll"); //HOW?

//enums - restrict users choice

enum user1 {
  FIRST = 5,
  SECOND,
  THIRD,
}
const myChoice = user1.SECOND;
