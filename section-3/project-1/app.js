"use strict";
//DOM manipulation
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 12
console.log(document.querySelector('.guess').value);
 */

const SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => document.querySelector('.message').textContent = message;

const changeBodyColor = (color) => document.querySelector('body').style.backgroundColor = color;


const changeNumber = (number) => document.querySelector('.number').textContent = number

const changeHighScore = (highScore) => document.querySelector('.highscore').textContent = highScore;

const changeNumberStyle = (numberStyle) => document.querySelector('.number').style.width = numberStyle

const changeScore = (changedScore) => document.querySelector('.score').textContent = changedScore;

document.querySelector('.check').addEventListener('click', function () {
    const GUESSED_NUMBER = Number(document.querySelector('.guess').value);
    console.log(GUESSED_NUMBER);

    if (!GUESSED_NUMBER) {
        displayMessage('No Number')
    } else if (GUESSED_NUMBER === SECRET_NUMBER) {
        displayMessage('Correct Number!')
        changeNumber(SECRET_NUMBER)
        //when player wins
        changeBodyColor('#60b347')

        changeNumberStyle('30rem')

        changeHighScore(score)

    } else if (GUESSED_NUMBER !== SECRET_NUMBER) {
        if (score > 0) {
            displayMessage(GUESSED_NUMBER < SECRET_NUMBER ? 'Too Low' : 'Too high!')
            score--;
            changeScore(score)
        } else {
            displayMessage('You lost the game!')
        }

    }
});

document.querySelector('.again').addEventListener('click', function () {
    let score = 20;
    document.querySelector('.guess').value = '';
    displayMessage('No Number')
    changeNumberStyle('15rem')
    changeScore(score)
    changeNumber('?')
    changeBodyColor('#222')


})