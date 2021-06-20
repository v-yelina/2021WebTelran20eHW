'use strict;'

/* Конвертер валют
Реализовать метод, который принимает название валюты (например, “EUR”,”RUR”,”USD”,”GPB”) и выдает курс к доллару. Естественно, “USD” возвращает 1.0 .
Используя метод из предыдущего пункта написать метод, который принимает пару валют (“GPB”,”EUR”) и возвращает курс обмена.
Используя метод из предыдущего пункта реализовать метод который получает пару валют и сумму в первой валюте, возвращает сумму во второй валюте. */

function currencyExchangeRate(currency1, currency2) {
    exchangeRate = 0;
    if (currency1 === currency2) {
        exchangeRate = 1;
    } else {
        if (currency1 === 'eur') {
            if (currency2 === 'usd') {
                exchangeRate = 1.19;
            } else if (currency2 === 'byn') {
                exchangeRate = 2.98;
            } else if (currency2 === 'gpb') {
                exchangeRate = 0.86;
            } else {
                exchangeRate = 'There is no rate for this currency'
            } 
        } else if (currency1 === 'usd') {
            if (currency2 === 'eur') {
                exchangeRate = 0.84;
            } else if (currency2 === 'byn') {
                exchangeRate = 2.51;
            } else if (currency2 === 'gpb') {
                exchangeRate = 0.72;
            } else {
                exchangeRate = 'There is no rate for this currency'
            }
        } else if (currency1 === 'byn') {
            if (currency2 === 'eur') {
                exchangeRate = 0.34;
            } else if (currency2 === 'usd') {
                exchangeRate = 0.40
            } else if (currency2 === 'gpb') {
                exchangeRate = 0.29;
            } else {
                exchangeRate = 'There is no rate for this currency'
            }
        } else if (currency1 === 'gpb') {
            if (currency2 === 'eur') {
                exchangeRate = 1.16;
            } else if (currency2 === 'byn') {
                exchangeRate = 3.47;
            } else if (currency2 === 'usd') {
                exchangeRate = 1.38;
            } else {
                exchangeRate = 'There is no rate for this currency'
            }
        } else {
            exchangeRate = 'There is no rate for this currency'
        }
    }
    return exchangeRate;
}

function currencyExchange(currency1, currency2, amount) {
    finalAmount = 0;
    if (currency1 === currency2) {
        finalAmount = amount;
    } else {
        if (currency1 === 'eur') {
            if (currency2 === 'usd') {
                finalAmount = amount * currencyExchangeRate('eur', 'usd');
            } else if (currency2 === 'byn') {
                finalAmount = amount * currencyExchangeRate('eur', 'byn');
            } else if (currency2 === 'gpb') {
                finalAmount = amount * currencyExchangeRate('eur', 'gpb');
            } else {
                finalAmount = 'There is no rate for this currency'
            } 
        } else if (currency1 === 'usd') {
            if (currency2 === 'eur') {
                finalAmount = amount * currencyExchangeRate('usd', 'eur');
            } else if (currency2 === 'byn') {
                finalAmount = amount * currencyExchangeRate('usd', 'byn');
            } else if (currency2 === 'gpb') {
                finalAmount = amount * currencyExchangeRate('usd', 'gpb');
            } else {
                finalAmount = 'There is no rate for this currency'
            }
        } else if (currency1 === 'byn') {
            if (currency2 === 'eur') {
                finalAmount = amount * currencyExchangeRate('byn', 'eur');
            } else if (currency2 === 'usd') {
                finalAmount = amount * currencyExchangeRate('byn', 'usd');
            } else if (currency2 === 'gpb') {
                finalAmount = amount * currencyExchangeRate('byn', 'gpb');
            } else {
                finalAmount = 'There is no rate for this currency'
            }
        } else if (currency1 === 'gpb') {
            if (currency2 === 'eur') {
                finalAmount = amount * currencyExchangeRate('gpb', 'eur');
            } else if (currency2 === 'byn') {
                finalAmount = amount * currencyExchangeRate('gpb', 'byn');
            } else if (currency2 === 'usd') {
                finalAmount = amount * currencyExchangeRate('gpb', 'usd');
            } else {
                finalAmount = 'There is no rate for this currency'
            }
        } else {
            finalAmount = 'There is no rate for this currency'
        }
    }
    return finalAmount;
}


console.log(currencyExchangeRate('usd', 'usd')); // 1
console.log(currencyExchangeRate('byn', 'usd')); // 0.4
console.log(currencyExchange('eur', 'usd', 100)); // 119
console.log(currencyExchange('usd', 'gpb', 100)); // 72