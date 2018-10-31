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
export function main(){
    let x = +prompt('Enter an integer: ');
    alert('x is now '+ x);
    alert('Cubing...');
    x = cube(x);
    alert('Cubed!');
    alert('x is now '+ x);
}

// Cube argument
function cube(n){
    return n * n * n;
}