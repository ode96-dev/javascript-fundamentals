//allow to transform values or combine multiple values
//types are: 
// mathematic operators => -, +, %, /, *
const CURRENT_YEAR = 2024
const DEV_YOB = 1997
const AGE_DEV = CURRENT_YEAR - DEV_YOB
console.log(AGE_DEV * 2, AGE_DEV / 2, AGE_DEV % 2);
//concatenating strings with '+'
const FIRST_NAME = 'Dev'
const LAST_NAME = 'Ode'
console.log(FIRST_NAME + ' ' + LAST_NAME);

//ASSIGNMENT OPERATOR
let x = 10 + 15 // =,+=, -=, *=, /=,

//COMPARISON OPERATORS
console.log(CURRENT_YEAR > DEV_YOB); // >, >=, <=,<

//OPERATOR PRECEDENCE - review in MDN
console.log(25 - 10 + 5);