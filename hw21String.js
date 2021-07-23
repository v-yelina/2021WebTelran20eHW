'use strict';

// String-1

/* 14 withoutEnd2
Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

Examples

withoutEnd2('Hello') → ell
withoutEnd2('abc') → b
withoutEnd2('ab') → */

function withoutEnd2(str) {
    return str.slice(1, str.length - 1);
}

console.log('withoutEnd2');
console.log(withoutEnd2('Hello'));
console.log(withoutEnd2('abc'));
console.log(withoutEnd2('ab'));
console.log('');


/* 15 middleTwo
Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

middleTwo('string') → ri
middleTwo('code') → od
middleTwo('Practice') → ct*/

function middleTwo(str) {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
}

console.log('middleTwo');
console.log(middleTwo('string'));
console.log(middleTwo('code'));
console.log(middleTwo('Practice'));
console.log('');

/* 16 endsLy
Given a string, return true if it ends in "ly".

endsLy('oddly') → true
endsLy('y') → false
endsLy('oddl') → false */

function endsLy(str) {
    return str[str.length - 2] === 'l' && str[str.length - 1] === 'y';
}

console.log('ensLy');
console.log(endsLy('oddly'));
console.log(endsLy('y'));
console.log(endsLy('oddl'));
console.log('');

/* 17 nTwice
Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

nTwice('hello', 2) → helo
nTwice('Chocolate', 3) → Choate
nTwice('Chocolate', 1) → Ce */

function nTwice(str, n) {
    return (str.length === n) ? str.slice(0, n) : str.slice(0, n) + str.slice(str.length - n);
}

console.log('nTwice');
console.log(nTwice('hello', 2));
console.log(nTwice('Chocolate', 3));
console.log(nTwice('Chocolate', 1));
console.log(nTwice('M', 1));
console.log('');

/* 18 twoChar
Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

twoChar('java', 0) → ja
twoChar('java', 2) → va
twoChar('java', 3) → ja */

function twoChar(str, i) {
    if (i + 1 > str.length - 1) {
        return str.slice(0, 2);
    } else {
        return str.slice(i, i + 2);
    }
}

console.log('twoChar');
console.log(twoChar('java', 0));
console.log(twoChar('java', 2));
console.log(twoChar('java', 3));
console.log('');

/* 19 middleThree
Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

middleThree('Candy') → and
middleThree('and') → and
middleThree('solving') → lvi */

function middleThree(str) {
    return str.slice(Math.floor(str.length / 2) - 1, Math.floor(str.length / 2) + 2);
}

console.log('middleThree');
console.log(middleThree('Candy'));
console.log(middleThree('and'));
console.log(middleThree('solving'));
console.log('');

/* 20 hasBad
Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

hasBad('badxx') → true
hasBad('xbadxx') → true
hasBad('xxbadxx') → false */

function hasBad(str) {
    return str.indexOf('bad') === 0 || str.indexOf('bad') === 1;
}

console.log('hasBad');
console.log(hasBad('badxx'));
console.log(hasBad('xbadxx'));
console.log(hasBad('xxbadxx'));
console.log(hasBad('xxxx'));
console.log('');

/* 21 atFirst
Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

atFirst('hello') → he
atFirst('hi') → hi
atFirst('h') → h@ */

function atFirst(str){
    if (str.length === 0) {
        return '@@';
    } else if (str.length === 1) {
        return str + '@';
    } else {
        return str[0] + str[1];
    }
}

console.log('atFirst');
console.log(atFirst('hello'));
console.log(atFirst('hi'));
console.log(atFirst('h'));
console.log(atFirst(''));
console.log('');


/* 22 lastChars
Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

lastChars('last', 'chars') → ls
lastChars('yo', 'java') → ya
lastChars('hi', '') → h@ */

function lastChars(a, b) {
    if (a.length === 0 && b.length === 0) {
        return '@@'
    } else if (a.length === 0) {
        return '@' + b[b.length - 1];
    } else if (b.length === 0) {
        return a[0] + '@';
    } else {
        return a[0] + b[b.length - 1];
    }
}

console.log('lastChars');
console.log(lastChars('last', 'chars'));
console.log(lastChars('yo', 'java'));
console.log(lastChars('hi', ''));
console.log('');

/* 23 conCat
Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

conCat('abc', 'cat') → abcat
conCat('dog', 'cat') → dogcat
conCat('abc', '') → abc */

function conCat(a, b) {
    return (a[a.length -1] === b[0]) ? a + b.slice(1) : a + b;
}

console.log('conCat');
console.log(conCat('abc', 'cat'));
console.log(conCat('dog', 'cat'));
console.log(conCat('abc', ''));
console.log('');

/* 24 lastTwo
Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

lastTwo('coding') → codign
lastTwo('cat') → cta
lastTwo('ab') → ba */

function lastTwo(str) {
    return str.slice(0, str.length - 2) + str[str.length - 1] + str[str.length - 2];
}

console.log('lastTwo');
console.log(lastTwo('coding'));
console.log(lastTwo('cat'));
console.log(lastTwo('ab'));
console.log('');

/* 25 seeColor
Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

seeColor('redxx') → red
seeColor('xxred') →
seeColor('blueTimes') → blue */

function seeColor(str) {
    if (str.indexOf('red') === 0) {
        return 'red';
    } else if (str.indexOf('blue') === 0) {
        return 'blue';
    } else {
        return '';
    }
}

console.log('seeColor');
console.log(seeColor('redxx'));
console.log(seeColor('xxred'));
console.log(seeColor('blueTimes'));
console.log('');

/* 26 frontAgain
Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

frontAgain('edited') → true
frontAgain('edit') → false
frontAgain('ed') → true */

function frontAgain(str) {
    return str.slice(0, 2) === str.slice(str.length - 2);
}

console.log('frontAgain');
console.log(frontAgain('edited'));
console.log(frontAgain('edit'));
console.log(frontAgain('ed'));
console.log('');

/* 27 minCat
Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

minCat('Hello', 'Hi') → loHi
minCat('Hello', 'java') → ellojava
minCat('java', 'Hello') → javaello */

function minCat(str1, str2) {
    if (str1.length > str2.length) {
        return str1.slice(str1.length - str2.length) + str2;
    } else if (str1.length < str2.length) {
        return str1 + str2.slice(str2.length - str1.length);
    } else {
        return str1 + str2;
    }
}

console.log('minCat');
console.log(minCat('Hello', 'Hi'));
console.log(minCat('Hello', 'java'));
console.log(minCat('java', 'Hello'));
console.log('');

/* 
28 extraFront
Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

extraFront('Hello') → HeHeHe
extraFront('ab') → ababab
extraFront('H') → HHH */

function extraFront(str) {
    return str.slice(0, 2) + str.slice(0, 2) + str.slice(0, 2);
}

console.log('extraFront');
console.log(extraFront('Hello'));
console.log(extraFront('ab'));
console.log(extraFront('H'));
console.log('');

/* 29 without2
Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

without2('HelloHe') → lloHe
without2('HelloHi') → HelloHi
without2('Hi') → */

function without2(str) {
    return (str.slice(0, 2) === str.slice(str.length - 2)) ? str.slice(2) : str; 
}

console.log('without2');
console.log(without2('HelloHe'));
console.log(without2('HelloHi'));
console.log(without2('Hi'));
console.log('');

/* 30 deFront
Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

deFront('Hello') → llo
deFront('java') → va
deFront('away') → aay */

function deFront(str) {
    if (str[0] === 'a' && str[1] === 'b') {
        return str;
    } else if (str[0] === 'a') {
        return str[0] + str.slice(2);
    } else if (str[1] === 'b') {
        return str.slice(1);
    } else {
        return str.slice(2);
    }
}

console.log('deFront');
console.log(deFront('Hello'));
console.log(deFront('java'));
console.log(deFront('away'));
console.log(deFront('abba'));
console.log(deFront('ba'));
console.log(deFront('oba'));
console.log('');


/* 31 startWord
Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

startWord('hippo', 'hi') → hi
startWord('hippo', 'xip') → hip
startWord('hippo', 'i') → h */

function startWord(str, word) {
    if (word.slice(1) === str.slice(1, word.length)) {
        return str.slice(0, word.length);
    } else {
        return '';
    }
}

console.log('startWord');
console.log(startWord('hippo', 'hi'));
console.log(startWord('hippo', 'xip'));
console.log(startWord('hippo', 'i'));
console.log('');

/* 32 withoutX
Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

withoutX('xHix') → Hi
withoutX('xHi') → Hi
withoutX('Hxix') → Hxi */

function withoutX(str) {
    if (str[0] === 'x' && str[str.length - 1] === 'x') {
        return str.slice(1, str.length - 1);
    } else if (str[0] === 'x') {
        return str.slice(1);
    } else if (str[str.length - 1] === 'x') {
        return str.slice(0, str.length - 1);
    } else {
        return str;
    }
}

console.log('withoutX');
console.log(withoutX('xHix'));
console.log(withoutX('xHi'));
console.log(withoutX('Hxix'));
console.log('');

/* 33 withoutX2
Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

withoutX2('xHi') → Hi
withoutX2('Hxi') → Hi
withoutX2('Hi') → Hi */

function withoutX2(str) {
    if (str[1] === 'x') {
        str = str.slice(0, 1) + str.slice(2);
    }
    if (str[0] === 'x') {
        str = str.slice(1);
    }
    if (str[str.length - 2] === 'x') {
        str = str.slice(0, str.length - 2) + str[str.length - 1];
    }
    if (str[str.length - 1] === 'x') {
        str = str.slice(0, str.length - 1);
    }
    return str;
}

console.log('withoutX2');
console.log(withoutX2('xHi'));
console.log(withoutX2('Hxi'));
console.log(withoutX2('Hi'));
console.log(withoutX2('xddHidfxf'));
console.log('');