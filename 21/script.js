const bucket = {
  cameras: 5,
  plugs: 31,
  speakers: 3,
};
const products = {
  amazonbot: {
    plugs: 45.5,
  },
  robobay: {
    cameras: 210,
    speakers: 25.99,
  },
};

const products2 = {
  plugs: 45.5,
  cameras: 210,
  speakers: 25.99,
};

const bucket2 = {
  lighting: 1200,
};
const products3 = {
  lighting: {
    lighting: 9.99,
  },
};

function calculateCost(bucket, products) {
  let total = 0;
  for (const part in bucket) {
    for (const key in products) {
      if (key === part && typeof products[key] !== "object") {
        total += bucket[part] * products[key];
      }
      if (typeof products[key] === "object") {
        for (const nestedKey in products[key]) {
          if (nestedKey === part) {
            total += bucket[part] * products[key][nestedKey];
          }
        }
      }
    }
  }
  return total;
}

console.log(calculateCost(bucket2, products3));

function fillTank(customer, fuelPrice, amount) {
  let toFill = amount;
  const maxPossibleFuel =
    customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;

  if (maxPossibleFuel === 0 || customer.money - fuelPrice * 2 < 0) {
    return 0;
  }

  if (maxPossibleFuel < toFill) {
    toFill = maxPossibleFuel;
  }

  if (toFill === undefined) {
    toFill = customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;
  }

  if (
    customer.vehicle.fuelRemains === customer.vehicle.maxTankCapacity ||
    toFill < 2
  ) {
    return 0;
  }

  const cost = (Math.floor(toFill * 10) / 10) * fuelPrice;

  if (cost < customer.money) {
    customer.money -= cost;

    customer.vehicle.fuelRemains =
      Math.floor((customer.vehicle.fuelRemains + toFill) * 10) / 10;

    return 0;
  }

  let litersPoured = 0;

  while (cost > customer.money && customer.money >= fuelPrice) {
    customer.money -= fuelPrice;
    customer.vehicle.fuelRemains += 1;
    litersPoured++;
  }
}