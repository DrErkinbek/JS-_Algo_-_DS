### What is Binary Heap?
Very similar to binary search tree, but with some different rules.

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes
are always smaller than child nodes. 

### Max Binary Heap.
* Each parent has at most two child nodes
* The value of each parent node is always greater than its child nodes
* In a max Binary Heap the parent is greater than the children, but there are no guarentees between sibling nodes. 
* A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

### Why do we need to know this?
Binary Heaps are used to implement Priority Queus, which are very commonly used data structures.
They are also used quite a bit, with graph traversal algorithms.

### What is SINK DOWN?
The procedure for deleting the root from the heap (effectively extracting the maximum element in the max-heap
or the minimum element in a minimum heap) and restoring the properties is called down-heap (also known as bubble-down, percolate down, sift-down, trickle down, heapify-down, cascade down and extrackt min-max).

### What is priority queue?
A data structure where each element has priority. Elements with are served before elements with lower priorities. 