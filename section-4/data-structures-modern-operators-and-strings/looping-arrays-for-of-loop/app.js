"use strict";
const restaurant = {
    name: 'Classino Pallito',
    location: 'Lorrem Technologies Street',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    startMenu: ['lorem', 'ipsum', 'sit', 'suet'],
    mainMenu: ['Pizza', 'Pasta']
};

const menu = [...restaurant.startMenu, ...restaurant.mainMenu]

// elements individual returned
//loops over the entire array, each iteration yields access to the array using item
// break and continue can be used
for (const item of menu) {
    console.log(item);
}

//getting array with entries
console.log("\n=================getting array with entries===============");
for (const item of menu.entries()) {
    console.log(item);
}

//destructuring the array
console.log("\n=================destructuring===============");
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}
