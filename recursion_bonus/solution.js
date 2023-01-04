/* Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the 
first letter of each string in the array.  
Input ["car", "taco", "banana"]
Output ["Car", "Taco", "Banana"] */

function capitalizeFirst (array){
    if(array.length === 1){
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0];
}

console.log(capitalizeFirst(["car", "taco", "banana"]));

/*
Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object 
which may contain nested objects.
*/

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
}
  
var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};
  
// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10
function nestedEvenSum(obj, sum = 0){
    for(var key in obj){
        if(typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if(typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

console.log(nestedEvenSum(obj2, sum = 0));

/* Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized. */

function capitalizeWords(array){
    if(array.length === 1){
        return [array[0].toUpperCase()];
    }

    let result = capitalizeWords(array.slice(0, -1));
    result.push(array.slice(array.length-1)[0].toUpperCase());
    return result;
}
console.log(capitalizeWords(["i", "am", "human"]));

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

/*  Write a function called stringifyNumbers which takes 
in an object and finds all of the values which are numbers 
and converts them to strings. Recursion would be a great way to solve this! */

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj){
    var newObj = {};
    for( var key in obj){
        if(typeof obj[key] === 'number'){
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(stringifyNumbers(obj))


/* Write a function called collectStrings which 
accepts an object and returns an array of all 
the values in the object that have a typeof string */
const object = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// Helper Method Recursion Version
function collectStrings(obj){
    var stringsArr = [];

    function gatherStrings(object){
        for(var key in object){
            if(typeof object[key] === 'string'){
                stringsArr.push(object[key]);
            } else if(typeof object[key] === 'object'){
                return gatherStrings(object[key])
            }
        }
    }

    gatherStrings(obj);
    return stringsArr;
}

console.log(collectStrings(object)) // ["foo", "bar", "baz"])

// Pure Recursion Version
function collectStrings(obj){
    var stringsArr = [];
    for(var key in obj){
        if(typeof obj[key] === 'string'){
            stringsArr.push(obj[key]);
        } else if(typeof obj[key] === 'object'){
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }

    return stringsArr;
}