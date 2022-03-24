// Is null an object or not?
// 1.issue
// (typeof null == 'object') + "-" +  (null instanceof Object)
// 1 - true-true
// 2 - true-false
// 3 - false-true
// 4 - false-false
// 5 - Syntax error

// 13.5.3 The typeof Operator
console.log("typeof null:")
console.log(typeof null)
console.log('\n')

console.log("null instanceof Object")
console.log(null instanceof Object)
console.log('\n')

// Meanwhile null is primitive: 
// 4.4.5 primitive value

// Right answer: 3