'use strict';

// https://github.com/tel-ran-de/web_20E/issues/11

/* В девятом классе Вася ездил со своим и параллельным классом в Париж. Известно, что на двоих учителей нельзя брать в поездку больше 25 детей. Напишите проверочный метод
paris(11, 15) -> false
paris(11, 5) -> true */

function paris(firstTeacher, secondTeacher) {
    return firstTeacher + secondTeacher <= 25;
}

console.log('Are we going to Paris if we have 11 and 15 pupils? -', paris(11, 15)); // false
console.log('Are we going to Paris if we have 11 and 5 pupils?? -', paris(11, 5)); // true
console.log('');


/* The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we’re on vacation. Return true if we sleep in.
sleepIn(false, false) → true
sleepIn(true, false) → false
sleepIn(false, true) → true */

function sleepIn(weekday, vacation) {
    return !weekday || vacation;
}

console.log('Do we sleep in if it is not a weekday and not a vacation? -', sleepIn(false, false)); // true
console.log('Do we sleep in if it is a weekday and not a vacation? -', sleepIn(true, false)); // false
console.log('Do we sleep in if it is not a weekday and it is a vacation? -', sleepIn(true, true)); // true
console.log('');


/* Given an Number n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
diff21(19) → 2
diff21(10) → 11
diff21(21) → 0 */

function diff21(n) {
    if (n > 21) {
        return (n - 21) * 2;
    } else {
        return 21 - n;
    };
}

console.log('The result when n is 19:', diff21(19)); // 2
console.log('The result when n is 10:', diff21(10)); // 11
console.log('The result when n is 21:', diff21(21)); // 0
console.log('');

/* leapYearChecker(2000); true
напишите программу проверки високосности года, если каждый високосный год "делится" на 4.
Изучите правила "високосноти" в википедии и напишите "правильный" код. */

function leapYearChecker(year) {
    return year % 4 === 0;
}

console.log('Is 2000 a leap year? -', leapYearChecker(2000)); // true
console.log('');

function trueLeapYearChecker(year) {
    return (year % 100 === 0 && year % 400 === 0)  || (year % 100 != 0 && year % 4 === 0);
}

console.log('Is 2000 a leap year? -', trueLeapYearChecker(2000)); // true
console.log('Is 1800 a leap year? -', trueLeapYearChecker(1800)); // false
console.log('Is 1700 a leap year? -', trueLeapYearChecker(1700)); // false
console.log('Is 2024 a leap year? -', trueLeapYearChecker(2024)); // true
console.log('');