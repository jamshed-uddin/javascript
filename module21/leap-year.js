function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return "is a leap year.";
  } else {
    return "is not a leap year.";
  }
}

const year1 = isLeapYear(2020);
const year2 = isLeapYear(1933);
console.log(2020, year1);
console.log(1933, year2);
