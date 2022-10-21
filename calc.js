'use strict';
function calc(operator, a, b) {
    if (operator === 'add') {
        return a + b;
    }
    if (operator === 'multi') {
        return a * b;
    }
    if (operator === 'subtract') {
        return a - b;
    }
}
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 1, 2));