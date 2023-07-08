// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

function arithmetic(a, b, operator){
    switch(operator){
        case 'add':
        return a+b;
        case 'subtract':
        return a-b;
        case 'multiply':
        return a*b;
        case 'divide':
        return a/b;
    }
  }