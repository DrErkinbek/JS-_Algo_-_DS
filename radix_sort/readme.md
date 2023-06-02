### Radix Sort 
It is a special sorting algorithm that works on list of numbers. 
It never makes comparisons between elements.
It exploits the fact that information about the size of number encoded in the number of digits.
More digits means bigger number.
### Radix Sort Helpers
In order to implement radix sort, it's helpful to build a fewer functions firts:

getDigit(num, place) - returns the digit in num at the given place value.

getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3

digitCount(num) - returns the number of digits in num.

digitCount(1); // 1
digitCount(23); // 2
digitCount(8234); // 4

mostDigits(nums) - Given an array of numbers, returns the number of digits in the lagest numbers in the list.

mostDigit(1234, 56, 9); // 4
mostDigit(11, 11222, 43, 1); // 5
mostDigit(12, 82, 48); // 2