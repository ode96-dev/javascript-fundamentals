/* 
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski"). 
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember). 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25 Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
Hint: Note how the odds and the game objects have the same property names 😉 
4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. 
In this game, it will look like this: { Gnarby: 1, Hummels: 1, Lewandowski: 2 } */
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Manuel',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:1',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}

//1.
console.log("\n====Goal Scorers=====");
const goalScorers = game.scored
for (const [goalNumber, goalScorer] of goalScorers.entries()) {
    console.log(`Goal ${goalNumber + 1}: ${goalScorer}`);
}

// 2.
console.log("\n====Calculate Average=====");
const gameOdds = Object.values(game.odds)
let average = 0;
for (const odd of gameOdds) {
    average += odd
}
average /= gameOdds.length;
console.log(average);
// Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25 Odd of victory Borrussia Dortmund: 6.5
//3.
console.log("\n====Display Odds=====");
const gettingOdds = Object.entries(game.odds);

for (const [team, odd] of gettingOdds) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr} ${odd}`);
}