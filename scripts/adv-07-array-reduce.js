/*
The JavaScript reduce() method iterates over an array and accumulates all the elements into a single value (which can be a number, a string, an object, or an array). It takes a callback function and an optional initial value. 
Syntax
javascript
array.reduce(callbackFn, initialValue);
Key Parameters
callbackFn: A function executed on each element in the array, taking four arguments:
accumulator: The value resulting from the previous call to the callback function. On the first call, 
it's the initialValue (if provided).
currentValue: The current array element being processed.
currentIndex (Optional): The index of the current element.
array (Optional): The original array reduce() was called on.
initialValue (Optional): A value to use as the initial accumulator. If not provided, the first element of the array is used as the initial accumulator, and iteration starts from the second element. Providing an initialValue is generally recommended to avoid errors with empty arrays and ensure consistent behavior. 
*/
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10
