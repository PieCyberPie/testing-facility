function countBoxes(boxes) {
    const result = {};

    for (const box of boxes) {
        if (!Object.hasOwn(result, box)) {
            result[box] = 1;
        } else {
            result[box] += 1;
        }
    }
    return result;
}

result = countBoxes('            ');
const myJSON = JSON.stringify(result, null, "\t");
const fs = require('fs');

fs.writeFile('12 that looks just like mentor one/Hello.txt', myJSON, (err) => {
    if (err) throw err;
})