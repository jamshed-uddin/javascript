
function getAverage (mark1, mark2, mark3){
    var total = mark1 + mark2 + mark3;
    var average = total / 3;
    average = average.toFixed(2);
    average = parseFloat(average);
    return average;
}

var averageMark = getAverage(60, 58, 60);
// console.log(('My average mark:', averageMark))

function add(num1, num2,){
    var sum = num1 + num2;
    return sum;
}

var result1 = add(10, 20);
var result2 = add(20, 30);
var finalResult = add(result1, result2);
console.log('Here is the final mark:', finalResult)