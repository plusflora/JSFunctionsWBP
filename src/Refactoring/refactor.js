/**
 * This function calculates the price of goods after sales tax and shipping
 * for the list of most commonly sold items in our digital storefront.
 *
 * This code currently works (and passes all tests),
 * but it is hard to read due to repetitive code.
 *
 * Can you refactor it by writing functions that reduce repetition?
 */

//shoutouts to my buddy for kinda walking me through this and letting me bounce ideas
function previewFullPrice(salesTax, shippingPrice) { 
    const products = { //we can group all the products under one variable
      shirtPrice: 30.99,
      sweatshirtPrice: 40.99,
      smallPosterPrice: 15.99,
      largePosterPrice: 22.99,
      mugPrice: 12.99, //thanks for the help vscode. I had '=' and it suggested ':'
    };
  
    function calculateFullPrice(itemPrice, salesTax, shippingPrice) { //all of them have this so we can put it into one function
      const priceAfterTax = itemPrice * (1 + salesTax);
      return (priceAfterTax + shippingPrice).toFixed(2) //toFixed sets the number of decimals the math will return
    }
    const prices = {};
    for (const key in products) {//did this autofill? I went to make coffee and this appeared
      prices[key + "priceAfterShippingRounded"] = calculateFullPrice(
          products[key],
          salesTax,
          shippingPrice
        );
      }
      return Object.values(prices)  //ah, i need this. 
    }
    
  //   function previewFullPrice(salesTax, shippingPrice) {
  //     const shirtPrice = 30.99;
  //     const sweatshirtPrice = 40.99;
  //     const smallPosterPrice = 15.99;
  //     const largePosterPrice = 22.99;
  //     const mugPrice = 12.99;
  //   }
  // shirtPriceAfterTax = shirtPrice * (1 + salesTax);
  // shirtPriceAfterShipping = shirtPriceAfterTax + shippingPrice;
  // shirtPriceAfterShippingRounded = shirtPriceAfterShipping.toFixed(2);

  // sweatshirtPriceAfterTax = sweatshirtPrice * (1 + salesTax);
  // sweatshirtPriceAfterShipping = sweatshirtPriceAfterTax + shippingPrice;
  // sweatshirtPriceAfterShippingRounded = sweatshirtPriceAfterShipping.toFixed(2);

  // smallPosterPriceAfterTax = smallPosterPrice * (1 + salesTax);
  // smallPosterPriceAfterShipping = smallPosterPriceAfterTax + shippingPrice;
  // smallPosterPriceAfterShippingRounded =
  //   smallPosterPriceAfterShipping.toFixed(2);

  // largePosterPriceAfterTax = largePosterPrice * (1 + salesTax);
  // largePosterPriceAfterShipping = largePosterPriceAfterTax + shippingPrice;
  // largePosterPriceAfterShippingRounded =
  //   largePosterPriceAfterShipping.toFixed(2);

  // mugPriceAfterTax = mugPrice * (1 + salesTax);
  // mugPriceAfterShipping = mugPriceAfterTax + shippingPrice;
  // mugPriceAfterShippingRounded = mugPriceAfterShipping.toFixed(2);

  // return [
  //   shirtPriceAfterShippingRounded,
  //   sweatshirtPriceAfterShippingRounded,
  //   smallPosterPriceAfterShippingRounded,
  //   largePosterPriceAfterShippingRounded,
  //   mugPriceAfterShippingRounded,
  // ];

  
module.exports = previewFullPrice;
