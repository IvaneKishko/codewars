// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    //...
    for (let i = 0; i < str.length; i++){
      for (let j = 0; j < i; j++)
        {
          if (str[i].toLowerCase() == str[j].toLowerCase()){
            return false
          }
        }
    }
    return true
}