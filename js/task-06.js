const inputEl = document.querySelector('#validation-input');

const inputValue = Number(inputEl.dataset.length);

function cheker() {
    if (inputValue === inputEl.value.length) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }

    // console.log(inputEl.value.length);
    // console.log(inputValue);
};

inputEl.addEventListener('blur', cheker);
    
