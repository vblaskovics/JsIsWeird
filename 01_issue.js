// Is null an object or not?
// 1.issue
// (typeof null == 'object') + "-" +  (null instanceof Object)
// 1 - true-true
// 2 - true-false
// 3 - false-true
// 4 - false-false
// 5 - Syntax error


// The typeof Operator 
// https://262.ecma-international.org/12.0/#sec-typeof-operator
console.log("typeof null:")
console.log(typeof null)
console.log('\n')

console.log("null instanceof Object")
console.log(null instanceof Object)
console.log('\n')

// Right answer: 3