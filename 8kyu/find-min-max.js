// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
//  that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
    console.log(list[0])
   let x =  Math.min(...list)
   return x
}

var max = function(list){
    let x = Math.max(...list)
    return x
}