var num1 = 5;
var num2 = 7;
console.log(num1, num2);

var temp = num1;
num1 = num2;
num2 = temp;
console.log(num1, num2);

//variable swap can also done by destructuring.

[num1, num2] = [num2, num1];
console.log(num1, num2);
