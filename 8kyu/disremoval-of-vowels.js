// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


function disemvowel(str) {
    return str
      .split('')
      .filter(letter => !'aeiou'.includes(letter.toLowerCase()))
      .join('');
  }

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}