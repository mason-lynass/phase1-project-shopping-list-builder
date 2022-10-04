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
    const recipeDirections = document.createElement('p')
    const recipeImage = document.createElement('img')
    const recipeIngredientsList = document.createElement('ul')
    const recipeInstructionsTitle = document.createElement('h4')
    const recipeIngredientsTitle = document.createElement('h4')


    recipeDiv.className = 'one-saved-recipe'
    recipeName.textContent = recipe.name 
    recipeDirections.textContent = recipe.directions
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
    recipeDiv.append(recipeName, recipeImage, recipeIngredientsTitle, recipeIngredientsList, recipeInstructionsTitle, recipeDirections)

// get the section and add the div to it
    const allRecipesDiv = document.getElementById('all-saved-recipes')
    allRecipesDiv.append(recipeDiv)
}