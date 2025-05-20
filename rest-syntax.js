// function func(a, b, ...args) {
//   console.log(a)
//   console.log(b)
//   console.log(args)
// }

// func(2, 3, 5, 7, 9)

// destructing assignment

// function func({ x, y, ...i }) {
//   console.log(x)
//   console.log(y)
//   i
// }

// func({ y: 33, x: 42, a: 1, b: 2, c: 3 })

// let obj1 = { y: 33, x: 42, a: 1 }
// let obj2 = { b: 2, c: 3 }
// let { x, y, ...i } = { ...obj1, ...obj2 }
// x
// y
// i

// let obj1 = { y: 33, x: 42, a: 1 }
// let obj2 = { b: 2, c: 3 }
// let { x: xxx, y: yyy, ...iii } = { ...obj1, ...obj2 }
// xxx
// yyy
// iii

// let arr1 = [111, 222, 333]
// let arr2 = [444, 555, 666]

// let [a, b, ...arr] = [...arr1, ...arr2]
// a
// b
// arr

let a = 42
let b = 33

;[a, ...b] = [b, a]

a
b
