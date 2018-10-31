/** adder.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Library of functions for Psets.
 *
 * For CS50's library.
 */

export function isAlpha(char){
    let code = char.charCodeAt(0);
    if(code >= 65 && code <= 90 || code >= 97 && code <= 122){
        return true;
    }
    else{
        return false;
    }
}

export function isUpper(char){
    //if(code >= 65 && code <= 90)
    return char === char.toUpperCase();
}

export function isLower(char){
    //if(code >= 97 && code <= 122);
    return char === char.toLowerCase();
}