// https://rentry.co/e4vn7
// edit: 89FmHsvL
let a = {
  b: (() => {
    c: () => {
      return 0
    }
    d: {
      break d
      return 1
    }
    e: {
      return 2
    }
    return {d:1}
  })(),
};
console.log(a)

console.log({
  b: (() => {
    c: () => {
      return 0
    }
    d: {
      return 1
    }
  })(),
})

console.log({b:()=>{}})

console.log({
  b:{
    c: ()=>{},
    e:2
  }
})

console.log({
  b : {
    c: ()=>{},
    d: {}
  }
})

console.log({
  b : {
    c: 0,
    d: 1,
  }
})


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
