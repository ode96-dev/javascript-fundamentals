//start with function keyword and define function name...then function body.

function logger() {
    console.log('I am a developer');
}

//calling, running, or invoking the function
logger();

//function can receive data, arguments
function greetings(name) {
    console.log(`My name is ${name}`);
}
greetings('Dev Ode');

//another example
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const JUICE = `Juice with ${apples} apples and ${oranges} oranges.`

    return JUICE;
}

const processedFruits = fruitProcessor(50, 2)
console.log(processedFruits);

//functions can be re-used
//helps to write more maintainable code.
const appleOrangeJuice = fruitProcessor(1, 9)
console.log(appleOrangeJuice);

//storing into a variable... this is an anonymous function
const age = function (birthYear) {
    return 2023 - birthYear
}
console.log(age(1992));

//also, can be written in as follows as in ES6...arrow function:
const age2 = (birthYear) => {
    return 2023 - birthYear
}
console.log(age2(1995));

//could be simplified for one liners
const age3 = birthYear => 2022 - birthYear
console.log(age3(1995));

//functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4
}
function fruitProcessor2(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    const JUICE = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`

    return JUICE;
}

console.log(fruitProcessor2(2, 4));
