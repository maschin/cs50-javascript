/**
 * f2c.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Converts Fahrenheit to Celsius.
 *
 * Demonstrates arithmetic.
 */
// ask user for temperature in Fahrenheit
let f = prompt('Temperature in F: ');
// convert F to C
let c = 5.0 / 9.0 * (f - 32.0)

// display result to one decimal place
document.writeln(parseFloat(c).toFixed(2));