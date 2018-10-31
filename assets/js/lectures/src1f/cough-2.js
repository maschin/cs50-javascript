/**
 * cough-2.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Coughs three times.
 *
 * Demonstrates abstraction and hierarchical decomposition.
 */

export function main(){
    for(let i = 0; i < 3; i++){
        cough();
    }
}

function cough(){
    alert('cough');
}