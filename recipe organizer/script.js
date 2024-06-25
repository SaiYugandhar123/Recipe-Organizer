const recipeList = document.querySelector('.recipe-list');
const modal = document.querySelector('.modal');

// Sample recipe data
const recipes = [
    {
        id: 1,
        title: 'Chicken Parmesan',
        image: 'download (2).jpeg',
        ingredients: ['chicken breasts', 'breadcrumbs', 'parmesan cheese', 'tomato sauce'],
        method: 'Bread the chicken, fry in oil, and top with tomato sauce and parmesan cheese.'
    },
    {
        id: 2,
        title: 'Vegetable Stir Fry',
        image: 'download (3).jpeg',
        ingredients: ['broccoli', 'carrots', 'bell peppers', 'onions', 'soy sauce'],
        method: 'Stir fry the vegetables in a wok with some oil and soy sauce.'
    },
    // Add more recipes here
];

// Render recipe cards
recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <button>View</button>
    `;
    recipeCard.addEventListener('click', () => {
        // Show the recipe modal
        showModal(recipe);
    });
    recipeList.appendChild(recipeCard);
});

// Show the recipe modal
function showModal(recipe) {
    const modalContent = document.createElement('div');
    modalContent.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <p>${recipe.method}</p>
    `;
    modal.appendChild(modalContent);
    modal.style.display = 'flex';
}

// Hide the recipe modal
modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modal.innerHTML = '';
    }
});
// scripts.js
const app = document.getElementById('root');

var request = new XMLHttpRequest();
request.open('GET', 'https://api.example.com/recipes', true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(request.responseText);
    // Process the data and render the recipe cards
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};
request.send();