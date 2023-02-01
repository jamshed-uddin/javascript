//typeof prefix in value will tell the data type

var price = 100;
// console.log(typeof price) //output:Number 

var price1 = '100';
// console.log(typeof price1) //output:string

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(3)
console.log(sum)
console.log(typeof sum)
sum = parseFloat(sum)
console.log(sum)