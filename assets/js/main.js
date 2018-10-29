'use strict'

/**
 * Lecture #1 Wednesday
 */

/** adder.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Adds two numbers.
 *
 * Demonstrate use of CS50's library.
 */

// // ask user for input
// let x = +prompt('Give me an integer');
// let y = +prompt('Give me another integer');
// let sum = x+y;
//
// // do the math
// document.writeln('The sum of '+ x +' and '+ y +' is '+ sum +'!');


/**
 * conditions-0.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Tells user if his or her input is positive or negative (somewhat inaccurately).
 *
 * Demonstrates use og if-else construct.
 */
// // ask user for an integer
// let n = +prompt('I\'d like an integer please: ');
// // analyze user's input (somewhat inaccurately)
// if(n > 0) {
//     document.writeln('You picked a positive number!');
// }
// else{
//     document.writeln('You picked a negative number!');
// }

/**
 * conditions-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Tells user if his or her input is positive or negative.
 *
 * Demonstrates use og if-else if-else construct.
 */
// // ask user for an integer
// let n = +prompt('I\'d like an integer please: ');
//
// // analyze user's input
// if (n > 0) {
//     document.writeln('You picked a positive number!');
// }
// else if(n === 0){
//     document.writeln('You picked zero!');
// }
// else{
//     document.writeln('You picked a negative number!');
// }

/**
 * hello-0.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Says hello to the world.
 *
 * Demonstrates use of document.write
 */
//document.write('hello, world!\n');

/**
 * hello-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Says hello to just Mike.
 *
 * Demonstrates use of document.writeln
 */
// let name = 'Mike';
// document.writeln('hello, '+ name  +'!');

/**
 * hello-2.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Says hello to whomever.
 *
 * Demonstrates use of document.writeln
 */
// let name = prompt('State your name: ');
// document.writeln('hello, '+ name +'!');

/**
 * imprecision.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Divides one floating-point value by another.
 *
 * Demonstrate imprecision of floating-point values.
 */

// let imprecision = 1.0 / 10.0;
// document.writeln(imprecision);

/**
 * nonswitch.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Assesses the size of user's input.
 *
 * Demonstrates use of Boolean ANDing.
 */
// // ask user for an integer
// let n = parseInt(prompt('Give me an integer between 1 and 10: '))
// // judge user's input
// if(n >= 1 && n <= 3){
//     document.writeln('You picked a small number.');
// }
// else if(n >= 4 && n <= 6){
//     document.writeln('You picked a medium number.');
// }
// else if(n >= 7 && n <= 10){
//     document.writeln('You picked a big number.');
// }
// else {
//     document.writeln('You picked an invalid number.');
// }

/**
 * Lecture #1 Friday
 */


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
// let change;
// do{
//     change = parseFloat(window.prompt('O hai! How much change is owned?'));
// }
// while(!change || change <= 0)
// {
//     const coins = [25, 10, 5, 1];
//     let result = {};
//     let cents = parseInt(change * 100);
//
//     coins.forEach(coin => {
//        result[coin] = 0;
//     });
//
//     document.writeln('We need to give a change for: $' + change + ' all we have are $' + coins.join(', $') + ' set of coins.');
//
//     while(cents > 0){
//         for (let val in coins){
//             if(cents >= coins[val]){
//                result[coins[val]]++;
//                cents -= coins[val];
//                break;
//             }
//         }
//     }
//
//     document.writeln('You need next set of coins for change:');
//     for(let key in result){
//         if(result.hasOwnProperty(key)){
//             document.writeln(key + ' = ' + result[key]);
//         }
//     }
// }