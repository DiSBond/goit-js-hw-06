function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const spanColorEl = document.querySelector('.color');
const buttonChngColor = document.querySelector('.change-color');

buttonChngColor.addEventListener('click', onBtnClick)

function onBtnClick() {
  
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;

  spanColorEl.textContent = randomColor;

  console.log(bodyEl.style.backgroundColor);
}