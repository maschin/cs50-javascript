/**
 * function-2.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Subtract a bit from number.
 *
 * Demonstrates use of a function (not from library) with a side effect..
 */
alert(bit_less(7));

function bit_less(a){
    let b;
    b = a - 0.5;
    return b;
}