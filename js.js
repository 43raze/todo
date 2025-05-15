// const o = {
//   isCompleted: true,
// }

// const o1 = o

// o.isCompleted = false

// console.log(o1.isCompleted)

class O {
  constructor(list) {
    this.list = [...list]
  }
}

const words = ['foo', 'bar', 'baz']

const o1 = new O(words)
const o2 = new O(words)
const o3 = new O(words)

console.log(o1)

o1.list.pop()

console.log(o1)
console.log(o2)
console.log(o3)
