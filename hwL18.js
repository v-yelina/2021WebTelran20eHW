"use strict";

/* Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false */

function firstLast6(numbers) {
    return numbers[0] === 6 || numbers[numbers.length - 1] === 6;
}

console.log(firstLast6([1, 2, 6]));
console.log(firstLast6([6, 1, 2, 3]));
console.log(firstLast6([13, 6, 1, 2, 3]));
console.log('');

/* 08 withoutEnd
Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

Examples

withoutEnd('Hello') → ell
withoutEnd('java') → av
withoutEnd('coding') → odin */

function withoutEnd(word) {
    return word.slice(1, word.length - 1);
}

console.log(withoutEnd('Hello'));
console.log(withoutEnd('java'));
console.log(withoutEnd('coding'));
console.log(withoutEnd('Hi!'));
console.log('');

/* 09 comboString
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

Examples

comboString('Hello', 'hi') → hiHellohi
comboString('Hi', 'Hello') → HiHelloHi
comboString('aaa', 'b') → baaab */

function comboString(word1, word2) {
    return word1.length > word2.length ? word2 + word1 + word2 : word1 + word2 + word1;
}

console.log(comboString('Hello', 'hi'));
console.log(comboString('Hi', 'Hello'));
console.log(comboString('aaa', 'b'));
console.log(comboString('', 'Hi'));
console.log('');

/* sortaSum
Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

Examples

sortaSum(3, 4) → 7
sortaSum(9, 4) → 20
sortaSum(10, 11) → 21 */

function sortaSum(a, b) {
    if (a + b >= 10 && a + b <= 19) {
        return 20;
    } else {
        return a + b;
    }
}

console.log(sortaSum(3, 4));
console.log(sortaSum(9, 4));
console.log(sortaSum(10, 11));
console.log('');

/* 06 alarmClock
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

Examples

alarmClock(1, false) → 7:00
alarmClock(5, false) → 7:00
alarmClock(0, false) → 10:00 */

function alarmClock(day, isVacation) {
    if (day >= 1 && day <= 5 && !isVacation) {
        return '7:00';
    } else {
        return '10:00';
    }
}

console.log(alarmClock(1, false));
console.log(alarmClock(5, false));
console.log(alarmClock(0, false));
console.log(alarmClock(1, true)); // 10:00
console.log('');