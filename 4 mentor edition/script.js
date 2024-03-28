/**
 * @param {string} word
 *
 * @returns {string[]}
 */
function scrollingText(word) {
    const result = [];

    for (let i = 0; i < word.length; i++) {
        const part = word.slice(i) + word.slice(0, i);

        result.push(part.toUpperCase());
    }

    return result;
}
console.log('word'.slice(2) + 'word'.slice(0, 2));
scrollingText('word');