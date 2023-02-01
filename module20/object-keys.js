var shoppingCart = {
    books: 3,
    sunglass: 4,
    keyboard: 1,
    mouse: 2,
    pen: 5
}
// 3 ways to get a property/ key value
// console.log(shoppingCart);
// shoppingCart.pen = 10;
// console.log(shoppingCart);
// shoppingCart['pen'] = 20;
// console.log(shoppingCart);
// var propertyName = 'pen';
// var propertyValue = 25;
// shoppingCart[propertyName] = propertyValue;
// console.log(shoppingCart);


//to get all the keys and values at once

var properties = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart);

console.log(propertyValue);