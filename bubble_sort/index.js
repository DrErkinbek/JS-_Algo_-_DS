/*
Sort numbers inside of array according to value from lowest to highest.
*/

function numberCompare(num1, num2){
    return num2 - num1;
}

[6, 4, 8, 17, 43].sort(numberCompare)

/*
Many sorting algorithms involve some type of swapping functionality.
*/

function swap(arr, idx1, idx2){
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([32, 78, 123, 47, 0, 1, 2022]));