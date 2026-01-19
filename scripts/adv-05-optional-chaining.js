const user = {
    dog: {
        name: "Alex"
    }
};

console.log(user.cat?.name); //undefined
console.log(user.dog?.name); //Alex
console.log(user.cat.name);

/*user.cat does not exist, so its value is undefined
Accessing .name on undefined throws a TypeError
Optional chaining (?.) prevents the error by safely returning undefined
*/