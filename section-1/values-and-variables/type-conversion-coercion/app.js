//coercion js does it for you
//conversion when you do it

const CURRENT_YEAR = 2023
let currentYear = '2023';
console.log(typeof CURRENT_YEAR);
console.log(typeof currentYear);
//conversion
console.log(Number(currentYear));
currentYear = false;
console.log(typeof currentYear);
currentYear = 12345;
console.log(typeof currentYear);
//coercion
let age = 23
console.log(`I am ${age} years old.`);//age coerced to string
