/* This time, we have a map called 'gameEvents' (see below) with a 
log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in 
which each event happened (a football game has 90 minutes plus some 
extra time). Your tasks: 
1. Create an array 'events' of the different game events that 
happened (no duplicates) 
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
So remove this event from the game events log. 
3. Compute and log the following string to the console: 
"An event happened, on average, every 9 minutes" (keep in mind that 
a game has 90 minutes) 
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game */

//1.
const gameEvents = new Map([
    [17, '⚽️ Goal'],
    [36, '␚ Substitution'],
    [47, '⚽️ Goal'],
    [61, '␚ Substitution'],
    [64, '🟨 Yellow Card'],
    [69, '🟥 Red Card'],
    [70, '␚ Substitution'],
    [72, '␚ Substitution'],
    [76, '⚽️ Goal'],
    [80, '⚽️ Goal'],
    [92, '🟨 Yellow Card']
])

//2.
console.log("\n================REMOVE YELLOW CARD================");
const removeYellowCard = gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log("\n================AVERAGE ON EVENTS================");
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

//4.
console.log("\n================GAME EVENTS IN EACH HALF================");
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}:${event}`);
}