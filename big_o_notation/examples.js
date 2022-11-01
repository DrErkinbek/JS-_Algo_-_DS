// An Example
/* 
Suppose we want to write a function that calculates the sum
of all numbers from 1 up to (and including) some number n
*/

function addUpTo(n){
    let total = 0;
    for (let i = 1; i<= n; i++){
        total += i;
    }
    return total;
}
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// console.log(addUpTo(6))

function addUpToTop(n){
    return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpToTop(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// console.log(addUpToTop(27))

// Space complexity
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total;
}

// Another example to space complexity
function double(arr){
    let newArr = [];

    for (let i=0; i < arr.length; i++){
        newArr.push(2 * arr[i])
    }

    return newArr;
}