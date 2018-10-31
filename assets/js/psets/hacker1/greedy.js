'use strict'
/**
 * greedy.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Asks the user how much change is owed (in $) and prints the minimum number of coins with which said change can be made.
 * The set of coins could be change in coins array
 *
 */

let change;
do{
    change = parseFloat(window.prompt('O hai! How much change is owned?'));
}
while(!change || change <= 0)
{
    const coins = [25, 10, 5, 1];
    let result = {};
    let cents = parseInt(change * 100);

    coins.forEach(coin => {
       result[coin] = 0;
    });

    document.writeln('We need to give a change for: $' + change + ' all we have are $' + coins.join(', $') + ' set of coins.');

    while(cents > 0){
        for (let val in coins){
            if(cents >= coins[val]){
               result[coins[val]]++;
               cents -= coins[val];
               break;
            }
        }
    }

    document.writeln('You need next set of coins for change:');
    for(let key in result){
        if(result.hasOwnProperty(key)){
            document.writeln(key + ' = ' + result[key]);
        }
    }
}