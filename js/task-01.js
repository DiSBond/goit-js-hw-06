const listLiItems = document.querySelectorAll('li.item');

const itemAmount = listLiItems.length;
console.log("Number of categories:", itemAmount);

listLiItems.forEach(element => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.childElementCount);
});