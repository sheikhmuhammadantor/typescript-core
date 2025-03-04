// Generic Function -
function identity<T>(arg: T): T {
  return arg;
}

// Arrow Function :
const identity2 = <T>(arg: T): T => {
  return arg;
};

// Usage
const result1: number = identity(42); // T is inferred as 'number'
const result2: string = identity("hello"); // T is inferred as 'string'
