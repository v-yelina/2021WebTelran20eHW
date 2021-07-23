'use strict';

//logic-1

/* 11 old35
Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.

old35(3) → true
old35(10) → true
old35(15) → false */

function old35(num) {
    return (num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0);
}

console.log('old35');
console.log(old35(3));
console.log(old35(10));
console.log(old35(15));
console.log(old35(17));
console.log('');

/* 12 less20
Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false.

less20(18) → true
less20(19) → true
less20(20) → false */

function less20(num) {
    return (num + 1) % 20 === 0 || (num + 2) % 20 === 0;
}

console.log('less20');
console.log(less20(18));
console.log(less20(19));
console.log(less20(20));
console.log('');

/* 13 nearTen
Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.

nearTen(12) → true
nearTen(17) → false
nearTen(19) → true */

function nearTen(num) {
    for (let i = num - 2; i <= num + 2; i++) {
        if (i % 10 === 0) {
            return true;
        }
    }
    return false;
}

console.log('nearTen');
console.log(nearTen(12));
console.log(nearTen(17));
console.log(nearTen(19));
console.log('');

/* 14 teenSum
Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.

teenSum(3, 4) → 7
teenSum(10, 13) → 19
teenSum(13, 2) → 19 */

function teenSum(a, b) {
    if ((a >= 13 && a <= 19 || (b >= 13 && b <= 19))) {
        return 19;
    } else {
        return a + b;
    }
}

console.log('teenSum');
console.log(teenSum(3, 4));
console.log(teenSum(10, 13));
console.log(teenSum(13, 2));
console.log('');

/* 15 answerCell
Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

answerCell(false, false, false) → true
answerCell(false, false, true) → false 
answerCell(true, false, false) → false
answerCell(true, true, false) → true
 */

function answerCell(isMorning, isMumCalling, isAsleep) {
    return !(isAsleep || (isMorning && !isMumCalling));
}

console.log('answerCell');
console.log(answerCell(false, false, false));
console.log(answerCell(false, false, true));
console.log(answerCell(true, false, false));
console.log(answerCell(true, true, false));
console.log('');

/* 16 teaParty
We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

teaParty(6, 8) → 1
teaParty(3, 8) → 0
teaParty(20, 6) → 2 */

function teaParty(tea, candy) {
    if (tea < 5 || candy < 5) {
        return 0;
    } else if (tea >= 2 * candy || candy >= 2 * tea) {
        return 2;
    } else {
        return 1;
    }
}

console.log('teaParty');
console.log(teaParty(6, 8));
console.log(teaParty(3, 8));
console.log(teaParty(20, 6));
console.log('');

/* 17 fizzString
Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged.

fizzString('fig') → Fizz
fizzString('dib') → Buzz
fizzString('fib') → FizzBuzz */

function fizzString(str) {
    if (str[0] === 'f' && str[str.length - 1] === 'b') {
        return 'FizzBuzz';
    } else if (str[str.length - 1] === 'b') {
        return 'Buzz';
    } else if (str[0] === 'f') {
        return 'Fizz';
    } else {
        return str;
    }
}

console.log('fizzString');
console.log(fizzString('fig'));
console.log(fizzString('dib'));
console.log(fizzString('fib'));
console.log(fizzString('Hello'));
console.log('');

/* 18 fizzString2
Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3. What will the remainder be when one number divides evenly into another?

fizzString2(1) → 1!
fizzString2(2) → 2!
fizzString2(3) → Fizz! */

function fizzString2 (n) {
    if (n % 15 === 0) {
        return 'FizzBuzz!';
    } else if (n % 3 === 0) {
        return 'Fizz!';
    } else if (n % 5 === 0) {
        return 'Buzz!';
    } else {
        return n + '!';
    }
}

console.log('fizzString2');
console.log(fizzString2(1));
console.log(fizzString2(3));
console.log(fizzString2(5));
console.log(fizzString2(45));
console.log('');

/* 19 twoAsOne
Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

twoAsOne(1, 2, 3) → true
twoAsOne(3, 1, 2) → true
twoAsOne(3, 2, 2) → false */

function twoAsOne(a, b, c) {
    let sum1 = a + b === c;
    let sum2 = b + c === a;
    let sum3 = a + c === b;
    return sum1 || sum2 || sum3;
}

console.log('twoAsOne');
console.log(twoAsOne(1, 2, 3));
console.log(twoAsOne(3, 1, 2));
console.log(twoAsOne(3, 2, 2));
console.log('');

/* 20 inOrder
Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.

inOrder(1, 2, 4, false) → true
inOrder(1, 2, 1, false) → false
inOrder(1, 1, 2, true) → true */

function inOrder(a, b, c, bOk) {
   return (bOk || b > a) && c > b;
}

console.log('inOrder');
console.log(inOrder(1, 2, 4, false));
console.log(inOrder(1, 2, 1, false));
console.log(inOrder(1, 1, 2, true));
console.log('');

/* 21 inOrderEqual
Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.

inOrderEqual(2, 5, 11, false) → true
inOrderEqual(5, 7, 6, false) → false
inOrderEqual(5, 5, 7, true) → true */

function inOrderEqual(a, b, c, equalOk) {
    return (equalOk && a <= b && b <= c) || (a < b && b < c);
}

console.log('inOrderEqual');
console.log(inOrderEqual(2, 5, 11, false));
console.log(inOrderEqual(5, 7, 6, false));
console.log(inOrderEqual(5, 5, 7, true));
console.log('');

/* 22 lastDigit
Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.

lastDigit(7, 17) → true
lastDigit(6, 17) → false
lastDigit(3, 113) → true */

function lastDigit(a, b) {
    return a % 10 === b % 10;
}

console.log('lastDigit');
console.log(lastDigit(7, 17));
console.log(lastDigit(6, 17));
console.log(lastDigit(3, 113));
console.log('');

/* 23 lessBy10
Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

lessBy10(1, 7, 11) → true
lessBy10(1, 7, 10) → false
lessBy10(11, 1, 7) → true */

function lessBy10(a, b, c) {
    if (b - a >= 10 || c - a >= 10) {
        return true;
    } else if (a - b >= 10 || c - b >= 10) {
        return true;
    } else return a - c >= 10 || b - c >= 10;
}

console.log('lessBy10');
console.log(lessBy10(1, 7, 11));
console.log(lessBy10(11, 1, 7));
console.log(lessBy10(1, 7, 10));
console.log('');

/* 24 withoutDoubles
Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.

withoutDoubles(2, 3, true) → 5
withoutDoubles(3, 3, true) → 7
withoutDoubles(3, 3, false) → 6 */

function withoutDoubles(dice1, dice2, noDoubles) {
    if (noDoubles && dice1 === dice2) {
        if (dice1 === 6) {
            return 1 + dice2;
        } else {
            return dice1 + 1 + dice2;
        }
    } else {
        return dice1 + dice2;
    }
}

console.log('withoutDoubles');
console.log(withoutDoubles(2, 3, true));
console.log(withoutDoubles(3, 3, true));
console.log(withoutDoubles(3, 3, false));
console.log(withoutDoubles(6, 6, true));
console.log('');

/* 25 maxMod5
Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

maxMod5(2, 3) → 3
maxMod5(6, 2) → 6
maxMod5(3, 2) → 3 */

function maxMod5(a, b) {
    let max, min;
    (a > b) ? max = a : max = b;
    (max === a) ? min = b : min = a;
    if (a === b ) {
        return 0;
    } else if (a % 5 === b % 5) {
        return min;
    } else {
        return max;
    }
}

console.log('maxMod5');
console.log(maxMod5(2, 3));
console.log(maxMod5(6, 2));
console.log(maxMod5(3, 2));
console.log(maxMod5(3, 3));
console.log('');

/* 26 redTicket
You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5. Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.

redTicket(2, 2, 2) → 10
redTicket(2, 2, 1) → 0
redTicket(0, 0, 0) → 5 */


function redTicket(a, b, c) {
    if (a === b && b === c && a === 2) {
        return 10;
    } else if (a === b && b === c) {
        return 5;
    } else if (b !== a && c !== a) {
        return 1;
    } else {
        return 0;
    }
}

console.log('redTicket');
console.log(redTicket(2, 2, 2));
console.log(redTicket(2, 2, 1));
console.log(redTicket(0, 0, 0));
console.log('');

/* 27 greenTicket
You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.

greenTicket(1, 2, 3) → 0
greenTicket(2, 2, 2) → 20
greenTicket(1, 1, 2) → 10 */

function greenTicket(a, b, c) {
    if (a === b && b === c) {
        return 20;
    } else if (a === b || b === c || c === a) {
        return 10;
    } else {
        return 0
    }
}

console.log('greenTicket');
console.log(greenTicket(1, 2, 3));
console.log(greenTicket(2, 2, 2));
console.log(greenTicket(1, 1, 2));
console.log('');

/* 28 blueTicket
You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs, which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair. If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is exactly 10 more than either bc or ac sums, the result is 5. Otherwise the result is 0.

blueTicket(9, 1, 0) → 10
blueTicket(9, 2, 0) → 0
blueTicket(6, 1, 4) → 10 */

function blueTicket(a, b, c) {
    let ab = a + b;
    let bc = b + c;
    let ac = a + c;
    if (ab === 10 || bc === 10 || ac === 10) {
        return 10;
    } else if (ab - bc === 10 || ab - ac === 10) {
        return 5;
    } else {
        return 0;
    }
}

console.log('blueTicket');
console.log(blueTicket(9, 1, 0));
console.log(blueTicket(9, 2, 0));
console.log(blueTicket(6, 1, 4));
console.log(blueTicket(15, 6, 5));
console.log('');

/* 29 shareDigit
Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

shareDigit(12, 23) → true
shareDigit(12, 43) → false
shareDigit(12, 44) → false */

// Я так понимаю, в js нет оператора целочисленного деления вроде //?

function shareDigit(a, b) {
    let a1 = Math.round(a / 10);
    let a2 = a % 10;
    let b1 = Math.round(b / 10);
    let b2 = b % 10;
    return a1 === b1 || a1 === b2 || a2 === b2 || a2 === b1;
}

console.log('shareDigit');
console.log(shareDigit(12, 23));
console.log(shareDigit(12, 43));
console.log(shareDigit(12, 44));
console.log(shareDigit(22, 44));
console.log(shareDigit(20, 22));
console.log('');

/* 30 sumLimit
Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of digits as a. If the sum has more digits than a, just return a without b. (Note: one way to compute the number of digits of a non-negative int n is to convert it to a string with String.valueOf(n) and then check the length of the string.)

sumLimit(2, 3) → 5
sumLimit(8, 3) → 8
sumLimit(8, 1) → 9 */

function sumLimit (a, b) {
    if (String(a).length === String(a + b).length) {
        return a + b;
    } else if (String(a + b).length > String(a).length) {
        return a;
    }
}

console.log('sumLimit');
console.log(sumLimit(2, 3));
console.log(sumLimit(8, 3));
console.log(sumLimit(8, 1));
console.log(sumLimit(10, 12));
console.log('');