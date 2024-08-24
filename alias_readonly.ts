type User = {
  readonly _id: number;
  name: string;
  age: number;
  isPaid: boolean;
};
function createUser(user: User): User {
  return { _id: 567, name: "adil", age: 19, isPaid: true };
}
console.log(createUser({ _id: 345, name: "", age: 0, isPaid: false }));

// mixing types ->
type newUser = {
  userName: string;
};
type card = User & newUser & { userName: "adil123" };

export {};
