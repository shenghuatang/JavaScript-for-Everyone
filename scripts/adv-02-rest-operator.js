/*
In JavaScript, the rest operator (also ...) is the functional opposite of the spread operator. 
While spread "expands" an array into its elements, rest gathers multiple elements and condenses them 
into a single array or object. 

Key Rules for 2026
One Rest per Function: You cannot have multiple rest parameters in a single function definition.
No Default Values: Rest parameters cannot have default values (e.g., ...args = [] is a syntax error).
Trailing Commas: You cannot have a trailing comma after a rest parameter (e.g., (a, ...b,) will throw an error).
Arrow Functions: Rest parameters are the only way to handle variable arguments in arrow functions, as arrow functions do not have an arguments object


*/

//1. Function Parameters
//Rest parameters allow a function to accept an indefinite number of arguments as a single array.
//  This is more efficient and cleaner than the older arguments object because it creates
// a true array that supports methods like .map() and .reduce().
// Example: Summing an unknown number of arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100

//2. Array Destructuring
//You can use the rest operator to capture all remaining elements of an array after extracting specific ones.
//javascript
const fruits = ["apple", "banana", "cherry", "date"];
const [first, second, ...others] = fruits;

console.log(first); // 'apple'
console.log(others); // ['cherry', 'date']

//3. Object Destructuring
//Similarly, the rest operator can collect the remaining properties of an object into a new object.
//javascript
const user = { id: 1, name: "Alex", age: 25, role: "Admin" };
const { id, name, ...restOfData } = user;

console.log(restOfData); // { age: 25, role: 'Admin' }
