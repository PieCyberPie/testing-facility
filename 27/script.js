let a = "a";
let b = "b";

console.log(b > a);

let array = [11, 12, 2, 3];

const compare = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

[].__proto__.sort2 = function (compareFunction) {
  let temp;
  console.log(this);
  for (let j = 0; j < this.length; j++) {
    for (let i = 0; i < this.length; i++) {
      if (compare(this[i], this[i + 1]) > 0) {
        temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
  }
  console.log(this);
};

array.sort2(compare);
