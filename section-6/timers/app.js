//seTimer and setInterval
//example: order pizza
//this provides an asynchronous functionality

//setTimeout - schedules a function to run after X amount of time. the callback function will run once
console.log('===============setTimeout=================');

setTimeout(() => console.log('here is your pizza 🍕'), 3000);
console.log('waiting...');

//with arguments
setTimeout((ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, 'cheese', 'beef');

//using the spread operator
const ingredients = ['cheese', 'pork']
setTimeout((ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2} 🍕`), 3000, ...ingredients);
console.log('waiting...');

//setInterval, execute for the given X amount of time. 
console.log('===============setInterval=================');
setInterval(() => console.log('hellooooo'), 1000)