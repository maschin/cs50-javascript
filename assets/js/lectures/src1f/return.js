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
let x = 2;
document.writeln('x is now '+ x);
document.writeln('Cubing...');
x = cube(x);
document.writeln('Cubed!');
document.writeln('x is now '+ x);

// Cube argument
function cube(n){
    return n * n * n;
}