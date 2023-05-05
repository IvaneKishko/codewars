// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// p - [positive non float numbers]

function lowestSum(arr){

    // sort the array
    arr.sort((a, b) => a - b)
    // get the sum of lowest two numbers
    let sum = arr[0] + arr[1]
    // return the sum
    return sum
  }
  
  const lowestSum = arr => {
    return arr.sort((a, b) => a-b).slice(0,2).reduce((sum,  
    e) => sum + e)
  }
  
  console.log(lowestSum([10, 343445353, 3453445, 3453545353453]), 3453455)