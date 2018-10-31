'use strict'
/**
 * mario.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Prints Mario's half-pyramid of hashes of user-inputted height >= 1 and <= 23.
 *
 * Solves: http://cdn.cs50.net/2015/fall/psets/1/pset1/pset1.html#itsa_mario
 */

let height;

do {
    height = +prompt('Enter positive integer number between 0 and 23');
}
while(height >= 23 || height < 1){
    document.writeln('Thank you for the valid integer!\Here is Mario\'s half-pyramid of height ' + height);
    let col = height + 1;
    for(height; height > 0; height--){
        let line = '';
        for(let width = 0; width < col; width++){
            if(width < height - 1){
                line += ' ';
            }
            else{
                line += '#';
            }
        }
        document.writeln(line);
    }
}