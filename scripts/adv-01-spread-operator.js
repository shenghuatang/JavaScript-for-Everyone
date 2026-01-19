/*
Key Rules & Behaviors
Override Order:
    When merging objects with identical keys, the last property encountered in the spread sequence takes precedence and overwrites previous values.
Shallow Copy Limitation:
     For deep structures (e.g., objects inside arrays), use structuredClone() or a deep-cloning library, as the spread operator only goes one level deep.
Spread vs. Rest: 
    Although both use the ... syntax, they are opposites. The spread operator expands elements out, while the rest parameter (used in function definitions or destructuring) collects multiple elements into a single array.
Iterables Only: 
     For array literals, the spread operator only works on objects that implement the @@iterator symbol, such as Arrays, Strings, Sets, and Maps. 
For detailed technical specifications and examples, refer to the MDN Web Docs on Spread Syntax. 
*/
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
// copiedArray is [1, 2, 3], a new instance
copiedArray;
const originalObject = { name: "Alice", age: 30 };
const copiedObject = { ...originalObject };
// copiedObject is { name: "Alice", age: 30 }, a new instance
copiedObject;
//Note that this creates a shallow copy; nested objects will still reference the same memory location as the original.

//2. Merging or Combining
//It can easily combine multiple arrays or objects into a single new one.
//Merging Arrays:
//javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
// combinedArray is [1, 2, 3, 4, 5, 6]

//Merging Objects:
const obj1 = { brand: "Ford", model: "Mustang" };
const obj2 = { year: 2021, color: "yellow" };
const combinedObject = { ...obj1, ...obj2 };
// combinedObject is { brand: 'Ford', model: 'Mustang', year: 2021, color: 'yellow' }
//If objects have the same property names, the value from the last object in the spread operation will overwrite the earlier ones.

//3. Passing Arguments to Functions
//The spread operator allows an array of values to be passed to a function as individual arguments, which is especially useful for functions that expect a variable number of arguments (e.g., Math.max() or Math.min()).
javascript;
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

//4. Spreading Strings
//# Since strings are iterable, the spread operator can expand them into an array of individual characters.
//javascript
const str = "hello";
const chars = [...str];
// chars is ['h', 'e', 'l', 'l', 'o']
