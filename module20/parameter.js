// function bringApple(money){
//     console.log('ei nen taka',money)
//     console.log(' go to shop');
//     console.log('ask for apple')
// }

// var taka = 300 ;
// bringApple(taka);

// function buyMango(num1, num2){
//     console.log('going to add',num1, num2 )
// }

// buyMango(20,30);

// function math (a, b, c, d, e){
//     console.log(a, b, c, d, e)
//     var sum = a+b+c+d+e;
//     console.log(sum)
// }

// math(4, 3, 2, 5, 6);


function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    console.log('singara nen:', quantity ) 
    return quantity;
}

bringSingara(200)