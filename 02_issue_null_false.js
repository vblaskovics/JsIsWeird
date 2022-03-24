// Is null false?
// 2.issue
// (null == false) + "-" +  (!!null == false)
// 1 - true-true
// 2 - true-false
// 3 - false-true
// 4 - false-false
// 5 - Syntax error

// null is falsy but not false
console.log('typeof null')
console.log(typeof null)
console.log('typeof !!null')
console.log(typeof !!null)
console.log('\n')

// 7.2.14 Abstract Equality Comparison
// null compare anything except null or undefined is false
console.log('null == false')
console.log(null == false)
console.log('\n')

console.log( '(null == false) + "-" +  (!!null == false)' )
console.log( (null == false) + "-" +  (!!null == false) )
console.log('\n')

// Right answer: 3