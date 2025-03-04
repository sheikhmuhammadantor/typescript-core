// Function Signature -
let userInfo: (name: string) => string;

userInfo = (name: string): string => {
  return `${name} is 32 years old`;
};

console.log(userInfo("Sheikh Muhammad"));

// Interface -
interface User {
  id: number;
  name: string;
  age: number;
}

let users: User[] = [];

let user1: User = { id: 1, name: "Mr. Potato", age: 32 };
let user2: User = { id: 2, name: "Ms. Tomato", age: 21 };

users.push(user1);
users.push(user2);

const printUserInfo = (user: User) => {
  console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};

users.forEach((user) => printUserInfo(user));

// Class Implements Interface -
interface UserFormatter {
  formatUser: () => string;
}

export class IUser implements UserFormatter {
  constructor(private fullName: string, private age: number) {}

  formatUser = () => {
    return `name: ${this.fullName}, age: ${this.age}`;
  };
}

let user = new IUser("Mr. Potato", 32);
