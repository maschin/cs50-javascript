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
// ask user for an integer
let n = +prompt('I\'d like an integer please: ');
// analyze user's input (somewhat inaccurately)
if(n > 0) {
    document.writeln('You picked a positive number!');
}
else{
    document.writeln('You picked a negative number!');
}