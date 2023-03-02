
////////////////////////////////////////////////


// function hash (string, arrayLength){
//     let hashedWord = 0;

//     for(let i = 0; i < string.length; i++){
//       let current = string[i].charCodeAt(0) - 96;
//       hashedWord = (hashedWord + current ) % arrayLength;
//     }
//     return hashedWord;
//   }

//   //hash('maroon',10);






class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

}



