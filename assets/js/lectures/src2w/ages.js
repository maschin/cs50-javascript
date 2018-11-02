/** ages.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Ages people by a year.
 *
 * Demonstrates arrays.
 */

export function main(){

    // determine number of people
    let n;
    do
    {
        n = +prompt('Number of people in room: ');
    }
    while (!n || n < 1);

    // declare array in which to store everyone's age
    let ages = [];

    // get everyone's age
    for (let i = 0; i < n; i++)
    {
        ages.push(+prompt('Age of person ' + (i+1) + ' :'));
    }

    // report everyone's age a year hence
    document.write('Time passes...<br>');
    console.log(ages);
    for (let i = 0; i < n; i++)
    {
        document.write('A year from now, person '+ (i+1) +' will be '+ ages[i] +' years old.</br>');
    }

}