/**
  *this function calculates totlal price a new order
  * @param {Array} products cartProduct: Array of Object
  * @return {number} Total price.
  */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price);
    return sum

}