"use strict";
//#region
const candies1 = [
  "KitKat",
  "Nuts",
  "Lion",
  "Mars",
  "Snickers",
  "Bounty",
  "Nuts",
];

const candies2 = [
  "Nuts",
  "Nuts",
  "Nuts",
  "Snickers",
  "Snickers",
  "Snickers",
  "Nuts",
];

const containsO = (candy) => candy.includes("o");
const isLessThan5 = (candy) => candy.length < 5;
//#endregion

function filter(candies, callback) {
  const result = [];
  for (const candy of candies) {
    if (callback(candy)) {
      result.push(candy);
    }
  }
  return result;
}

function createSizeFilter(size) {
  return (candy) => candy.length <= size;
}

const isUpTo4 = createSizeFilter(4);
const isUpTo6 = createSizeFilter(6);

console.log(filter(candies1, isUpTo4));
console.log(filter(candies1, isUpTo6));
