const listLiItems = document.querySelectorAll('li.item');
const itemTittles = document.querySelectorAll('li.item > h2');
const itemAmount = listLiItems.length;
console.log("Number of categories:", itemAmount);
// console.log(listLiItems);
// console.log(itemTittles);


for (const tittle of itemTittles) {
    console.log("Category:", tittle.textContent);
    const tittleNextSibling = tittle.nextElementSibling.children;
    console.log("Elements:", tittleNextSibling.length);
}


   