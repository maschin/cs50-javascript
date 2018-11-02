/**
 * asciimath.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Calculates the addition of a char and an integer,
 * and displays both the resultant character and its
 * ASCII value.
 */

export function main()
{
    let key = +prompt('Enter the key: ');

    if (!key || key < 1)
    {
        alert('print the key next time ');
    }

    let letter = 'A'.charCodeAt(0);
    document.write('The ASCII value of A is ' + letter + '</br>');

    document.write('Calculating '+ letter + ' + ' + key + ' ...<br>');

    let result = (letter + key);

    document.write('The ASCII value of ' + String.fromCharCode(result) + ' is ' + result);
}