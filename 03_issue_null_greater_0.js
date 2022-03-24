// Is null greater than null?
// 3. issue
// 1 - 0
// 2 - 1
// 3 - 2
// 4 - 3
// 5 - Syntax error

let counter = 0
if (null > 0) counter++ 
if (null < 0) counter++
if (null == 0) counter++
if (null >= 0) counter++
console.log("counter")
console.log(counter)
console.log("\n")

// 7.2.13 Abstract Relational Comparison
// 1 - 3 ToPrimitive -> nothing change to null
// 4.d ToNumeric
console.log("Number(null)")
console.log(Number(null))
console.log("null > 0")
console.log(null > 0)
console.log("\n")

// 7.2.14 Abstract Equality Comparison
// 14 Return false
console.log("null == 0")
console.log(null == 0)
console.log("\n")

// if null < 0 is false, then null >= 0 is true
console.log("null >= 0")
console.log(null >= 0)

// Right answer: 2