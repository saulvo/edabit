/**
 * Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
 * A grocery object has a product, a quantity and a price, for example:
  {
      "product": "Milk",
     "quantity": 1,
     "price": 1.50
   }
*/


function getTotalPrice(groceries) {
   let total = groceries.reduce((a, b) => {
      return a + b.quantity * b.price;
   }, 0);

   return Math.round(total * 100) / 100;
}


console.log(getTotalPrice([
   { product: "Chocolate", quantity: 1, price: 0.10 },
   { product: "Lollipop", quantity: 1, price: 0.20 }
]))
// ➞ 0.3