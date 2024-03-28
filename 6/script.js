function isAlphabet(letters) {
    let temp = letters.toLowerCase();
    let diff = 0;
    console.log(temp.length);
    for (let i = 0; i < temp.length; i++) {
        diff = temp.charCodeAt(i) - temp.charCodeAt(i + 1);
        if (diff > -1 || diff < -1 || temp[i] === temp[i + 1])
            return false;
    }
    return true;
}


console.log(isAlphabet(''));