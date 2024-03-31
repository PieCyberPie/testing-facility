const compareRobots = (robot1, robot2) => {
    if (Object.hasOwn(robot1, 'serialNo'))
        delete robot1.serialNo;
    if (Object.hasOwn(robot2, 'serialNo'))
        delete robot2.serialNo;
    if (JSON.stringify(robot1) === JSON.stringify(robot2))
        return true;
    return false;
};

const charlie = { serialNo: 1, chipVer: 12, wheels: 1 };
const mike = { serialNo: 4, chipVer: 12, wheels: 1 };

console.log(compareRobots(charlie, mike));