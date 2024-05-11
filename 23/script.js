function makeOrderList(order) {
  const items = order.split(", ");
  let list = {};
  let numPos;

  for (let i = 0; i < items.length; i++) {
    numPos = numCheck(items[i]);
    list[items[i].slice(numPos[1])] = numPos[0].trim();
  }
  console.log(list);
}

const numCheck = (item) => {
  if (
    (+item[0] && +item[1] && +item[2]) ||
    (+item[0] && +item[1] && +item[2] === 0) ||
    (+item[0] && +item[1] === 0 && +item[2]) ||
    (+item[0] && +item[1] === 0 && +item[2] === 0)
  ) {
    return [item.slice(0, 3), 3];
  }

  if ((+item[0] && +item[1]) || (+item[0] && +item[1] === 0)) {
    return [item.slice(0, 2), 2];
  }

  if (+item[0]) {
    return [item[0], 1];
  }
};

const order = "11 jelly bean, 128 kit kat, 17 lollipop, 100 ice cream sandwich";
makeOrderList(order);
