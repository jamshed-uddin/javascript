var shoppingCart = {
    books: 3,
    sunglass: 4,
    keyboard: 1,
    mouse: 2,
    pen: 5
}

var keys =Object.keys(shoppingCart);
var values =Object.values(shoppingCart);
// console.log(keys);

for(var i =0; i < keys.length; i++){
    var properties = keys[i];
    var propertyvalue = shoppingCart[properties];
    console.log(properties, propertyvalue);

}