// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .



function minSum(arr) {
    arr.sort((x,y)=>x-y)
    s=0
    while(arr.length)s+=arr.pop()*arr.shift()
    return s
  }