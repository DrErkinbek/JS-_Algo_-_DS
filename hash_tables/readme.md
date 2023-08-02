### What is hash table?
Hash tables are used to store key-value pairs. 
They are like arrays, but the keys are not ordered.

Unlike arrays hash tables are fast for all of the following operations:
finding values, adding new rules, and removing values. 

### Hash part
To implement a hash table we will be using an array.

In order to look up values be key, we need a way to convert keys into a valid array indices. 

A function that performs this task is called a hash function.

### Dealing with collision.
Even with large array and great hash function, collisions are inevitable.
There are many strategies for dealing with collisions, but we will focus on two:
1. Separate chaining.
    with a separate chaining, at each index in our array we store values using more a sophisticated data structure. This allow us to store multiple key-value pairs at the same index.
2. Linear Probing. 
    with a linear probing, when we find a collision, we search through the array to find the next empty slot.
    Unlike with separate chaining, this allows us to store a single key value at each index. 

### Set method in hash class
1. Accepts a key and a value
2. Hashes the key.
3. Stores the key value pair in the hash table array via separate chaining

### Get method in hash class
1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table.

### Keys / Values
1. Loops through the hash table array and returns an array of keys in the table.

### Values
2. Loops through the hash table array and returns an array of values in the table.