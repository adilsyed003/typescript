interface user {
  name: string;
  age: number;

  start(): string;
}
const h: user = {
  name: "adil",
  age: 19,
  start() {
    return `hi i am ${this.name} and my age is ${this.age} `;
  },
};
console.log(h.start());
export {};
