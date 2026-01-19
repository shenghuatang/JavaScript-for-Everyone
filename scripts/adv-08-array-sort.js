const numbers = [100, 20, 5, 42];
numbers.sort((a, b) => a - b);
// Result: [5, 20, 42, 100]
console.log(numbers);

const users = [
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 30 },
];

users.sort((a, b) => a.age - b.age);
// Result: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 30 }]

//Sorting by a string property (ascending name):
users.sort((a, b) => a.name.localeCompare(b.name));
// Result: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 30 }]
