Node
- val
- prev
- next

DoubleLinkedList
- head
- tail
- length

### Pushing Pseudocode 
* Create a new node with the value passed to the function
* If the head property is null set the head and tail to be the newly created node
* If not, set the next property on the tail to be that node.
* Set the tail to be the newly created node.
* Increment the length.
* Return the doubly linked list.

### Popping - removing a node from the end of the Doubly Linked List.
* If there is no head, return undefined.
* Store the current tail in a variable to return later.
* If the length is 1, set the head and tail to be null.
* Update the tail to be the previous node.
* Set the newTails next to null.
* Decrement the length.
* Return the value removed.

### Shifting pseudocode.
* If the length is 0, return undefined.
* Store the current head property in a variable.
* If the length is one - set the head to be null.
                    - set the tail to be null.
* Update the head to be the next of the old head.
* Set the head's prev property to null.
* Set the old head's next to null.
* Decrement the length.
* Return old head.