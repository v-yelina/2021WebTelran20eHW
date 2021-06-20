'use strict;'

/* Напишите программу, которая объяснит наступление определённых событий, в зависимости от выбора “витязя”. */

function crossroad(decision) {
    let answer = '';
    if (decision === 'left') {
        answer = 'Налево пойдешь - коня потеряешь';
    } else if (decision === 'right') {
        answer = 'Hаправо пойдешь - жизнь потеряешь';
    } else if (decision === 'straight') {
        answer = 'Прямо пойдешь - жив будешь, да себя позабудешь';
    } else {
        answer = 'Вам нужно выбрать дорогу прежде чем получить ответ';
    }
    return answer;
}

let decision = 'right';
console.log(crossroad(decision));
console.log('');

/* Напишите программу для машины на светофоре. Что делать, если горит красный, жёлтый или зелёный свет. */

function trafficLights(light) {
    let instruction = '';
    if (light === 'red') {
        instruction = 'You should stop and wait';
    } else if (light === 'yellow') {
        instruction = 'You schould be prapared to drive';
    } else if (light === 'green') {
        instruction = 'You can drive';
    } else {
        instruction = 'Are you sure, that it is a traffic lights in front of you?';
    }
    return instruction;
}

let light = 'green';
console.log(trafficLights(light));
console.log('');


/* Напишите программу выдачи денег работнику с учётом надбавки за стаж, если базовая зарплата 500$. За 3 года работы надбавка 10%, за 5 лет работы надбавка 50%, за 10 лет работы надбавка 100%, за 15 лет работы надбавка 150%. */

function salary(baseSalary, seniority) {
    let totalSalary = baseSalary;
    if (seniority < 3) {
        totalSalary = totalSalary;
    } else if (seniority < 5) {
        totalSalary += totalSalary * 0.1;
    } else if (seniority < 10) {
        totalSalary += totalSalary * 0.5;
    } else if (seniority < 15) {
        totalSalary += totalSalary;
    } else {
        totalSalary += totalSalary * 1.5;
    }
    return totalSalary;
}

console.log("Зарплата при стаже 1 год:", salary(500, 1)); // 500
console.log("Зарплата при стаже 3 года:", salary(500, 3)); // 550
console.log("Зарплата при стаже 5 лет:", salary(500, 5)); // 750
console.log("Зарплата при стаже 10 лет:", salary(500, 10)); // 1000
console.log("Зарплата при стаже 15 лет:", salary(500, 15)); // 1250
console.log('');

/* Напишите программу приготовления бутербродов. Реализуйте как минимум 3 рецепта: с колбасой, с маслом и с вареньем. */

function makeSandwich(sausage, cheese, butter, jam) {
    sandwich = 'Я ем вкуснейший бутерброд, в котором: ';
    if (sausage !== 0) {
        sandwich += `${sausage}шт. колбасы; `
    }
    if (cheese !== 0) {
        sandwich += `${cheese}шт. сыра; `
    }
    if (butter !== 0) {
        sandwich += `${butter}шт. масла; `
    }
    if (jam !== 0) {
        sandwich += `${jam}шт. варенья;`
    }
    return sandwich;
}

console.log(makeSandwich(1, 2, 1, 0));
console.log(makeSandwich(0, 0, 1, 1));
console.log('');

/* When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.
cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true */

function cigarParty(number, weekend) {
    return ((number >= 40 && number <= 60) && !weekend) || (number >= 40 && weekend)
}

console.log(cigarParty(30, false)); // false
console.log(cigarParty(50, false)); // true
console.log(cigarParty(70, true)); // true
console.log('');

