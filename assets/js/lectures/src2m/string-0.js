/** string-0.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Prints a string, one character per line.
 *
 * Demonstrates strings as arrays of chars and use of length.
 */

export function main(){

    // get line of text
    let s = prompt('Please provide a string: ');

    // print string, one character per line
    for(let i = 0; i < s.length; i++){
        document.write(s[i] + '</br>');
    }

}