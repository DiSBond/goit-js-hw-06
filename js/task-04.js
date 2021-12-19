const buttonMinEl = document.querySelector("button[data-action=decrement]");
const buttonVlEl = document.querySelector("#value");
const buttonPlusEl = document.querySelector("button[data-action=increment]");

let counterValue = 0

const onBtnClick = (number) => {
    counterValue += number; 
    buttonVlEl.textContent = counterValue;
}

buttonMinEl.addEventListener('click', () => onBtnClick(-1));
buttonPlusEl.addEventListener('click', () => onBtnClick(+1));

