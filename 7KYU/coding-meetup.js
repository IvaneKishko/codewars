// Your task is to return the number of JavaScript developers coming from Europe.

function countDevelopers(list) {
    // your awesome code here :)
    return list.filter(e => e.continent === 'Europe' && e.language === 'JavaScript').length
  }

  // 