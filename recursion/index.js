// First recursive function
function countDown(num){
    if(num <= 0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// function countDown(num){
//     for(var i = num; i > 0; i--){
//         console.log(i);
//     }
//     console.log("All done!")
// }

// countDown(3);

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

// sumRange(4);

// Classic example of recursion
// Simple solution with loop
// function factorial(num){
//     let total = 1;

//     for(let i = num; i > 0; i--){
//         total *= i;
//     }
//     return total;
// }
// console.log(factorial(5))

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5));

// Helper method recursion
function outer(input){
    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)

    return outerScopedVariable;
}

// Another example
function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr);

    return result;
}

collectOddValues([1, 2, 4, 5, 6, 7, 8, 9, 10]);