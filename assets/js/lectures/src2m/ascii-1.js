/** ascii-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Displays the mapping between alphabetical ASCII characters and
 * their decimal equivalents.
 *
 * Demonstrates casting from char to int.
 */

export function main(){

    document.write('<pre>');

    // display mapping for uppercase letters
    for(let c = 'A'.charCodeAt(0); c <= 'Z'.charCodeAt(0); c++){
        document.writeln(c + ': ' + String.fromCharCode(c));
    }

    document.writeln('<br/>');

    for(let c = 'a'.charCodeAt(0); c < 'z'.charCodeAt(0); c++) {
        document.writeln(c + ': ' + String.fromCharCode(c));
    }

    document.write('</pre');
}