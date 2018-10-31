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
let s = prompt('Your name: ');
printName(s);
// say hello to someone by name
function printName(name){
    document.writeln('hello, '+ name +'!');
}