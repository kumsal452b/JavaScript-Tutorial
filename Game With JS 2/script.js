'use strict';
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score1.textContent = 0;
score2.textContent = 0;
let currentScor = 0;
btnRoll.addEventListener('click', function () {
  const diceN = Math.floor(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  if (diceN != 1) {
    dice.src = `dice-${diceN}.png`;
    currentScor += diceN;
  } else {
  }
});
