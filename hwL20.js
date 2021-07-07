'use strict';

/* Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true */

let sameFirstLast = function (arr) {
    return arr.length >= 1 && arr[0] === arr[arr.length - 1];
};

console.log('sameFirstLast');
console.log(sameFirstLast([1, 2, 3]));
console.log(sameFirstLast([1, 2, 3, 1]));
console.log(sameFirstLast([1, 2, 1]));
console.log('');

/* Given an array of ints length 3, return the sum of all the elements.

sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7 */

let sum3 = function (arr) {
    let i = 0;
    let result = 0;
    do {
        result += arr[i];
        i++;
    } while (i < arr.length)
    return result;
};

console.log('sum3');
console.log(sum3([1, 2, 3]));
console.log(sum3([5, 11, 2]));
console.log(sum3([7, 0, 0]));
console.log('');

/* Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

maxEnd3([1, 2, 3]) → [3, 3, 3]
maxEnd3([11, 5, 9]) → [11, 11, 11]
maxEnd3([2, 11, 3]) → [3, 3, 3] */

let maxEnd3 = function (arr) {
    let i = 0;
    do {
        if (arr[0] > arr[arr.length - 1]) {
            arr[i] = arr[0];
        } else {
            arr[i] = arr[arr.length - 1];
        }
        i++;
    } while (i < arr.length)
    return arr;
};

console.log('maxEnd3');
console.log(maxEnd3([1, 2, 3]));
console.log(maxEnd3([11, 5, 9]));
console.log(maxEnd3([2, 11, 3]));
console.log('');

/* Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

makeEnds([1, 2, 3]) → [1, 3]
makeEnds([1, 2, 3, 4]) → [1, 4]
makeEnds([7, 4, 6, 2]) → [7, 2] */

let makeEnds = function (arr) {
    return [arr[0], arr[arr.length - 1]];
};

console.log('makeEnds');
console.log(makeEnds([1, 2, 3]));
console.log(makeEnds([1, 2, 3, 4]));
console.log(makeEnds([7, 4, 6, 2]));
console.log('');

//String-3

/* Given a string, count the number of words ending in ‘y’ or ‘z’ – so the ‘y’ in “heavy” and the ‘z’ in “fez” count, but not the ‘y’ in “yellow” (not case sensitive). We’ll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)
countYZ("fez day") → 2
countYZ("day fez") → 2
countYZ("day fyyyz") → 2 */

// Я так поняла, что в js isLetter нет, поэтому решала подручными способами

let countYZ = function (str) {
    let i = 0;
    let counter = 0;
    str += ' ';
    while (i < str.length) {
        if (str[i + 1] === ' ' && (str[i] === 'z' || str[i] === 'y')) {
            counter++;
        }
        i++;
    }
    return counter;
};

console.log('countYZ');
console.log(countYZ("fez day"));
console.log(countYZ("day fez"));
console.log(countYZ("day fyyyz"));
console.log(countYZ("dayd fyyyz"));
console.log('');


// Array-3 

/* Consider the leftmost and righmost appearances of some value in an array. We’ll say that the “span” is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)
maxSpan([1, 2, 1, 1, 3]) → 4
maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6 */

let maxElement = function (arr) {
    let i = 0;
    let max = arr[0];
    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i];
        }
        i++
    }
    return max;
}

let maxSpan = function (arr) {
    let spans = [];
    let i = 0;
    let j = 1;
    while (i < arr.length - 1) {
        while (j < arr.length - i) {
            if (arr[arr.length - j] === arr[i]) {
                spans.push((arr.length - j) - i + 1);
            }
            j++;
        }
        i++;
        j = 1;
    }
    return maxElement(spans);
}

console.log(maxSpan([1, 2, 1, 1, 3]));
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4]));
console.log(maxSpan([1, 4, 2, 1, 4, 4, 4]));