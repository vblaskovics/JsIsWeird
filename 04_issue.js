// Prototyping is not traditional OOP
// 4. issue

let result = ""
class User {
  constructor(name) {
    if (name) this.name = name;
  }
}
let u1 = new User()

User.prototype.name = 'Alan'
result += u1.name + ','

User.prototype = {name: 'Bob'}
result += u1.name + ','

u1.__proto__.name = "Charles"
result += u1.name

console.log(result)

// 1 - undefined,undefined,undefined
// 2 - Alan,undefined,undefined
// 3 - undefined,Bob,undefined
// 4 - undefined,undefined,Charles
// 5 - Alan,Alan,Charles
// 6 - Alan,Bob,Charles

// .prototype is an object which will be set as the
//    prototype of any new objects created with the constructor function
// .__proto__ is an object, which was the prototype at creation time

// https://chamikakasun.medium.com/javascript-prototype-and-prototype-chain-explained-fdc2ec17dd04

// Right answer: 5
