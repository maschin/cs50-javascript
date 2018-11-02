/** buggy-0.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Should print 10 asterisks but doesn't!
 * Can you find the bug?
 */

export function main(){
    for(let i = 0; i <= 10; i++){
        document.write('*');
    }
}