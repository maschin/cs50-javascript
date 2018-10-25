'use strict'

/**
 * Lecture #
 */

//document.write('hello world!\n');

// while(true)
// {
//     document.write('hello, world\n');
// }

// for (let i = 0; i < 10; i++) {
//     document.write('hello world!\n');
// }

// let counter = 0;
// while(true)
// {
//     document.write(counter);
//     counter++;
// }

// let x, y;
// x = prompt('Enter x');
// y = prompt('Enter y');
//
// if(x < y){
//     alert(x + ' is less than ' + y);
// }
// else if(x > y){
//     alert(x + ' is greater than ' + y);
// }
// else{
//     alert(x + ' is equal yo ' + y);
// }

/**
 * Lecture #
 */

// let age = 18;
// if(age > 18){
//     document.write('Access granted');
// }
// else{
//     document.write('Access denied');
// }

// let n = 50;
// switch(n){
//     case 50:
//         document.write("CS50 is Introduction to Computer Science");
//         break;
//     case 51:
//         document.write("CS50 is Introduction to Computer Science II");
//         break
//     default:
//         document.write("Sorry, I'm not familiar with that class!")
//         break;
// }

// for(let dwarves = 0; dwarves < 7; dwarves++){
//     document.write('I\'m here to help you!\n');
// }

// function sqr(a){
//     return a*a;
// }
//
// alert(sqr(5));

// function bit_less(a){
//     let b;
//     b = a - 0.5;
//     return b;
// }
//
// alert(bit_less(7));

// function sayHello() {
//     alert('hello, everyone!');
// }

// sayHello();
// alert(sqr(5));

/**
 * Pset I
 */
/**
 * Water calculator
 */

// function calculateWater(min){
//     let bottles;
//     bottles = 6 * min * 2;
//     return bottles;
// };
// let minutes = prompt('How long do you take a shower? In minutes.');
// alert(calculateWater(minutes));

/**
 * Mario
 */
//
// let height;
// do {
//     height = +prompt('Enter positive integer number between 0 and 23');
// }
// while(height >= 23 || height < 1){
//     document.writeln('Thank you for the valid integer!\Here is Mario\'s half-pyramid of height ' + height);
//     let col = height + 1;
//     for(height; height > 0; height--){
//         let line = '';
//         for(let width = 0; width < col; width++){
//             if(width < height - 1){
//                 line += ' ';
//             }
//             else{
//                 line += '#';
//             }
//         }
//         document.writeln(line);
//     }
// }

/**
 * Coins change counter
 */
// let change;
// do{
//     change = parseFloat(prompt('O hai! How much change is owned?'));
// }
// while(!change || change <= 0)
// {
//     let penny, nickel, dime, quarter;
//     let cents = change * 100;
//
//     quarter = parseInt(cents / 25);
//     cents -= quarter * 25;
//     dime = parseInt(cents / 10);
//     cents -= dime * 10;
//     nickel = parseInt(cents / 5);
//     penny = cents - (nickel * 5);
//
//     document.writeln('You need quarters: '+ quarter);
//     document.writeln('You need dime: '+ dime);
//     document.writeln('You need nickel: '+ nickel);
//     document.writeln('You need penny: '+ penny);
// }

    //Bug with 1.12 value
let change;
do{
    change = parseFloat(prompt('O hai! How much change is owned?'));
}
while(!change || change <= 0)
{
    const coins = [25, 10, 5, 1];
    let result = {};
    let cents = change * 100;

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

    console.log(result);
}