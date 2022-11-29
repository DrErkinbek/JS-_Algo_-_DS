/*
Write a function called sameFrequency. Given two positive integers,
 find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if(strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for(let i = 0; i < strNum1.length; i++){
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
    }

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

/* 
Implement a function called, areThereDuplicates which 
accepts a variable number of arguments, and checks 
whether there are any duplicates among the arguments 
passed in.  You can solve this using the frequency 
counter pattern OR the multiple pointers pattern.

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

function areThereDuplicates(){
    let collection = {};

    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for(let key in collection){
        if(collection[key] > 1) return true;
    }
    return false;
}

function areThereAnyDuplicates(...args){
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;

    while(next < args.length){
        if(args[start] === args[next]){
            return true;
        }
    }
    start++
    next++
}

// In one line code
function areThereDuplicates(){
    return new Set(arguments).size !== arguments.length;
}

/*
Write a function called averagePair. 
Given a sorted array of integers and a 
target average, determine if there is a 
pair of values in the array where the 
average of the pair equals the target average. 
There may be more than one pair that matches the 
average target.
*/

function averagePair(arr, num){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let avg = (arr[start] + arr[end]) / 2;
        if(avg === num){
            return true;
        } else if(avg === num){
            start++
        } else{
            end--;
        }
        return false;
    }
}

// IsSybsequence Solution
function isSubsequence(str1, str2){
    var i = 0;
    var j = 0;
    if(!str1) return true;
    while(j < str2.length){
        if(str2[j] === str1[i]) i++;
        if(i === str1.length) return true;
        j++;
    }
    return false;
}

// IsSubsequence Solution
function is_subsequence(str1, str2){
    if(str1.length === 0) return true;
    if(str2.length === 0) return false;
    if(str2[0] === str1[0]) return is_subsequence(str1.slice(1), str2.slice(1))
    return is_subsequence(str1, str2.slice(1))
}