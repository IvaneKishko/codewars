// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let arr = str.split(''); 
    let vowels = ['a','e','i','o','u']
    let num = 0
    for (const el of arr){
      for (const e of vowels){
        if (e == el){
          num += 1
        }
      }
    }
    return num
  }

  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }