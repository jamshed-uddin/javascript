/*
---First problem.--
Function title:A function to solve basic simplification problem.
*/

function mindGame(inputNumber) {
  const sum1 = inputNumber * 3 + 10;
  const finalSum = sum1 / 2 - 5;
  if (typeof inputNumber !== "number") {
    return "Please enter a number.";
  } else {
    return finalSum;
  }
}

/*
---Second problem.---
Function title:A function to check if the length of the input string is odd or even.
*/

function evenOdd(inputString) {
  if (typeof inputString !== "string") {
    return "Please enter a string.";
  } else if (inputString.length % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

/*
---Third problem.---
Function title: A function to solve problem like: deduct 7 from the input number.If the result is less than 7 return the result.Else return the double of input number.
*/

function isLGSeven(number) {
  const deduction = number - 7;

  if (typeof number !== "number") {
    return "Please enter a number.";
  } else if (deduction < 7) {
    return deduction;
  } else {
    return number * 2;
  }
}

/*
---Fourth problem.---
Function title: A function to get the quantity of negetive values of an array.
*/

function findingBadData(arrayInput) {
  let badData = [];

  for (let i = 0; i < arrayInput.length; i++) {
    if (arrayInput[i] < 0) {
      badData.push(arrayInput[i]);
    }
  }
  return badData.length;
}

/*
---Fifth problem.---
Function title:A function to convert gem which will be given as input into diamond.
*/
function gemsToDiamond(friend1Gem, friend2Gem, friend3Gem) {
  const friend1GemToDiamond = friend1Gem * 21;
  const friend2GemToDiamond = friend2Gem * 32;
  const friend3GemToDiamond = friend3Gem * 43;

  const totalDiamond =
    friend1GemToDiamond + friend2GemToDiamond + friend3GemToDiamond;

  if (
    typeof friend1Gem !== "number" ||
    typeof friend2Gem !== "number" ||
    typeof friend3Gem !== "number"
  ) {
    return "Please enter numbers as input.";
  } else if (totalDiamond >= 1000 * 2) {
    const remainingDiamond = totalDiamond - 2000;
    return remainingDiamond;
  } else {
    return totalDiamond;
  }
}
