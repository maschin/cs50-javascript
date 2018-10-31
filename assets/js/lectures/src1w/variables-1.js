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

export function main(){
    let x, y;
    x = +prompt('Enter a x: ');
    y = +prompt('Enter a y:' );
    swap(x, y);
    alert('x is now ' + x + ' y is now ' + y);

    function swap(a, b){
        let tmp = a;
        x = b;
        y = tmp;
    }
}

