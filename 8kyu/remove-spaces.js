// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.split('').filter(e => e !=' ').join('')
  }