/* Write a function called reverse which accepts a string and 
returns a new string in reverse. */

function reverse(str){
    if(str.length < 1) return str;
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse("test"));

/*  Write a recursive function called isPalindrome which 
returns true if the string passed to it is a palindrome 
(reads the same forward and backward). 
Otherwise it returns false. */

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
// console.log(isPalindrome("awesome"))
console.log(isPalindrome('amanaplanacanalpanama'))

/* Write a recursive function called someRecursive 
which accepts an array and a callback. The function 
returns true if a single value in the array returns
true when passed to the callback. Otherwise it 
returns false. */
const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback){
    if (array.length === 0) return false;
    if(callback(array[0])) return true;
    return someRecursive(array.slice(1), callback)
}
console.log(someRecursive([4, 6, 8], isOdd))

/* Write a recursive function called flatten 
which accepts an array of arrays and returns 
a new array with all values flattened.*/

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3])

function flatten(array){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            newArray = newArray.concat(flatten(array[i]))
        } else {
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(flatten([[1],[2],[3]])) // [1,2,3]