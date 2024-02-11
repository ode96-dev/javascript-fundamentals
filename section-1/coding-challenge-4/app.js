/**
 * stephen wants to build a very simple tip calc
 * it is usual to tip 15% of the bill value is btn 50 and 300
 * higher? 20%
 * 1. calculate the tip, depending on the bill value.
 * create a variable called tip for this
 * use ternary operator
 * 2. print a string to the console containing the bill value, the tip, and the final value (bill + tip)
 * 
 * test data for bill values 275, 40, 430
 */

let tip;
let totalBill;

const BILLED = 275

tip = BILLED >= 50 || BILLED <= 300 ? `${0.15 * BILLED}` : `${0.20 * BILLED}`

totalBill = `You were billed ${BILLED}. You tipped ${tip}. Your total bill is ${BILLED + Number(tip)}`

console.log(totalBill);


