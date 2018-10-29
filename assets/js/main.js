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

/**
 * cough-0.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Coughs three times.
 *
 * Demonstrates suboptimal design (and coughing).
 */
// document.writeln('cough');
// document.writeln('cough');
// document.writeln('cough');

/**
 * cough-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Coughs three times.
 *
 * Demonstrates better design via a loop.
 */
// //cough three times
// for(let i = 0; i < 3; i++){
//     document.writeln('cough');
// }

/**
 * cough-2.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Coughs three times.
 *
 * Demonstrates abstraction and hierarchical decomposition.
 */
// for(let i = 0; i < 3; i++){
//     cough();
// }
//
// function cough(){
//     document.writeln('cough');
// }

/**
 * cough-3.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Coughs three times.
 *
 * Demonstrates parameterization.
 *
 */
// cough(3);
//
// function cough(n){
//     for(let i = 0; i < n; i++) {
//         document.writeln('cough');
//     }
// }

/**
 * cough-4.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Coughs three times and sneezes three times.
 *
 * Demonstrates further abstraction.
 */
// cough(3);
// sneeze(3);

/**
 * Cough n times
 */
// function cough(n){
//     say('cough', n);
// }

/**
 * Say word n times
 */
// function say(word, n){
//     for(let i = 0; i < n; i++){
//         document.writeln(word);
//     }
// }

/**
 * Sneeze n times
 *
 */
// function sneeze(n){
//     say('achoo')
// }

/**
 * f2c.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Converts Fahrenheit to Celsius.
 *
 * Demonstrates arithmetic.
 */
// // ask user for temperature in Fahrenheit
// let f = prompt('Temperature in F: ');
// // convert F to C
// let c = 5.0 / 9.0 * (f - 32.0)
//
// // display result to one decimal place
// document.writeln(parseFloat(c).toFixed(2));

/**
 * function-0.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Print user's name.
 *
 * Demonstrates a function (not from a library) with a side effect.
 */
// let s = prompt('Your name: ');
// printName(s);
// // say hello to someone by name
// function printName(name){
//     document.writeln('hello, '+ name +'!');
// }

/**
 * function-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Demands that user provide a positive integer.
 *
 * Demonstrates use of a function (not from library) with a return value.
 */
// let n = getPositiveInt();
// document.writeln('Thanks for the '+ n + '!');
//
// function getPositiveInt(){
//     let n;
//     do {
//         n = +prompt('Please give me a positive int: ');
//     }
//     while (!n || n < 1);
//     return n;
// }

/**
 * return.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Cubes a variable.
 *
 * Demonstrates use of parameter and return value.
 */
// let x = 2;
// document.writeln('x is now '+ x);
// document.writeln('Cubing...');
// x = cube(x);
// document.writeln('Cubed!');
// document.writeln('x is now '+ x);
//
// // Cube argument
// function cube(n){
//     return n * n * n;
// }

/**
 * switch.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Assesses the size of user's input.
 *
 * Demonstrate use of a switch.
 */

// // ask user for an integer
// let n = +prompt('Give me an integer between 1 and 10: ');
//
// // judge user's input
// switch(n){
//     case 1:
//     case 2:
//     case 3:
//         document.writeln('You picked a small number.');
//         break;
//     case 4:
//     case 5:
//     case 6:
//         document.writeln('You picked a medium number.');
//         break;
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         document.writeln('You picked a big number.');
//         break;
//     default:
//         document.writeln('Your picked an invalid number.');
//         break;
// }

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

// let x = 1, y = 2;
// swap(x, y);
// document.writeln('x is ' + x);
// document.writeln('y is ' + y);
//
// function swap(a, b){
//     let tmp = a;
//     x = b;
//     y = tmp;
// }


// let pi = 2;
// let k = 13;
// // caesar
// let ci = (pi + k) % 26;
// document.writeln(ci);
// // vigener
// let ci = (pi + kj) % 26;
// function rot(msg, key){
//
// }
//
// function rot13(msg){
//     return rot(msg, 13);
// }

/**
 * Pset II
 */

// Caesar
// let k = +prompt('Please provide the key: ');
// if(checkTheKey(k)){
//     alert('You provided an invalid key!')
// }
// else{
//     let text = prompt('Enter a text to crypt: ');
//     caesar(text, k);
// }
//
// function checkTheKey(key){
//     if(!key || k < 0){
//         return true
//     }
//     else{
//         return false;
//     }
// }

function caesar(text, key) {
    for(let i = 0; i < text.length; i++){
        document.write(String.fromCharCode(calculateNewChar(text[i], key)));
    }
}
//let text = 'uggc://jjj.lbhghor.pbz/jngpu?i=bUt5FWLEUN0.';



//vigenere.js
// let k = prompt('Please provide the alphabetic key: ');
// if(checkTheKey(k)){
//     alert('You provided an invalid key!')
// }
// else{
//     let text = prompt('Enter a text to crypt: ');
//     vigenere(text, k);
// }

function checkTheKey(key){
    for(let i = 0; i < key.length; i++){
        let code = key.charCodeAt(i);
        if(code < 65 || code > 122 || (code > 90 && code < 97)){
            return true;
        }
    }
}

function vigenere(text, key){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        let char = text[i];
        if(isAlpha(char)){
            let keyChar = key[count % key.length];
            if(isUpper(keyChar)){
                document.write(String.fromCharCode(calculateNewChar(char, keyChar.charCodeAt(0) - 65)));
            }
            else if(isLower(keyChar)){
                document.write(String.fromCharCode(calculateNewChar(char, keyChar.charCodeAt(0) - 97)));

            }
            count++;
        }
        else{
            document.write(text[i]);
        }
    }
}

//let text = 'Negh zf av huf pcfx bt gzrwep oz'
let text = 'Negh zf av huf pcfx bt gzrwep oz';
// MeeZ me at Zhe paXk at eleven am
let key = 'bacon';
deVigenere(text, key);
function deVigenere(text, key){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        let char = text[i];
        if(isAlpha(char)){
            let keyChar = key[count % key.length];
            if(isUpper(keyChar)){
                document.write(String.fromCharCode(calculateNewCharDe(char, keyChar.charCodeAt(0) - 65)));
            }
            else if(isLower(keyChar)){
                document.write(String.fromCharCode(calculateNewCharDe(char, keyChar.charCodeAt(0) - 97)));//83//109

            }
            count++;
        }
        else{
            document.write(text[i]);
        }
    }
}

function isAlpha(char){
    let code = char.charCodeAt(0);
    if(code >= 65 && code <= 90 || code >= 97 && code <= 122){
        return true;
    }
    else{
        return false;
    }
}


function isUpper(char){
    //if(code >= 65 && code <= 90)
    return char === char.toUpperCase();
}

function isLower(char){
    //if(code >= 97 && code <= 122);
    return char === char.toLowerCase();
}

function calculateNewChar(char, key){
    let code = char.charCodeAt(0);
    if(isAlpha(char))
    {
        if(isUpper(char)){
            return ((code - 65 + key) % 26 + 65);//91
        }
        else if(isLower(char)){
            return ((code - 97 + key ) % 26 + 97);//123
        }
    }
    else{
        return char.charCodeAt(0);
    }
}

function calculateNewCharDe(char, key){
    let code = char.charCodeAt(0);
    if(isAlpha(char))
    {
        if(isUpper(char)){
            return ((code - 65 - key) % 26 + 65);//91
        }
        else if(isLower(char)){
            return ((code - 97 - key ) % 26 + 97);//123
        }
    }
    else{
        return char.charCodeAt(0);
    }
}




