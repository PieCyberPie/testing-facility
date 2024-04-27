let robert = {
  'name': 'Robert',
  '123': 'chipVer',
  '123': 'chipVer',
}

function inverseRobot(robot) {

  let invertedRobot = {};
  if (Object.keys(robot).length !== Object.keys(invertedRobot).length)
    return null;
  for (const robotKey in robot) {
    invertedRobot[robot[robotKey]] = robotKey;
  }

  return invertedRobot;
}

console.log(inverseRobot(robert));
