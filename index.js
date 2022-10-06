// code for Saved Recipes

const url = 'http://localhost:3000/Recipes'

// this fetch puts the recipes in the database in the Saved Recipes section
fetch(url)
.then(res => res.json())
.then(renderSavedRecipes)

function renderSavedRecipes(recipes) {
    recipes.forEach(renderOneRecipeCard)
}

// this function gets 'currentRecipe' which assigns the border, and removes it from the old "currentRecipe" when a new recipe is clicked
const getAllCards = document.getElementsByClassName('one-saved-recipe')
function removeCR(getAllCards) {
    for (let i = 0; i < getAllCards.length; i++) {
        getAllCards[i].classList.remove('currentRecipe')
    }
}




// making one recipe card
const renderOneRecipeCard = recipe => {
    const recipeDiv = document.createElement('div')
    const recipeName = document.createElement('h3')
    const recipeImage = document.createElement('img')
    const recipeDeleteBtn = document.createElement('button')

    recipeDiv.className = 'one-saved-recipe'
    recipeName.textContent = recipe.name 
    recipeImage.src = recipe.image
    recipeImage.className = 'recipe-card-image'
    recipeDeleteBtn.textContent = 'x'
    recipeDeleteBtn.className = 'delete-recipe'


// put the name, image, list of ingredients, and instructions in the card div
    recipeDiv.append(recipeName, recipeImage, recipeDeleteBtn)
    // (recipeIngredientsTitle, recipeIngredientsList, recipeInstructionsTitle, recipeInstructions)

// get the section and add the div to it
    const allRecipesDiv = document.getElementById('all-saved-recipes')
    allRecipesDiv.append(recipeDiv)

    // event listener to show information
    recipeDiv.addEventListener('click', e => {
        showDetails(recipe)
        removeCR(getAllCards)
        recipeDiv.classList.add('currentRecipe')
    })
    
    recipeDiv.querySelector('.delete-recipe').addEventListener('click', deleteFunction)
    
    function deleteFunction(e) {
        alert('Delete?') 
        recipeDiv.remove();
    }
}

function showDetails(recipe) {
    const recipeTitle = document.querySelector('h1')
    const orContainer = document.getElementById('or-container')
    const oneRecipe = document.getElementById('one-recipe')
    const shoppingList = document.getElementById('shopping-list')
    const detailsInstructions = document.getElementById('orInstContent')
    const detailsIngredients = document.getElementById('orIngContent')
    const activeButton = document.getElementById('sendToList-button')

    // use these classes to change container height
    oneRecipe.classList.remove('noInfo')
    shoppingList.classList.remove('noInfo')
    oneRecipe.classList.add('hasInfo')
    shoppingList.classList.add('hasInfo')
    // replaces content already in the section with emptiness, so that new text can be put it
    detailsInstructions.innerHTML = ''
    detailsIngredients.innerHTML = ''
    if(activeButton){activeButton.remove()}

    // creating elements
    const recipeIngredientsList = document.createElement('ul')
    const recipeInstructions = document.createElement('p')
    const addIngButton = document.createElement('input')

    recipeTitle.id = 'recipe-title'
    recipeTitle.textContent = recipe.name
    recipeInstructions.textContent = recipe.instructions

    addIngButton.type = 'submit'
    addIngButton.className = 'orButton sendToList'
    addIngButton.name = 'sendToList-button'
    addIngButton.id = 'sendToList-button'
    addIngButton.value = 'Add Ingredients to Shopping List'

    // iterating through the ingredients to store them all in recipeIngredientsList
    const rI = recipe.ingredients
    
    // // this needs to be a for loop because it's an array, not an object
    for (let i = 0; i < rI.length; i++) {
        const ingFull = document.createElement('li')
        const addOneIngButton = document.createElement('input')
        const igName = rI[i].name
        const igQuantity = rI[i].quantity
        const igUnit = rI[i].unit
    
        addOneIngButton.type = 'submit'
        ingFull.className = 'ingFull'
        ingFull.textContent = `${igName} ${igQuantity} ${igUnit} `
        // ingFull.append(addOneIngButton)

        recipeIngredientsList.append(ingFull)
    }
    detailsInstructions.append(recipeInstructions)
    detailsIngredients.append(recipeIngredientsList)
    orContainer.prepend(recipeTitle)
    orContainer.append(addIngButton)

    // send ingredients from one-recipe to shopping-list
    addIngButton.addEventListener('click', e => {
        const shoppingListContainer = document.getElementById('shopping-list')
        for (let i = 0; i < rI.length; i++) {
            const ingFull = document.createElement('li')
            const igName = rI[i].name
            const igQuantity = rI[i].quantity
            const igUnit = rI[i].unit
            const removeIngButton = document.createElement('input')
        
            ingFull.className = 'ingFullSL'
            ingFull.textContent = `${igName} ${igQuantity} ${igUnit}`
            removeIngButton.type = 'submit'
            removeIngButton.id = 'slIngRemove'
            removeIngButton.className = `${igName}`
            removeIngButton.value = 'x'

            ingFull.prepend(removeIngButton)

            shoppingListContainer.append(ingFull)
        }
        // makes the x button remove the correct list element
        const xButton = document.querySelectorAll('#slIngRemove');
        const listElements = document.querySelectorAll('.ingFullSL')
        xButton.forEach(button => {
            button.addEventListener('click', e => { 
                console.log(button)
                const buttonCL = button.classList
                console.log(buttonCL)
                console.log(listElements)
                listElements.forEach(element => {
                    console.log(element.textContent)
                    if (element.textContent.includes(buttonCL)) {
                        element.remove()
                    }
                })
            })
        })
    })
}  







// CSS related to the New Recipe Form
const form = document.getElementById('new-recipe-form');
form.addEventListener('submit', addNewRecipe);

function addNewRecipe(e) {
    e.preventDefault();
    console.log(e.target['unit-1'].value)
    const newRecipe = {
        name: e.target['recipe-name'].value,
        instructions: e.target['instructions'].value,
        image: e.target['recipe-image'].value ? e.target['recipe-image'].value : 'https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718082.jpghttps://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718082.jpg',
        ingredients: [
            {name: e.target['ingredient-1'].value, quantity: e.target['qty-1'].value, unit: e.target['unit-1'].value},
            {name: e.target['ingredient-2'].value, quantity: e.target['qty-2'].value, unit: e.target['unit-2'].value},
            {name: e.target['ingredient-3'].value, quantity: e.target['qty-3'].value, unit: e.target['unit-3'].value},
            {name: e.target['ingredient-4'].value, quantity: e.target['qty-4'].value, unit: e.target['unit-4'].value},
            {name: e.target['ingredient-5'].value, quantity: e.target['qty-5'].value, unit: e.target['unit-5'].value},
            {name: e.target['ingredient-6'].value, quantity: e.target['qty-6'].value, unit: e.target['unit-6'].value},
            {name: e.target['ingredient-7'].value, quantity: e.target['qty-7'].value, unit: e.target['unit-7'].value},
            {name: e.target['ingredient-8'].value, quantity: e.target['qty-8'].value, unit: e.target['unit-8'].value},
            {name: e.target['ingredient-9'].value, quantity: e.target['qty-9'].value, unit: e.target['unit-9'].value},
            {name: e.target['ingredient-10'].value, quantity: e.target['qty-10'].value, unit: e.target['unit-10'].value}
            ]
    }

    for (i = 0; i < newRecipe['ingredients'].length; i++) {
        if( newRecipe['ingredients'][i]['name'] === "") {
            newRecipe['ingredients'].splice(i);
        }
    }

    postNewRecipe(newRecipe);
    form.reset();
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
