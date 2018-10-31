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
for(let i = 0; i < 3; i++){
    cough();
}

function cough(){
    document.writeln('cough');
}