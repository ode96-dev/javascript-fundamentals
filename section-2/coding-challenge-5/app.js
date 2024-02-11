/**
 * Teams - Dolphins, Koalas
 * Each team competes 3 times. 
 * Average score is calculated
 * Team only wins if it has at least double the average score of the other team. 
 * 1. create arrow function for 'calcAverage' to calculate the average score
 * 2. use the function to calc the average for both teams
 * 3. create a function 'checkWinner' that takes the average score of each team as params and the log the winner
 * 4. use 'checkWinner' to calculate the winner for both DATA1 AND DATA2
 * 5. Ignore draws this time
 * DATA1: Dolphins score 44, 23, 71.
 * DATA1: Koalas score 65, 54, 49.
 * **/
console.log(`\n===========================INITIALIZE TEAMS=====================================`);

const TEAM_A = 'Dolphins';
const TEAM_B = 'Koalas';

console.log(`The teams involved in this competition are ${TEAM_A} and ${TEAM_B}`);

console.log(`\n =========================== INITIALIZE SCORES =====================================`);

const TEAM_A_SCORE1 = 85
const TEAM_A_SCORE2 = 120
const TEAM_A_SCORE3 = 41

console.log(`\nThen following are ${TEAM_A} scores in this competition: ${TEAM_A_SCORE1}, ${TEAM_A_SCORE2}, ${TEAM_A_SCORE3}`);

const TEAM_B_SCORE1 = 23
const TEAM_B_SCORE2 = 34
const TEAM_B_SCORE3 = 27

console.log(`\nThen following are ${TEAM_B} scores in this competition: ${TEAM_B_SCORE1}, ${TEAM_B_SCORE2}, ${TEAM_B_SCORE3}`);

console.log(`\n =========================== AVERAGES =====================================`);

const AVERAGE_SCORE = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const TEAM_A_AVERAGE_SCORE = AVERAGE_SCORE(TEAM_A_SCORE1, TEAM_A_SCORE2, TEAM_A_SCORE3)
const TEAM_B_AVERAGE_SCORE = AVERAGE_SCORE(TEAM_B_SCORE1, TEAM_B_SCORE2, TEAM_B_SCORE3)

console.log(`\nAverage Score for ${TEAM_A}: ${TEAM_A_AVERAGE_SCORE}`);
console.log(`\nAverage Score for ${TEAM_B}: ${TEAM_B_AVERAGE_SCORE}`);

console.log(`\n =========================== WINNER =====================================`);
function checkWinner(averageScoreA, averageScoreB) {
    const TOTAL_SCORE_A = TEAM_A_SCORE1 + TEAM_A_SCORE2 + TEAM_A_SCORE3;
    const TOTAL_SCORE_B = TEAM_B_SCORE1 + TEAM_B_SCORE2 + TEAM_B_SCORE3;

    if (averageScoreA >= averageScoreB * 2) {
        console.log(`${TEAM_A} has won this competition (${TOTAL_SCORE_A} v ${TOTAL_SCORE_B})`);
    } else if (averageScoreB >= averageScoreA * 2) {
        console.log(`${TEAM_B} won this competition (${TOTAL_SCORE_B} v ${TOTAL_SCORE_A})`);
    } else {
        console.log(`Neither ${TEAM_A} nor ${TEAM_B} won this competition`);
    }
}
checkWinner(TEAM_A_AVERAGE_SCORE, TEAM_B_AVERAGE_SCORE)
