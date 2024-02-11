//with our exercise example
/** - has 3 parts
 * - 1. initial value of a counter
 * - 2. logical condition evaluated before each iteration of the loop
 * while loop keeps running while the condition is TRUE
 * can be used for larger instances
 */

let rep = 1;

while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`)
    rep++;
}

// dice roll example
let dice = Math.trunc(Math.random() * 6) + 1
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log('loop is about to end');
}