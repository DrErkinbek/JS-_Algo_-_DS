// Example #1
// Write a function which takes two 
// numbers and return their sum.

function sum(a, b){
    return a + b;
}

console.log(sum(10, 17))

// Example #2
// Write a function which takes in 
// a string and returns count of each character
// in the string

function charCount(str){
    // do something
    // return an object
}

function charCount(str){
    // make object to return at end
    var result = {};
    // loop over string, for each character
    for(var i = 0; i < str.length; i++ ){
        var char = str[i].toLowerCase()

        if(result[char] > 0){
            result[char]++;

            // if the character is number/letter 
            // and is a key in object,
            // add one to count
        } else {
            result[char] = 1;
        };
    }

    // return the object
    return result;
}

console.log(charCount("hello"))
console.log(charCount("Hi there"))

// The simplified version
function charCounter(str){
    var obj = {};

    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();

        if(/[a-z0-9]/.test(char)){
            if (obj[char] > 0){
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
}

// Refactored version
function charCounter(str){
    var obj = {};
    for(var char of str){
        char = char.toLowerCase();

        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}