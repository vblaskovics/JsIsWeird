// https://rentry.co/b2yrp
// edit: 5oVk8Dgc

if (true) {
  let variable = 1
}
if (true) {
  variable = 2
}
if (true) {
  function function1() {
    variable++
  }
}
if (true) {
  let function1 = function () {
    variable = 4
  }
}
try {
  function1()
  console.log(variable)
} catch (error) {
  console.log(0)
}