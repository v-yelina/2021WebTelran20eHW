'use strict';

// Array-1

/* Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more. Note: by default, a new int array contains all 0's.

makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
makeLast([1, 2]) → [0, 0, 0, 2]
makeLast([3]) → [0, 3] */

function makeLast(arr) {
    let result = [];
    for (let i = 0; i < arr.length * 2 - 1; i++) {
        result.push(0);
    }
    result.push(arr[arr.length - 1])
    return result;
}

console.log('makeLast');
console.log(makeLast([4, 5, 6]));
console.log(makeLast([1, 2]));
console.log(makeLast([3]));
console.log('');

/* Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.

start1([1, 2, 3], [1, 3]) → 2
start1([7, 2, 3], [1]) → 1
start1([1, 2], []) → 1
 */

function start1(a, b) {
    if (a[0] === 1 && b[0] === 1) {
        return 2;
    } else if (a[0] === 1 || b[0] === 1) {
        return 1;
    } else {
        return 0;
    }
}

console.log('start1');
console.log(start1([1, 2, 3], [1, 3]));
console.log(start1([7, 2, 3], [1]));
console.log(start1([1, 2], []));
console.log('');

/* Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

plusTwo([1, 2], [3, 4]) → [1, 2, 3, 4]
plusTwo([4, 4], [2, 2]) → [4, 4, 2, 2]
plusTwo([9, 2], [3, 4]) → [9, 2, 3, 4] */


function plusTwo(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return result;
}

console.log('plusTwo');
console.log(plusTwo([1, 2], [3, 4]));
console.log(plusTwo([4, 4], [2, 2]));
console.log(plusTwo([9, 2], [3, 4]));
console.log('');


/* Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

maxTriple([1, 2, 3]) → 3
maxTriple([1, 5, 3, 7, 9]) → 9
maxTriple([5]) → 5 */

function maxTriple(arr) {
    if (arr[0] >= arr[Math.floor(arr.length / 2)] && arr[0] >= arr[arr.length - 1]) {
        return arr[0];
    } else if (arr[Math.floor(arr.length / 2)] >= arr[0] && arr[Math.floor(arr.length / 2)] >= arr[arr.length - 1]) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        return arr[arr.length - 1];
    }
}

console.log('maxTriple');
console.log(maxTriple([1, 2, 3]));
console.log(maxTriple([1, 5, 3, 7, 9]));
console.log(maxTriple([5]));
console.log('');

/* Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.

make2([4, 5], [1, 2, 3]) → [4, 5]
make2([4], [1, 2, 3]) → [4, 1]
make2([], [1, 2]) → [1, 2] */

function make2(a, b) {
    let result = [];
    if (a.length === 0) {
        result[0] = b[0];
        result[1] = b[1];
    } else if (a.length === 1) {
        result[0] = a[0];
        result[1] = b[0];
    } else {
        result[0] = a[0];
        result[1] = a[1];
    }
    return result;
}

console.log('make2');
console.log(make2([4, 5], [1, 2, 3]));
console.log(make2([4], [1, 2, 3]));
console.log(make2([], [1, 2]));
console.log(make2([5, 7, 3, 4], [1, 2]));
console.log('');

/* Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

makePi() → [3, 1, 4] */

//Честно говоря, хочется написать решение, которое соответствовало бы условию, а именно:

function makePi() {
    return [3, 1, 4];
}

function makePi2(pi) {
    let Pi = String(pi);
    let arrPi = [];
    for (let i = 0; i < 4; i++) {
        if (Pi[i] !== '.') {
            arrPi.push(Number(Pi[i]));
        }
    }
    return arrPi;
}

console.log('makePi');
console.log(makePi2(3.14159265359));
console.log('');

/* Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

rotateLeft3([1, 2, 3]) → [2, 3, 1]
rotateLeft3([5, 11, 9]) → [11, 9, 5]
rotateLeft3([7, 0, 0]) → [0, 0, 7] */

// если возвращать другой массив
function rotateLeft3One(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i]);
    }
    result.push(arr[0]);
    return result;
}

// если изменять данный массив
function rotateLeft3Two(arr) {
    let swap = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = swap;
    return arr;
}

console.log('rotateLeft3One');
console.log(rotateLeft3One([1, 2, 3]));
console.log(rotateLeft3One([5, 11, 9]));
console.log(rotateLeft3One([7, 0, 0]));
console.log('');

console.log('rotateLeft3Two');
console.log(rotateLeft3Two([1, 2, 3]));
console.log(rotateLeft3Two([5, 11, 9]));
console.log(rotateLeft3Two([7, 0, 0]));
console.log('');

/* Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

sum2([1, 2, 3]) → 3
sum2([1, 1]) → 2
sum2([1, 1, 1, 1]) → 2 */

function sum2(arr) {
    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        return arr[0] + arr[1];
    }
}

console.log('sum2');
console.log(sum2([1, 2, 3]));
console.log(sum2([1]));
console.log(sum2([]));
console.log('');

/* Given an int array length 2, return true if it contains a 2 or a 3.

has23([2, 5]) → true
has23([4, 3]) → true
has23([4, 5]) → false */

function has23(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2 || arr[i] === 3) {
            return true;
        }
    }
    return false;
}

console.log('has23');
console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5]));
console.log('');

/* Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false */

function double23(arr) {
    let count2 = 0;
    let count3 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            count2++;
        } else if (arr[i] === 3) {
            count3++;
        }
    }
    return count2 === 2 || count3 === 2;
}

console.log('has23');
console.log(double23([2, 2]));
console.log(double23([3, 3]));
console.log(double23([2, 3]));
console.log('');

/* Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

biggerTwo([1, 2], [3, 4]) → [3, 4]
biggerTwo([3, 4], [1, 2]) → [3, 4]
biggerTwo([1, 1], [1, 2]) → [1, 2] */

function arraySum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function biggerTwo(a, b) {
    if (arraySum(b) > arraySum(a)) {
        return b;
    } else {
        return a;
    }
}

console.log('arraySum');
console.log(biggerTwo([1, 2], [3, 4]));
console.log(biggerTwo([3, 4], [1, 2]));
console.log(biggerTwo([1, 1], [1, 2]));
console.log('');

/* Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
swapEnds([1, 2, 3]) → [3, 2, 1]
swapEnds([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8] */

function swapEnds(arr) {
    let swap = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = swap;
    return arr;
}

console.log('swapEnds');
console.log(swapEnds([1, 2, 3, 4]));
console.log(swapEnds([1, 2, 3]));
console.log(swapEnds([8, 6, 7, 9, 5]));
console.log('');

/* Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

frontPiece([1, 2, 3]) → [1, 2]
frontPiece([1, 2]) → [1, 2]
frontPiece([1]) → [1] */

function frontPiece(arr) {
    return arr.slice(0, 2);
}

console.log(frontPiece);
console.log(frontPiece([1, 2, 3]));
console.log(frontPiece([1, 2]));
console.log(frontPiece([1]));
console.log('');

/* Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

front11([1, 2, 3], [7, 9, 8]) → [1, 7]
front11([1], [2]) → [1, 2]
front11([1, 7], []) → [1] */

function front11(a, b) {
    let result = a.slice(0,1);
    if (b.length !== 0) {
        result.push(Number(b.slice(0,1)));
    }
    return result;
}

console.log('front11');
console.log(front11([1, 2, 3], [7, 9, 8]));
console.log(front11([1], [2]));
console.log(front11([1, 7], []));
console.log(front11([], [1, 7]));
console.log('');