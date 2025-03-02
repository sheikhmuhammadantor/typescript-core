//  TypeScript Data Type;
//  1. Any -
let id1;
let id2: any;
let data: any = 42;
data = "Hello";

let password: any;
let passwords: any[];

//  2. Number -
let age: number = 25;
let price: number = 9.99;

//  3. String -
let userName: string = "John";

//  4. Boolean -
let isDone: boolean = false;

//  5. Void -
function logMessage(): void {
  console.log("This is a log message.");
}

//  6. Null, Undefined -
let n: null = null;
let u: undefined = undefined;

//  7. Never -
function throwError(message: string): never {
  throw new Error(message);
}

//  8. Inferred -
let fistName = "Tolha"; // data type inferred as string

//  9. Union -
let userId: string | number;

userId = 101; // no error
userId = "101"; // no error
// userId = true; // error

//  10. Array -
let numbers: number[] = [1, 2, 3, 4, 5];

// let users: string[];
let users: Array<string>;
users = ["antor", "tolha", "abir"];

//  12. Multi-Types Array
let users2: (number | string)[];
users2 = [16, "antor", 28, "sheikh"];

//  13. Tuple -
let employee: [string, number] = ["John Doe", 30];

let users3: [number, String];
users3 = [101, "anis"];

users3.push(102, "sakib");
console.log(users3); //  [ 101, 'anis', 102, 'sakib' ]

//  14. Enum -
// Numeric Enum:
enum Color {
  Red,
  Green,
  Blue,
}
let numEnum: Color = Color.Red;

// String Enum:
enum UserRequest {
  ReadData = "READ_DATA",
  SaveData = "SAVE_DATA",
  UpdateData = "UPDATE_DATA",
}
const strEnum: UserRequest = UserRequest["UpdateData"];

// Heterogeneous Enum:
enum User {
  id = 101,
  name = "anisul",
}
const htgEnum: User = User.id;
