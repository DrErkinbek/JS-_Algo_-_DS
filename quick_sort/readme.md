### Quick Sort
* Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
* Works by selecting one element (called the "pivot") and the finding index where the pivot should end up in the sorted array.
* Once the pivot is positioned approriately, quick sort can be applied on either side of the pivot.

### Pivot Helper
- In order to implement merge sort, it's useful to first implement a function responsible arranging in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot. 
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot. 
- The order of the elements on either side of the pivot doesn't matter. 
- The helper should do this in a place, that is, it should not create a new array.
- When complete, the helper should return the index of the pivot. 

#### Picking a Pivot
- The runtime of a quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's a roughtly the median value in the data set you are sorting.
- For simplicity, we will always choose the pivot to be the first element

### Pivot Pseudocode
* It will help to accept three arguments: an array, a start index and the end index (this can be default to 0 and the array length minus 1, respectively)
* Grab the pivot from the start of the array
* Store the current pivot index in a variable (this will keep track of where the pivot should end up)
* Loop through the array from the start until the end 
    * If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
* Swap the starting element with the pivot index.
* Return the pivot index.

### Quicksort Pseudocode
- Call the pivot helper on the array
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index