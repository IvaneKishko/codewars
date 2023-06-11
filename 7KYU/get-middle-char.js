// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  if(s.length % 2 == 0){
    return `${s[s.length/2-1]}${s[s.length/2]}`
  }
  return `${s[s.length/2-0.5]}`
}

function getMiddle(s){
  let arr = s.split('');
  return arr.length % 2 == 0 ? arr[arr.length/2-1] + arr[arr.length/2] : arr[Math.floor(arr.length/2)]
}
//finished