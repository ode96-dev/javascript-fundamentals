"use strict";
//destructuring - break into small

const restaurant = {
    name: 'Classino Pallito',
    location: 'Lorrem Technologies Street',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    startMenu: ['lorem', 'ipsum', 'sit', 'suet'],
    mainMenu: ['Pizza', 'Pasta']
};

//destructuring an array
const [a, b, c] = restaurant['categories']
// const [a, , c] = restaurant['categories']//skips the element in the middle
console.log(a, b, c);
console.log(b, c);

//using default values
// const [p, q, r] = [1, 2]
// console.log(p, q, r); //r will be undefined

const [p, q, r = 1] = [1, 2]
console.log(p, q, r); //r has a default value

//The spread operator ...
const arr = restaurant['startMenu']

const newArrayWithArr = [1, 2, ...arr] //spread operator in action. could have been addition of single array elements here
console.log(newArrayWithArr);
//can be used to get elements individually
console.log(...newArrayWithArr);
// use case 1. joining arrays
const megaMenu = [...restaurant['mainMenu'], ...restaurant['startMenu']]
console.log(megaMenu);
// use case 1. copy array
const megaMenu2 = [...restaurant['startMenu']]
console.log(megaMenu2);

//another example
const str = 'Dev Ode'
const letters = [...str, ' ', 'S.']
console.log(letters);






