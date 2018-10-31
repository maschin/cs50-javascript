/**
 * conditions-2.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Compare two numbers
 *
 * Demonstrates the if-else if-else condition
 */
export function main() {
    let x, y;
    x = +prompt('Please enter x: ');
    y = +prompt('Please enter y: ');

    if(x < y){
        alert(x + ' is less than ' + y);
    }
    else if(x > y){
        alert(x + ' is greater than ' + y);
    }
    else{
        alert(x + ' is equal yo ' + y);
    }
}

