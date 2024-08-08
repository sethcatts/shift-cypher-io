class encoder {
    constructor(dfltshift) {
        this.defaultShift = dfltshift;
    }

    encode(string, shift=this.defaultShift) {
        let encodedString = "";
        for (let i = 0; i < string.length; i++) {
            let code = string.charCodeAt(i);
            code = parseInt(code) + shift;
            let codeLen = code.length;
            //if code is greater than 127, loop around 
            if (code > 127) {
                code = code - 127;
            } else if (code < 0) {
                code = 0 + code;
            }
            encodedString += " " + String.fromCharCode(code);
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

console.log(enc.encode("ABC", 1));
console.log(enc.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2));
console.log(enc.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3));


console.assert(enc.encode("A", 1) == "B", "Did not return correct char for args A and 1");
console.assert(enc.encode("B", -1) == "A", "Did not return correct char for args B and -1");

//Tests
/**
 * 
 */