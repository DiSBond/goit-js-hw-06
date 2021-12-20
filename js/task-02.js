const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEL = document.querySelector("#ingredients")

const ingredientListNew = [];

const ingredientList = ingredients.map(element => {

  const ingredLi = document.createElement('li');

  ingredLi.textContent = element;
  ingredLi.classList.add('item');

  ingredientListNew.push(ingredLi);

  ingredientsListEL.append(...ingredientListNew);

});


console.log(ingredientsListEL);