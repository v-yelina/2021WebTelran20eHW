'use strict;'

/* Конвертер валют
Реализовать метод, который принимает название валюты (например, “EUR”,”RUR”,”USD”,”GPB”) и выдает курс к доллару. Естественно, “USD” возвращает 1.0 .
Используя метод из предыдущего пункта написать метод, который принимает пару валют (“GPB”,”EUR”) и возвращает курс обмена.
Используя метод из предыдущего пункта реализовать метод который получает пару валют и сумму в первой валюте, возвращает сумму во второй валюте. */

function eurRate(currency) {
    exchangeRate = 0;
    switch (currency) {
        case 'eur':
            exchangeRate = 1;
            break;
        case 'usd':
            exchangeRate = 1.19;
            break;
        case 'byn':
            exchangeRate = 2.98;
            break;
        case 'gpb':
            exchangeRate = 0.86;
            break;
        default:
            exchangeRate = 'There is no rate for this currency'
    }
    return exchangeRate;
}

function usdRate(currency) {
    exchangeRate = 0;
    switch (currency) {
        case 'usd':
            exchangeRate = 1;
            break;
        case 'eur':
            exchangeRate = 1 / eurRate('usd');
            break;
        case 'byn':
            exchangeRate = 2.51;
            break;
        case 'gpb':
            exchangeRate = 0.72;
            break;
        default:
            exchangeRate = 'There is no rate for this currency'
    }
    return exchangeRate;
}

function bynRate(currency) {
    exchangeRate = 0;
    switch (currency) {
        case 'byn':
            exchangeRate = 1;
            break;
        case 'usd':
            exchangeRate = 1 / usdRate('byn');
            break;
        case 'eur':
            exchangeRate = 1 / eurRate('byn');
            break;
        case 'gpb':
            exchangeRate = 0.29;
            break;
        default:
            exchangeRate = 'There is no rate for this currency'
    }
    return exchangeRate;
}

function gpbRate(currency) {
    exchangeRate = 0;
    switch (currency) {
        case 'gpb':
            exchangeRate = 1;
            break;
        case 'usd':
            exchangeRate = 1 / usdRate('gpb');
            break;
        case 'byn':
            exchangeRate = 1 / bynRate('gpb');
            break;
        case 'eur':
            exchangeRate = 1 / eurRate('gpb');;
            break;
        default:
            exchangeRate = 'There is no rate for this currency'
    }
    return exchangeRate;
}

function currencyExchangeRate(currency1, currency2) {
    switch (currency1) {
        case 'eur':
            return eurRate(currency2);
        case 'usd':
            return usdRate(currency2);
        case 'byn':
            return bynRate(currency2);
        case 'gpb':
            return gpbRate(currency2);
        default:
            exchangeRate = 'There is no rate for this currency'
    }
}

function currencyExchange(currency1, currency2, amount) {
   return amount * currencyExchangeRate(currency1, currency2);
}


console.log(currencyExchangeRate('usd', 'usd')); // 1
console.log(currencyExchangeRate('byn', 'usd')); // 0.4
console.log(currencyExchange('eur', 'usd', 100)); // 119
console.log(currencyExchange('usd', 'gpb', 100)); // 72