// objects can be destructured
"use strict";
const restaurant = {
    name: 'Classino Pallito',
    location: 'Lorrem Technologies Street',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    startMenu: ['lorem', 'ipsum', 'sit', 'suet'],
    mainMenu: ['Pizza', 'Pasta']
};

//this will not work with an object. Instead, use exact value
// const { a, b, c } = restaurant
// console.log(a, b, c);
const { name, location, categories } = restaurant
console.log(name, location, categories);

//specifying names
const { name: restaurantName, location: restaurantLocation, categories: restaurantCategories } = restaurant
console.log(restaurantName, restaurantLocation, restaurantCategories);

//spread operator (...)
const classinoPallito = { ...restaurant, chef: 'Pallito' }
console.log(classinoPallito);