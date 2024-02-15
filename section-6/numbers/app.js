//all numbers in js are represented as floating point numbers
console.log('\n===============NUMBERS, REPRESENTED AS FLOATING POINTS=================');
console.log(23 === 23.0);

//numbers are always stored in a binary format
console.log('\n==============numbers are always stored in a binary format==================');
console.log(0.1 + 0.3 === 0.3);//rounded but not true (false)!!

// strings to numbers, + infront of the string
console.log('\n==============strings to numbers==================');
console.log(typeof +'23');

//parsing is another option
//white spaces will not affect parsing
console.log('\n===============PARSING=================');
console.log(Number.parseInt('35px')); //in this example, the number has to preceed
console.log(Number.parseFloat('3.5rem')); //in this example, the number has to preceed

//NaN - not a number, NOT A PERFECT WAY, checks if the value is not a number
console.log('\n=============NaN - not a number, NOT A PERFECT WAY===================');
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));

//using isFinite, checks if value is a number
console.log('\n=============isFinite, instead of NaN ===================');

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

/** 
 * Using math
  */
//maximum
console.log(Math.max(12, 1, 1000, 59, -1));
//minimum
console.log(Math.min(12, 1, 1000, 59, -1));

/** 
 * numeric separators
  */

let diameter = 232413414132
console.log(diameter);
let diameter2 = 232_413_414_132
console.log(diameter2);

/** 
 * bigInt
  */

console.log(313131231313121314131341313133n);
console.log(BigInt(313131231313121314131341313133));



