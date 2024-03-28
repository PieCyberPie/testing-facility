'use strict'

function getName(count) {
    switch (count) {
        case 1:
            return 'One';
        case 2:
        case 3:
        case 4:
            return 'A few';
        default:
            return 'Many';
    }
}

console.log(getName(0));