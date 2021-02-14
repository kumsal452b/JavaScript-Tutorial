'use strict';
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score1.textContent = 0;
score2.textContent = 0;

btnRoll.addEventListener('click', function () {
  const diceN = Math.floor(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  if (diceN === 1) {
    dice.src = 'dice-1.png';
  } else if (diceN === 2) {
    dice.src = 'dice-2.png';
  } else if (diceN === 3) {
    dice.src = 'dice-3.png';
  } else if (diceN === 4) {
    dice.src = 'dice-4.png';
  } else if (diceN === 5) {
    dice.src = 'dice-5.png';
  } else if (diceN === 6) {
    dice.src = 'dice-6.png';
  }
});
