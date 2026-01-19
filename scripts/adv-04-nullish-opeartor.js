/*The Nullish Coalescing Operator (??) is a JavaScript logical operator that returns its right-hand side operand only when its left-hand side operand is null or undefined. Otherwise, it returns the left-hand side operand's value. 
Key Features and Usage
Purpose: The primary use of ?? is to provide a default value when a variable's value might be null or undefined.
Specificity (vs. Logical OR ||): The ?? operator is a safer alternative to the logical OR (||) operator for setting defaults. The || operator returns the right-hand side for any "falsy" value (which includes false, 0, and "" an empty string), while ?? treats these specific falsy values as valid and only falls back to the default if the value is explicitly null or undefined. 
*/
//Examples
//Code 	Result	Explanation
const n1 = null ?? 1; //1	n1 is null, so it defaults to the right-hand value 1.
const n2 = undefined ?? 2; //2	n2 is undefined, so it defaults to 2.
const n3 = false ?? 3; //false	false is not null or undefined, so it is returned.
const n4 = 0 ?? 4;
0; //0 is not null or undefined, so it is returned.
const n5 = "" ?? 5;
(""); //An empty string is not null or undefined, so it is returned.
