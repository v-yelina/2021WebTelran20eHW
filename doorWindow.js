'use strict;'

/* Окна и двери
В старых советских хрущёвках города № решили поменять деревянные окна и двери на пластиковые. Выяснилось, что все двери в хрущёвках одинакового размера 2м*90см, а окна разные, но в каждой квартире могут быть только одинаковые окна.
Стоимость переделки окон рассчитывается из стоимости стекла - 100€ за квадратный метр и стоимости косяка - погонный метр 100€.
Стоимость дверей рассчитывается исходя из стоимости косяка (как и у окна) и стоимости самой двери 120€ за квадратный метр.
Напишите программу, которая поможет стройтресту №12 правильно выставлять счета. */

// стоимость косяка:
function cantPrice(side1, side2, priceForMeter) {
   return 2 * (side1 + side2) * priceForMeter;
}

// стоимость самой двери и стекла:
function doorAndGlassPrice(side1, side2, priceForMeter) {
   return side1 * side2 * priceForMeter;
}

// стоимость двери и окна целиком:
function doorAndWindowPrice(side1, side2, cantPr, price, amount) {
    return (cantPrice(side1, side2, cantPr) + doorAndGlassPrice(side1, side2, price)) * amount;
}

//предположим, что у нас 5 дверей, 5 окон 70см * 1.35м, 6 окон 1.3м*1.4м
let finalAmount = doorAndWindowPrice(2, 0.9, 100, 120, 5) + doorAndWindowPrice(1.3, 1.4, 100, 100, 6) + doorAndWindowPrice(0.7, 1.35, 100, 100, 5);
console.log('Общая стоимость окон и дверей: ' + finalAmount + ' eur');