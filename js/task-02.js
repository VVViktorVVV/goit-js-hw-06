const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const createListItems = function (array) {
  
  for (const element of array) {
  const itemList = document.createElement('li');
  itemList.textContent = element;
  itemList.classList = 'item';
  list.append(itemList)
  }
  return;
}

createListItems(ingredients);




