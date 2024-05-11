let numbers = [1, 2, 3, 4, 5, 6];

numbers.slice = function (iF = 0, iT = this.length) {
  let indexFrom = iF;
  let indexTo = iT;
  const result = [];
  let resultIndex = 0;

  if (!indexFrom && !indexTo) {
    return this;
  }

  if (indexTo < this.length * -1) {
    indexTo = 0;
  }

  if (indexTo > this.length) {
    indexTo = this.length;
  }

  if (indexFrom < this.length * -1) {
    indexFrom = 0;
  }

  if (indexFrom < 0) {
    indexFrom += this.length;
  }

  if (indexTo < 0) {
    indexTo += this.length;
  }

  for (let i = indexFrom; i < indexTo; i++) {
    result[resultIndex] = this[i];
    resultIndex++;
  }

  return result;
};

console.log(numbers.slice(0, 2));
