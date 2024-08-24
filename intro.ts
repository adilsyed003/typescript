let obj = { name: "adil", age: 19 };
console.log(obj.name);
console.log(obj.age);
console.log("adil 19 years");

//functions:->

let addName = (name: string, age: number): string => {
  return `Your name is ${name} and age is ${age}`;
};
console.log(addName(obj.name, obj.age));

//functions and objects -->

let returnFunc = (name: string, age: number): {} => {
  return { newName: name, newAge: age };
};
let returnNewFunc = (
  name: string,
  age: number
): { newName: string; newAge: number } => {
  return { newName: name, newAge: age };
};
console.log(returnFunc(obj.name, obj.age));
console.log(returnNewFunc(obj.name, obj.age));
export {};
