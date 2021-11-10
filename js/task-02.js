const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

// const list = document.createElement('ul');
// list.classList = "ingredients";


const createListItems = function (array) {
  
  const newList = [];
  array.forEach(element => {
  const itemList = document.createElement('li');
  itemList.textContent = element;
  itemList.classList = 'item';
  newList.push(itemList);
  });
  console.log(newList);
  list.append(...newList);
  return;
}

createListItems(ingredients);





