let a = {
  b: (() => {
    c: () => {
      return 0
    }
    d: {
      break d
      return 1
    }
    return 2
  })(),
};
console.log(a)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
