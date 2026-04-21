const BigNumber = require("bignumber.js");

const principal = new BigNumber("1999.99");
const annualRate = new BigNumber("0.0675");
const years = 5;

const futureValue = principal.multipliedBy(new BigNumber(1).plus(annualRate).pow(years));

console.log("Principal:", principal.toFixed(2));
console.log("Future value after 5 years:", futureValue.toFixed(2));