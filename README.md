# phase1-project-shopping-list-builder
Mason &amp; Grace's Phase 1 project, a shopping list builder

Our one-page website is a grocery list helper! This grocery list helper allows users to select recipes they’d like to prepare, and the website takes all of the ingredients from those recipes and organizes them into a shopping list, ready to take to the store. We both spend a good amount of time cooking and preparing to cook, and it would save us some time if we could automate a bit of this process!
 
Some core features of our website (does this count for user stories?):
- A scrollable menu of stored recipes, where users can click images to access description, preparation instructions, and ingredients. (scroll event, click event)
- A section that displays the image and all associated information of a recipe selected from the menu. Users can add recipes and their ingredients to their list by selecting an image from the menu, then pressing a button to add the ingredients to their list.
- A form, with input fields for recipe name, image (optional), instructions, and ingredients, and tags. Users can submit this form to save recipes to the database, then use the submitted recipe to build their shopping list. (submit event)
- A search bar to showcase recipes which match the search term. The website will compare the submitted search term to the tags associated with each recipe object in the database.
- A shopping list which aggregates all of the ingredients from every selected recipe, making sure to add the amounts of ingredients together if they appear in multiple recipes.
 
We’ll add a hover event to the images in the menu of all available recipes, so that images appear larger when hovered over.
 
We’re planning on building our own database, from recipes that we both already use. If we use our own database, we could continue to use this website for our own needs by adding more recipes we want to try with the form!
 
I think it will be challenging to ensure that ingredients are added to the shopping list correctly, so that if the same vegetable appears in two different recipes, we don’t see two lines that both say “1 vegetable,” we just see “2 vegetables.” And we’ll need to account for different units of measurement… maybe through dropdown bars connected to input fields for ingredients?
