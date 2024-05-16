function makeWarehouse(goods) {
  let arrayOfGoods = [];
  let totalWeight = 0;
  let averageWeight = 0;

  if (goods) {
    arrayOfGoods = arrayOfGoods.concat(goods);
  }

  return (...goodies) => {
    if (goodies.length > 0) {
      arrayOfGoods = arrayOfGoods.concat(goodies);
    } else {
      totalWeight = arrayOfGoods.reduce(
        (accumulator, good) => accumulator + good,
        0
      );
      averageWeight = totalWeight / arrayOfGoods.length;

      return {
        totalWeight,
        averageWeight: averageWeight || 0,
      };
    }
  };
}

const warehouse = makeWarehouse([10, 20]);
console.log(warehouse());
warehouse(10, 10, 20);
console.log(warehouse());
warehouse(10, 10, 20);
console.log(warehouse());
