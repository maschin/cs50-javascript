'use strict'
/**
 * greedy.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Asks the user how much change is owed (in $) and prints the minimum number of coins with which said change can be made.
 *
 * Solves: http://cdn.cs50.net/2015/fall/psets/1/pset1/pset1.html#time_for_change
 */

let change;

do{
    change = parseFloat(prompt('O hai! How much change is owned?'));
}
while(!change || change <= 0)
{
    let penny, nickel, dime, quarter;
    let cents = change * 100;

    quarter = parseInt(cents / 25);
    cents -= quarter * 25;
    dime = parseInt(cents / 10);
    cents -= dime * 10;
    nickel = parseInt(cents / 5);
    penny = cents - (nickel * 5);

    document.writeln('You need quarters: '+ quarter);
    document.writeln('You need dime: '+ dime);
    document.writeln('You need nickel: '+ nickel);
    document.writeln('You need penny: '+ penny);
}