//problem 1

var money = 1000;
var orange = 400;
var apple = 300;
var totalSpend = orange + apple;
var moneyLeft = money - totalSpend
// console.log(moneyLeft)

//problem 2 

var math = 75.25;
var bio = 65;
var chem = 80;
var phy = 35.45;
var ban = 99.50;
var totalSub = 5;
var totalMarks = math + bio + chem + phy + ban

var average = totalMarks / totalSub;
average = average.toFixed(2);   //average is a string data type 
average = parseFloat(average);
// console.log(average)
// console.log(typeof average)

//problem 3
var line1 = 'I am going to be'
var line2 = 'an awesome web developer.'
var sentence = line1 + ' '
+ line2
// console.log(sentence)

//problem 4
var dividend = 119;
var devisor = 5;
var quotient = dividend / devisor;
var remainder = dividend % devisor;
// console.log(remainder)


// problem5 --the price of 3 hen and 4 duck is 400 together.
// if the price of 1 hen is 56 what is the price of 1 duck?

var priceTogether = 400;
var henPrice = 56;
var henQuantity = 3;
// hen *= 3;  shorthand
var threeHen = henPrice * henQuantity; 
// console.log(threeHen)
var fourDuck = priceTogether - threeHen;
// console.log(fourDuck)
var duckQuantity = 4;
// fourDuck /= 4; shorthand
var duckPrice = fourDuck / duckQuantity;
// console.log(duckPrice)


