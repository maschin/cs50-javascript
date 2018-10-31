/**
 * variables-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Swap values of 2 variables.
 *
 * Demonstrates the variables.
 */
let x = 1, y = 2;
swap(x, y);
document.writeln('x is ' + x);
document.writeln('y is ' + y);

function swap(a, b){
    let tmp = a;
    x = b;
    y = tmp;
}