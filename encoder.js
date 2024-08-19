class encoder {
    constructor(dfltshift) {
        this.defaultShift = dfltshift;
    }

    prepare(string) {
        let encoderObj = {code: [], shift: 0, shifted: false};
        for (let i = 0; i < string.length; i++) {
           encoderObj.code.push(string.charCodeAt(i)); 
        }
        return encoderObj;
    }

    encode(encoderObj, shift) {
        for (let i = 0; i < encoderObj.code.length; i++) {
            let shiftedCode = parseInt(encoderObj.code[i]) + shift;
            encoderObj.code[i] = shiftedCode;
        }
        encoderObj.shifted = true;
        encoderObj.shift = shift;
        return encoderObj;
    }

    decode(encoderObj, shift) {
        return 0;        
    }
}

let enc = new encoder();
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let prep = enc.prepare(str);
console.log(prep);
console.log("\r\r");
let enco = enc.encode(prep, 1);
console.log(enco);
