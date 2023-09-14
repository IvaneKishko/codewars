// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

function arrayDiff(a, b) {
    let newArr = []
    for (let e of a){
      !b.includes(e) && newArr.push(e)
    }
    return newArr
}

function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e))
}