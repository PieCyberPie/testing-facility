const numbers.reduce2 = function (callback, startValue) {
  let result = startValue;

  if (startValue === undefined) {
    result = "";
  }

  if (startValue === "undefined") {
    for (let i = 0; i < this.length; i++) {
      result = callback(this[0], this[i], i, this);
    }

    return result;
  }

  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }

  return result;
};

console.log([2, 3, 4].reduce2((result, x) => result * x));
