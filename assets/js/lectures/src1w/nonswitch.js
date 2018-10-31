/**
 * nonswitch.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Assesses the size of user's input.
 *
 * Demonstrates use of Boolean ANDing.
 */
// ask user for an integer
let n = parseInt(prompt('Give me an integer between 1 and 10: '))
// judge user's input
if(n >= 1 && n <= 3){
    document.writeln('You picked a small number.');
}
else if(n >= 4 && n <= 6){
    document.writeln('You picked a medium number.');
}
else if(n >= 7 && n <= 10){
    document.writeln('You picked a big number.');
}
else {
    document.writeln('You picked an invalid number.');
}