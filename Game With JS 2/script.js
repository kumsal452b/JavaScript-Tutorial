'use strict';
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score1.textContent = 0;
score2.textContent = 0;
let currentScor = 0;
let activePlayer = 0;
let scorList = [0, 0];
btnRoll.addEventListener('click', function () {
  const diceN = Math.floor(Math.random() * 6 + 1);
  dice.src = `dice-${diceN}.png`;
  dice.classList.remove('hidden');
  if (diceN != 1) {
    currentScor += diceN;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScor;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // scorList[activePlayer] = currentScor;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    activePlayer ? (activePlayer = 0) : (activePlayer = 1);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
    // currentScor = scorList[activePlayer];
  }
});

btnRoll;
