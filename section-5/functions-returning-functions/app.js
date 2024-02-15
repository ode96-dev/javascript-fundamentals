'use strict';
const greet = function (greeting, salutation) {
    return function (name) {
        console.log(`${greeting} ${salutation} ${name}`);
    }
}
//using arrow function
const greet2 = (greeting, salutation) => name => console.log(`${greeting} ${salutation} ${name}`)
// const greeter = greet('Good Evening', 'Mr.')
// greeter('Dev Ode')
greet('Good Evening', 'Mr.')('Dev Ode');
greet2('Good afternoon', 'Ms')('Jf Ode')//using the arrow function