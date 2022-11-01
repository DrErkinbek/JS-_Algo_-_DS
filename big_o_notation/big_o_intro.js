// Another example
function countUpAndDown(n) {
    console.log("Going up!");

    for(let i = 0; i < n; i++){
        console.log(i);
    }
    console.log("At the top!\Going Down ...");

    for(let j = n - 1; j >= 0; j--){
        console.log(j);
    }
    console.log("Back down. Bye")
}

// countUpAndDown(100)

// Example with Nested loops
function printAllPairs(n){
    for (var i = 0; i < n; i++ ){
        for (var j = 0; j < n; j++){
            console.log(i, j)
        }
    }
}

// printAllPairs(10000);

// A couple more examples
function logAtLeast5(n) {
    for (var i = 0; i <= Math.max(5, n); i++ ){
        console.log(i);
    }
}

// logAtLeast5(100);

function logAtMost5(n){
    for (var i = 1; i <= Math.min(5, n); i++){
        console.log(i);
    }
}