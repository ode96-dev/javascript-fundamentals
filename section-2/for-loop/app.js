/** - has 3 parts
 * - 1. initial value of a counter
 * - 2. logical condition evaluated before each iteration of the loop
 * for loop keeps running while the condition is TRUE
 * - 3. update counter after each iteration of the loop
 */

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetitions ${rep}`);
}

// looping through arrays - common use
const FRIENDS = ["Sam", 27, 'Moh', 'J',]
for (let friend = 0; friend < FRIENDS.length; friend++) {
    // reading 
    console.log(`Friend ${friend + 1}: ${FRIENDS[friend]}`);
}

//another example
const years = [1996, 1998, 1942, 1935]
const ages = []

for (let i = 0; i < years.length; i++) {
    const calculatedAge = 2023 - years[i]
    ages.push(calculatedAge)
}
console.log(ages);

// continue - exit current iteration and skip to the next and break - terminate loop
//continue
for (let friend = 0; friend < FRIENDS.length; friend++) {
    if (typeof FRIENDS[friend] !== 'string') continue
    console.log(`Friend ${friend + 1}: ${FRIENDS[friend]}`);
}
//break
for (let friend = 0; friend < FRIENDS.length; friend++) {
    if (typeof FRIENDS[friend] !== 'number') break
    console.log(`Friend ${friend + 1}: ${FRIENDS[friend]}`);
}

//looping backwards
for (let i = FRIENDS.length - 1; i >= 0; i--) {
    console.log(`\nFriend ${i + 1}: ${FRIENDS[i]}`);
}

// loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weights repetitions ${rep}`);
    }
}
