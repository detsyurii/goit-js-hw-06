const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');


const itemsRef = ingredients.map(element => {
     const item = document.createElement('li');
     item.textContent = element;
     item.classList.add('item');
     return item;})

ingredientsRef.append(...itemsRef);


