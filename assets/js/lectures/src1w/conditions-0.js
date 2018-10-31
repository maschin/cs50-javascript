/**
 * conditions-0.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Tells user if his or her input is positive or negative (somewhat inaccurately).
 *
 * Demonstrates use of if-else construct.
 */
export function main() {
    // ask user for an integer
    let n = +prompt('I\'d like an integer please: ');
// analyze user's input (somewhat inaccurately)
    if(n > 0) {
        alert('You picked a positive number!');
    }
    else{
        alert('You picked a negative number!');
    }
}
