"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');


const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal)
}


btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});