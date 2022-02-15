<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://forkify-dc.netlify.app/">
    <img src="./src/img/logo.png" alt="Logo" width="100%" height="100%">
  </a>
  <p>
    Forkify is a vanilla Javascript application that interacts with the Forkify API to fetch and display food recipe data.
    <br />
    <br />
    <a href="https://forkify-dc.netlify.app/">View Demo</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://forkify-by-pawanjs.netlify.app/)

Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. This app uses modern JavaScript tools, such as Webpack to bundle the modules, and Babel to convert ES6, ES7 and ES8 back to ES5. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease
servings as per his need and can view detailed directions.

### Built With

This app is built with pure vanilla JavaScript along with HTML and SCSS. It uses webpack as module bundler and NPM as package manager.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [SCSS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Webpack](https://webpack.js.org/)
- [NPM](https://www.npmjs.com/)

## Usage

1. The Forkify Recipe App allows users to search for recipes.

2. Users can view the recipe along with the cook time and also
   increase or decrease the amount of servings they need.

3. Bookmarked recipes are stored in local storage so no database was
   required for this application.




I completed this project as part of Jonas Schmedtmann's "The Complete JavaScript Course 2022: From Zero to Expert!" on Udemy. I expanded the project with the following features and code refactoring:

## Refactored _generateMarkup function in paginationView.js
I refactored the code for the pagination buttons template strings into a new function called _generateMarkupButton to improve the DRY-ness of the _generateMarkup function. Now for each current page condition in the search results, the _generateMarkupButton function dynamically creates and returns a template string containing the HTML for the desired button type (prev or next) and goto page number.

## Added _resetForm function in addRecipeView.js
I added a function that resets the add recipe form with the default form html markup, so that after the user successfully adds a recipe, they can continue adding additional recipes without having to refresh the page. I placed the call to this function without the toggleWindow function right before toggling the hidden class on the form's parent elements.
