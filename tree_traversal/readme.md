### Traversing a Tree
**Two ways**

- Breadth-first Search
this method starts to work starting from a root to accross a tree.

Steps iteratively:

* Create a queue(this can be an array) and a variable to store the values of nodes visited.
* Place the root node in the queue.
* Loop as long as there is anything in the queue.
    * Dequeue a node from the queue and push the of the node into the variable that stores the nodes.
    * If there is a left property on the node dequeud - add it to the queue.
    * If there is a right property on the node dequeued - add it to the queue. 
* Return the variable that stores the values. 

- Depth-first Search 
the idea of this method is going down vertically and coming back.

#### Steps recursively
- Create a variable to store the values of nodes visited.
- Store the root os the BST in a variable called current
- Write a helper function which accepts a node
    - Push the value of the node to the variable that stores the values
    - If the node has a left property, call the helper function with the left property on the node.
    - If the node has the right property, call the helper function with the right property on the node.
- Invoke the helper function with the current variable


### Recap
* Trees are non-linear data structures that contain a root and child nodes 
* Binary search trees can have values of any type, but at most two children for each parent
* Binary Search Trees are more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
* We can search through Trees using BFS and DFS