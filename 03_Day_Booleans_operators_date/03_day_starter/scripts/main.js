// Declare variables and check data types
let firstName = 'John';
let lastName = 'Doe';
let country = 'Canada';
let city = 'Vancouver';
let age = 30;
let isMarried = false;
let year = 2023;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

// Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // true

// Truthy values
console.log(1); // number
console.log(true); // boolean
console.log('hello'); // string

// Falsy values
console.log(0); // number
console.log(false); // boolean
console.log(''); // string

// Comparison expressions
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

// Falsy comparison statement
console.log('python'.length < 'jargon'.length); // false

// Boolean expressions
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true

// Check if 'on' is not in 'dragon' and 'python'
console.log(!('dragon'.includes('on') || 'python'.includes('on'))); // true

// Date object
let today = new Date();
console.log(today.getFullYear()); // e.g. 2023
console.log(today.getMonth() + 1); // e.g. 4 (May)
console.log(today.getDate()); // e.g. 28
console.log(today.getDay()); // e.g. 4 (Thursday)
console.log(today.getHours()); // e.g. 11
console.log(today.getMinutes()); // e.g. 30
console.log(Math.floor(Date.now() / 1000)); // number of seconds elapsed since January 1, 1970



// Excercise level 2

// 1.
let base = prompt("Enter the base of the triangle:");
let height = prompt("Enter the height of the triangle:");

// Convert the input values to numbers
base = parseFloat(base);
height = parseFloat(height);

// Calculate the area of the triangle
const area = 0.5 * base * height;

// Output the result
console.log(`The area of the triangle is ${area}`);



// 2.
let a = parseFloat(prompt("Enter side a: "));
let b = parseFloat(prompt("Enter side b: "));
let c = parseFloat(prompt("Enter side c: "));

20// Output the result
console.log(`The perimeter of the triangle is ${a+b+c}`);


// Get the current date and time
const now = new Date();

// Extract the year, month, and day
const yea = now.getFullYear();
const month = ('0' + (now.getMonth() + 1)).slice(-2);
const day = ('0' + now.getDate()).slice(-2);

// Extract the hours and minutes
const hours = ('0' + now.getHours()).slice(-2);
const minutes = ('0' + now.getMinutes()).slice(-2);

// Create the human-readable time format
const timeFormat = `${yea}-${month}-${day} ${hours}:${minutes}`;

// Output the result
console.log(timeFormat);
