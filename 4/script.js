function scrollingText(word) {
    let result = [];
    let firstChar = '';
    let temp = word.split('');
    let temp2 = [];
    result.push(word.toUpperCase());

    for (let i = 0; i < temp.length - 1; i++) {
        firstChar = temp.at(0);
        for (let j = 0; j < temp.length; j++) {
            temp[j] = temp[j + 1]
        }
        temp[temp.length - 1] = firstChar;
        result.push(temp.join('').toUpperCase());
        console.log(result)
    }
}

scrollingText('word');