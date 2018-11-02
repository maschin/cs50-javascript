/** ascii-0.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Displays the mapping between alphabetical ASCII characters and
 * their decimal equivalents.
 *
 * Demonstrates casting from int to char.
 */

export function main(){

    document.write('<pre>');

    // display mapping for uppercase letters
    for(let i = 65; i < 65 + 26; i++){
        document.writeln(String.fromCharCode(i) + ': ' + i);
    }

    document.writeln('<br/>');

    for(let i = 97; i < 97 + 26; i++){
        document.writeln(String.fromCharCode(i) + ': ' + i);
    }

    document.write('</pre>');

}