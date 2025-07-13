console.log("This is how you can show a message in the console.");

// This is the different ways to declare variables in JavaScript
var myVariable = "Hello, World!";
let anotherVariable = 42;
const constantVariable = true;

// This is how to assigne a value to a variable
myVariable = "New Value"; // Reassigning a value to a variable declared with var
anotherVariable = 100; // Reassigning a value to a variable declared with let
// constantVariable = false; // This will throw an error because constants cannot be reassigned

// This is how to concatenate strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Using the + operator
console.log(fullName); // Output: John Doe