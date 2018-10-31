/**
 * conditions-3.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Access by the age
 *
 * Demonstrates the if-else condition
 */
export function main() {
    let age;
    age = +prompt('Please enter your age: ');
    if(age > 18){
        alert('Access granted');
    }
    else{
        alert('Access denied');
    }
}