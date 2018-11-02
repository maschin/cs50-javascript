/** string-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Prints a string, one character per line.
 *
 * Demonstrates error checking.
 */

export function main(){

    // get line of text
    let s = prompt('Please provide a string: ');

    // print string, one character per line
    if(s.length > 0){
        for(let i = 0; i < s.length; i++){
            document.write(s[i] + '</br>');
        }
    }
    else{
        alert('You didn\'t enter any char!');
    }
}