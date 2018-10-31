/**
 * cough-3.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Coughs three times.
 *
 * Demonstrates parameterization.
 *
 */
cough(3);

function cough(n){
    for(let i = 0; i < n; i++) {
        document.writeln('cough');
    }
}