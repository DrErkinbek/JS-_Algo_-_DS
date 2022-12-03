### Recursion
* Define what recursion is and how it can be used
A process (a function in our case) that calls iteslef.
### Recursion
- A process (a function in our case) that calls iteslef.

### Let's talk about function
- In almost all program languages, there is a built data structure that manages what happens when functions are invoked.
- It's a stack data structure.
- Any time a function is invoked it is placed(pushed) on the top of the call stack.
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop).

### How recursive functions work?
- Invoke the same function with a different input until you reach your base case!

### Understand the two essential components of recursive function.
- **Base Case** - the condition when the recursion ends.
- **Different Input**

### Pure Recursion Tips
* For arrays, use methods like **slice**, the **spread operator** and **concat** that make copies of arrays. 
* Remember that strings are immutable so you will need to use methods like **slice**, **substr**, or **substring** to make copies of stings.