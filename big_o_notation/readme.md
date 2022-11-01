### Big O Notation

Introducing Big O 
-   Big O Notation is a way to formulize fuzzy counting.
-   It allows us to talk formally about how the runtime of an
algorithm grows as the inputs grow

We say that an algorithm is O(f(n)) if the number of simple operations
the computer has to do is eventually less than a constant times f(n),
as n increases.

### Describe what Big O notation is

 **Big O Notation** - is the system of way generalyzing code and 
 comparing its performance to other piece of code.

**Concrete example**
Write a function that accepts a string input and return a
reversed copy.

**Who cares?**
- It is important to have a precise vocabulary to talk about
how our code performs
- Useful for discussing trade-offs between defferent approaches

### The Problem with Time
- Different machines will record different times
- The same machine will record different times
- For fast algorithms, speed measurements 
may not be precise enough.

* Simplify Big O Expressions
* Define "time complexity" and "space complexity"
* Evaluate the time complexity and space complexity
of different algorithms using Big O Notation
* Describe what is logarithm

### Space complexity in JavaScript
* Most primitive data types (booleans, numbers, undefined and null) are constant space
* Strings require O(n) space
* Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

### Logarithms
log2(value) = exponent --> 2exponent = value

    Logarithmic time complexity is great. 

* Certain searching algorithms have logarithmic time complexity.
* Efficient sorting algorithms involve logarithms.

### Summary
* To analyze the performance of an algorithms, we use Big O Notation
* Big O Notation can give us a high level understanding of time or space 
complexity of an algorithm
* The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm