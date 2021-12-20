const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = Number(inputEl.value) + 'px';

inputEl.addEventListener('input', () => { console.log(Number(inputEl.value)) });
// textEl.style.fontSize = '100px'

inputEl.addEventListener('input', () => { textEl.style.fontSize = Number(inputEl.value) + 'px' });

// console.log(textEl.style.fontSize);