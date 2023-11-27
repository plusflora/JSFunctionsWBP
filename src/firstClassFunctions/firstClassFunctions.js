const carouselProducts = ["t-shirt", "sweater", "polo"];
const gridProducts = ["mug", "small_poster", "medium_poster", "large_poster"];
const sidebarProducts = ["sweatpants", "shorts", "skirt", "baseball_cap"];

/**
 * On our digital storefront, we advertise products in three different places:
 * the carousel, the main display grid, and the sidebar.
 *
 * In each of these places, we want to format the names of our products the same way
 *
 * To reformat the names, we use map() to apply a callback function to each
 * element of the array, and return a new array with all the modified elements
 *
 * We use the same callback function on each of the three product displays,
 * but using an anonymous function is causing the code to be very repetetive.
 *
 * Can you refactor this code to be less repetitive?
 */

//Based on what I'm looking at in the terminal we want all words to be capitalized and to remove all "_"

function fixedProducts(product) { //doing all the replacement and adjustments here instead of per section
  // replaces underscores with spaces
  let spacedProduct = product.replace("_", " "); //replaces "_" with "*space*"

  // capitalizes each word
  productWords = spacedProduct.split(" ");
  capitalizedProductWords = productWords.map( //.map creates a new array populated with the results of calling a provided function on each element in the array
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  );
  capitalizedProduct = capitalizedProductWords.join(" ");
  return capitalizedProduct;
}

function formatProducts(carousel, grid, sidebar) { //now we're calling the above function to fix all products
  const carouselProductsReformatted = carousel.map((product) => fixedProducts(product));
  const gridProductsReformatted = grid.map((product) => fixedProducts(product));
  const sidebarProductsReformatted = sidebar.map((product) => fixedProducts(product));

  return [ //gotta keep remembering to return these things. but we want them returned in array
    carouselProductsReformatted,
    gridProductsReformatted, 
    sidebarProductsReformatted,
  ];
}

//the old one
// function formatProducts(carousel, grid, sidebar) {
//   const carouselProductsReformatted = carouselProducts.map((product) => {
//     // replace underscores with spaces
//     let spacedProduct = product.replace("_", " ");

//     //capitalize each word
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct;
//   });

//   const gridProductsReformatted = gridProducts.map((product) => {
//     // replace underscores with spaces
//     let spacedProduct = product.replace("_", " ");

//     //capitalize each word
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct;
//   });

//   const sidebarProductsReformatted = sidebarProducts.map((product) => {
//     // replace underscores with spaces
//     let spacedProduct = product.replace("_", " ");

//     //capitalize each word
//     productWords = spacedProduct.split(" ");
//     capitalizedProductWords = productWords.map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1)
//     );
//     capitalizedProduct = capitalizedProductWords.join(" ");
//     return capitalizedProduct;
//   });

//   return [
//     carouselProductsReformatted,
//     gridProductsReformatted,
//     sidebarProductsReformatted,
//   ];
// }

console.log(formatProducts(carouselProducts, gridProducts, sidebarProducts));

module.exports = formatProducts;
