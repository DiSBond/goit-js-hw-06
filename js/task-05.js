const inputEl = document.querySelector('#name-input');
const titleEl = document.querySelector('#name-output');


document.addEventListener('input', inputText);
inputEl.addEventListener('blur', inputText);

function inputText() {
    if (inputEl.value === '') {
        titleEl.textContent = "Anonymous";
    } else {
        titleEl.textContent = inputEl.value;
    };
};
