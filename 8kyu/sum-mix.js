// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x){
    return x.map(e => Number(e)).reduce((sum, e) => sum + e)
  }