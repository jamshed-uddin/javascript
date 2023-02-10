// function sumOfArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element % 2 === 0) {
//     }
//     sum = sum + element;
//     console.log(sum);
//   }
//   return sum;
// }
// const myNumbers = [23, 21, 64, 34, 75, 27, 86];
// sumOfArray(myNumbers);

function sumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element % 2 === 1) {
      sum = sum + element;
    }
  }

  console.log(sum);
  return sum;
}
let myNumbers = [11, 34, 45, 56, 64, 43];
sumOfArray(myNumbers);
