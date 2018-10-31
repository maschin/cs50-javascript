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
export function main() {
    cough(3);
}

function cough(n){
    for(let i = 0; i < n; i++) {
        alert('cough');
    }
}
