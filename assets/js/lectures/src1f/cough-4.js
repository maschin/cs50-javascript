/**
 * cough-4.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Coughs three times and sneezes three times.
 *
 * Demonstrates further abstraction.
 */

cough(3);
sneeze(3);

/**
 * Cough n times
 */
function cough(n){
    say('cough', n);
}

/**
 * Sneeze n times
 *
 */
function sneeze(n){
    say('achoo')
}

/**
 * Say word n times
 */
function say(word, n){
    for(let i = 0; i < n; i++){
        document.writeln(word);
    }
}

