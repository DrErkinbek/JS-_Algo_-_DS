// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - 
// do not worry about negative bases and exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    let res = 0;
    res = Math.pow(base, exponent)
    return res;
}

// console.log(power(2, 3))

/*
Write a function factorial which accepts a number and returns 
the factorial of that number. A factorial is the product of 
an integer and all the integers below it; e.g., factorial 
four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
factorial zero (0!) is always 1.
*/

function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }

    for(i = num -1; i >= 1; i--){
        num *= i; 
    }
    return num;
}

// console.log(factorial(5))


// Write a function called productOfArray which takes in 
// an array of numbers and returns the product of them all.
function productOfArray(arr){
    let res = 0;

    for(i = 0; i < arr.length; i++){
        res = res + arr[i]
    }
    return res;
}

// console.log(productOfArray([1, 2, 3, 4, 5]))


// Write a function called recursiveRange which accepts a 
// number and adds up all the numbers from 0 to the 
// number passed to the function.
function recursiveRange(number){
    let finalnum = 0;

    for(i = number; i >= 0; i--){
        finalnum += i;
    }
    return finalnum;
}
console.log(recursiveRange(6));

/*
Write a recursive function called fib which accepts 
a number and returns the nth number in the Fibonacci 
sequence. Recall that the Fibonacci sequence is the 
sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which 
starts with 1 and 1, and where every number thereafter 
is equal to the sum of the previous two numbers.
*/

function fib(n){
    if(n < 2 ) return 1;
    return fib(n-1) + fib(n-2);
}