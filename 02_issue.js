// 2.issue
// Is null false?


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
