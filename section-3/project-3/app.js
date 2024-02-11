"use strict";

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0ScoreEl = document.getElementById('current--0');
const current1ScoreEl = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores,
    currentScore,
    activePlayer,
    playing;

//starting point
const initGame = function () {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0ScoreEl.textContent = 0;
    current1ScoreEl.textContent = 0;
    diceEl.classList.add('hidden')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')

}

initGame();

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')

}
//rolling dice
btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;;

        //display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`

        if (dice !== 1) {
            //check rolled, if dice not 1
            currentScore += dice // currentScore = currentScore + dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            //switch to next player
            switchPlayer()
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        //add current score to active player
        scores[activePlayer] += currentScore

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        if (scores[activePlayer] >= 100) {
            //finish the game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            //switch to the next player
            switchPlayer()
        }
    }
})

btnNew.addEventListener('click', initGame)


