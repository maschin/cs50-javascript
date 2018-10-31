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

export function main(){
    // say hello to someone by name
    let s = prompt('Your name: ');
    printName(s);
}


function printName(name){
    alert('hello, '+ name +'!');
}