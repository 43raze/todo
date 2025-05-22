// let o = { x: 42 }

// let oldO = o

// o.x = 43 // mutate

// console.log(o === oldO)

// let x = 42

// let oldX = x // override

// x = 43

// console.log(x === oldX)

// console.log(42 === 43) // true

// console.log({} === {})

console.log(42 === 42)
console.log(43 === 43)
console.log(42 === 43)

let o = { x: 1 }
o
console.log(o === o)
o.x += 1
o
console.log(o === o)
o.x += 1
o
console.log(o === o)
o.x += 1
o
console.log(o === o)
o.x += 1
o
console.log(o === o)
o.x += 1
o
console.log(o === o)

o.o = 'o'
console.log(o === o)
console.log(o === {})
