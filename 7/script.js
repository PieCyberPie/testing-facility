let string = 'H 1 e l 3 l o 5 w o 8 r l 6 6 d!';
string = string.replaceAll(' ', 'SISAAAAAAAAA');
for (let i = 0; i < string.length; i++) {
    if (isNaN(Number(string[i]) + 1))
        continue;
    console.log(string[i]);
}

console.log(string);