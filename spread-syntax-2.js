// let lettersFirst = ['a', 'b', 'c']
// let lettersSecond = ['d', 'e', 'f']

// let lettersCopy = ['x', ...lettersFirst, 'x', ...lettersSecond, 'x']
// let lettersCopy = [...lettersFirst, ...lettersFirst, ...lettersFirst]

// lettersCopy

// console.log(lettersCopy[3])

// let person1 = {
//   firstName: 'Petya',
// }
// let person2 = {
//   lastName: 'Petrov',
// }
// let person3 = {
//   age: 23,
// }

// console.log({ ...person1, ...person1, ...person1 })

// let obj1 = { x: 42, y: 101 }
// let obj2 = { x: 33, y: 202 }

// // let copyObj1 = { ...obj2, ...obj1, y: 333 }
// let copyObj2 = { ...obj1, obj2: obj2 }

// // copyObj1
// copyObj2

let obj1 = { x: 42, y: 101 }
obj1

let key = 'x'
let copyObj1 = { ...obj1, [key]: obj1[key] + 1 }
copyObj1

///

function func(arg1, arg2, arg3) {
  console.log(arg1 + arg2 + arg3)
}

let array = [2, 3, 5]

func(...array)
