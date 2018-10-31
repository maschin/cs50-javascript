/** adder.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Adds two numbers.
 *
 * Demonstrate use of CS50's library.
 */

// ask user for input
let x = +prompt('Give me an integer');
let y = +prompt('Give me another integer');
let sum = x+y;

// do the math
document.writeln('The sum of '+ x +' and '+ y +' is '+ sum +'!');