// Simple hash example for strings
function hash(key, arrayLen){
    let total = 0;

    for(let char of key){
        // map "a" to 1, "b" to 2, "c" to 3
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }

    return total;
}

// More improvement on code
function hashMore(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;

    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// console.log(hashMore("hello", 13));


// A Hash table class 
class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;

        for(let i= 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key, value){
        let index = this._hash(key);

        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i];
                }
            }
        }
        return undefined;
    }

    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
    }

    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
    }

}

let ht = new HashTable();
console.log(ht.set("maroon", "#800000"));
console.log(ht.set("yellow", "#FFFF00"));
console.log(ht.set("olive", "#808000"));
console.log(ht.set("salmon", "#FA8072"));
console.log(ht.set("lightcoral", "#F08080"));
console.log(ht.set("mediumvioletred", "#C71585"));
console.log(ht.set("plum", "#DDA0DD"));