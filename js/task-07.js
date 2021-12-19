const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');



inputEl.addEventListener('change', () => { console.log(Number(inputEl.value)) });
// textEl.style.fontSize = '100px'

inputEl.addEventListener('change', () => { textEl.style.fontSize = Number(inputEl.value) + 'px' });

// console.log(textEl.style.fontSize);