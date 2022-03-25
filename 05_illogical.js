// Illogical expressions with truthy and falsy
// 5. issue
true + !![] + !!"" + ! + "false"

// 1 - truefalsefalse!false
// 2 - truetruefalsefalse
// 3 - 1
// 4 - 3
// 5 - true
// 6 - false
// 7 - Syntax error

// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// !+"false" -> !NaN -> true