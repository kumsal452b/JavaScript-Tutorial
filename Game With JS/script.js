'use strict';

var message = document.querySelector('.message');
var score = document.querySelector('.score');
var highScore = document.querySelector('.highscore');
var checkButton = document.querySelector('.check');
var numberCenter = document.querySelector('.guess');
var number = document.querySelector('.number');
var backgroundElement = document.querySelector('body');
let thescore = 20;
checkButton.addEventListener('click', function () {
  var currentNumber = Number(numberCenter.value);
  if (currentNumber == 0) {
    message.textContent = 'No number';
    return;
  }
  if (currentNumber == generateNumber) {
    message.textContent = '😂 Correct number';
    number.textContent = generateNumber;
    backgroundElement.style.backgroundColor = 'rgb(3, 58, 71)';
  } else if (currentNumber < generateNumber) {
    message.textContent = 'Too low';
    thescore--;
    score.textContent = thescore;
  } else if (currentNumber > generateNumber) {
    message.textContent = 'Too high';
    thescore--;
    score.textContent = thescore;
  }
});

var generateNumber = Math.floor(Math.random() * 20 + 1);

var checkFuntion = function () {
  var currentNumber = Number(numberCenter.Value);
  if (currentNumber == null) {
    message.textContent = 'No number';
  }
  if (currentNumber == generateNumber) {
    message.textContent = '😂 Correct number';
    number.textContent = generateNumber;
    checkButton.disbaled = false;
  } else if (currentNumber < generateNumber) {
    message.textContent = 'Too low';
  } else if (currentNumber > generateNumber) {
    message.textContent = 'Too high';
  }
};
