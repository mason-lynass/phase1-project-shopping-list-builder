// code for Saved Recipes

const url = 'http://localhost:3000/Recipes'

// this fetch puts the recipes in the database in the Saved Recipes section
fetch(url)
.then(res => res.json())
.then(renderSavedRecipes)

function renderSavedRecipes(recipes) {
    recipes.forEach(renderOneRecipeCard)
}

// making one recipe card
const renderOneRecipeCard = recipe => {
    const recipeDiv = document.createElement('div')
    const recipeName = document.createElement('h3')
    const recipeInstructions = document.createElement('p')
    const recipeImage = document.createElement('img')
    const recipeIngredientsList = document.createElement('ul')
    const recipeInstructionsTitle = document.createElement('h4')
    const recipeIngredientsTitle = document.createElement('h4')


    recipeDiv.className = 'one-saved-recipe'
    recipeName.textContent = recipe.name 
    recipeInstructions.textContent = recipe.instructions
    recipeInstructionsTitle.textContent = 'Instructions:'
    recipeIngredientsTitle.textContent = 'Ingredients:'
    recipeImage.src = recipe.image 
    
// iterating through the ingredients to store them all in recipeIngredientsList
    const rI = recipe.ingredients
    // this needs to be a for loop because it's an array, not an object
    for (let i = 0; i < rI.length; i++) {
        const iLFull = document.createElement('li')
        const igName = rI[i].name
        const igQuantity = rI[i].quantity
        const igUnit = rI[i].unit
    
        iLFull.className = 'iLFull'
        iLFull.textContent = `${igQuantity} ${igUnit} ${igName}`
        
        recipeIngredientsList.append(iLFull)
    }

// put the name, image, list of ingredients, and instructions in the card div
    recipeDiv.append(recipeName, recipeImage, recipeIngredientsTitle, recipeIngredientsList, recipeInstructionsTitle, recipeInstructions)

// get the section and add the div to it
    const allRecipesDiv = document.getElementById('all-saved-recipes')
    allRecipesDiv.append(recipeDiv)
}

const form = document.getElementById('new-recipe-form');
form.addEventListener('submit', addNewRecipe);

function addNewRecipe(e) {
    e.preventDefault();
    console.log(e.target['unit-1'].value)
    const newRecipe = {
        name: e.target['recipe-name'].value,
        instructions: e.target['instructions'].value,
        image: e.target['recipe-image'].value,
        ingredients: [
            {name: e.target['ingredient-1'].value, quantity: e.target['qty-1'].value, unit: e.target['unit-1'].value},
            {name: e.target['ingredient-2'].value, quantity: e.target['qty-2'].value, unit: e.target['unit-2'].value},
            {name: e.target['ingredient-3'].value, quantity: e.target['qty-3'].value, unit: e.target['unit-3'].value},
            {name: e.target['ingredient-4'].value, quantity: e.target['qty-4'].value, unit: e.target['unit-4'].value},
            {name: e.target['ingredient-5'].value, quantity: e.target['qty-5'].value, unit: e.target['unit-5'].value}
        ]
    }
    postNewRecipe(newRecipe);

}

function postNewRecipe(newRecipe) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRecipe)
    })
    .then(res => res.json())
    .then(renderOneRecipeCard(newRecipe))
    .catch((error) => {console.error('Error:', error)})
}