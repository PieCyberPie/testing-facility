const robots = [
    { coreVersion: 4 },
    { coreVersion: 7 },
    { coreVersion: 18 },
    { coreVersion: 3 },
    { coreVersion: 15 },
    { coreVersion: 8 },
    { coreVersion: 5 },
    { coreVersion: 6 },
];

function getOutdated(robots, newVersion) {
    let outdated = [];
    for (const robotVer in robots) {
        if (Number(Object.values(robots[robotVer]) < newVersion))
            outdated.push(Number(Object.values(robots[robotVer])));
    }
    return outdated;
}

console.log(getOutdated(robots, 5));