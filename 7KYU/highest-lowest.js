// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let x = numbers.split(' ').sort((a,b) => b-a)
    return `${x[0]} ${x[x.length-1]}`
  }