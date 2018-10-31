/**
 * switch-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Assesses the size of user's input.
 *
 * Demonstrate use of a switch.
 */

// ask user for an integer
let n = +prompt('Give me an integer between 1 and 10: ');

// judge user's input
switch(n){
    case 1:
    case 2:
    case 3:
        document.writeln('You picked a small number.');
        break;
    case 4:
    case 5:
    case 6:
        document.writeln('You picked a medium number.');
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        document.writeln('You picked a big number.');
        break;
    default:
        document.writeln('Your picked an invalid number.');
        break;
}