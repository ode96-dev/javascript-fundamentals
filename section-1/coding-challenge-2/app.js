/**
 * Mark and John are trying to compare their body mass indeces
 * formula for BMI = mass/height * height (mass in kg, height in meters)
 * 1. store their mass and height in variables
 * 2. calculate their BMI
 * 3. check if Mark has higher BMI than John
 * Mark is 78kg,1.68m
 * John is 92kg, 1.95m
 * 
 * in this example, we are using the template literal and the if...else statement
**/

console.log('1. ================================================================');
//1.
//Mark
const MARK_HEIGHT = 1.68
let Mark_Weight = 78
console.log(`Mark_Weight is: ${Mark_Weight} his height: ${MARK_HEIGHT}`);
//John
const JOHN_HEIGHT = 1.95
let John_Weight = 92
console.log(`Mark_Weight is: ${John_Weight} his height: ${JOHN_HEIGHT}`);

console.log('2. ================================================================');

//2. BMI = mass/height ** 2
//John
let John_BMI = John_Weight / (JOHN_HEIGHT * JOHN_HEIGHT)
console.log(`John_BMI is ${John_BMI}`);
//Mark
let Mark_BMI = Mark_Weight / (MARK_HEIGHT * MARK_HEIGHT)
console.log(`Mark_BMI is ${Mark_BMI}`);

console.log('3. ================================================================');
// 3.
if (Mark_BMI > John_BMI) {
    console.log(`Mark has a higher BMI than John`);
} else {
    console.log(`Mark has a lower BMI than John`);
}

