/**
 * vigenere.js
 *
 * Michael Maschinoff
 * maschinov@gmail.com
 *
 * Encrypts messages using the Caesar cipher. Retrieves the message to encrypt via user prompt.
 * ci = (pi + kj) % 26;
 *
 * Solves: http://cdn.cs50.net/2015/fall/psets/2/pset2/pset2.html#parlez_vous_fran%C3%A7ais
 */
let k = prompt('Please provide the alphabetic key: ');
if(checkTheKey(k)){
    alert('You provided an invalid key!')
}
else{
    let text = prompt('Enter a text to decrypt: ');
    vigenere(text, k);
}

/**
 *
 * @param key
 * @returns {boolean}
 */
function checkTheKey(key){
    for(let i = 0; i < key.length; i++){
        let code = key.charCodeAt(i);
        if(code < 65 || code > 122 || (code > 90 && code < 97)){
            return true;
        }
    }
}

/**
 *
 * @param text
 * @param key
 */
function vigenere(text, key){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        let char = text[i];
        if(isAlpha(char)){
            let keyChar = key[count % key.length];
            if(isUpper(keyChar)){
                document.write(String.fromCharCode(calculateNewChar(char, keyChar.charCodeAt(0) - 65)));
            }
            else if(isLower(keyChar)){
                document.write(String.fromCharCode(calculateNewChar(char, keyChar.charCodeAt(0) - 97)));

            }
            count++;
        }
        else{
            document.write(text[i]);
        }
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