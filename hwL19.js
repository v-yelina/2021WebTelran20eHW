"use strict";

// Array - 01

/* Given an int array length 2, return true if it does not contain a 2 or 3.
no23([4, 5]) → true
no23([4, 2]) → false
no23([3, 5]) → false */

function no23(arr) {
    return arr[0] != 2 && arr[0] != 3 && arr[1] != 2 && arr[1] != 3;
}

console.log('no23');
console.log(no23([4, 5]));
console.log(no23([4, 2]));
console.log(no23([3, 5]));
console.log('');


/* Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.
fix23([1, 2, 3]) → [1, 2, 0]
fix23([2, 3, 5]) → [2, 0, 5]
fix23([1, 2, 1]) → [1, 2, 1] */

function fix23(arr) {
    let i = 0;
    do {
        if (arr[i] === 2 && arr[i + 1] === 3) {
            arr[i + 1] = 0;
        }
        i++;
    } while (i < arr.length - 1)
    return arr;
}

console.log('fix23');
console.log(fix23([1, 2, 3]));
console.log(fix23([2, 3, 5]));
console.log(fix23([1, 2, 1]));
console.log('');

/* Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.
makeMiddle([1, 2, 3, 4]) → [2, 3]
makeMiddle([7, 1, 2, 3, 4, 9]) → [2, 3]
makeMiddle([1, 2]) → [1, 2] */

function makeMiddle(arr) {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]]
}

console.log('makeMiddle');
console.log(makeMiddle([1, 2, 3, 4]));
console.log(makeMiddle([7, 1, 2, 3, 4, 9]));
console.log(makeMiddle([1, 2]));
console.log('');


// Logic

/* 09 specialEleven
We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the
given non-negative number is special. Use the % "mod" operator.

Examples

specialEleven(22) → true
specialEleven(23) → true
specialEleven(24) → false */

function specialEleven(digit) {
    return digit % 11 === 0 || (digit - 1) % 11 === 0;
}

console.log('specialEleven');
console.log(specialEleven(22));
console.log(specialEleven(23));
console.log(specialEleven(24));
console.log('');

/* 10 more20
Return true if the given non-negative number is 1 or 2 more than a multiple of 20.

Examples

more20(20) → false
more20(21) → true
more20(22) → true */

function more20(digit) {
    return (digit - 2) % 20 === 0 || (digit - 1) % 20 === 0;
}

console.log('more20');
console.log(more20(20));
console.log(more20(21));
console.log(more20(22));
console.log('');

// String

/* 12 right2
Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

Examples

right2('Hello') → loHel
right2('java') → vaja
right2('Hi') → Hi */

function right2(str) {
    return str.slice(-2) + str.slice(0, -2);
}

console.log('right2');
console.log(right2('Hello'));
console.log(right2('java'));
console.log(right2('Hi'));
console.log('');

/* 13 theEnd
Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

Examples

theEnd('Hello', true) → H
theEnd('Hello', false) → o
theEnd('oh', true) → o */

function theEnd(str, isFront) {
    return (isFront) ? str[0] : str[str.length - 1];
}

console.log('theEnd');
console.log(theEnd('Hello', true));
console.log(theEnd('Hello', false));
console.log(theEnd('oh', true));
console.log('');