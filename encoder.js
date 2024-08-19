class encoder {
    constructor(dfltshift) {
        this.defaultShift = dfltshift;
    }

    prepare(string) {
        let encoderObj = {code: [], shift: 0};
        for (let i = 0; i < string.length; i++) {
           encoderOjb.code.push(string.charCodeAt(i); 
        }
        return encoderObj;
    }

    encode(string, shift=this.defaultShift) {
        let encodedString = "";
        for (let i = 0; i < string.length; i++) {
            let code = string.charCodeAt(i);
            code = parseInt(code) + shift;
        }
        return encodedString.trim();
    }

    decode(string, shift=this.defaultShift) {
        let encodedString = "";
        for (let i = 0; i < string.length; i++) {
            let code = string.charCodeAt(i);
            code = parseInt(code) + shift;
            let codeLen = code.length;
            if (code > 127) {
                code = code - 127;
            } else if (code < 0) {
                code = 0 + code;
            }
            encodedString += " " + String.fromCharCode(code);
        }
        return encodedString.trim()
    }
}

let enc = new encoder();
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let encodedString = enc.encode(string, 2);
console.log(encodedString);


