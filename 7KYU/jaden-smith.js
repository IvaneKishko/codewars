// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
    return this.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
  };

  // finished