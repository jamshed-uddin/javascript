//for loop

// var names = ["janet", "john", "rahim", "kate"];

// for (var i = 0; i < names.length; i++) {
//   var nameIndex = names[i];
//   console.log(nameIndex);
// }

//Hotel rent

function hotelRent(myDays) {
  var day1To10 = 500;
  var day11To20 = 300;
  var day21ToRest = 100;
  if (myDays <= 10) {
    var fist10DayCost = myDays * day1To10;
    return fist10DayCost;
  } else if (myDays > 10 && myDays <= 20) {
    var fist10DayCost = 10 * day1To10;
    var remainingDays = myDays - 10;
    var day11To20Cost = remainingDays * 300;
    var total10To20Cost = fist10DayCost + day11To20Cost;
    return total10To20Cost;
  } else {
    var first10Daycost = 10 * day1To10;
    var second11To20DayCost = 10 * day11To20;
    var first20DayCost = first10Daycost + second11To20DayCost;
    var remainingDays = myDays - 20;
    var total21ToRestCost = remainingDays * 100;
    var totalStayCost = first20DayCost + total21ToRestCost;
    return totalStayCost;
  }
}

var myRent = hotelRent(22);
console.log(myRent);
