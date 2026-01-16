# Destructuring Assignment in JavaScript

Destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables. It provides a concise and readable syntax for extracting data.

## Table of Contents
- [Array Destructuring](#array-destructuring)
- [Object Destructuring](#object-destructuring)
- [Default Values](#default-values)
- [Rest Operator with Destructuring](#rest-operator-with-destructuring)
- [Nested Destructuring](#nested-destructuring)
- [Function Parameters](#function-parameters)
- [Swapping Variables](#swapping-variables)
- [Practical Examples](#practical-examples)

---

## Array Destructuring

Array destructuring allows you to extract values from arrays and assign them to variables.

### Basic Syntax

```javascript
// Traditional way
const numbers = [1, 2, 3];
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

// Using destructuring
const [first, second, third] = [1, 2, 3];
console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3
```

### Skipping Elements

```javascript
const colors = ['red', 'green', 'blue', 'yellow'];
const [firstColor, , thirdColor] = colors;
console.log(firstColor); // 'red'
console.log(thirdColor); // 'blue'
```

### Destructuring from Function Return

```javascript
function getCoordinates() {
  return [10, 20];
}

const [x, y] = getCoordinates();
console.log(x); // 10
console.log(y); // 20
```

---

## Object Destructuring

Object destructuring allows you to extract properties from objects and assign them to variables.

### Basic Syntax

```javascript
// Traditional way
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
const name = person.name;
const age = person.age;

// Using destructuring
const { name, age, city } = person;
console.log(name); // 'John'
console.log(age);  // 30
console.log(city); // 'New York'
```

### Renaming Variables

```javascript
const user = {
  firstName: 'Jane',
  lastName: 'Doe'
};

const { firstName: fName, lastName: lName } = user;
console.log(fName); // 'Jane'
console.log(lName); // 'Doe'
```

### Extracting Specific Properties

```javascript
const product = {
  id: 101,
  name: 'Laptop',
  price: 999,
  brand: 'Dell',
  stock: 50
};

const { name, price } = product;
console.log(name);  // 'Laptop'
console.log(price); // 999
```

---

## Default Values

You can assign default values in case the unpacked value is `undefined`.

### Array Destructuring with Defaults

```javascript
const [a = 1, b = 2, c = 3] = [10];
console.log(a); // 10
console.log(b); // 2 (default)
console.log(c); // 3 (default)
```

### Object Destructuring with Defaults

```javascript
const { name = 'Anonymous', age = 0 } = { name: 'Alice' };
console.log(name); // 'Alice'
console.log(age);  // 0 (default)
```

### Combining Renaming and Defaults

```javascript
const settings = {
  theme: 'dark'
};

const { theme: selectedTheme = 'light', language: lang = 'en' } = settings;
console.log(selectedTheme); // 'dark'
console.log(lang);          // 'en' (default)
```

---

## Rest Operator with Destructuring

The rest operator (`...`) collects the remaining elements into a new array or object.

### Array Rest

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
```

### Object Rest

```javascript
const person = {
  name: 'Bob',
  age: 25,
  country: 'USA',
  city: 'Boston'
};

const { name, age, ...location } = person;
console.log(name);     // 'Bob'
console.log(age);      // 25
console.log(location); // { country: 'USA', city: 'Boston' }
```

---

## Nested Destructuring

You can destructure nested arrays and objects.

### Nested Array Destructuring

```javascript
const matrix = [[1, 2], [3, 4], [5, 6]];
const [[a, b], [c, d]] = matrix;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
```

### Nested Object Destructuring

```javascript
const user = {
  id: 1,
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  }
};

const {
  name,
  address: {
    city,
    coordinates: { lat, lng }
  }
} = user;

console.log(name); // 'John'
console.log(city); // 'New York'
console.log(lat);  // 40.7128
console.log(lng);  // -74.0060
```

### Mixed Nested Destructuring

```javascript
const data = {
  status: 'success',
  results: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]
};

const { status, results: [firstItem, secondItem] } = data;
console.log(status);     // 'success'
console.log(firstItem);  // { id: 1, name: 'Item 1' }
console.log(secondItem); // { id: 2, name: 'Item 2' }
```

---

## Function Parameters

Destructuring is very useful for function parameters, especially with options objects.

### Array Destructuring in Parameters

```javascript
function printCoordinates([x, y]) {
  console.log(`X: ${x}, Y: ${y}`);
}

printCoordinates([10, 20]); // X: 10, Y: 20
```

### Object Destructuring in Parameters

```javascript
function createUser({ name, age, email }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
}

createUser({
  name: 'Alice',
  age: 28,
  email: 'alice@example.com'
});
```

### With Default Values

```javascript
function greet({ name = 'Guest', greeting = 'Hello' } = {}) {
  console.log(`${greeting}, ${name}!`);
}

greet({ name: 'John' });           // Hello, John!
greet({ greeting: 'Hi' });         // Hi, Guest!
greet();                           // Hello, Guest!
```

### Practical Example with Options

```javascript
function fetchData(url, { method = 'GET', headers = {}, timeout = 5000 } = {}) {
  console.log(`Fetching ${url}`);
  console.log(`Method: ${method}`);
  console.log(`Timeout: ${timeout}ms`);
  // ... fetch logic
}

fetchData('https://api.example.com/data', { method: 'POST', timeout: 3000 });
```

---

## Swapping Variables

Destructuring makes swapping variables simple and elegant.

```javascript
let a = 1;
let b = 2;

// Traditional way
let temp = a;
a = b;
b = temp;

// Using destructuring
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
```

---

## Practical Examples

### Example 1: Working with API Responses

```javascript
const apiResponse = {
  data: {
    user: {
      id: 123,
      username: 'johndoe',
      profile: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com'
      }
    }
  },
  status: 200,
  message: 'Success'
};

const {
  data: {
    user: {
      username,
      profile: { firstName, lastName, email }
    }
  },
  status
} = apiResponse;

console.log(username);  // 'johndoe'
console.log(firstName); // 'John'
console.log(email);     // 'john@example.com'
console.log(status);    // 200
```

### Example 2: Iterating with Destructuring

```javascript
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Using for...of with destructuring
for (const { name, age } of users) {
  console.log(`${name} is ${age} years old`);
}

// Using forEach with destructuring
users.forEach(({ name, age }) => {
  console.log(`${name}: ${age}`);
});
```

### Example 3: Extracting Values from Arrays of Objects

```javascript
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 29 },
  { id: 3, name: 'Keyboard', price: 79 }
];

// Extract just prices
const prices = products.map(({ price }) => price);
console.log(prices); // [999, 29, 79]

// Extract just names
const productNames = products.map(({ name }) => name);
console.log(productNames); // ['Laptop', 'Mouse', 'Keyboard']
```

### Example 4: Handling Multiple Return Values

```javascript
function getStats(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const avg = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  
  return { sum, avg, min, max };
}

const { sum, avg, min, max } = getStats([10, 20, 30, 40, 50]);
console.log(`Sum: ${sum}, Average: ${avg}, Min: ${min}, Max: ${max}`);
// Sum: 150, Average: 30, Min: 10, Max: 50
```

### Example 5: Configuration Objects

```javascript
function initializeApp(config) {
  const {
    server: { host = 'localhost', port = 3000 } = {},
    database: { url, name } = {},
    debug = false
  } = config;
  
  console.log(`Server: ${host}:${port}`);
  console.log(`Database: ${url}/${name}`);
  console.log(`Debug mode: ${debug}`);
}

initializeApp({
  server: { host: '192.168.1.1', port: 8080 },
  database: { url: 'mongodb://localhost', name: 'myapp' },
  debug: true
});
```

---

## Summary

Destructuring assignment is a powerful feature in JavaScript that:
- Makes code more concise and readable
- Simplifies working with arrays and objects
- Reduces the need for temporary variables
- Works great with function parameters
- Supports default values and renaming
- Can handle nested structures

Practice using destructuring in your daily coding to make your JavaScript code cleaner and more expressive!
