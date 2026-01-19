/*
map() and reduce() are powerful, non-mutating array methods used for data transformation and aggregation, respectively. 
Array.prototype.map()
The map() method creates a new array by applying a provided callback function to each element of the original array. The new array will always have the same length as the original. It is ideal for transforming the elements into a new format. 
Syntax
javascript
array.map(callbackFn(currentValue, index, array))
*/

const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map(function (element) {
  return element * element;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16]
console.log(numbers); // Output: [1, 2, 3, 4] (original array is unchanged)
const squaredNumbersArrow = numbers.map((element) => element * element);
const squaredNumbers1 = numbers.map(squaredNumbersArrow);
console.log(squaredNumbers1); // Output: [1, 4, 9, 16]

/*The JavaScript filter() method creates a new array with all elements from the original array that pass a specific condition implemented by a provided callback function. It does not modify the original array. 
Key Characteristics
Returns a New Array: filter() always returns a new array, leaving the original array unchanged.
Callback Function: It takes a callback function as an argument, which is executed once for each element in the array.
Boolean Condition: The callback function must return a true (truthy) or false (falsy) value. If true, the element is included in the new array; if false, it is filtered out.
Arguments: The callback function can accept up to three arguments:
element (required): The current element being processed in the array.
index (optional): The index of the current element.
array (optional): The original array that filter() was called upon. 
*/
// Using an arrow function for the callback
const greaterThanSeven = numbers.filter((number) => number > 3);

console.log(greaterThanSeven);
// Output: [ 4 ]
