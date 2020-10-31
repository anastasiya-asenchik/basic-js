const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(modif = true) {
        this.modif = modif;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = "";
        let keyIndex = 0;
        for (let i = 0; i < message.length; i++) {
            if (this.alphabet.includes(message[i])) {
                let ind = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyIndex])) % this.alphabet.length;
                result += this.alphabet[ind];
                keyIndex++;
            } else {
                result += message[i];
            }
            if (keyIndex === key.length) {
                keyIndex = 0;
            }
        }
        if (this.modif === false) {
            return result.split('').reverse().join('')
        }
        return result;
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) {
            throw new Error();
        }
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        let result = "";
        let keyIndex = 0;
        for (let i = 0; i < encryptedMessage.length; i++) {
            if (this.alphabet.includes(encryptedMessage[i])) {
                let ind = (this.alphabet.indexOf(encryptedMessage[i])
                    + this.alphabet.length - this.alphabet.indexOf(key[keyIndex]))
                    % this.alphabet.length;
                result += this.alphabet[ind];
                keyIndex++;
            } else {
                result += encryptedMessage[i];
            }

            if (keyIndex === key.length) {
                keyIndex = 0;
            }
        }

        if (this.modif === false) {
            return result.split('').reverse().join('')
        }

        return result;
    }
}

module.exports = VigenereCipheringMachine;
