const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEL = document.querySelector("#ingredients")

const ingredientList = ingredients.map(element => {

  const ingredLi = document.createElement('li');

  ingredLi.textContent = element;
  ingredLi.classList.add('item');

  return ingredLi
});

ingredientsListEL.append(...ingredientList);

console.log(ingredientsListEL);