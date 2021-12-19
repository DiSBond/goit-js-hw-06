const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEL = document.querySelector("#ingredients")

// for (const ingredient of ingredients) {
//   const ingredLi = document.createElement("li");
//   ingredLi.textContent = ingredient;
//   ingredLi.classList.add("item");

//   ingredientsListUl.appendChild(ingredLi);
// }


  const potatoes = document.createElement("li");
  potatoes.textContent = ingredients[0];
potatoes.classList.add("item");
  
const mushrooms = document.createElement("li");
  mushrooms.textContent = ingredients[1];
mushrooms.classList.add("item");

const garlic = document.createElement("li");
  garlic.textContent = ingredients[2];
garlic.classList.add("item");

const tomatos = document.createElement("li");
  tomatos.textContent = ingredients[3];
tomatos.classList.add("item");

const herbs = document.createElement("li");
  herbs.textContent = ingredients[4];
herbs.classList.add("item");

const condiments = document.createElement("li");
  condiments.textContent = ingredients[5];
condiments.classList.add("item");

ingredientsListEL.append(potatoes, mushrooms, garlic, tomatos, herbs, condiments)

console.log(ingredientsListEL);