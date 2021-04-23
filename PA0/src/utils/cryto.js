export function encrypt(key, plainText) {
    let pt="";
    for (let i = 0; i < plainText.length; i++) {
        if (plainText[i] <= 'Z' && plainText[i] >= 'A') {
            pt+=String.fromCharCode(('A').charCodeAt(0) + ((plainText[i].charCodeAt(0) - ('A').charCodeAt(0)) + key) % 26);
        }
        else if (plainText[i] <= 'z' && plainText[i] >= 'a') {
            pt+=String.fromCharCode(('a').charCodeAt(0) + ((plainText[i].charCodeAt(0) - ('a').charCodeAt(0)) + key) % 26);
        }
        else{
            pt+=plainText[i];
        }
    }
    return pt
}
export function decrypt(key, cipherText) {
    let ct="";
    console.log(key);
    for (let i = 0; i < cipherText.length; i++) {
        if (cipherText[i] <= 'Z' && cipherText[i] >= 'A') {
            ct+=String.fromCharCode(('A').charCodeAt(0) + ((cipherText[i].charCodeAt(0) - ('A').charCodeAt(0)) - key+26) % 26);
        }
        else if (cipherText[i] <= 'z' && cipherText[i] >= 'a') {
            ct+=String.fromCharCode(('a').charCodeAt(0) + ((cipherText[i].charCodeAt(0) - ('a').charCodeAt(0)) - key+26) % 26);
        }
        else{
            ct+=cipherText[i];
        }
    }
    return ct;
}