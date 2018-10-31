/**
 * conditions-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Tells user if his or her input is positive or negative.
 *
 * Demonstrates use og if-else if-else construct.
 */
// ask user for an integer
let n = +prompt('I\'d like an integer please: ');

// analyze user's input
if (n > 0) {
    document.writeln('You picked a positive number!');
}
else if(n === 0){
    document.writeln('You picked zero!');
}
else{
    document.writeln('You picked a negative number!');
}