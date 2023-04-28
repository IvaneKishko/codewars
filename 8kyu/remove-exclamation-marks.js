// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    //   return s.split('').map(e => e == '!' ? '': e).join('');
      return s.replaceAll('!', '')
    }

    function removeExclamationMarks(s) {
        return s.replace(/!/gi, '');
      }