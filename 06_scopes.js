if (true) {
  let variable = 1
}
if (true) {
  variable = 2
}
if (true) {
  function function1() {
    variable = 3
  }
}
if (true) {
  let function1 = function () {
    variable++
  }
}
try {
  function1()
  console.log(variable)
} catch (error) {
  console.log(variable)
}