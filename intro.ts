let obj = { name: "adil", age: 19 };
console.log(obj.name);
console.log(obj.age);
console.log("adil 19 years");

//functions:->

let addName = (name: string, age: number): string => {
  return `Your name is ${name} and age is ${age}`;
};
console.log(addName(obj.name, obj.age));
export {};
