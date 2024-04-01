/**
 * @param {number} distance
 *
 * @returns {Object|string}
 */
function getTriathlonDistance(distance) {
    let result = {};
    let total = 226.31;
    let left = (total - distance).toFixed(2);

    if (distance === 0) {
        return 'Starting Line... Good Luck!';
    } else if (distance >= 226.31) {
        return `You're done! Stop running!`;
    }

    if (distance > 0 && distance < 3.86) {
        result.swim = `${left} to go!`;
        return result;
    }

    if (distance >= 3.86 && distance < 184.11) {
        result.bike = `${left} to go!`;
        return result;
    }

    if (distance >= 184.11 && distance < 226.31) {
        result.run = `${left} to go!`;
        return result;
    }

}
