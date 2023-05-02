// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let x = numbers.split(' ').sort((a,b) => b-a)
    return `${x[0]} ${x[x.length-1]}`
  }

  function highAndLow(numbers){
    return numbers.split(' ').map(e => Number(e)).sort((a,b) => a-b)[numbers.split(' ').length -1] + ' ' + numbers.split(' ').map(e => Number(e)).sort((a,b) => a-b)[0];
  }