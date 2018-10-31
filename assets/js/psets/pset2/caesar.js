/**
 * caesar.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Encrypts messages using the Caesar cipher. Retrieves the message to encrypt via user prompt.
 * ci = (pi + k) % 26;
 *
 * Solves: http://cdn.cs50.net/2015/fall/psets/2/pset2/pset2.html#hail_caesar
 */
let k = +prompt('Please provide the key: ');
if(checkTheKey(k)){
    alert('You provided an invalid key!')
}
else{
    let text = prompt('Enter a text to crypt: ');
    caesar(text, k);
}

/**
 *
 * @param key
 * @returns {boolean}
 */
function checkTheKey(key){
    if(!key || k < 0){
        return true
    }
    else{
        return false;
    }
}

/**
 *
 * @param text
 * @param key
 */
function caesar(text, key) {
    for(let i = 0; i < text.length; i++){
        document.write(String.fromCharCode(calculateNewChar(text[i], key)));
    }
}

/**
 *
 * @param char
 * @param key
 * @returns {number}
 */
function calculateNewChar(char, key){
    let code = char.charCodeAt(0);
    if(isAlpha(char))
    {
        if(isUpper(char)){
            return ((code - 65 + key) % 26 + 65);//91
        }
        else if(isLower(char)){
            return ((code - 97 + key ) % 26 + 97);//123
        }
    }
    else{
        return char.charCodeAt(0);
    }
}