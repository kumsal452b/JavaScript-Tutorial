'use strict';
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  console.log('merhaba');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
model.addEventListener('keyup', e => {
  console.log('selam');
});
