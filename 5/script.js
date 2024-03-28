/**
 * @param {number} n
 *
 * @returns {string}
 */
function isJumping(n) {
    let temp = String(n);
    let calc = 0;
    if (temp.length === 1)
        return "JUMPING";
    for (let i = 0; i < temp.length; i++) {
        calc = temp[i] - temp[i + 1];
        console.log(temp[i] + ' ' + temp[i + 1]);
        console.log(calc);
        if (calc > 1 || calc < (-1)) {
            return 'NOT JUMPING';
        }
    }
    return 'JUMPING';
}


isJumping(13456)