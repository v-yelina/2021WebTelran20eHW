'use strict;'

/* Вывести на экран сообщение в кавычках. Например собственное имя + “профессия”. */

console.log('Картина \'Три богатыря\'');
console.log('');

/* Вывести на экран построчно анкетные данные: Имя, Фамилия, Адрес, Улица и тд и тп. Пример вывода одной строчки:
Имя пользователя: Андрей */

console.log(`First Name: Valiantsina;
Second Name: Yelina;
City: Bubenreuth;`);
console.log('');

/* Вырезать из выражения “Вход разрешён” последние 8 символов и добавить “воспрещён”. */

let entryAllowed = 'Вход разрешён';
let noAdmittance = entryAllowed.slice(0, -8) + 'воспрещён';
console.log(noAdmittance);
console.log('');

/* Вывести на экран “Осторожно, вход воспрещён” заглавными буквами. */

console.log('Осторожно, вход воспрещён'.toUpperCase());
