/**
 * two gymnastics teams. Dolphins and Koalas.
 * compete against each other thrice
 * winner with highest average score wins the trophy
 * 
 * 1. calculate the average score for each team using the test data below
 * 2. compare the team's average scores to determine the winner of the competition, and print.
 * 3. give a requirement of a min of 100 to determine the winner of the competition
 * test data:
 * Dolphins - 96, 100, and 89
 * Koalas - 88, 91, and 110
 * 
**/
//teams
let Team_A = 'Dolphins'
let Team_B = 'Koalas'

//matches
//for dolphins
const Team_A_SCORE_1 = 96
const Team_A_SCORE_2 = 100
const Team_A_SCORE_3 = 89

//for Koalas
const Team_B_SCORE_1 = 88
const Team_B_SCORE_2 = 91
const Team_B_SCORE_3 = 110

//total scores
const Team_A_TOTAL_SCORE = Team_A_SCORE_1 + Team_A_SCORE_2 + Team_A_SCORE_3
const Team_B_TOTAL_SCORE = Team_B_SCORE_1 + Team_B_SCORE_2 + Team_B_SCORE_3

//average scores
const TEAM_A_AVERAGE_SCORE = Team_A_TOTAL_SCORE / 3
const TEAM_B_AVERAGE_SCORE = Team_B_TOTAL_SCORE / 3

console.log('===============AVERAGE SCORES=================');

console.log(`${Team_A} average score: ${TEAM_A_AVERAGE_SCORE}`);
console.log(`${Team_B} average score: ${TEAM_B_AVERAGE_SCORE}`);

console.log('===============DETERMINING WINNER=================');
// determine win, winner or draw
if (TEAM_A_AVERAGE_SCORE > TEAM_B_AVERAGE_SCORE) {
    console.log(`${Team_A} has won the competition`);
} else if (TEAM_B_AVERAGE_SCORE > TEAM_A_AVERAGE_SCORE) {
    console.log(`${Team_B} has won the competition`);
} else {
    console.log('Competition ended in a draw.');
}

console.log('===============DETERMINING WINNER, BASED ON MIN SCORE OF 100=================');
// determine win, winner or draw based on min score of 100
if (TEAM_A_AVERAGE_SCORE > TEAM_B_AVERAGE_SCORE && TEAM_A_AVERAGE_SCORE >= 100) {
    console.log(`${Team_A} has won the competition`);
} else if (TEAM_B_AVERAGE_SCORE > TEAM_A_AVERAGE_SCORE && TEAM_B_AVERAGE_SCORE >= 100) {
    console.log(`${Team_B} has won the competition`);
} else {
    console.log('Competition ended in a draw.');
}

