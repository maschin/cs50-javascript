/**
 * conditions-1.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Tells user if his or her input is positive or negative.
 *
 * Demonstrates use of if-else if-else construct.
 */
export function main() {
    // ask user for an integer
    let n = +prompt('I\'d like an integer please: ');

    // analyze user's input
    if (n > 0) {
        alert('You picked a positive number!');
    }
    else if(n === 0){
        alert('You picked zero!');
    }
    else{
        alert('You picked a negative number!');
    }
}
