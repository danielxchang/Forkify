# Forkify

https://forkify-dc.netlify.app/

Forkify is a vanilla Javascript application that interacts with the Forkify API to fetch and display food recipe data.

I completed this project as part of Jonas Schmedtmann's "The Complete JavaScript Course 2022: From Zero to Expert!" on Udemy. I expanded the project with the following features and code refactoring:

## Refactored _generateMarkup function in paginationView.js
I refactored the code for the pagination buttons template strings into a new function called _generateMarkupButton to improve the DRY-ness of the _generateMarkup function. Now for each current page condition in the search results, the _generateMarkupButton function dynamically creates and returns a template string containing the HTML for the desired button type (prev or next) and goto page number.

## Added _resetForm function in addRecipeView.js
I added a function that resets the add recipe form with the default form html markup, so that after the user successfully adds a recipe, they can continue adding additional recipes without having to refresh the page. I placed the call to this function without the toggleWindow function right before toggling the hidden class on the form's parent elements.
