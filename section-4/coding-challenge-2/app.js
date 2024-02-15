/* 1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players.
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2').
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in).
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
 */

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

//solution
console.log('\n1. ====get players for each team =====');
const [players1, players2] = game.players;
console.log(players1, players2);

console.log('\n2. ====get goalkeepers, bayern =====');
const [goalKeeper, ...fieldPlayers] = players1;
console.log(goalKeeper, fieldPlayers);

console.log('\n3. ====get all players in the game =====');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

console.log('\n4. ====players one final, bayern =====');
const addedSubs = [...players1, 'Alcantara', 'Phillipe', 'Perisic'];
console.log(addedSubs);

console.log('\n5. ==== odds =====');
const { odds: { team1, x: draw, team2 } } = game
console.log(team1, draw, team2);

console.log('\n6. ==== print goals =====');
const printGoals = function (...goalScorers) {
    console.log(`${goalScorers.length} goals were scored`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)

console.log('\n7. ==== more likely to win based on odds =====');
team1 < team2 && console.log('Team 1 is more likely to win');




