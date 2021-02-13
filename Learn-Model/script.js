'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
var name1 = function () {};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    console.log('merhaba');
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
btnClose.addEventListener('click', function () {
  model.classList.add('hidden');
  //   overlay.classList.add('hidden');
});
