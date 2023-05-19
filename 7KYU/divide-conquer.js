// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    return x.slice().filter(e => typeof(e) == 'number').reduce((e, sum) => e + sum, 0) - x.slice().filter(e => typeof(e) == 'string').map(e => Number(e)).reduce((e, sum) => e + sum, 0)
 }