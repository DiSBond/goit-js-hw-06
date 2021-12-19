const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');

document.addEventListener('keydown', () => {
    titleEl.textContent = inputEl.value;
})