// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }) // connecting to mongoDB and passing our connection string
function rowWeights(array){
    let odds = 0
    let evens = 0
    
    array.forEach((e, i) => {
      i % 2 == 0 ? evens += e : odds += e
    })
    
    return[evens, odds]
  }