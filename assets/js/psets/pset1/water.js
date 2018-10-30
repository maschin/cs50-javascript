'use strict'
/**
 * water.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Program that prompts the user for the length of his or her shower in minutes (as a positive integer) and
 * then prints the equivalent number of bottles of water (as an integer).
 *
 * Solves: http://cdn.cs50.net/2015/fall/psets/1/pset1/pset1.html#smart_water
 */

function calculateWater(min){
    let bottles;
    bottles = 6 * min * 2;
    return bottles;
};

let minutes = +prompt('How long do you take a shower? In minutes: ');

alert(calculateWater(minutes));