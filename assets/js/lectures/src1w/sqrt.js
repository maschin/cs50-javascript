/** sqrt.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Prints the square root of number.
 *
 * Demonstrate use of CS50's library.
 */
export function main(){
    let x = +prompt('Enter an integer number: ')
    alert(sqr(x));
}

function sqr(a){
    return a*a;
}


