/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the
array has it's corresponding value squared in the second
array. The frequency of values must be the same.
*/

// same_func([1, 2, 3], [4, 1, 9]) // true
// same_func([1, 2, 3], [1, 9])  // false
// same_func([1, 2, 1], [4, 4, 1])  //false

// A naive solution
function sam_func(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex)
    }
}

// Refactored version
function same_function(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

// console.log(same_function([1, 2, 3, 2], [9, 1, 4, 4]))

// Anagrams
/*
Given two strings, write a function to determine if the
second strings is an anagram of the first. An anagram is a word,
phrase, or name formed by rearranging the letters of another,
such as cinema, formed from iceman. 
*/ 

// validAmagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') //true
// validAnagram('rat', 'car') // false

function validAnagram(value1, value2){
    if(value1.length !== value2.length){
        return false;
    }
    const lookup = {};

    for(let i = 0; i < value1.length; i++){
        let letter = value1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for(let i = 0; i < value2.length; i++){
        let letter = value2[i];
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log(validAnagram("agenda", "adnega"))
