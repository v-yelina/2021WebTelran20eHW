"use strict";

function countDepositIncrease(amount, percent, years) {
    
    return amount + amount * percent / 100 * years;
}

console.log('Через семь лет вас будет ждать:', countDepositIncrease(1000, 3.5, 7) + '€');
