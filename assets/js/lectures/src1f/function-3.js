/**
 * function-3.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Demands that user provide a positive integer.
 *
 * Demonstrates use of a function (not from library) with a return value.
 */

export function main(){
    let n = getPositiveInt();
    alert('Thanks for the '+ n + '!');
}

function getPositiveInt(){
    let n;
    do {
        n = +prompt('Please give me a positive int: ');
    }
    while (!n || n < 1);
    return n;
}